# Responsiveness Guidelines

Responsividade é obrigatória em todo projeto: landing page, site institucional, dashboard, sistema e componentes isolados.

## Regra principal

Desenvolver Mobile First.

Começar pelo layout de celular e evoluir para telas maiores com breakpoints.

## Breakpoints

Considerar:

- default: mobile;
- `sm`: celulares grandes;
- `md`: tablets;
- `lg`: notebooks/desktops;
- `xl`: desktops grandes;
- `2xl`: telas muito grandes.

## Layout

Preferir layouts fluidos:

```tsx
<section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
  <div className="mx-auto max-w-7xl">
    {/* content */}
  </div>
</section>
```

Evitar:

- largura fixa desnecessária;
- `w-[1200px]` sem alternativa mobile;
- grid que quebra em celular;
- textos sem quebra;
- tabelas causando overflow invisível;
- imagens sem `max-w-full` ou equivalente.

## Grid responsivo

Exemplo:

```tsx
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* cards */}
</div>
```

## Flex responsivo

Exemplo:

```tsx
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  {/* content */}
</div>
```

## Tipografia responsiva

Exemplo:

```tsx
<h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
  Build better products faster
</h1>
```

## Menus mobile

Todo menu desktop deve ter alternativa mobile.

Opções:

- Sheet;
- Drawer;
- Dropdown;
- menu colapsável.

Regras:

- área clicável confortável;
- fechar ao selecionar item quando fizer sentido;
- não esconder CTA importante;
- manter foco e acessibilidade.

## Tabelas responsivas

Escolher uma estratégia:

1. Scroll horizontal com container `overflow-x-auto`.
2. Cards no mobile.
3. Colunas prioritárias no mobile.
4. Expansão de linha.

Não deixar tabela quebrar layout.

Exemplo:

```tsx
<div className="w-full overflow-x-auto">
  <table className="min-w-[720px]">
    {/* rows */}
  </table>
</div>
```

## Imagens

- Usar imagens fluidas.
- Evitar distorção.
- Usar `object-cover` quando necessário.
- Definir tamanhos adequados.
- Otimizar para performance.

## Botões e toque

Em mobile:

- botões devem ser fáceis de tocar;
- evitar ícones minúsculos sem área clicável;
- manter espaçamento entre ações;
- ações destrutivas devem pedir confirmação quando necessário.

## Overflow horizontal

Antes de finalizar, verificar se nenhum elemento causa overflow horizontal.

Causas comuns:

- tabela sem wrapper;
- grid fixo;
- imagem grande;
- texto sem quebra;
- largura fixa;
- componente com `min-width` alto.

## Checklist responsivo

- [ ] Mobile funciona bem.
- [ ] Tablet funciona bem.
- [ ] Desktop funciona bem.
- [ ] Não há overflow horizontal.
- [ ] Menu mobile existe.
- [ ] Tabelas não quebram.
- [ ] Inputs são usáveis no celular.
- [ ] Botões têm área clicável adequada.
- [ ] Tipografia se adapta.
- [ ] Espaçamentos se adaptam.
- [ ] Imagens se adaptam.
- [ ] Animações não prejudicam dispositivos fracos.
