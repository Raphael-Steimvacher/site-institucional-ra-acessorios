# Testing Guidelines

Testes devem proteger regras importantes, não apenas aumentar número de arquivos.

## Prioridades

Testar primeiro:

- regras de negócio;
- services;
- validações;
- cálculos;
- permissões;
- filtros críticos;
- fluxos de criação/edição/cancelamento;
- bugs corrigidos.

## Tipos de teste

### Unit tests

Para funções puras, regras e services isolados.

### Integration tests

Para fluxos envolvendo camadas ou API.

### Component tests

Para componentes com comportamento importante.

### E2E tests

Para jornadas críticas.

## O que evitar

- Testar implementação interna demais.
- Snapshot sem valor.
- Testes frágeis por texto visual irrelevante.
- Mockar tudo a ponto de não testar comportamento real.

## Exemplo de service test

```ts
describe("CreateCustomerService", () => {
  it("should not create a customer with duplicated document", async () => {
    const repository = createCustomerRepositoryMock({
      findByDocument: async () => existingCustomer,
    });

    const service = new CreateCustomerService(repository);

    await expect(service.execute(input)).rejects.toThrow("Customer already exists");
  });
});
```

## Checklist

- [ ] Regra de negócio crítica testada.
- [ ] Validação importante testada.
- [ ] Bug corrigido recebeu teste quando possível.
- [ ] Teste tem nome claro.
- [ ] Teste não depende de detalhe irrelevante.
- [ ] Mocks são mínimos e compreensíveis.
