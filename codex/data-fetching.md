# Data Fetching Guidelines

Diretrizes para carregar, cachear e atualizar dados.

## Preferência geral

1. Carregar no servidor quando possível.
2. Usar Client Component apenas quando interação/ciclo de vida exigir.
3. Usar Server Actions para mutations internas.
4. Usar TanStack Query para dados client-side com cache, refetch e mutations via API.
5. Evitar duplicar lógica de fetch.

## Quando usar cada abordagem

| Cenário | Abordagem |
|---|---|
| Carregar dados para renderização inicial | Server Component / `page.tsx` |
| Mutation interna (criar, editar, deletar) | Server Action |
| API externa, webhook ou resposta binária | Route Handler |
| Lista com filtros e paginação dinâmica no client | TanStack Query |
| Dados que mudam com interação do usuário | TanStack Query |

---

## Server-side data fetching

Use em `page.tsx` ou Server Components quando:

- os dados são necessários para renderização inicial;
- SEO importa;
- os dados podem ser buscados com segurança no servidor;
- não dependem de interação imediata do client.

```tsx
export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductsPageContent initialProducts={products} />;
}
```

---

## Server Actions

Use Server Actions para mutations internas — criar, editar, deletar, alterar status.

Não use Server Actions para:
- APIs consumidas por clientes externos;
- webhooks;
- respostas binárias (PDF, CSV);
- controle explícito de headers HTTP.

Para esses casos, use Route Handlers.

### Tipo base para resultado de action

```ts
// types/action-result.ts
export type ActionResult<T = void> =
  | { data: T; error?: never }
  | { data?: never; error: string };
```

### Estrutura de uma Server Action

```ts
// server/modules/customers/customers.actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { createCustomerSchema } from "./customers.schema";
import { createCustomerService } from "./customers.service";
import { ConflictError, NotFoundError } from "@/server/errors";
import type { ActionResult } from "@/types/action-result";
import type { Customer } from "./customers.types";

export async function createCustomerAction(
  input: unknown
): Promise<ActionResult<Customer>> {
  const parsed = createCustomerSchema.safeParse(input);

  if (!parsed.success) {
    return { error: "Dados inválidos. Verifique os campos e tente novamente." };
  }

  try {
    const customer = await createCustomerService.execute(parsed.data);
    revalidatePath("/customers");
    return { data: customer };
  } catch (err) {
    if (err instanceof ConflictError) return { error: err.message };
    if (err instanceof NotFoundError) return { error: err.message };
    console.error("[createCustomerAction]", err);
    return { error: "Erro inesperado. Tente novamente." };
  }
}
```

### Consumindo a action em um Client Component

```tsx
"use client";

import { createCustomerAction } from "@/server/modules/customers/customers.actions";
import { toast } from "sonner";

export function useCreateCustomer() {
  const [isPending, startTransition] = useTransition();

  function execute(input: CreateCustomerInput) {
    startTransition(async () => {
      const result = await createCustomerAction(input);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Cliente criado com sucesso.");
    });
  }

  return { execute, isPending };
}
```

### Server Action com formulário progressivamente enhanced

```tsx
"use client";

import { useActionState } from "react";
import { createCustomerAction } from "@/server/modules/customers/customers.actions";

export function CustomerForm() {
  const [state, formAction, isPending] = useActionState(createCustomerAction, null);

  return (
    <form action={formAction} className="space-y-4">
      {state?.error && (
        <p className="text-sm text-destructive">{state.error}</p>
      )}
      {/* campos */}
      <Button type="submit" disabled={isPending}>
        {isPending ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  );
}
```

---

## Client-side data fetching com TanStack Query

Use TanStack Query quando:

- a lista muda com frequência no client;
- há filtros client-side ou server-side disparados pela UI;
- há paginação dinâmica;
- há mutations com invalidação;
- precisa de refetch;
- precisa de cache controlado.

```ts
export function useCustomers(filters: CustomerFilters) {
  return useQuery({
    queryKey: ["customers", filters],
    queryFn: () => listCustomers(filters),
  });
}
```

### Mutations com TanStack Query

Use quando a mutation vai para um Route Handler:

```ts
export function useCreateCustomer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      toast.success("Cliente criado com sucesso.");
    },
    onError: () => {
      toast.error("Não foi possível criar o cliente.");
    },
  });
}
```

---

## Loading states

- Skeleton para áreas estruturais.
- Spinner apenas para ações pequenas ou botões.
- Evitar tela piscando.
- Preservar layout para evitar layout shift.

## Error states

Erro deve orientar o usuário.

Exemplo:

```txt
Não foi possível carregar os clientes.
Tente novamente ou entre em contato com o suporte se o problema persistir.
```

## Empty states

Empty state deve explicar o que aconteceu e sugerir ação.

Exemplo:

```txt
Nenhum cliente encontrado.
Crie o primeiro cliente ou ajuste os filtros atuais.
```

## Cache e revalidação

Quando usar Next.js cache/revalidate:

- invalidar após mutations com `revalidatePath` ou `revalidateTag`;
- evitar dados obsoletos em telas administrativas;
- configurar cache com intenção clara.

Quando usar TanStack Query:

- escolher `queryKey` estável;
- invalidar queries afetadas após mutations;
- evitar keys genéricas demais.
