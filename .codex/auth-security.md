# Auth and Security Guidelines

Aplicar em sistemas, dashboards, áreas logadas e APIs.

## Princípios

- Nunca confiar no client.
- Validar tudo no backend.
- Separar autenticação de autorização.
- Não vazar dados sensíveis.
- Não expor stack traces ao usuário.
- Não logar senhas, tokens ou dados sensíveis.

## Autenticação

Autenticação responde: quem é o usuário?

Verificar:

- sessão válida;
- token válido;
- expiração;
- logout;
- refresh quando aplicável.

## Autorização

Autorização responde: o usuário pode fazer isso?

Verificar:

- role;
- permissões;
- ownership;
- escopo da organização/tenant;
- acesso ao recurso específico.

## Multi-tenant / organizações

Em sistemas com organização, empresa ou tenant:

- sempre filtrar pelo `organizationId`/tenant no backend;
- nunca aceitar `organizationId` do client sem validar se o usuário pertence;
- garantir que queries de listagem e detalhe respeitam escopo;
- aplicar escopo no repository ou service de forma consistente.

## Rotas protegidas

Rotas protegidas devem validar sessão no servidor.

Não proteger apenas escondendo botão no front.

## Inputs

- Validar body.
- Validar query params.
- Validar route params.
- Validar tipos e formatos.
- Normalizar dados quando necessário.

## Erros

Não retornar detalhes internos:

Ruim:

```txt
PrismaClientKnownRequestError: Unique constraint failed on table...
```

Bom:

```txt
A customer with this document already exists.
```

## Ações destrutivas

Para delete/cancel:

- exigir confirmação no front;
- verificar permissão no backend;
- registrar auditoria quando necessário;
- considerar soft delete quando aplicável.

## Uploads

Se houver upload:

- validar tamanho;
- validar tipo;
- validar extensão;
- evitar confiar em MIME type sozinho;
- proteger nomes de arquivo;
- não expor caminho interno;
- armazenar com identificador seguro.
