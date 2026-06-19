import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, FileSpreadsheet, Check, ArrowRight, CornerDownRight } from 'lucide-react';
import { WORK_SLIDES, CONTACT_DATA, WorkSlide } from '../types';

export default function CatalogSlider() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sacadas' | 'fachadas' | 'banheiro'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter slides based on active category
  const filteredSlides = activeCategory === 'all' 
    ? WORK_SLIDES 
    : WORK_SLIDES.filter(s => s.category === activeCategory);

  // Safely adjust currentIndex when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Handle Autoplay loop
  useEffect(() => {
    if (isPlaying && filteredSlides.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % filteredSlides.length);
      }, 5000); // 5 seconds interval
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, filteredSlides]);

  const handleNext = () => {
    if (filteredSlides.length === 0) return;
    setCurrentIndex(prev => (prev + 1) % filteredSlides.length);
  };

  const handlePrev = () => {
    if (filteredSlides.length === 0) return;
    setCurrentIndex(prev => (prev - 1 + filteredSlides.length) % filteredSlides.length);
  };

  const activeSlide: WorkSlide | undefined = filteredSlides[currentIndex];

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-550/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Portfólio em Foco</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
              Galeria & Catálogo de Obras
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
              Explore nossos trabalhos concluídos com acabamento fino de alta costura. Navegue pelas fotos passando abaixo e escolha o modelo para seu projeto.
            </p>
          </div>

          {/* Autoplay Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/5 text-xs font-semibold hover:border-amber-500/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? 'Pausar Reprodução' : 'Iniciar Reprodução'}
              id="slider-playback-btn"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-500" />
                  <span>Reprodução Ativa</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-gray-400" />
                  <span>Pausado</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-white/5 pb-6 justify-start" id="portfolio-tabs-bar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-display font-medium tracking-wide border cursor-pointer transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold shadow-md shadow-amber-500/15'
                : 'bg-neutral-900 text-gray-400 border-white/5 hover:text-white hover:border-white/15'
            }`}
            id="tab-all"
          >
            VER TODOS
          </button>
          <button
            onClick={() => setActiveCategory('sacadas')}
            className={`px-4 py-2 rounded-lg text-xs font-display font-medium tracking-wide border cursor-pointer transition-all ${
              activeCategory === 'sacadas'
                ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold shadow-md shadow-amber-500/15'
                : 'bg-neutral-900 text-gray-400 border-white/5 hover:text-white hover:border-white/15'
            }`}
            id="tab-sacadas"
          >
            SACADAS ENVIDRAÇADAS
          </button>
          <button
            onClick={() => setActiveCategory('fachadas')}
            className={`px-4 py-2 rounded-lg text-xs font-display font-medium tracking-wide border cursor-pointer transition-all ${
              activeCategory === 'fachadas'
                ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold shadow-md shadow-amber-500/15'
                : 'bg-neutral-900 text-gray-400 border-white/5 hover:text-white hover:border-white/15'
            }`}
            id="tab-fachadas"
          >
            FACHADAS GLAZING
          </button>
          <button
            onClick={() => setActiveCategory('banheiro')}
            className={`px-4 py-2 rounded-lg text-xs font-display font-medium tracking-wide border cursor-pointer transition-all ${
              activeCategory === 'banheiro'
                ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold shadow-md shadow-amber-500/15'
                : 'bg-neutral-900 text-gray-400 border-white/5 hover:text-white hover:border-white/15'
            }`}
            id="tab-banheiro"
          >
            BOX DE BANHEIRO
          </button>
        </div>

        {filteredSlides.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-white/10 rounded-2xl">
            <p className="text-gray-400">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        ) : (
          /* Active Showcase Slider Card */
          <div className="relative" id="portfolio-interactive-slider">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-gradient-to-b from-neutral-900/40 to-neutral-950/70 border border-white/5 rounded-2xl overflow-hidden p-6 sm:p-8 shadow-2xl">
              
              {/* Image Column */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 md:h-[420px] rounded-xl overflow-hidden shadow-inner group">
                <AnimatePresence mode="wait">
                  {activeSlide && (
                    <motion.img
                      key={activeSlide.id}
                      src={activeSlide.imageUrl}
                      alt={activeSlide.title}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </AnimatePresence>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                {/* Left/Right Absolute Overlay Buttons for Touch Slider comfort */}
                <div className="absolute inset-x-4 bottom-4 md:inset-y-0 md:inset-x-auto md:left-4 md:right-4 flex md:flex-col justify-between items-center z-20 pointer-events-none">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-black/70 border border-white/10 text-white hover:bg-amber-500 hover:text-neutral-950 hover:border-amber-500 pointer-events-auto cursor-pointer transition-all transform hover:scale-105"
                    aria-label="Projeto anterior"
                    id="slider-overlay-prev"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-black/70 border border-white/10 text-white hover:bg-amber-500 hover:text-neutral-950 hover:border-amber-500 pointer-events-auto cursor-pointer transition-all transform hover:scale-105"
                    aria-label="Próximo projeto"
                    id="slider-overlay-next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Active index counters bar overlay */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold tracking-widest text-amber-400 px-3 py-1.5 rounded-full">
                  PROJETO {currentIndex + 1} DE {filteredSlides.length}
                </div>
              </div>

              {/* Specifications / Detail Column */}
              <div className="lg:col-span-5 flex flex-col justify-between text-left py-2">
                <AnimatePresence mode="wait">
                  {activeSlide && (
                    <motion.div
                      key={activeSlide.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        {/* Display Pill Tag */}
                        <span className="inline-flex items-center px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider font-mono">
                          {activeSlide.tag}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 leading-tight">
                          {activeSlide.title}
                        </h3>
                      </div>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-1">
                        {activeSlide.description}
                      </p>

                      {/* Specs List */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 flex items-center gap-1">
                          <CornerDownRight className="w-3.5 h-3.5 text-amber-400" />
                          Ficha Técnica / diferenciais
                        </h4>
                        <ul className="mt-2.5 space-y-2">
                          {activeSlide.specs.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                              <span className="p-0.5 roundedbg-amber-400/10 mt-0.5 max-h-min shrink-0 flex items-center justify-center">
                                <Check className="w-3.5 h-3.5 text-amber-500 font-extrabold" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Catalog Quick Quotation Call */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex items-baseline gap-1 bg-zinc-950/40 p-3 rounded-lg border border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 block">Condição de Pagamento:</span>
                    <span className="text-sm font-semibold text-emerald-400 font-mono ml-auto">Tudo em até 5x sem juros ou desconto no Pix</span>
                  </div>

                  <a
                    href={`https://wa.me/${CONTACT_DATA.phone}?text=Olá!%20Gostei%20muito%20do%20projeto%20"${activeSlide ? activeSlide.title : ''}"%20do%20seu%20catálogo.%20Gostaria%20de%20fazer%20um%20orçamento%20com%20medidas%20semelhantes.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold rounded-xl text-sm tracking-wide transition-all active:scale-95 text-center cursor-pointer"
                    id="slider-quote-btn"
                  >
                    Solicitar Orçamento Deste Modelo
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                
              </div>

            </div>

            {/* Slider visual dot indicators under layout */}
            <div className="flex justify-center items-center gap-2.5 mt-6">
              {filteredSlides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === dotIdx ? 'w-8 bg-amber-500' : 'w-2.5 bg-neutral-800 hover:bg-neutral-600'
                  }`}
                  aria-label={`Ir para slide ${dotIdx + 1}`}
                  id={`slider-dot-${dotIdx}`}
                />
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
