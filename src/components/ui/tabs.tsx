"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-auto flex-wrap items-center justify-start gap-2 rounded-lg border border-white/5 bg-neutral-900/80 p-1 text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-amber-500 data-[state=active]:text-neutral-950 data-[state=active]:shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("mt-6 focus-visible:outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
