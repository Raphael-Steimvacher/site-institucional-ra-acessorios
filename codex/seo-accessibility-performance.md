# SEO, Accessibility and Performance

Essas três áreas devem ser consideradas desde o início, não apenas no final.

## SEO

Especialmente importante para:

- landing pages;
- sites institucionais;
- blogs;
- páginas públicas;
- páginas de serviço;
- páginas de produto.

### Regras

- Usar metadata do Next.js.
- Ter apenas um `h1` principal por página.
- Usar títulos em hierarquia correta.
- Criar title e description claros.
- Usar URLs semânticas.
- Otimizar imagens.
- Usar conteúdo textual real, não só imagens.
- Estruturar seções com significado.
- Adicionar Open Graph quando fizer sentido.

Exemplo:

```ts
export const metadata = {
  title: "Website Design for Local Businesses",
  description: "Modern, responsive and fast websites for local businesses.",
};
```

## Acessibilidade

### Regras básicas

- Labels em inputs.
- Botões com texto claro.
- Focus visível.
- Contraste adequado.
- Navegação por teclado.
- Não usar apenas cor para indicar erro/sucesso.
- `alt` em imagens relevantes.
- `aria-label` em botões só com ícone.
- Componentes interativos com semântica correta.

### Botão apenas com ícone

```tsx
<Button size="icon" aria-label="Delete customer">
  <Trash2 className="size-4" aria-hidden="true" />
</Button>
```

## Performance

### Next.js

- Preferir Server Components.
- Evitar Client Components desnecessários.
- Usar `next/image` para imagens locais/remotas configuradas.
- Evitar dependências grandes.
- Usar dynamic import apenas quando houver ganho real.
- Evitar carregar JS desnecessário no client.

### UI

- Skeletons para carregamento.
- Evitar layout shift.
- Evitar animações pesadas.
- Evitar listas enormes sem paginação/virtualização.
- Otimizar tabelas grandes.

### Dados

- Paginar listas grandes.
- Filtrar no banco quando possível.
- Evitar buscar dados demais.
- Evitar N+1 queries.
- Usar cache com intenção clara.

## Checklist final

- [ ] Metadata definida em páginas públicas.
- [ ] H1 claro.
- [ ] Hierarquia de headings correta.
- [ ] Imagens otimizadas.
- [ ] Inputs com labels.
- [ ] Botões acessíveis.
- [ ] Focus visível.
- [ ] Sem Client Components desnecessários.
- [ ] Listas grandes paginadas.
- [ ] Tabelas grandes otimizadas.
- [ ] Animações leves.
