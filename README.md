# Codex Starter Kit

Starter kit de instruções para usar em projetos com Next.js, TypeScript, Tailwind, Shadcn UI, Radix UI e arquitetura organizada por camadas.

A ideia é copiar este conteúdo para a raiz de qualquer repositório novo e fazer o Codex trabalhar seguindo o mesmo padrão de arquitetura, front-end, back-end, UI/UX, responsividade e revisão de código.

## Como usar

1. Copie o arquivo `AGENTS.md` e a pasta `.codex/` para a raiz do seu projeto.
2. Abra o projeto no Codex.
3. Antes de pedir uma feature, diga algo como:

```txt
Leia o AGENTS.md e siga as diretrizes da pasta .codex antes de implementar.
Quero construir uma landing page/site institucional/dashboard conforme os arquivos de referência.
```

4. Para tarefas específicas, use os prompts em `.codex/prompts/`.
5. Ao finalizar uma tarefa, peça revisão usando `.codex/code-review.md` e `.codex/checklists/done.md`.

## Estrutura

```txt
.
├── AGENTS.md
└── .codex/
    ├── README.md
    ├── project-rules.md
    ├── stack.md
    ├── architecture.md
    ├── frontend.md
    ├── backend.md
    ├── api-rest.md
    ├── database-repository.md
    ├── forms-validation.md
    ├── data-fetching.md
    ├── design-system.md
    ├── ui-ux.md
    ├── responsiveness.md
    ├── seo-accessibility-performance.md
    ├── auth-security.md
    ├── landing-page.md
    ├── institutional-site.md
    ├── dashboard.md
    ├── testing.md
    ├── code-review.md
    ├── workflow.md
    ├── prompts/
    ├── templates/
    └── checklists/
```

## Regra principal

O Codex deve agir como um desenvolvedor sênior que entende produto, arquitetura, UX, performance e manutenção de código. Ele não deve apenas gerar código: deve analisar o contexto, reutilizar o que já existe, propor uma estrutura clara, implementar com qualidade e revisar antes de considerar pronto.
