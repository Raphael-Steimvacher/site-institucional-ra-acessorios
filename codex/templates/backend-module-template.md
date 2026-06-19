# Template: Backend Module

Estrutura para módulo backend.

```txt
server/modules/customers/
├── customers.controller.ts
├── customers.service.ts
├── customers.repository.ts
├── customers.schema.ts
├── customers.dto.ts
├── customers.errors.ts
├── customers.actions.ts   ← Server Actions (mutations internas)
└── customers.types.ts
```

---

## Controller

O controller trata a requisição HTTP e converte erros conhecidos em respostas adequadas.
Nunca deixar erros de domínio vazar como 500.

```ts
// customers.controller.ts
import { ZodError } from "zod";
import { createCustomerSchema } from "./customers.schema";
import { createCustomerService } from "./customers.service";
import { ConflictError, NotFoundError } from "@/server/errors";

export async function createCustomerController(request: Request) {
  try {
    const body = await request.json();
    const input = createCustomerSchema.parse(body);
    const result = await createCustomerService.execute(input);

    return Response.json({ data: result }, { status: 201 });
  } catch (err) {
    if (err instanceof ZodError) {
      return Response.json(
        { error: { code: "VALIDATION_ERROR", details: err.flatten() } },
        { status: 400 }
      );
    }
    if (err instanceof ConflictError) {
      return Response.json(
        { error: { code: "CONFLICT", message: err.message } },
        { status: 409 }
      );
    }
    if (err instanceof NotFoundError) {
      return Response.json(
        { error: { code: "NOT_FOUND", message: err.message } },
        { status: 404 }
      );
    }

    // Erro inesperado — logar no servidor, nunca vazar detalhes para o client
    console.error("[createCustomerController]", err);
    return Response.json(
      { error: { code: "INTERNAL_ERROR", message: "Internal server error" } },
      { status: 500 }
    );
  }
}
```

---

## Service

Responsável por regras de negócio. Não conhece detalhes HTTP.

```ts
// customers.service.ts
export class CreateCustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(input: CreateCustomerInput) {
    const customerAlreadyExists = await this.customerRepository.existsByDocument(
      input.document
    );

    if (customerAlreadyExists) {
      throw new ConflictError("Customer already exists.");
    }

    return this.customerRepository.create(input);
  }
}
```

---

## Repository

Responsável por acesso ao banco. Não contém regra de negócio.

```ts
// customers.repository.ts
export class CustomerRepository {
  async existsByDocument(document: string) {
    const customer = await db.customer.findUnique({ where: { document } });
    return Boolean(customer);
  }

  async create(input: CreateCustomerInput) {
    return db.customer.create({ data: input });
  }

  async findPaginated(params: FindCustomersParams) {
    const { page, pageSize, search } = params;

    const where = search
      ? { name: { contains: search, mode: "insensitive" as const } }
      : {};

    const [data, total] = await Promise.all([
      db.customer.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: "desc" },
      }),
      db.customer.count({ where }),
    ]);

    return { data, total };
  }
}
```

---

## Server Actions (mutations internas)

Use Server Actions em vez de Route Handler quando a mutation é interna da aplicação.

```ts
// customers.actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { createCustomerSchema } from "./customers.schema";
import { createCustomerService } from "./customers.service";
import { ConflictError } from "@/server/errors";
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
    console.error("[createCustomerAction]", err);
    return { error: "Erro inesperado. Tente novamente." };
  }
}
```

---

## Erros de domínio

Centralizar erros em `server/errors/index.ts`:

```ts
export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class BadRequestError extends AppError {
  constructor(message: string) { super(message, "BAD_REQUEST"); }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") { super(message, "UNAUTHORIZED"); }
}

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") { super(message, "FORBIDDEN"); }
}

export class NotFoundError extends AppError {
  constructor(message: string) { super(message, "NOT_FOUND"); }
}

export class ConflictError extends AppError {
  constructor(message: string) { super(message, "CONFLICT"); }
}
```
