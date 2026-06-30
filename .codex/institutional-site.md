# Institutional Site Guidelines

Site institucional tem foco em credibilidade, apresentação da empresa, serviços e contato.

## Objetivo

Criar um site claro, bonito, confiável, responsivo e bem organizado para apresentar uma marca, empresa, igreja, profissional, clínica, barbearia, restaurante, pet shop ou qualquer negócio local.

## Estrutura comum

```txt
Home
About
Services
Portfolio/Gallery
Testimonials
Blog/Articles optional
Contact
Footer
```

## Home

A home deve apresentar:

- quem é a empresa;
- o que ela faz;
- para quem faz;
- diferenciais;
- serviços principais;
- CTA para contato;
- prova de confiança.

## Sobre

A página/seção sobre deve transmitir:

- história;
- missão;
- valores;
- equipe quando fizer sentido;
- autoridade;
- proximidade humana.

## Serviços

Serviços devem ser fáceis de entender.

Cada serviço pode ter:

- nome;
- descrição curta;
- benefício;
- imagem ou ícone;
- CTA específico.

## Galeria/Portfólio

Usar quando imagem ajuda a vender:

- clínicas;
- estética;
- obras;
- barbearia;
- restaurantes;
- eventos;
- fotografia;
- arquitetura;
- serviços visuais.

Regras:

- imagens otimizadas;
- grid responsivo;
- alt text;
- modal/lightbox somente se fizer sentido;
- não carregar imagens gigantes sem necessidade.

## Contato

Contato deve ser simples.

Pode conter:

- formulário;
- WhatsApp;
- telefone;
- e-mail;
- endereço;
- horário de funcionamento;
- mapa;
- redes sociais.

## SEO local

Quando for negócio local, considerar:

- cidade e região no conteúdo;
- serviço + localização;
- metadata clara;
- endereço no footer;
- telefone clicável;
- links para redes sociais;
- schema/local business quando solicitado.

## Componentização sugerida

```txt
features/institutional/
├── components/
│   ├── site-header.tsx
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── gallery-section.tsx
│   ├── testimonials-section.tsx
│   ├── contact-section.tsx
│   └── site-footer.tsx
├── constants/
│   └── site-content.ts
└── types/
    └── site.ts
```

## Responsividade

Obrigatório:

- menu mobile;
- hero adaptado;
- cards empilhados;
- formulário usável no celular;
- mapa responsivo;
- imagens fluidas;
- footer organizado em mobile.

## Checklist

- [ ] Home apresenta claramente o negócio.
- [ ] Serviços são fáceis de entender.
- [ ] CTA para contato aparece em pontos estratégicos.
- [ ] Contato está simples.
- [ ] SEO básico configurado.
- [ ] Site funciona bem em mobile.
- [ ] Imagens otimizadas.
- [ ] Acessibilidade básica.
- [ ] Footer completo.
