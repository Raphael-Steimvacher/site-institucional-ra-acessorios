"use client";

import { useMemo, useState } from "react";
import { Calculator, Info, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { GLASS_TYPES } from "@/features/landing/constants/landing-content";
import { SectionHeading } from "@/features/landing/components/section-heading";
import { createWhatsappUrl } from "@/features/landing/utils/whatsapp";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function BudgetCalculatorSection() {
  const [glassTypeKey, setGlassTypeKey] = useState(GLASS_TYPES[0].key);
  const [width, setWidth] = useState(1.2);
  const selectedGlassType = GLASS_TYPES.find((item) => item.key === glassTypeKey) ?? GLASS_TYPES[0];
  const [height, setHeight] = useState(selectedGlassType.minHeight);

  const estimate = useMemo(
    () => width * height * selectedGlassType.basePricePerSqm,
    [height, selectedGlassType.basePricePerSqm, width],
  );

  function handleTypeChange(value: string) {
    const nextType = GLASS_TYPES.find((item) => item.key === value);
    if (!nextType) return;

    setGlassTypeKey(value);
    setHeight(nextType.minHeight);
  }

  const whatsappMessage = `Olá! Fiz uma simulação no site da RA para ${selectedGlassType.name}, com aproximadamente ${width.toFixed(1)}m de largura por ${height.toFixed(1)}m de altura. Gostaria de confirmar um orçamento.`;

  return (
    <section id="calculator" className="bg-neutral-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Primeiro passo"
          title="Simule as medidas do seu projeto"
          description="Use medidas aproximadas para iniciar a conversa. O valor final depende da visita técnica, ferragens, acabamento e condições de instalação."
        />

        <Card className="mx-auto mt-10 max-w-5xl border-white/10 bg-glass-dark">
          <CardContent className="grid gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-7">
              <div className="space-y-2">
                <Label htmlFor="glass-type">Tipo de projeto</Label>
                <Select value={glassTypeKey} onValueChange={handleTypeChange}>
                  <SelectTrigger id="glass-type">
                    <SelectValue placeholder="Selecione o projeto" />
                  </SelectTrigger>
                  <SelectContent>
                    {GLASS_TYPES.map((type) => (
                      <SelectItem key={type.key} value={type.key}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="project-width">Largura aproximada</Label>
                  <span className="font-mono text-sm font-bold text-amber-400">{width.toFixed(1)} m</span>
                </div>
                <Slider id="project-width" min={0.5} max={8} step={0.1} value={[width]} onValueChange={([value]) => setWidth(value)} aria-label="Largura aproximada em metros" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="project-height">Altura aproximada</Label>
                  <span className="font-mono text-sm font-bold text-amber-400">{height.toFixed(1)} m</span>
                </div>
                <Slider id="project-height" min={selectedGlassType.minHeight} max={selectedGlassType.maxHeight} step={0.1} value={[height]} onValueChange={([value]) => setHeight(value)} aria-label="Altura aproximada em metros" />
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-5 sm:p-6">
              <div>
                <div className="flex items-center gap-2 text-amber-400">
                  <Calculator className="size-5" aria-hidden="true" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Estimativa inicial</span>
                </div>
                <p className="mt-5 font-display text-4xl font-extrabold text-white">
                  {currencyFormatter.format(estimate)}
                </p>
                <p className="mt-2 text-sm text-zinc-400">Área aproximada: {(width * height).toFixed(2)} m²</p>
                <div className="mt-6 rounded-lg border border-white/5 bg-black/20 p-4">
                  <p className="text-sm font-semibold text-white">Recomendação técnica</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{selectedGlassType.recommendation}</p>
                </div>
                <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-zinc-500">
                  <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  Simulação informativa, sem valor de proposta comercial.
                </p>
              </div>
              <Button asChild variant="premium" size="lg" className="mt-6 w-full">
                <a href={createWhatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" />
                  Confirmar orçamento
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
