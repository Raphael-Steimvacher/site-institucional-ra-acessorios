# Template: PageContent Pattern

Padrão para página no App Router.

## `page.tsx`

```tsx
import { getCustomers } from "@/features/customers/services/get-customers";
import { CustomersPageContent } from "@/features/customers/pages/customers-page-content";

export default async function CustomersPage() {
  const initialCustomers = await getCustomers();

  return <CustomersPageContent initialCustomers={initialCustomers} />;
}
```

## `customers-page-content.tsx`

```tsx
"use client";

import { useState } from "react";

import { CustomersTable } from "@/features/customers/components/customers-table";
import { CreateCustomerSheet } from "@/features/customers/components/create-customer-sheet";
import type { Customer } from "@/features/customers/types/customer";

type CustomersPageContentProps = {
  initialCustomers: Customer[];
};

export function CustomersPageContent({ initialCustomers }: CustomersPageContentProps) {
  const [isCreateSheetOpen, setIsCreateSheetOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* header */}
      {/* filters */}
      <CustomersTable customers={initialCustomers} />
      <CreateCustomerSheet open={isCreateSheetOpen} onOpenChange={setIsCreateSheetOpen} />
    </div>
  );
}
```

## Regras

- `page.tsx` não deve virar componente gigante.
- Interação fica em `PageContent`.
- Componentes específicos ficam na feature.
- Componentes genéricos ficam em `components/`.
