# `.codex/` Framework

Esta pasta funciona como um manual interno para o Codex seguir o seu padrão de desenvolvimento.

Ela não é apenas uma coleção de prompts soltos. A ideia é criar uma base reutilizável para freelas, projetos pessoais, landing pages, sites institucionais, dashboards e sistemas com APIs.

## Mentalidade esperada do Codex

O Codex deve trabalhar como um desenvolvedor sênior, com atenção para:

- organização de pastas;
- arquitetura limpa;
- regras de negócio em camadas corretas;
- componentes pequenos e reutilizáveis;
- boa tipagem com TypeScript;
- UI consistente;
- UX clara;
- responsividade obrigatória;
- acessibilidade;
- SEO;
- performance;
- revisão final antes de entregar.

## Quando usar cada arquivo

- `project-rules.md`: regras globais de qualquer projeto.
- `stack.md`: tecnologias preferidas e quando usar cada uma.
- `architecture.md`: estrutura de pastas e separação de responsabilidades.
- `frontend.md`: padrões para Next.js, páginas, componentes e interação.
- `backend.md`: padrão Controller → Service → Repository.
- `api-rest.md`: rotas, métodos HTTP, status code e payloads.
- `database-repository.md`: repositórios e acesso ao banco.
- `forms-validation.md`: formulários com React Hook Form e Zod.
- `data-fetching.md`: Server Components, fetch server-side e TanStack Query.
- `design-system.md`: consistência visual.
- `ui-ux.md`: experiência de uso, hierarquia visual e microinterações.
- `responsiveness.md`: regras de responsividade Mobile First.
- `seo-accessibility-performance.md`: SEO, acessibilidade e performance.
- `auth-security.md`: autenticação, autorização e segurança.
- `landing-page.md`: páginas de conversão.
- `institutional-site.md`: sites institucionais.
- `dashboard.md`: sistemas, dashboards, painéis e ERPs.
- `testing.md`: estratégia de testes.
- `code-review.md`: checklist final de revisão.
- `workflow.md`: como conduzir a implementação.

## Forma recomendada de pedir tasks

```txt
Leia o AGENTS.md e os arquivos da pasta .codex.
Quero implementar [descrição da feature].
Siga o padrão de arquitetura, UI, responsividade e code review do projeto.
Antes de codar, verifique se já existe componente, schema, service ou padrão reutilizável.
```
