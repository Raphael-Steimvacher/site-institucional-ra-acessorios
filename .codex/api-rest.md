# API REST Guidelines

Padrão para rotas REST em Route Handlers do Next.js ou backend separado.

## Métodos HTTP

- `GET`: buscar dados.
- `POST`: criar recurso.
- `PUT`: atualizar recurso inteiro ou fluxo principal de update.
- `PATCH`: atualização parcial quando o projeto adotar esse padrão.
- `DELETE`: remover ou cancelar recurso.

## Rotas

Usar nomes claros e no plural.

```txt
GET    /api/customers
POST   /api/customers
GET    /api/customers/:id
PUT    /api/customers/:id
DELETE /api/customers/:id
```

Ações específicas devem ser explícitas:

```txt
POST /api/orders/:id/cancel
POST /api/invoices/:id/release
POST /api/payments/:id/retry
```

## Status codes

- `200 OK`: sucesso com retorno.
- `201 Created`: criação.
- `204 No Content`: sucesso sem corpo.
- `400 Bad Request`: input inválido.
- `401 Unauthorized`: não autenticado.
- `403 Forbidden`: autenticado, mas sem permissão.
- `404 Not Found`: recurso não encontrado.
- `409 Conflict`: conflito de regra de negócio.
- `422 Unprocessable Entity`: validação semântica, se usado no projeto.
- `500 Internal Server Error`: erro inesperado.

## Response padrão

Para sucesso:

```ts
return Response.json({ data: customer }, { status: 200 });
```

Para lista paginada:

```ts
return Response.json({
  data: customers,
  meta: {
    page,
    pageSize,
    total,
    totalPages,
  },
});
```

Para erro conhecido:

```ts
return Response.json(
  {
    error: {
      code: "CUSTOMER_ALREADY_EXISTS",
      message: "Customer already exists.",
    },
  },
  { status: 409 },
);
```

## Validação

Toda entrada deve passar por schema.

Validar:

- body;
- params;
- query string;
- headers importantes quando necessário.

## Controller em Route Handler

Route handler deve delegar para controller quando a lógica crescer.

```ts
// app/api/customers/route.ts
import { createCustomerController, listCustomersController } from "@/server/modules/customers/customers.controller";

export async function GET(request: Request) {
  return listCustomersController(request);
}

export async function POST(request: Request) {
  return createCustomerController(request);
}
```

## Não fazer

- Não colocar query de banco diretamente no route handler complexo.
- Não misturar validação, regra de negócio e persistência na mesma função.
- Não retornar erro genérico para casos esperados.
- Não ignorar paginação em listas potencialmente grandes.
- Não aceitar filtros sem validação.
