# Template: Feature Structure

Estrutura sugerida para uma feature de sistema.

```txt
features/<feature-name>/
├── components/
│   ├── <feature-name>-page-header.tsx
│   ├── <feature-name>-table.tsx
│   ├── <feature-name>-filters.tsx
│   ├── <entity>-form.tsx
│   ├── create-<entity>-sheet.tsx
│   └── edit-<entity>-sheet.tsx
├── hooks/
│   ├── use-<feature-name>.ts
│   ├── use-create-<entity>.ts
│   ├── use-update-<entity>.ts
│   └── use-delete-<entity>.ts
├── services/
│   ├── list-<feature-name>.ts
│   ├── create-<entity>.ts
│   ├── update-<entity>.ts
│   └── delete-<entity>.ts
├── schemas/
│   ├── <entity>-form-schema.ts
│   └── <feature-name>-filters-schema.ts
├── types/
│   └── <entity>.ts
├── utils/
└── pages/
    └── <feature-name>-page-content.tsx
```

Backend relacionado:

```txt
server/modules/<feature-name>/
├── <feature-name>.controller.ts
├── <feature-name>.service.ts
├── <feature-name>.repository.ts
├── <feature-name>.schema.ts
├── <feature-name>.dto.ts
├── <feature-name>.errors.ts
└── <feature-name>.types.ts
```
