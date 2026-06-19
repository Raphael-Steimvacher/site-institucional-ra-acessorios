# Database and Repository Guidelines

Repositórios devem isolar o acesso ao banco e impedir que detalhes da persistência vazem para UI, controllers e services.

## Papel do Repository

O repository deve responder perguntas de persistência:

- criar registro;
- buscar por id;
- buscar por chave única;
- listar com filtros;
- atualizar;
- deletar;
- contar registros;
- executar queries de banco.

## O que não colocar no Repository

Evitar colocar:

- regra de negócio;
- validação HTTP;
- decisão de fluxo;
- mensagens de usuário;
- regras de permissão complexas;
- side effects de UI.

## Nomes

Bons nomes:

```ts
findById
findByEmail
findMany
findPaginated
create
update
delete
countByFilters
existsByDocument
```

Evitar:

```ts
getData
saveData
handleDb
process
executeQuery
```

## Paginação no repository

Exemplo:

```ts
export type FindCustomersRepositoryParams = {
  search?: string;
  status?: CustomerStatus;
  page: number;
  pageSize: number;
};

export class CustomerRepository {
  async findPaginated(params: FindCustomersRepositoryParams) {
    const { page, pageSize, search, status } = params;

    const where = {
      ...(search ? { name: { contains: search, mode: "insensitive" } } : {}),
      ...(status ? { status } : {}),
    };

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

## Transações

Usar transações quando várias alterações precisam ser atômicas.

Exemplos:

- criar pedido e itens;
- baixar estoque e registrar movimentação;
- lançar pagamento e atualizar status;
- criar usuário e permissões iniciais.

A decisão de usar transação normalmente pertence ao service, mas a execução pode ser delegada ao repository ou client de banco conforme o padrão do projeto.

## Mapeamento

Quando o banco retornar campos que não devem vazar, mapear explicitamente.

```ts
function mapCustomerToResponse(customer: CustomerModel): CustomerResponse {
  return {
    id: customer.id,
    name: customer.name,
    email: customer.email,
    status: customer.status,
    createdAt: customer.createdAt,
  };
}
```

## Soft delete

Se o projeto usar soft delete, padronizar:

- `deletedAt`;
- filtros sempre ignorando deletados por padrão;
- método específico para restaurar se existir;
- nomes claros como `softDelete` em vez de `delete` quando necessário.
