# Dashboard and System Guidelines

Use este arquivo para dashboards, sistemas administrativos, SaaS, ERPs e aplicações com CRUDs, autenticação e dados operacionais.

## Objetivo

Criar telas produtivas, organizadas, responsivas e fáceis de manter.

Aqui a prioridade é:

- clareza;
- consistência;
- velocidade de uso;
- regras de negócio corretas;
- dados confiáveis;
- tabelas e filtros bem pensados;
- loading, empty e error states;
- arquitetura em camadas.

## Estrutura comum

```txt
Dashboard Home
CRUD screens
Tables
Filters
Forms
Details page
Create/Edit Sheet or Page
Permissions
Settings
Profile
Logs/Audit when needed
```

## Layout

Sistemas normalmente usam:

- sidebar;
- header/topbar;
- breadcrumb;
- page title;
- actions area;
- content area;
- table/card grid;
- modals/sheets.

## Padrão de página

```tsx
export default async function CustomersPage() {
  const initialData = await getCustomers({ page: 1, pageSize: 10 });

  return <CustomersPageContent initialData={initialData} />;
}
```

## PageContent

Responsável por:

- estado de filtros;
- abrir/fechar sheets;
- chamadas client-side quando necessário;
- mutations;
- paginação;
- toasts;
- ações de tabela.

## CRUD

Cada CRUD deve considerar:

- listagem;
- criação;
- edição;
- deleção/cancelamento;
- detalhes quando necessário;
- filtros;
- paginação;
- ordenação;
- permissões;
- validação;
- feedback.

## Tabelas

Tabelas devem ter:

- colunas claras;
- ações por linha;
- loading;
- empty state;
- paginação;
- filtros;
- ordenação quando necessário;
- responsividade.

No mobile:

- usar scroll horizontal ou cards;
- reduzir colunas;
- manter ações acessíveis;
- evitar overflow da página inteira.

## Filtros

Filtros devem ser claros e previsíveis.

Tipos comuns:

- busca textual;
- status;
- data inicial/final;
- intervalo de valor;
- seleção múltipla;
- ordenação;
- paginação.

Filtros complexos devem ter schema/tipo próprio.

## Forms em sistemas

- Preferir Sheet para criar/editar quando o formulário for médio.
- Preferir página dedicada para formulários longos ou multi-step.
- Usar React Hook Form + Zod.
- Validar no backend também.
- Manter botões de ação visíveis.
- Proteger o usuário contra perda de dados quando necessário.

## Permissões

Quando houver permissões:

- esconder ações indisponíveis no front para melhorar UX;
- bloquear ações no backend para segurança real;
- centralizar regras quando possível;
- evitar espalhar strings de permissões pelo código.

## Estados

Toda tela de sistema deve ter:

- loading state;
- empty state;
- error state;
- success feedback;
- disabled state em ações em andamento.

## Organização por feature

```txt
features/customers/
├── components/
│   ├── customers-page-header.tsx
│   ├── customers-table.tsx
│   ├── customers-filters.tsx
│   ├── customer-form.tsx
│   ├── create-customer-sheet.tsx
│   └── edit-customer-sheet.tsx
├── hooks/
│   ├── use-customers.ts
│   └── use-create-customer.ts
├── services/
│   ├── list-customers.ts
│   ├── create-customer.ts
│   └── update-customer.ts
├── schemas/
│   ├── customer-form-schema.ts
│   └── customer-filters-schema.ts
├── types/
│   └── customer.ts
└── pages/
    └── customers-page-content.tsx
```

## Backend de sistema

Para APIs:

```txt
server/modules/customers/
├── customers.controller.ts
├── customers.service.ts
├── customers.repository.ts
├── customers.schema.ts
├── customers.dto.ts
├── customers.errors.ts
└── customers.types.ts
```

## Dashboard com métricas

Métricas devem ser:

- relevantes;
- fáceis de entender;
- comparáveis quando possível;
- não apenas números soltos;
- acompanhadas de estado vazio/carregamento.

## Gráficos

Usar gráficos apenas quando ajudam a entender dados.

- Não encher tela de gráficos sem objetivo.
- Ter labels claras.
- Ser responsivo.
- Considerar empty state.

## Checklist de sistema

- [ ] Arquitetura em camadas.
- [ ] CRUD completo quando necessário.
- [ ] Validação com Zod.
- [ ] React Hook Form em formulários.
- [ ] Tabelas responsivas.
- [ ] Filtros claros.
- [ ] Paginação em listas grandes.
- [ ] Permissões no backend.
- [ ] Loading/empty/error states.
- [ ] Toasts de feedback.
- [ ] Sem regra de negócio no componente.
- [ ] Sem acesso direto ao banco fora de repository.
- [ ] Mobile considerado.
