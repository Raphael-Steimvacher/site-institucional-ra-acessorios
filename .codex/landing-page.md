# Landing Page Guidelines

Landing page tem foco em conversão, clareza e velocidade.

## Objetivo

Criar uma página bonita, moderna, rápida, responsiva e focada em levar o usuário para uma ação principal.

A ação pode ser:

- pedir orçamento;
- comprar;
- entrar em contato;
- agendar;
- baixar material;
- se cadastrar;
- chamar no WhatsApp;
- iniciar teste gratuito.

## Mentalidade

Para landing page, o Codex deve pensar como:

- designer de interface;
- copywriter;
- frontend expert;
- especialista em conversão;
- especialista em performance e SEO.

Não priorizar arquitetura backend complexa quando não houver necessidade.

## Estrutura recomendada

```txt
Hero
Problem / Pain
Solution
Benefits
How it works
Features
Social proof
Testimonials
Pricing or offer
FAQ
Final CTA
Footer
```

Nem toda landing precisa de todas as seções. Escolher conforme objetivo.

## Hero

O hero deve responder rapidamente:

- o que é;
- para quem é;
- qual problema resolve;
- qual benefício principal;
- qual ação tomar.

Elementos comuns:

- headline forte;
- subtítulo claro;
- CTA principal;
- CTA secundário opcional;
- imagem/mockup/visual;
- prova rápida, selo ou métrica.

## Copy

A copy deve ser clara, direta e orientada a benefício.

Evitar:

- frases genéricas;
- excesso de termos técnicos;
- promessas vagas;
- blocos longos de texto.

Preferir:

- benefício concreto;
- linguagem do público;
- frases curtas;
- escaneabilidade;
- CTA repetido em pontos estratégicos.

## CTA

Regras:

- CTA principal deve aparecer no hero.
- CTA deve ser repetido ao longo da página.
- Texto do CTA deve ser específico.
- CTA deve funcionar bem em mobile.

Exemplos bons:

```txt
Request a quote
Start your free trial
Schedule a consultation
Talk to us on WhatsApp
Create my website
```

## Imagens e inspirações

Se houver Figma, prints ou referências:

1. analisar hierarquia visual;
2. identificar grid e espaçamentos;
3. entender tipografia e cores;
4. mapear seções;
5. adaptar para a stack do projeto;
6. manter responsividade;
7. não copiar marcas protegidas, apenas usar como inspiração visual.

## Animações

Usar animações leves:

- fade in;
- slide sutil;
- hover em cards;
- transições suaves;
- reveal de seções.

Evitar:

- animações que atrasam o CTA;
- parallax pesado;
- excesso de movimento;
- efeitos que prejudicam performance.

## SEO

Landing page pública deve ter:

- title;
- description;
- Open Graph quando necessário;
- h1 forte;
- headings em ordem;
- conteúdo indexável;
- imagens otimizadas;
- boa performance.

## Responsividade

Obrigatório Mobile First.

- Hero deve funcionar em celular.
- CTA deve ficar visível.
- Cards devem empilhar.
- Imagens devem redimensionar.
- Texto deve manter leitura confortável.
- Não pode haver overflow horizontal.

## Componentização sugerida

```txt
features/landing/
├── components/
│   ├── hero-section.tsx
│   ├── benefits-section.tsx
│   ├── how-it-works-section.tsx
│   ├── testimonials-section.tsx
│   ├── faq-section.tsx
│   ├── final-cta-section.tsx
│   └── landing-footer.tsx
├── constants/
│   └── landing-content.ts
└── types/
    └── landing.ts
```

## Checklist de landing page

- [ ] Hero claro.
- [ ] CTA principal visível.
- [ ] Copy orientada a benefício.
- [ ] Seções com narrativa.
- [ ] Prova social quando possível.
- [ ] FAQ removendo objeções.
- [ ] SEO básico configurado.
- [ ] Imagens otimizadas.
- [ ] Performance considerada.
- [ ] Mobile perfeito.
- [ ] Sem overflow horizontal.
- [ ] Acessibilidade básica.
