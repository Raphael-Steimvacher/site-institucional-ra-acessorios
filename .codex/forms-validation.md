# Forms and Validation

Padrão para formulários com React Hook Form e Zod.

## Regras gerais

- Todo formulário deve ter schema Zod.
- O tipo do formulário deve ser inferido pelo schema.
- Mensagens de erro devem ser claras.
- Submit deve ter estado de loading.
- O usuário deve receber feedback de sucesso ou erro.
- Validação no client não substitui validação no backend.
- Decidir entre React Hook Form + Server Action ou React Hook Form + Route Handler conforme o caso.

---

## Estrutura recomendada

```txt
features/customers/
├── components/
│   └── customer-form.tsx
├── schemas/
│   └── customer-form-schema.ts
└── types/
    └── customer.ts
```

---

## Schema

```ts
import { z } from "zod";

export const customerFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Informe um e-mail válido"),
  phone: z.string().optional(),
});

export type CustomerFormValues = z.infer<typeof customerFormSchema>;
```

---

## Padrão 1 — React Hook Form + Server Action (recomendado para mutations internas)

Use quando a submissão cria, edita ou deleta dados na própria aplicação.

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createCustomerAction } from "@/server/modules/customers/customers.actions";
import { customerFormSchema, type CustomerFormValues } from "@/features/customers/schemas/customer-form-schema";

type CustomerFormProps = {
  defaultValues?: Partial<CustomerFormValues>;
  onSuccess?: () => void;
};

export function CustomerForm({ defaultValues, onSuccess }: CustomerFormProps) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      ...defaultValues,
    },
  });

  function onSubmit(values: CustomerFormValues) {
    startTransition(async () => {
      const result = await createCustomerAction(values);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Cliente criado com sucesso.");
      form.reset();
      onSuccess?.();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome do cliente" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </Form>
  );
}
```

---

## Padrão 2 — React Hook Form + Route Handler (para APIs ou TanStack Query)

Use quando a submissão vai para um Route Handler e você precisa de cache, invalidação ou integração com TanStack Query.

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCreateCustomer } from "@/features/customers/hooks/use-create-customer";
import { customerFormSchema, type CustomerFormValues } from "@/features/customers/schemas/customer-form-schema";

type CustomerFormProps = {
  defaultValues?: Partial<CustomerFormValues>;
  onSuccess?: () => void;
};

export function CustomerForm({ defaultValues, onSuccess }: CustomerFormProps) {
  const { mutate, isPending } = useCreateCustomer();

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      ...defaultValues,
    },
  });

  function onSubmit(values: CustomerFormValues) {
    mutate(values, {
      onSuccess: () => {
        form.reset();
        onSuccess?.();
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* campos */}
        <Button type="submit" disabled={isPending}>
          {isPending ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </Form>
  );
}
```

---

## Formulários multi-step

Para formulários longos divididos em etapas:

```tsx
// Guardar estado do step no PageContent
const [step, setStep] = useState<"personal" | "address" | "review">("personal");

// Schema por etapa
const personalSchema = z.object({ name: z.string().min(1), email: z.string().email() });
const addressSchema = z.object({ street: z.string().min(1), city: z.string().min(1) });

// Form global com todos os campos
const form = useForm<FullFormValues>({
  resolver: zodResolver(fullSchema),
  mode: "onChange",
});

// Validar step antes de avançar
async function handleNextStep() {
  const isValid = await form.trigger(fieldsOfCurrentStep);
  if (isValid) setStep("address");
}
```

---

## Upload de arquivos em formulários

Quando o formulário incluir upload:

```tsx
// Schema com validação de arquivo
const formSchema = z.object({
  name: z.string().min(1),
  avatar: z
    .instanceof(File)
    .refine((f) => f.size <= 4 * 1024 * 1024, "Arquivo deve ter no máximo 4MB")
    .refine(
      (f) => ["image/jpeg", "image/png", "image/webp"].includes(f.type),
      "Formato inválido. Use JPEG, PNG ou WebP"
    )
    .optional(),
});

// Campo de input
<Input
  type="file"
  accept="image/jpeg,image/png,image/webp"
  onChange={(e) => form.setValue("avatar", e.target.files?.[0])}
/>
```

Validar no servidor também — nunca confiar apenas na validação do client.

---

## UX de formulário

Sempre considerar:

- foco no primeiro campo quando fizer sentido;
- mensagens de erro perto do campo;
- labels claras;
- placeholders úteis, mas não substituindo labels;
- botões com loading;
- evitar perda acidental de dados;
- confirmação para ações destrutivas;
- inputs adequados no mobile;
- teclado correto no celular (`email`, `tel`, `number`).

---

## Formulários em Sheet/Dialog

Quando usar Sheet ou Dialog:

- manter largura responsiva;
- garantir scroll interno quando necessário;
- manter botões acessíveis no mobile;
- evitar overflow horizontal;
- fechar apenas após sucesso, salvo se o fluxo pedir outra coisa;
- limpar form ao fechar quando necessário.
