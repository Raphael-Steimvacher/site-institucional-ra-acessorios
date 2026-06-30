# Backend Guidelines

Diretrizes para APIs, regras de negócio e persistência.

## Camadas obrigatórias

Para fluxos com regra de negócio, seguir:

```txt
Route Handler / Controller
        ↓
Service
        ↓
Repository
        ↓
Database
```

## Controller

Responsável por:

- receber request;
- ler params, query e body;
- validar entrada com DTO/schema;
- chamar service;
- retornar response;
- converter erros conhecidos em HTTP response.

Não deve conter regra de negócio pesada.

Exemplo:

```ts
export async function createCustomerController(request: Request) {
  const body = await request.json();
  const input = createCustomerSchema.parse(body);

  const customer = await createCustomerService.execute(input);

  return Response.json(customer, { status: 201 });
}
```

## Service

Responsável por regra de negócio.

Pode:

- validar regras do domínio;
- coordenar múltiplos repositories;
- aplicar cálculos;
- verificar permissões de negócio;
- decidir fluxo;
- lançar erros de domínio;
- orquestrar transações quando necessário.

Não deve conhecer detalhes HTTP.

Exemplo:

```ts
export class CreateCustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(input: CreateCustomerInput) {
    const existingCustomer = await this.customerRepository.findByDocument(input.document);

    if (existingCustomer) {
      throw new ConflictError("Customer already exists");
    }

    return this.customerRepository.create(input);
  }
}
```

## Repository

Responsável por acesso ao banco.

Pode:

- criar;
- buscar;
- atualizar;
- deletar;
- paginar;
- filtrar;
- ordenar;
- mapear dados do banco para entidades/tipos da aplicação.

Não deve conter regra de negócio de domínio.

Exemplo:

```ts
export class CustomerRepository {
  async findByDocument(document: string) {
    return db.customer.findUnique({ where: { document } });
  }

  async create(input: CreateCustomerInput) {
    return db.customer.create({ data: input });
  }
}
```

## DTOs e schemas

Usar DTOs/schemas para entrada e saída.

- `CreateCustomerInput`
- `UpdateCustomerInput`
- `FindCustomersFilters`
- `CustomerResponse`

Preferir inferência por Zod quando fizer sentido:

```ts
export const createCustomerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
```

## Erros

Criar erros explícitos para casos conhecidos:

- `BadRequestError`
- `UnauthorizedError`
- `ForbiddenError`
- `NotFoundError`
- `ConflictError`
- `ValidationError`

Não retornar mensagens genéricas quando a ação do usuário puder corrigir o problema.

Não vazar detalhes internos do banco em mensagens públicas.

## Paginação

Para listas grandes, implementar paginação.

Campos comuns:

```ts
export type PaginationParams = {
  page: number;
  pageSize: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
};
```

## Filtros e ordenação

Separar filtros em tipos/schemas.

Exemplo:

```ts
export const customerFiltersSchema = z.object({
  search: z.string().optional(),
  status: z.enum(["active", "inactive"]).optional(),
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(10),
});
```

## Logs

Usar logs quando necessário para:

- erro inesperado;
- fluxo crítico;
- auditoria;
- integração externa;
- falha em job ou webhook.

Não logar dados sensíveis.

## Segurança

- Validar todo input externo.
- Nunca confiar no client.
- Verificar autenticação e autorização no backend.
- Não vazar stack trace para usuário.
- Sanitizar dados quando necessário.
- Proteger rotas sensíveis.
- Usar status HTTP adequado.
