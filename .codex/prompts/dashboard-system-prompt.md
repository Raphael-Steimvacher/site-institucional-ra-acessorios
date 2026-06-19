# Prompt: Dashboard/System

Use este prompt no Codex quando quiser criar uma área administrativa, dashboard, SaaS, ERP ou sistema com CRUD/API.

```txt
Leia o AGENTS.md e os arquivos da pasta .codex, principalmente:
- project-rules.md
- stack.md
- architecture.md
- frontend.md
- backend.md
- api-rest.md
- database-repository.md
- forms-validation.md
- data-fetching.md
- design-system.md
- ui-ux.md
- responsiveness.md
- auth-security.md
- dashboard.md
- code-review.md

Quero criar/alterar um sistema seguindo arquitetura limpa e organização por camadas.

Feature/módulo:
[ex: customers, products, orders, payments]

Objetivo:
[descreva a funcionalidade]

Entidades/campos principais:
[descreva]

Regras de negócio:
[descreva]

Fluxos necessários:
[ex: listar, criar, editar, deletar/cancelar, filtrar, paginar]

Permissões/autenticação:
[descreva se houver]

Requisitos técnicos:
- Next.js App Router
- TypeScript strict
- Tailwind CSS
- Shadcn UI/Radix UI
- React Hook Form + Zod
- TanStack Query quando consumir APIs no client
- Sonner para toasts
- Controller → Service → Repository → Database para backend/API
- Tabelas responsivas
- Loading, empty e error states
- Mobile First obrigatório

Antes de implementar:
1. Verifique a estrutura existente.
2. Procure componentes e padrões reutilizáveis.
3. Proponha a organização dos arquivos.
4. Só então implemente.

Ao final:
- revise com .codex/code-review.md;
- informe arquivos alterados;
- informe comandos de validação executados ou sugeridos.
```
