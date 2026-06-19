import { motion } from 'motion/react';
import { Layers, Building2, Shield, Columns, ShowerHead, Sparkles, Footprints, CheckCircle2 } from 'lucide-react';
import { OTHER_SERVICES } from '../types';

export default function Features() {
  const mainCategories = [
    {
      title: 'Sacadas / Envidraçamentos',
      icon: Layers,
      color: 'from-emerald-500/20 to-teal-500/5',
      accent: 'emerald',
      desc: 'Fechamentos modernos com isolamento acústico e proteção contra intempéries.'
    },
    {
      title: 'Fachadas Glazing / Pele de Vidro',
      icon: Building2,
      color: 'from-blue-500/20 to-sky-500/5',
      accent: 'blue',
      desc: 'Vidro refletivo imponente para edifícios e residências de alto padrão.'
    },
    {
      title: 'Fechamento de Lavanderias',
      icon: Columns,
      color: 'from-orange-500/20 to-amber-500/5',
      accent: 'orange',
      desc: 'Divisão sutil de ambientes internos garantindo luz e bloqueio de odores.'
    },
    {
      title: 'Guarda-Corpos Estáveis',
      icon: Shield,
      color: 'from-amber-500/20 to-yellow-500/5',
      accent: 'gold',
      desc: 'Guarda-corpos robustos que cumprem todas as normas de engenharia e segurança.'
    }
  ];

  return (
    <section id="services-list" className="py-24 bg-gradient-to-b from-black to-neutral-950 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-[0.2em]">Competência Completa</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Nossas Especialidades em Vidros Temperados
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-2"></div>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Trabalhamos com matéria-prima certificada de alta resistência para assegurar instalações duráveis e com acabamento de excelência.
          </p>
        </div>

        {/* Core Categories Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="core-services-grid">
          {mainCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl bg-neutral-900/40 border border-white/5 p-6 hover:border-amber-500/30 transition-all duration-300"
                id={`core-service-card-${idx}`}
              >
                {/* Background active glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent group-hover:from-amber-500/5 group-hover:to-transparent rounded-xl transition-all duration-300"></div>

                <div className="relative z-10 flex flex-col gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center border border-white/5 text-amber-400 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Specialties Section directly corresponding to "Também trabalhamos com box..." list */}
        <div className="rounded-2xl bg-gradient-to-b from-neutral-900/80 to-zinc-950/90 border border-glass-border/40 p-8 lg:p-12 shadow-2xl" id="other-specialties-container">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Promo */}
            <div className="lg:w-1/3 flex flex-col gap-5 text-left border-b lg:border-b-0 lg:border-r border-white/5 pb-8 lg:pb-0 lg:pr-12 justify-center">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Diferencial RA
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                Projetos Especiais & Customizados
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Além do fechamento estrutural de sacadas e fachadas em grande escala, desenhamos e instalamos componentes decorativos e utilitários sob as especificações do seu arquiteto ou engenheiro.
              </p>
              
              <div className="bg-amber-400/5 border border-amber-400/10 rounded-lg p-4 mt-2">
                <span className="text-xs font-semibold text-amber-300 font-mono">Nota do Orçamentista:</span>
                <p className="text-[11px] text-gray-400 mt-1">Todos os nossos painéis de espelho e escadas estruturais são calculados individualmente para resistirem sem deformaçoes.</p>
              </div>
            </div>

            {/* List Details of and other services */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left" id="other-services-grid">
              {OTHER_SERVICES.map((srv, idx) => {
                // assign icons dynamically
                let cardIcon = Sparkles;
                if (srv.title.includes('Elegance') || srv.title.includes('Box')) cardIcon = ShowerHead;
                if (srv.title.includes('Espelho')) cardIcon = Sparkles;
                if (srv.title.includes('Escada')) cardIcon = Footprints;
                const CurrentIcon = cardIcon;

                return (
                  <div key={idx} className="flex gap-4 items-start" id={`other-service-card-${idx}`}>
                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-amber-400 shrink-0">
                      <CurrentIcon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-white">{srv.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {srv.description}
                      </p>
                      
                      {/* Sub-specs list */}
                      <ul className="mt-2 space-y-1">
                        {srv.specs.slice(0, 2).map((sp, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5 text-[10px] text-gray-400 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{sp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
