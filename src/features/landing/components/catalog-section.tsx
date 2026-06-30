"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CornerDownRight,
  Pause,
  Play,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CONTACT_DATA,
  WORK_SLIDES,
} from "@/features/landing/constants/landing-content";
import type { WorkCategory } from "@/features/landing/types/landing";
import { createWhatsappUrl } from "@/features/landing/utils/whatsapp";

type CatalogFilter = "all" | WorkCategory;

const FILTERS: { value: CatalogFilter; label: string }[] = [
  { value: "all", label: "Ver todos" },
  { value: "sacadas", label: "Sacadas" },
  { value: "fachadas", label: "Fachadas" },
  { value: "banheiro", label: "Box" },
];

export function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState<CatalogFilter>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const filteredSlides = useMemo(
    () =>
      activeCategory === "all"
        ? WORK_SLIDES
        : WORK_SLIDES.filter((slide) => slide.category === activeCategory),
    [activeCategory],
  );

  const activeSlide = filteredSlides[currentIndex] ?? filteredSlides[0];

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (!isPlaying || filteredSlides.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % filteredSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [filteredSlides.length, isPlaying]);

  function handleNext() {
    setCurrentIndex((previous) => (previous + 1) % filteredSlides.length);
  }

  function handlePrev() {
    setCurrentIndex(
      (previous) => (previous - 1 + filteredSlides.length) % filteredSlides.length,
    );
  }

  return (
    <section id="portfolio" className="relative bg-neutral-950 py-16 text-white md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400">
              Portfólio em foco
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Galeria e catálogo de obras
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Explore projetos com acabamento fino e escolha uma referência para
              iniciar seu orçamento.
            </p>
          </div>

          <Button
            type="button"
            variant="glass"
            size="sm"
            onClick={() => setIsPlaying((current) => !current)}
            aria-label={isPlaying ? "Pausar reprodução" : "Iniciar reprodução"}
          >
            {isPlaying ? (
              <Pause className="size-4 text-amber-500" aria-hidden="true" />
            ) : (
              <Play className="size-4" aria-hidden="true" />
            )}
            {isPlaying ? "Reprodução ativa" : "Pausado"}
          </Button>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as CatalogFilter)}
          className="mb-8"
        >
          <TabsList aria-label="Filtrar projetos por categoria">
            {FILTERS.map((filter) => (
              <TabsTrigger key={filter.value} value={filter.value}>
                {filter.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {activeSlide ? (
          <div className="overflow-hidden rounded-xl border border-white/5 bg-linear-to-b from-neutral-900/70 to-neutral-950 shadow-2xl">
            <div className="grid gap-8 p-4 sm:p-6 lg:grid-cols-12 lg:p-8">
              <div className="relative h-72 overflow-hidden rounded-lg sm:h-96 lg:col-span-7 lg:h-105">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-400 backdrop-blur-md">
                  Projeto {currentIndex + 1} de {filteredSlides.length}
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <Button
                    type="button"
                    variant="glass"
                    size="icon"
                    onClick={handlePrev}
                    aria-label="Projeto anterior"
                  >
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="glass"
                    size="icon"
                    onClick={handleNext}
                    aria-label="Próximo projeto"
                  >
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-between py-1 text-left lg:col-span-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div>
                      <span className="rounded-md border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                        {activeSlide.tag}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                        {activeSlide.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-zinc-400">
                      {activeSlide.description}
                    </p>

                    <div>
                      <h4 className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-zinc-300">
                        <CornerDownRight
                          className="size-3.5 text-amber-400"
                          aria-hidden="true"
                        />
                        Ficha técnica
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {activeSlide.specs.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-zinc-300"
                          >
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-amber-500"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 space-y-4 border-t border-white/5 pt-6">
                  <div className="rounded-lg border border-white/5 bg-zinc-950/60 p-3 text-sm">
                    <span className="font-mono text-[10px] uppercase text-zinc-400">
                      Condição de pagamento
                    </span>
                    <strong className="ml-2 text-emerald-400">
                      Até 5x sem juros ou desconto no Pix
                    </strong>
                  </div>
                  <Button asChild variant="premium" size="lg" className="w-full">
                    <a
                      href={createWhatsappUrl(
                        `Olá! Gostei do projeto "${activeSlide.title}" do catálogo da RA. Gostaria de fazer um orçamento com medidas semelhantes.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar orçamento deste modelo
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2.5 px-6 pb-6">
              {filteredSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-8 bg-amber-500"
                      : "w-2.5 bg-neutral-800 hover:bg-neutral-600"
                  }`}
                  aria-label={`Ir para ${slide.title}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-white/10 py-16 text-center text-zinc-400">
            Nenhum projeto encontrado nesta categoria.
          </div>
        )}

        <p className="mt-5 text-center font-mono text-xs text-zinc-500">
          Atendimento pelo WhatsApp oficial {CONTACT_DATA.phoneFormatted}
        </p>
      </div>
    </section>
  );
}
