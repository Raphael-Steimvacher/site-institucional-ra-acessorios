# UI/UX Guidelines

O Codex deve pensar como frontend e como designer de produto.

## Objetivo de UX

Toda tela deve ser:

- clara;
- escaneável;
- responsiva;
- acessível;
- rápida;
- previsível;
- agradável de usar;
- objetiva para o usuário cumprir a tarefa.

## Perguntas antes de desenhar uma tela

- Qual é o objetivo principal desta tela?
- Qual ação o usuário deve tomar?
- O que precisa aparecer primeiro?
- Quais informações podem ser secundárias?
- Como isso funciona no celular?
- O que acontece se não houver dados?
- O que acontece se carregar devagar?
- O que acontece se der erro?
- Como o usuário recebe feedback?

## Hierarquia visual

Use:

- título claro;
- subtítulo de apoio;
- CTA principal;
- seções bem separadas;
- contraste suficiente;
- espaçamento respirável;
- agrupamento lógico.

## Escaneabilidade

Usuários não leem tudo. Eles escaneiam.

Para melhorar:

- quebrar textos longos;
- usar cards;
- usar listas quando apropriado;
- destacar palavras-chave;
- evitar parágrafos gigantes;
- usar títulos objetivos;
- manter CTA claro.

## Feedback visual

Toda ação importante deve gerar feedback.

Exemplos:

- botão em loading;
- toast de sucesso;
- mensagem de erro;
- skeleton enquanto carrega;
- estado disabled;
- confirmação para deletar;
- destaque em item selecionado.

## Microinterações

Boas microinterações:

- hover sutil em cards clicáveis;
- transição suave em menus;
- animação leve no hero;
- feedback ao salvar;
- skeleton bem posicionado.

Evitar exagero.

## Landing pages

Foco em conversão:

- promessa clara;
- CTA visível;
- prova social;
- benefícios antes de detalhes técnicos;
- seções com narrativa;
- FAQ removendo objeções;
- footer confiável.

## Sistemas e dashboards

Foco em produtividade:

- ações rápidas;
- filtros claros;
- tabelas usáveis;
- atalhos visuais;
- estados bem definidos;
- evitar excesso de animação;
- priorizar clareza sobre efeito visual.

## Empty states

Empty state bom responde:

- o que aconteceu;
- por que está vazio;
- o que o usuário pode fazer agora.

Exemplo:

```txt
No products found.
Create your first product or adjust the filters to find existing records.
```

## Error states

Erro bom:

- não culpa o usuário;
- explica de forma simples;
- oferece ação;
- não vaza detalhe técnico.

## Loading states

Loading bom:

- preserva a estrutura;
- não trava tudo sem necessidade;
- mostra progresso quando possível;
- evita layout shift.

## Acessibilidade como UX

- Contraste adequado.
- Navegação por teclado.
- Focus visível.
- Labels em campos.
- Botões com texto claro.
- `aria-label` quando necessário.
- Não depender apenas de cor para comunicar estado.
