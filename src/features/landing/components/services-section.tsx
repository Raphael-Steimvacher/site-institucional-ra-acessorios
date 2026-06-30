import {
  Building2,
  CheckCircle2,
  Columns3,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MAIN_SERVICES, OTHER_SERVICES } from "@/features/landing/constants/landing-content";
import { SectionHeading } from "@/features/landing/components/section-heading";

const serviceIcons = {
  layers: Layers3,
  building: Building2,
  columns: Columns3,
  shield: ShieldCheck,
} as const;

export function ServicesSection() {
  return (
    <section id="services-list" className="bg-glass-dark py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Soluções completas"
          title="Vidros para cada etapa do seu projeto"
          description="Da proteção de uma sacada ao acabamento de um ambiente, indicamos a solução adequada e cuidamos da instalação com atenção aos detalhes."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MAIN_SERVICES.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <Card
                key={service.title}
                className="group overflow-hidden border-white/10 bg-neutral-950/70 transition-transform duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`mb-4 flex size-12 items-center justify-center rounded-xl bg-linear-to-br ${service.colorClassName}`}>
                    <Icon className="size-6 text-amber-400" aria-hidden="true" />
                  </div>
                  <CardTitle className="font-display text-lg leading-snug text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-950/60 p-5 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div>
              <Sparkles className="size-7 text-amber-400" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                Projetos especiais e sob medida
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Desenvolvemos peças decorativas e soluções estruturais conforme as medidas e necessidades do seu imóvel.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {OTHER_SERVICES.map((service) => (
                <article key={service.title}>
                  <h4 className="font-display text-base font-bold text-white">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.specs.slice(0, 2).map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
