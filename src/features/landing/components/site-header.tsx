"use client";

import { useEffect, useState } from "react";
import { Clock, Menu, Phone, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CONTACT_DATA,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/features/landing/constants/landing-content";
import { BrandMark } from "@/features/landing/components/brand-mark";
import { createWhatsappUrl } from "@/features/landing/utils/whatsapp";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Início", id: "hero" },
  { label: "Catálogo", id: "portfolio" },
  { label: "Serviços", id: "services-list" },
  { label: "Simulador", id: "calculator" },
  { label: "Contato", id: "contact" },
] as const;

function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const offset = 88;
  const position =
    element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: position, behavior: "smooth" });
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header-nav"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-glass-border bg-glass-dark/95 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto mb-2 flex max-w-7xl items-center justify-between border-b border-white/5 px-4 pb-2 font-mono text-[10px] text-zinc-400 sm:px-6 sm:text-xs lg:px-8">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-500" />
            Atendimento rápido
          </span>
          <span className="hidden items-center gap-1 sm:flex">
            <Shield className="size-3.5 text-amber-500" aria-hidden="true" />
            Garantia de qualidade
          </span>
        </div>
        <span className="flex items-center gap-1">
          <Clock className="size-3.5 text-amber-500" aria-hidden="true" />
          {CONTACT_DATA.hours.split("|")[0]}
        </span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => scrollToSection("hero")}
          aria-label="Voltar para o início"
        >
          <BrandMark />
        </button>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex"
          aria-label="Navegação principal"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button asChild variant="premium" className="hidden lg:inline-flex">
          <a
            href={createWhatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="size-4" aria-hidden="true" />
            Pedir orçamento
          </a>
        </Button>

        <div className="flex items-center gap-2 md:hidden">
          <Button asChild variant="glass" size="icon" aria-label="Abrir WhatsApp">
            <a
              href={createWhatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="size-5 text-emerald-400" aria-hidden="true" />
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="glass" size="icon" aria-label="Abrir menu">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-white/10 bg-glass-dark/95">
              <SheetHeader>
                <SheetTitle>
                  <BrandMark />
                </SheetTitle>
                <SheetDescription>
                  Navegue pelos serviços e peça orçamento pelo WhatsApp.
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-3">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="border-b border-white/5 py-3 text-left text-base font-medium text-zinc-200 transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {item.label}
                    </button>
                  </SheetClose>
                ))}
              </nav>
              <Button asChild variant="premium" size="lg" className="mt-8 w-full">
                <a
                  href={createWhatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  Falar no WhatsApp
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
