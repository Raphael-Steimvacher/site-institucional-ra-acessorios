# Workflow

Como o Codex deve conduzir uma tarefa.

## Antes de codar

1. Entender o objetivo.
2. Identificar o tipo de projeto:
   - landing page;
   - site institucional;
   - dashboard/sistema;
   - API/backend;
   - componente isolado;
   - refactor;
   - bugfix.
3. Ler os arquivos `.codex/` relevantes.
4. Inspecionar a estrutura existente.
5. Procurar componentes, schemas, services e padrões reutilizáveis.
6. Definir uma estratégia simples.
7. Só então implementar.

## Durante a implementação

- Fazer mudanças pequenas e coesas.
- Manter nomes claros.
- Usar TypeScript estrito.
- Evitar duplicação.
- Respeitar arquitetura.
- Separar UI de regra de negócio.
- Garantir responsividade desde o início.
- Usar Shadcn/Radix antes de criar primitives do zero.
- Usar Tailwind com consistência.

## Depois da implementação

1. Revisar arquitetura.
2. Revisar tipagem.
3. Revisar UI/UX.
4. Revisar responsividade.
5. Revisar acessibilidade.
6. Revisar performance.
7. Remover código morto.
8. Conferir imports.
9. Rodar lint/typecheck/testes quando possível.
10. Explicar o que foi feito.

## Como responder após uma task

Ao finalizar, informar:

- o que foi implementado;
- arquivos principais alterados;
- decisões relevantes;
- comandos de validação executados;
- pendências reais, se houver.

## Não fazer

- Não começar codando sem olhar padrões existentes.
- Não criar estrutura gigante sem necessidade.
- Não mudar stack sem pedir.
- Não adicionar biblioteca sem justificar.
- Não ignorar responsividade.
- Não esconder erro ou incerteza.
- Não entregar sem revisar.
