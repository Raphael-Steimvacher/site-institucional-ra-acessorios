"use client";

import { useMemo, useState } from "react";
import { Calculator, Info, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BUDGET_PRODUCTS, GLASS_COLORS } from "@/features/landing/constants/landing-content";
import { SectionHeading } from "@/features/landing/components/section-heading";
import type { GlassColorKey } from "@/features/landing/types/landing";
import { createWhatsappUrl } from "@/features/landing/utils/whatsapp";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const meterFormatter = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

type MeasurementUnit = "meters" | "centimeters";

export function BudgetCalculatorSection() {
  const [productKey, setProductKey] = useState(BUDGET_PRODUCTS[0].key);
  const [glassColorKey, setGlassColorKey] = useState<GlassColorKey>("incolor");
  const [measurementUnit, setMeasurementUnit] = useState<MeasurementUnit>("meters");
  const [widthInput, setWidthInput] = useState("1,5");
  const [heightInput, setHeightInput] = useState("1,9");
  const selectedProduct = BUDGET_PRODUCTS.find((item) => item.key === productKey) ?? BUDGET_PRODUCTS[0];
  const selectedGlassColor = GLASS_COLORS.find((item) => item.key === glassColorKey) ?? GLASS_COLORS[0];
  const width = parseMeasurementValue(widthInput);
  const height = parseMeasurementValue(heightInput);
  const widthInMeters = convertToMeters(width, measurementUnit);
  const heightInMeters = convertToMeters(height, measurementUnit);
  const isValidMeasurement = widthInMeters > 0 && heightInMeters > 0;
  const pricePerSqm = selectedProduct.pricesPerSqm[glassColorKey];
  const area = isValidMeasurement ? widthInMeters * heightInMeters : 0;

  const estimate = useMemo(
    () => area * pricePerSqm,
    [area, pricePerSqm],
  );
  const formattedWidth = meterFormatter.format(widthInMeters);
  const formattedHeight = meterFormatter.format(heightInMeters);
  const formattedArea = meterFormatter.format(area);
  const formattedPricePerSqm = currencyFormatter.format(pricePerSqm);
  const formattedEstimate = currencyFormatter.format(estimate);

  function handleGlassColorChange(value: string) {
    if (!isGlassColorKey(value)) {
      return;
    }

    setGlassColorKey(value);
  }

  function handleMeasurementUnitChange(value: string) {
    if (!isMeasurementUnit(value) || value === measurementUnit) {
      return;
    }

    setWidthInput(formatMeasurementInputValue(convertBetweenUnits(width, measurementUnit, value)));
    setHeightInput(formatMeasurementInputValue(convertBetweenUnits(height, measurementUnit, value)));
    setMeasurementUnit(value);
  }

  const whatsappMessage = [
    `Olá! Fiz uma simulação no site da RA para ${selectedProduct.name} em vidro ${selectedGlassColor.name.toLowerCase()}.`,
    `Medidas aproximadas: ${formattedWidth}m de largura por ${formattedHeight}m de altura.`,
    `Área calculada: ${formattedArea} m².`,
    `Valor do m²: ${formattedPricePerSqm}.`,
    `Total estimado exibido no site: ${formattedEstimate}.`,
    "Gostaria de confirmar um orçamento.",
  ].join("\n");

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
                <Label htmlFor="product-type">Serviço desejado</Label>
                <Select value={productKey} onValueChange={setProductKey}>
                  <SelectTrigger id="product-type">
                    <SelectValue placeholder="Selecione o projeto" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET_PRODUCTS.map((product) => (
                      <SelectItem key={product.key} value={product.key}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="glass-color">Cor do vidro</Label>
                <Select value={glassColorKey} onValueChange={handleGlassColorChange}>
                  <SelectTrigger id="glass-color">
                    <SelectValue placeholder="Selecione a cor do vidro" />
                  </SelectTrigger>
                  <SelectContent>
                    {GLASS_COLORS.map((color) => (
                      <SelectItem key={color.key} value={color.key}>
                        {color.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Unidade das medidas</Label>
                <div className="grid grid-cols-2 rounded-lg border border-input bg-background p-1">
                  <button
                    type="button"
                    className={getMeasurementUnitButtonClassName(measurementUnit === "meters")}
                    aria-pressed={measurementUnit === "meters"}
                    onClick={() => handleMeasurementUnitChange("meters")}
                  >
                    Metros
                  </button>
                  <button
                    type="button"
                    className={getMeasurementUnitButtonClassName(measurementUnit === "centimeters")}
                    aria-pressed={measurementUnit === "centimeters"}
                    onClick={() => handleMeasurementUnitChange("centimeters")}
                  >
                    Centímetros
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="project-width">Largura em {measurementUnit === "meters" ? "metros" : "centímetros"}</Label>
                  <MeasurementInput
                    id="project-width"
                    value={widthInput}
                    unit={measurementUnit === "meters" ? "m" : "cm"}
                    isInvalid={width <= 0}
                    onChange={setWidthInput}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-height">Altura em {measurementUnit === "meters" ? "metros" : "centímetros"}</Label>
                  <MeasurementInput
                    id="project-height"
                    value={heightInput}
                    unit={measurementUnit === "meters" ? "m" : "cm"}
                    isInvalid={height <= 0}
                    onChange={setHeightInput}
                  />
                </div>
              </div>

              {!isValidMeasurement && (
                <p className="text-sm text-red-300">
                  Informe largura e altura maiores que zero para calcular a estimativa.
                </p>
              )}
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-amber-400/15 bg-amber-400/4 p-5 sm:p-6">
              <div>
                <div className="flex items-center gap-2 text-amber-400">
                  <Calculator className="size-5" aria-hidden="true" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Estimativa inicial</span>
                </div>
                <p className="mt-5 font-display text-4xl font-extrabold text-white">
                  {formattedEstimate}
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  {selectedProduct.name} em vidro {selectedGlassColor.name.toLowerCase()}
                </p>
                <div className="mt-6 grid gap-3 rounded-lg border border-white/5 bg-black/20 p-4 text-sm">
                  <ResultRow label="Serviço" value={selectedProduct.name} />
                  <ResultRow label="Cor do vidro" value={selectedGlassColor.name} />
                  <ResultRow label="Largura" value={`${formattedWidth} m`} />
                  <ResultRow label="Altura" value={`${formattedHeight} m`} />
                  <ResultRow label="Área calculada" value={`${formattedArea} m²`} />
                  <ResultRow label="Valor do m²" value={formattedPricePerSqm} />
                  <ResultRow label="Total estimado" value={formattedEstimate} highlight />
                </div>
                <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-zinc-500">
                  <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  Simulação informativa, sem valor de proposta comercial.
                </p>
              </div>
              <Button asChild variant="premium" size="lg" className="mt-6 w-full">
                <a
                  href={createWhatsappUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!isValidMeasurement}
                  className={!isValidMeasurement ? "pointer-events-none opacity-60" : undefined}
                  onClick={(event) => {
                    if (!isValidMeasurement) {
                      event.preventDefault();
                    }
                  }}
                >
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

function isGlassColorKey(value: string): value is GlassColorKey {
  return GLASS_COLORS.some((color) => color.key === value);
}

function isMeasurementUnit(value: string): value is MeasurementUnit {
  return value === "meters" || value === "centimeters";
}

function convertToMeters(value: number, unit: MeasurementUnit) {
  return unit === "centimeters" ? value / 100 : value;
}

function convertBetweenUnits(value: number, currentUnit: MeasurementUnit, nextUnit: MeasurementUnit) {
  if (currentUnit === nextUnit) {
    return value;
  }

  return nextUnit === "centimeters" ? value * 100 : value / 100;
}

function parseMeasurementValue(value: string) {
  const normalizedValue = value.replace(",", ".");
  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function formatMeasurementInputValue(value: number) {
  return Number.isInteger(value)
    ? String(value)
    : String(Number(value.toFixed(2))).replace(".", ",");
}

function getMeasurementUnitButtonClassName(isSelected: boolean) {
  return [
    "h-10 rounded-md px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    isSelected
      ? "bg-amber-500 text-neutral-950"
      : "text-zinc-300 hover:bg-white/5 hover:text-white",
  ].join(" ");
}

type MeasurementInputProps = {
  id: string;
  value: string;
  unit: string;
  isInvalid: boolean;
  onChange: (value: string) => void;
};

function MeasurementInput({ id, value, unit, isInvalid, onChange }: MeasurementInputProps) {
  return (
    <div
      className={[
        "flex h-14 items-center rounded-xl border bg-black/30 px-4 shadow-sm transition-colors focus-within:ring-2",
        isInvalid
          ? "border-red-400/70 focus-within:ring-red-400/30"
          : "border-white/10 focus-within:border-amber-400/70 focus-within:ring-amber-400/25",
      ].join(" ")}
    >
      <input
        id={id}
        type="text"
        inputMode="decimal"
        value={value}
        aria-invalid={isInvalid}
        onChange={(event) => onChange(event.target.value)}
        className="min-w-0 flex-1 bg-transparent text-md font-semibold text-white outline-none placeholder:text-zinc-600"
        placeholder="0,00"
      />
      <span className="ml-3 rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs font-bold uppercase text-amber-300">
        {unit}
      </span>
    </div>
  );
}

type ResultRowProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

function ResultRow({ label, value, highlight = false }: ResultRowProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-zinc-400">{label}</span>
      <span className={highlight ? "font-semibold text-amber-300" : "font-medium text-white"}>
        {value}
      </span>
    </div>
  );
}
