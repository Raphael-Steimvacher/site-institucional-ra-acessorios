# Project Rules

Estas regras são globais e valem para qualquer tipo de projeto: landing page, site institucional, dashboard, sistema, API ou ERP.

## Princípios

Sempre aplicar:

- SOLID;
- Clean Code;
- DRY, sem duplicação desnecessária;
- KISS, sem complexidade artificial;
- YAGNI, sem criar estrutura que ainda não será usada;
- baixo acoplamento;
- alta coesão;
- nomes claros;
- responsabilidade única;
- legibilidade antes de esperteza.

## Código

- Usar TypeScript em modo estrito.
- Não usar `any`.
- Evitar `unknown` sem narrowing adequado.
- Não deixar código morto.
- Não deixar `console.log` em produção, exceto logs intencionais no backend.
- Não deixar TODOs genéricos esquecidos.
- Não criar abstrações prematuras.
- Não duplicar lógica entre componentes, services ou repositories.
- Preferir funções pequenas com nomes claros.
- Preferir componentes pequenos e focados.
- Separar UI, regra de negócio, validação e persistência.

## Idioma e nomes

Código, arquivos, funções, variáveis, classes, métodos e tipos devem ser em inglês.

Bons exemplos:

```txt
CreateCustomerButton
CustomerRepository
FindCustomersService
calculateOrderTotal
useCustomersFilters
customerSchema
CustomerPageContent
```

Evitar nomes vagos:

```txt
utils.ts
helper.ts
component.tsx
data.ts
handleClick
foo
bar
teste.ts
```

Use nomes que expliquem intenção, não implementação genérica.

## Imports

- Usar imports absolutos com `@/...`.
- Evitar caminhos relativos longos como `../../../../components`.
- Agrupar imports por origem: libs externas, aliases internos e imports locais.
- Remover imports não utilizados.

Exemplo:

```ts
import { z } from "zod";
import { UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CustomerForm } from "@/features/customers/components/customer-form";
import { createCustomerSchema } from "@/features/customers/schemas/create-customer-schema";
```

## Componentes

- Componentes devem ter responsabilidade clara.
- Se um componente passar de 150–200 linhas, avaliar quebra em componentes menores.
- Evitar componentes que fazem tudo: fetch, regra de negócio, UI, validação e side effects.
- Componentes reutilizáveis devem ficar em `components/`.
- Componentes específicos de uma feature devem ficar em `features/<feature>/components/`.
- Componentes interativos devem ser Client Components apenas quando necessário.

## Responsividade obrigatória

Todo código visual deve ser Mobile First.

Sempre considerar:

- telas pequenas;
- tablets;
- desktops;
- breakpoints `sm`, `md`, `lg`, `xl`, `2xl`;
- toque em celular;
- tamanho mínimo de áreas clicáveis;
- overflow horizontal;
- imagens fluidas;
- tipografia responsiva;
- tabelas responsivas;
- menus mobile;
- estados de loading/empty/error em telas pequenas.

Nunca considerar uma tela pronta olhando apenas o desktop.

## Qualidade mínima antes de finalizar

Antes de considerar pronto:

- verificar lint;
- verificar tipagem;
- verificar imports;
- verificar responsividade;
- verificar acessibilidade básica;
- verificar loading, empty, error e success states quando aplicável;
- verificar se há código duplicado;
- verificar se nomes estão claros;
- verificar se a estrutura de pastas ficou coerente;
- verificar se não houve quebra de padrão existente.
