# Stack

Stack padrão preferida para novos projetos.

## Base

- Next.js com App Router.
- TypeScript.
- Tailwind CSS.
- ESLint.
- Prettier.

## UI

- Shadcn UI para componentes base.
- Radix UI para primitivas acessíveis.
- Lucide React para ícones.
- Tailwind CSS para estilos.
- `cn()` do `@/lib/utils` para classes condicionais.
- CVA (Class Variance Authority) para variantes de componentes.

Não usar Material UI, Bootstrap, Chakra UI ou Ant Design sem solicitação explícita.

## Formulários e validação

- React Hook Form para controle de formulários.
- Zod para schemas, validações e inferência de tipos.
- Integrar Zod com React Hook Form usando resolver quando necessário.

## Dados e chamadas de API

- Server Components e Server Actions quando fizer sentido.
- Server Actions para mutations internas (criar, editar, deletar).
- Route Handlers do Next.js para APIs externas, webhooks ou respostas binárias.
- TanStack Query para consumo de APIs no client quando houver cache, loading, refetch, mutations ou invalidação.
- Fetch server-side quando o dado puder ser carregado no servidor.

## Banco e ORM

- Prisma como ORM padrão.
- PostgreSQL como banco padrão (Neon ou Supabase em ambientes serverless).
- Client Prisma centralizado em `server/db/index.ts` ou `lib/db.ts`.
- Nunca acessar `db.` fora de repositories.
- Nunca usar `prisma db push` em produção; sempre usar migrations (`prisma migrate deploy`).

## Autenticação

- Auth.js (NextAuth v5) como padrão para sessões server-side.
- Clerk como alternativa quando o projeto justificar o custo ou precisar de UI de autenticação pronta.
- Nunca implementar autenticação manual sem discussão prévia.
- Sempre verificar sessão no servidor; nunca confiar apenas no client.

## Variáveis de ambiente

- t3-env para validação tipada de variáveis de ambiente.
- Centralizar em `src/env.ts` ou `env.ts` na raiz do projeto.
- Nunca acessar `process.env` diretamente fora do arquivo de env centralizado.

Exemplo:

```ts
// env.ts
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
```

## Email (quando necessário)

- Resend para envio de emails transacionais.
- React Email para templates tipados e testáveis.
- Nunca usar credenciais SMTP hardcoded.

## Upload de arquivos (quando necessário)

- Uploadthing para projetos Next.js (integração nativa com App Router).
- Validar tipo, tamanho e extensão no servidor.
- Nunca confiar apenas no MIME type enviado pelo client.

## Feedback visual

- Sonner para toasts.
- Skeletons para carregamentos visuais.
- Estados claros de loading, empty, error e success.

## Animações

- Framer Motion apenas quando agregar valor real à UX.
- Preferir animações leves, rápidas e suaves.
- Evitar motion exagerado que prejudique performance ou acessibilidade.
- Respeitar usuários com preferência por redução de movimento quando aplicável.

## Ícones

Usar Lucide React.

Exemplo:

```tsx
import { Plus, Search, Trash2 } from "lucide-react";
```

## Tabelas

Preferir TanStack Table quando a tabela tiver:

- paginação;
- filtros;
- ordenação;
- seleção;
- colunas customizadas;
- ações por linha;
- expansão;
- virtualização.

## Testes

- Vitest para unit e integration tests.
- Testing Library para component tests.
- Playwright para E2E em jornadas críticas.
- Não adicionar testes por cobertura; adicionar para proteger regras de negócio.

## Datas, moeda e formatação

- Centralizar formatadores em `utils/formatters` ou equivalente.
- Evitar formatar valores manualmente espalhados pelo código.
- Para datas, usar uma biblioteca quando o projeto já tiver padrão definido.
- Para moeda, usar `Intl.NumberFormat`.

## Evitar dependências desnecessárias

Antes de adicionar uma biblioteca:

1. Verifique se já existe solução no projeto.
2. Verifique se a stack atual resolve.
3. Avalie peso, manutenção e necessidade.
4. Adicione apenas se trouxer ganho claro.
