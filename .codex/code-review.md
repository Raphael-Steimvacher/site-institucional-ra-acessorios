# Code Review Checklist

Antes de considerar uma tarefa pronta, revisar com este checklist.

## Arquitetura

- [ ] A estrutura de pastas segue o padrão do projeto?
- [ ] A lógica está na camada correta?
- [ ] Controller, Service e Repository estão separados quando necessário?
- [ ] Não há acesso direto ao banco em lugar indevido?
- [ ] Não há regra de negócio dentro de componente visual?
- [ ] A feature ficou fácil de encontrar e manter?

## Código

- [ ] Não há `any`.
- [ ] Tipos estão claros.
- [ ] Nomes estão em inglês e são descritivos.
- [ ] Funções têm responsabilidade única.
- [ ] Componentes estão pequenos o suficiente.
- [ ] Não há duplicação desnecessária.
- [ ] Não há código morto.
- [ ] Não há imports não utilizados.
- [ ] Não há TODOs esquecidos.
- [ ] Não há `console.log` acidental.

## Frontend

- [ ] Server Components foram usados quando possível.
- [ ] Client Components existem apenas quando necessários.
- [ ] `page.tsx` não virou componente gigante.
- [ ] Interações estão no `PageContent` ou componente adequado.
- [ ] Formulários usam React Hook Form + Zod.
- [ ] Feedback de submit existe.
- [ ] Loading, empty e error states foram considerados.

## UI/UX

- [ ] A hierarquia visual está clara.
- [ ] O CTA principal é óbvio.
- [ ] A tela é fácil de escanear.
- [ ] Estados visuais são claros.
- [ ] Erros ajudam o usuário.
- [ ] Empty state orienta o próximo passo.
- [ ] Animações são leves e úteis.

## Responsividade

- [ ] Mobile First aplicado.
- [ ] Layout funciona em mobile.
- [ ] Layout funciona em tablet.
- [ ] Layout funciona em desktop.
- [ ] Não há overflow horizontal.
- [ ] Menu mobile funciona.
- [ ] Tabelas são responsivas.
- [ ] Botões têm área clicável adequada.
- [ ] Tipografia se adapta.

## SEO

Para páginas públicas:

- [ ] Metadata configurada.
- [ ] H1 claro.
- [ ] Headings em ordem.
- [ ] Conteúdo indexável.
- [ ] Imagens com alt adequado.
- [ ] Performance considerada.

## Acessibilidade

- [ ] Inputs têm label.
- [ ] Botões com ícone têm `aria-label`.
- [ ] Focus visível.
- [ ] Contraste adequado.
- [ ] Não depende apenas de cor.
- [ ] Navegação por teclado não foi prejudicada.

## Backend/API

- [ ] Inputs validados.
- [ ] Erros conhecidos tratados.
- [ ] Status HTTP adequado.
- [ ] Paginação em listas grandes.
- [ ] Filtros validados.
- [ ] Permissões verificadas no backend.
- [ ] Dados sensíveis não vazam.

## Performance

- [ ] Não há dependência desnecessária.
- [ ] Não há renderização client-side sem necessidade.
- [ ] Listas grandes foram paginadas ou otimizadas.
- [ ] Imagens otimizadas.
- [ ] Animações não são pesadas.

## Finalização

- [ ] Lint executado ou considerado.
- [ ] Typecheck executado ou considerado.
- [ ] Testes relevantes executados ou considerados.
- [ ] A entrega foi explicada com clareza.
- [ ] Limitações ou pendências foram informadas.
