# Design System Guidelines

Objetivo: manter a interface consistente, bonita, legível e fácil de evoluir.

## Base visual

Usar:

- Tailwind CSS;
- Shadcn UI;
- Radix UI;
- Lucide React;
- tokens de tema do projeto.

## Hierarquia visual

Toda tela deve deixar claro:

1. qual é o título;
2. qual é o objetivo da tela;
3. qual é a ação principal;
4. quais ações são secundárias;
5. quais informações são mais importantes;
6. onde o usuário deve olhar primeiro.

## Tipografia

- Títulos devem ter peso e tamanho coerentes.
- Textos longos devem ter boa largura de leitura.
- Não usar texto pequeno demais em mobile.
- Usar `text-muted-foreground` para apoio, não para informação crítica.
- Evitar excesso de estilos diferentes na mesma tela.

Escala sugerida:

```txt
Page title: text-2xl md:text-3xl font-semibold/tracking-tight
Section title: text-xl font-semibold
Card title: text-base/font-medium ou text-lg/font-semibold
Body: text-sm ou text-base
Helper: text-xs ou text-sm text-muted-foreground
```

## Espaçamento

Manter consistência:

- seções: `py-12 md:py-20` em sites/landing pages;
- containers: `container mx-auto px-4 sm:px-6 lg:px-8`;
- cards: `p-4 md:p-6`;
- grupos internos: `space-y-4`, `gap-4`, `gap-6`;
- dashboards: espaçamento mais compacto, mas respirável.

## Botões

Usar botão primário para ação principal.

Regras:

- CTA principal sempre visível no hero de landing pages;
- ações destrutivas devem usar variante destrutiva;
- botões em mobile devem ter área confortável para toque;
- loading deve desabilitar submit;
- não usar muitos botões primários na mesma área.

## Cards

Cards devem ter:

- objetivo claro;
- espaçamento consistente;
- borda/sombra coerente;
- títulos legíveis;
- responsividade.

Evitar cards vazios, com informação demais ou sem hierarquia.

## Inputs

- Sempre ter label quando necessário.
- Placeholder não substitui label.
- Erros devem ficar próximos ao campo.
- Estados disabled/loading devem ser claros.
- Campos obrigatórios devem ser compreensíveis.

## Dialogs, Sheets e Drawers

- Usar Shadcn/Radix.
- Preferir Sheet para criação/edição lateral em dashboards.
- Preferir Dialog para confirmações curtas.
- No mobile, garantir scroll e área de toque.
- Confirmar ações destrutivas.

## Tables

Tabelas devem ter:

- cabeçalho claro;
- ações por linha organizadas;
- empty state;
- loading state;
- paginação quando necessário;
- filtros quando necessário;
- comportamento responsivo.

No mobile, considerar:

- scroll horizontal;
- visualização em cards;
- colunas prioritárias;
- menu de ações.

## Estados visuais

Sempre prever:

- hover;
- focus;
- active;
- disabled;
- loading;
- empty;
- error;
- success;
- skeleton.

## Ícones

- Ícones devem reforçar significado, não poluir.
- Manter tamanho consistente: geralmente `size-4`, `size-5` ou `size-6`.
- Não misturar bibliotecas de ícones sem necessidade.

## Consistência

Antes de criar algo novo, procurar:

- componente Shadcn já instalado;
- componente existente em `components/`;
- padrão semelhante em outra feature;
- token ou classe já usada.
