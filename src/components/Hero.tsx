import { motion } from 'motion/react';
import { ShieldCheck, CalendarRange, Sparkles, Building2, UserCheck, CreditCard } from 'lucide-react';
import { CONTACT_DATA } from '../types';

export default function Hero() {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-glass-dark">
      {/* Background grid / radial lights simulating glass shine */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/15 via-zinc-950/90 to-black"></div>
      
      {/* Dynamic graphic glass reflections in the background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-96 bg-gradient-to-bl from-blue-500/5 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>

      {/* Wireframe geometric line mimicking architectural glass layout */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Tagline / Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs font-semibold rounded-full w-fit uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              Vidraçaria Premium • Projetos de Alto Padrão
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Transforme seus espaços com o brilho dos{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                Vidros Perfeitos
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl leading-relaxed"
            >
              Especialistas em Envidraçamento de Sacadas, Fachadas Glazing, Box de Banheiro, Guarda-Corpo, Espelhos e Escadas Sob Medida. Unimos segurança técnica rigorosa a um acabamento estético impecável.
            </motion.p>

            {/* Accent Category Badges directly derived from the Pamphlet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3 my-2"
            >
              <div className="flex items-center gap-2 bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 px-4 py-2 rounded-full text-xs font-semibold shadow-inner font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                EMPRESAS
              </div>
              <div className="flex items-center gap-2 bg-orange-950/30 border border-orange-500/40 text-orange-300 px-4 py-2 rounded-full text-xs font-semibold shadow-inner font-mono">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                RESIDÊNCIAS
              </div>
              <div className="flex items-center gap-2 bg-sky-950/30 border border-sky-500/40 text-sky-300 px-4 py-2 rounded-full text-xs font-semibold shadow-inner font-mono">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                CONDOMÍNIOS
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
              id="hero-cta-group"
            >
              <a
                href={`https://wa.me/${CONTACT_DATA.phone}?text=Olá!%20Vi%20a%20sua%20landing%20page%20e%20gostaria%20de%20fazer%20um%20orçamento%20sem%20compromisso.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-amber-500/20 active:scale-95 transition-all text-center cursor-pointer"
                id="hero-cta-whatsapp"
              >
                Atendimento por WhatsApp
              </a>
              <button
                onClick={scrollToCalculator}
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-xl text-base font-semibold active:scale-95 transition-all cursor-pointer"
                id="hero-cta-calc"
              >
                Simular Dimensões
              </button>
            </motion.div>

            {/* Mini Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 border-t border-glass-border/30 pt-6 mt-4"
              id="hero-trust-badges"
            >
              <div className="flex items-center gap-2 text-left">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-medium text-gray-300 leading-tight">Vidros Normatizados NBR</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CreditCard className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-medium text-gray-300 leading-tight">Parcelado em até 5x</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CalendarRange className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-medium text-gray-300 leading-tight">Agendamento Flexível</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Promo Panel */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl bg-gradient-to-b from-neutral-900/60 to-black/80 border border-glass-border/100 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden"
              id="hero-promo-card"
            >
              {/* Gloss shine effect overlay */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rotate-45 translate-x-12 -translate-y-12 pointer-events-none"></div>

              {/* Flyer elements presented modernly */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xs font-mono text-amber-400 tracking-wider uppercase">Facilidade Exclusiva</h3>
                  <h4 className="text-2xl font-display font-bold text-white mt-1">Super Destaque</h4>
                </div>
                <div className="bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10px] px-2.5 py-1 rounded font-mono font-bold">
                  SELO RA
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-zinc-950/70 border border-glass-border p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center font-bold text-neutral-950 text-xl font-display shrink-0">
                    5X
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">Facilidade Sem Juros</h5>
                    <p className="text-xs text-gray-400 mt-0.5">Tudo em até 5x sem juros! Aceitamos Visa, Mastercard, Elo e Pix.</p>
                  </div>
                </div>

                <div className="bg-zinc-950/70 border border-glass-border p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">Atendimento Especializado</h5>
                    <p className="text-xs text-gray-400 mt-0.5">Visitas técnicas rápidas para condomínios, construtoras e residências de alto padrão.</p>
                  </div>
                </div>

                <div className="bg-zinc-950/70 border border-glass-border p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <UserCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">Suporte & Ferragens</h5>
                    <p className="text-xs text-gray-400 mt-0.5">Usamos apenas acessórios e ferragens com tratamentos niquelados e antioxidantes robustos.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="font-mono">Orçamento Gratuito</span>
                <span className="font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Garantia de Envio Imediato
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
