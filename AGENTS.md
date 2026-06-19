# Project Agent Instructions

You are working in a Next.js/TypeScript project. Before editing or creating code, read and follow the project guidance inside `.codex/`.

## Required reading order

If a `CONTEXT.md` file exists at the project root or inside `.codex/`, **read it before anything else** to understand the specific project context.

1. `.codex/project-rules.md`
2. `.codex/stack.md`
3. `.codex/architecture.md`
4. `.codex/frontend.md`
5. `.codex/backend.md` when APIs, business rules or persistence are involved
6. `.codex/api-rest.md` when creating or modifying API endpoints
7. `.codex/database-repository.md` when there is database access
8. `.codex/data-fetching.md`
9. `.codex/forms-validation.md` when there are forms
10. `.codex/auth-security.md` in authenticated areas or APIs
11. `.codex/design-system.md`
12. `.codex/ui-ux.md`
13. `.codex/responsiveness.md`
14. `.codex/seo-accessibility-performance.md` for public pages
15. The specific project-type document:
    - `.codex/landing-page.md` for landing pages
    - `.codex/institutional-site.md` for institutional websites
    - `.codex/dashboard.md` for dashboards, systems, admin panels, SaaS or ERP-like apps
16. `.codex/code-review.md` before considering a task finished

## Non-negotiable rules

- Use TypeScript strictly.
- Never use `any` unless there is a documented and unavoidable reason.
- Prefer clear, explicit names in English for files, variables, functions, classes and methods.
- Use absolute imports with `@/...`.
- Prefer Server Components in Next.js App Router.
- Use Client Components only for state, effects, browser APIs, events, forms or interactive UI.
- Use Server Actions for internal mutations (create, edit, delete). Use Route Handlers for external APIs, webhooks or binary responses.
- Keep `page.tsx` focused on loading/composition and move interactive UI to `PageContent` components.
- For API/backend flows, follow Controller → Service → Repository → Database.
- Never skip layers in complex business flows.
- Prefer reusable components over duplicated markup.
- Always think Mobile First.
- Always consider responsiveness, accessibility, SEO, performance and maintainability.
- Use Shadcn UI and Radix UI primitives before creating components from zero.
- Use Tailwind CSS for styling.
- Use `cn()` from `@/lib/utils` for conditional classes.
- Use Lucide React for icons.
- Use React Hook Form + Zod for forms.
- Use TanStack Query when consuming client-side APIs.
- Use Framer Motion only when motion improves UX.
- Use Sonner for toasts.
- Do not create dead code, forgotten TODOs or unused files.

## Working behavior

Before implementing:

- If a `CONTEXT.md` file exists in the project root, read it before anything else.
- Understand the requirement.
- Inspect existing folders, components, patterns, schemas and services.
- Reuse existing abstractions when possible.
- Decide explicitly: Server Action or Route Handler?
- Explain major assumptions only when needed.

During implementation:

- Keep components small.
- Keep functions focused.
- Separate business logic from UI.
- Avoid unnecessary dependencies.
- Preserve existing conventions.

After implementation:

- Run or recommend relevant checks.
- Review using `.codex/code-review.md`.
- Confirm responsive behavior.
- Confirm loading, empty, error and success states when applicable.
