"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  CalendarRange,
  CreditCard,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CONTACT_DATA,
  WHATSAPP_DEFAULT_MESSAGE,
  WORK_SLIDES,
} from "@/features/landing/constants/landing-content";
import { createWhatsappUrl } from "@/features/landing/utils/whatsapp";

function scrollToCalculator() {
  const element = document.getElementById("calculator");

  if (!element) {
    return;
  }

  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - 88,
    behavior: "smooth",
  });
}

export function HeroSection() {
  const heroImage = WORK_SLIDES[0];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-glass-dark pb-16 pt-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,137,62,0.16),transparent_48%),linear-gradient(to_bottom,rgba(8,9,13,0.3),#050506)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="flex flex-col gap-6 text-left lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="premium"
              className="gap-2 rounded-full px-3 py-1 font-mono uppercase tracking-wider"
            >
              <Sparkles className="size-3.5" aria-hidden="true" />
              Vidraçaria premium em São Paulo
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-5"
          >
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transforme seus espaços com{" "}
              <span className="bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                vidros sob medida
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Especialistas em envidraçamento de sacadas, fachadas glazing, box
              de banheiro, guarda-corpos, espelhos e escadas. Atendimento com
              instalação segura, acabamento premium e orçamento rápido pelo
              WhatsApp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-wrap gap-3"
          >
            {["Empresas", "Residências", "Condomínios"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs font-semibold uppercase text-zinc-200"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="premium" size="lg">
              <a
                href={createWhatsappUrl(
                  "Olá! Vi seu anúncio na RA Acessórios e Vidraçaria e gostaria de fazer um orçamento sem compromisso.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir orçamento pelo WhatsApp
              </a>
            </Button>
            <Button
              type="button"
              variant="glass"
              size="lg"
              onClick={scrollToCalculator}
            >
              Simular dimensões
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="grid grid-cols-1 gap-4 border-t border-glass-border pt-6 sm:grid-cols-3"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5 shrink-0 text-amber-500" />
              <span className="text-sm font-medium text-zinc-300">
                Vidros normatizados
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="size-5 shrink-0 text-amber-500" />
              <span className="text-sm font-medium text-zinc-300">
                Parcelamento em até 5x
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarRange className="size-5 shrink-0 text-amber-500" />
              <span className="text-sm font-medium text-zinc-300">
                Visita técnica flexível
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="overflow-hidden rounded-xl border border-glass-border bg-neutral-950 shadow-2xl">
            <div className="relative aspect-4/3">
              <Image
                src={heroImage.image}
                alt="Sacada envidraçada instalada pela RA Acessórios e Vidraçaria"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-black/65 p-4 backdrop-blur-md">
                <p className="font-mono text-[10px] uppercase tracking-widest text-amber-400">
                  Projeto em destaque
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-white">
                  {heroImage.title}
                </h2>
              </div>
            </div>

            <div className="grid gap-3 p-5">
              <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/3 p-4">
                <Building2 className="mt-0.5 size-5 shrink-0 text-indigo-400" />
                <div>
                  <h3 className="font-semibold text-white">
                    Atendimento especializado
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                    Visitas para condomínios, empresas e residências de alto
                    padrão em Poá e região.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/3 p-4">
                <UserCheck className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                <div>
                  <h3 className="font-semibold text-white">
                    Orçamento sem compromisso
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                    Envie medidas aproximadas e agende a confirmação técnica
                    gratuita pelo WhatsApp {CONTACT_DATA.phoneFormatted}.
                  </p>
                </div>
              </div>
              <Button asChild variant="glass" className="w-full">
                <a
                  href={createWhatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com a equipe RA
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
