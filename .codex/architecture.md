# Architecture

A arquitetura deve favorecer manutenção, previsibilidade e facilidade para encontrar arquivos no futuro.

## Estrutura base recomendada

```txt
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── forms/
│   ├── tables/
│   └── shared/
├── features/
├── hooks/
├── providers/
├── services/
├── server/
├── schemas/
├── types/
├── utils/
├── constants/
└── styles/
```

Quando o projeto não usar `src/`, a mesma ideia pode ser aplicada diretamente na raiz.

## Responsabilidade de cada pasta

### `app/`

Rotas, layouts, páginas, route handlers, loading, error e not-found do Next.js App Router.

`page.tsx` deve ser principalmente composição e carregamento de dados.

### `components/`

Componentes reutilizáveis e genéricos da aplicação.

- `components/ui/`: componentes do Shadcn UI e wrappers base.
- `components/layout/`: header, sidebar, footer, shell, containers.
- `components/forms/`: componentes reutilizáveis de formulário.
- `components/tables/`: componentes reutilizáveis de tabela.
- `components/shared/`: componentes compartilhados sem domínio específico.

### `features/`

Código separado por domínio de negócio ou funcionalidade.

Exemplo:

```txt
features/
└── customers/
    ├── components/
    ├── hooks/
    ├── services/
    ├── schemas/
    ├── types/
    ├── utils/
    └── pages/
```

Use `features/` quando uma funcionalidade possui componentes, regras, schemas e tipos próprios.

### `hooks/`

Hooks reutilizáveis globais.

Hooks específicos de domínio devem ficar dentro da feature.

### `providers/`

Providers globais da aplicação.

Exemplos:

- ThemeProvider;
- QueryClientProvider;
- AuthProvider;
- ToastProvider quando necessário.

### `services/`

Serviços de integração global ou clients HTTP reutilizáveis.

Em sistemas mais complexos, services específicos devem ficar em `features/<feature>/services/` ou `server/modules/<module>/service.ts`.

### `server/`

Código backend-side da aplicação.

Exemplo:

```txt
server/
├── modules/
│   └── customers/
│       ├── customers.controller.ts
│       ├── customers.service.ts
│       ├── customers.repository.ts
│       ├── customers.schema.ts
│       ├── customers.dto.ts
│       └── customers.types.ts
├── db/
├── errors/
├── middlewares/
└── utils/
```

### `schemas/`

Schemas Zod globais ou compartilhados.

Schemas específicos de uma feature devem ficar na feature.

### `types/`

Tipos globais e compartilhados.

Tipos específicos devem ficar próximos do domínio.

### `utils/`

Funções utilitárias reutilizáveis, sem regra de negócio pesada.

Evitar transformar `utils/` em depósito de qualquer coisa.

### `constants/`

Constantes globais, enums e listas estáticas.

## Padrão backend

Fluxo obrigatório para APIs com regra de negócio:

```txt
Route Handler / Controller
        ↓
Service
        ↓
Repository
        ↓
Database
```

Nunca colocar regra de negócio diretamente na rota quando ela for relevante para o domínio.

Nunca acessar banco diretamente dentro de componente ou rota complexa.

## Padrão frontend

Fluxo recomendado:

```txt
page.tsx
  ↓ carrega dados server-side quando possível
<PageContent />
  ↓ interações, estados, handlers
components específicos
  ↓
components reutilizáveis
```

Exemplo:

```txt
app/(dashboard)/customers/page.tsx
features/customers/pages/customers-page-content.tsx
features/customers/components/customers-table.tsx
features/customers/components/create-customer-sheet.tsx
features/customers/schemas/customer-form-schema.ts
features/customers/types/customer.ts
```

## Quando criar uma feature

Crie uma feature quando houver pelo menos dois destes itens:

- componentes próprios;
- formulário próprio;
- schema próprio;
- tipos próprios;
- hooks próprios;
- services próprios;
- regras de negócio próprias;
- páginas relacionadas.

## Quando criar componentes reutilizáveis

Crie componente reutilizável quando:

- aparecer em mais de um lugar;
- representar um padrão visual do projeto;
- encapsular comportamento repetido;
- reduzir duplicação real.

Não crie componente reutilizável prematuramente para algo usado uma única vez e sem indício de repetição.
