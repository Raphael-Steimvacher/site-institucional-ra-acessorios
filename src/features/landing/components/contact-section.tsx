"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BrandMark } from "@/features/landing/components/brand-mark";
import { CONTACT_DATA } from "@/features/landing/constants/landing-content";
import { contactFormSchema, type ContactFormValues } from "@/features/landing/schemas/contact-form-schema";
import { createWhatsappUrl } from "@/features/landing/utils/whatsapp";

const serviceLabels: Record<ContactFormValues["service"], string> = {
  sacada: "Envidraçamento de sacada",
  fachada: "Fachada glazing",
  box: "Box de banheiro",
  guardacorpo: "Guarda-corpo",
  outro: "Outro projeto",
};

export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", phone: "", service: "sacada", message: "" },
  });

  function handleSubmit(values: ContactFormValues) {
    const message = `Olá! Meu nome é ${values.name}.\nTelefone: ${values.phone}\nInteresse: ${serviceLabels[values.service]}\nMensagem: ${values.message || "Gostaria de agendar um orçamento."}`;
    window.open(createWhatsappUrl(message), "_blank", "noopener,noreferrer");
    toast.success("Orçamento preparado", { description: "Continue o atendimento no WhatsApp." });
  }

  return (
    <footer id="contact" className="border-t border-white/5 bg-glass-dark pt-16 text-white md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-7 lg:col-span-5">
            <BrandMark />
            <div>
              <h2 className="font-display text-3xl font-bold">Vamos tirar seu projeto do papel?</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
                Envie os dados básicos e abra uma conversa com nossa equipe. Atendemos Ferraz de Vasconcelos e cidades da região metropolitana de São Paulo.
              </p>
            </div>

            <address className="space-y-4 not-italic">
              <a href={`https://wa.me/${CONTACT_DATA.phone}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-zinc-300 hover:text-amber-400">
                <Phone className="size-5 text-amber-400" aria-hidden="true" />
                {CONTACT_DATA.phoneFormatted}
              </a>
              <a href={CONTACT_DATA.addressMapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-zinc-300 hover:text-amber-400">
                <MapPin className="mt-0.5 size-5 shrink-0 text-amber-400" aria-hidden="true" />
                {CONTACT_DATA.address}
              </a>
              <div className="flex items-start gap-3 text-sm text-zinc-300">
                <Clock className="mt-0.5 size-5 shrink-0 text-amber-400" aria-hidden="true" />
                {CONTACT_DATA.hours}
              </div>
              <a href={`mailto:${CONTACT_DATA.email}`} className="flex items-center gap-3 text-sm text-zinc-300 hover:text-amber-400">
                <Mail className="size-5 text-amber-400" aria-hidden="true" />
                {CONTACT_DATA.email}
              </a>
            </address>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5 sm:p-8 lg:col-span-7">
            <h3 className="font-display text-2xl font-bold">Pedir orçamento rápido</h3>
            <p className="mt-2 text-sm text-zinc-400">Ao enviar, abriremos o WhatsApp com sua mensagem pronta.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seu nome</FormLabel>
                      <FormControl><Input placeholder="Como podemos chamar você?" autoComplete="name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl><Input type="tel" inputMode="tel" placeholder="(11) 99999-9999" autoComplete="tel" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="service" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serviço desejado</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Selecione um serviço" /></SelectTrigger></FormControl>
                      <SelectContent>
                        {Object.entries(serviceLabels).map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conte um pouco sobre o projeto</FormLabel>
                    <FormControl><Textarea rows={4} placeholder="Ambiente, medidas aproximadas e cidade..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" variant="premium" size="lg" className="w-full sm:w-auto">
                  <MessageCircle aria-hidden="true" />
                  Continuar no WhatsApp
                </Button>
                <p className="flex items-start gap-2 text-xs leading-relaxed text-zinc-500">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden="true" />
                  Seus dados são usados somente para preparar este contato e não ficam armazenados no site.
                </p>
              </form>
            </Form>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RA Acessórios e Vidraçaria. Todos os direitos reservados.</p>
          <a href={CONTACT_DATA.addressMapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Ver área de atendimento no mapa</a>
        </div>
      </div>
    </footer>
  );
}
