# Frontend Guidelines

Diretrizes para Next.js, React, componentes, páginas e interação.

## Next.js App Router

Preferir App Router com:

- Server Components por padrão;
- Client Components apenas quando necessário;
- Route Handlers para APIs internas;
- `loading.tsx` para carregamentos de rota;
- `error.tsx` para erros recuperáveis;
- `not-found.tsx` quando fizer sentido;
- layouts para estrutura compartilhada;
- route groups para organizar sem afetar URL.

## Server Components

Use Server Components para:

- carregar dados no servidor;
- reduzir JavaScript no client;
- renderizar conteúdo estático ou semi-estático;
- melhorar performance e SEO;
- montar a página com dados iniciais.

Exemplo:

```tsx
import { getCustomers } from "@/features/customers/services/get-customers";
import { CustomersPageContent } from "@/features/customers/pages/customers-page-content";

export default async function CustomersPage() {
  const customers = await getCustomers();

  return <CustomersPageContent initialCustomers={customers} />;
}
```

## Client Components

Use `"use client"` apenas quando houver:

- `useState`;
- `useEffect`;
- eventos de clique, submit ou interação;
- browser APIs;
- React Hook Form;
- TanStack Query no client;
- componentes Radix/Shadcn interativos;
- animações com Framer Motion.

Não transformar a página inteira em Client Component sem necessidade.

## Padrão PageContent

Use `PageContent` para concentrar interação da tela.

```txt
page.tsx
└── CustomersPageContent
    ├── CustomersHeader
    ├── CustomersFilters
    ├── CustomersTable
    └── CreateCustomerSheet
```

`page.tsx` carrega dados e compõe.

`PageContent` gerencia:

- estados de UI;
- handlers;
- filtros client-side quando necessários;
- abertura de modal/sheet;
- mutations;
- toasts;
- interações.

## Componentes

Regras:

- um componente deve ter um motivo claro para existir;
- evitar componentes gigantes;
- quebrar por responsabilidade;
- manter props explícitas;
- evitar passar objetos enormes quando props específicas resolvem;
- evitar prop drilling excessivo;
- extrair hooks quando a lógica de estado crescer;
- extrair componentes quando o JSX crescer.

## Formulários

Usar React Hook Form + Zod.

Regras:

- schema separado;
- inferência de tipo pelo schema;
- mensagens claras de erro;
- loading no botão de submit;
- toast de sucesso/erro;
- reset quando necessário;
- validação client-side e server-side quando aplicável.

## Estados de tela

Sempre considerar:

- loading;
- empty state;
- error state;
- success state;
- disabled state;
- skeleton;
- estado mobile.

Exemplo de empty state:

```tsx
export function CustomersEmptyState() {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
      <h3 className="text-lg font-semibold">No customers found</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Create your first customer to start managing your sales flow.
      </p>
    </div>
  );
}
```

## Estilização

- Usar Tailwind CSS.
- Priorizar classes simples e legíveis.
- Evitar CSS global sem necessidade.
- Usar tokens e componentes do Shadcn UI.
- Manter consistência de spacing, radius e tipografia.
- Não usar largura fixa quando layout fluido resolver.

## Ícones

Usar Lucide React.

- Ícones devem ter tamanho consistente.
- Não usar ícone apenas decorativo sem contexto quando prejudicar acessibilidade.
- Usar `aria-hidden` para ícones puramente visuais quando apropriado.

## Animações

Usar Framer Motion somente quando melhorar a experiência.

Boas animações:

- entrada suave de seções;
- hover sutil;
- feedback de interação;
- transição de modal/sheet;
- accordion ou disclosure.

Evitar:

- animações longas;
- excesso de movimento;
- efeitos pesados;
- animações que atrapalham leitura.

## Performance no front

- Evitar Client Components desnecessários.
- Evitar re-renderizações pesadas.
- Memoizar apenas quando houver motivo real.
- Não usar `useMemo`/`useCallback` por reflexo.
- Dividir componentes pesados.
- Usar imagens otimizadas.
- Evitar dependências grandes para tarefas simples.
- Carregar dados no servidor quando possível.
