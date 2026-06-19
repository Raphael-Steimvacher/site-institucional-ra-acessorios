import { useState } from 'react';
import { Ruler, Sparkles, Send, HelpCircle, Shield, RefreshCw } from 'lucide-react';
import { CONTACT_DATA } from '../types';

interface GlassType {
  key: string;
  name: string;
  basePricePerSqm: number;
  recommendation: string;
  minHeight: number;
  maxHeight: number;
}

const GLASS_TYPES: GlassType[] = [
  {
    key: 'box',
    name: 'Box de Banheiro (Padrão)',
    basePricePerSqm: 420,
    recommendation: 'Vidro temperado incolor 8mm de alta resistência mecânica.',
    minHeight: 1.8,
    maxHeight: 2.2
  },
  {
    key: 'sacada',
    name: 'Envidraçamento de Sacadas',
    basePricePerSqm: 850,
    recommendation: 'Vidro laminado temperado 10mm estrutural com perfil articulado.',
    minHeight: 1.4,
    maxHeight: 2.6
  },
  {
    key: 'guardacorpo',
    name: 'Guarda-Corpos Estáveis',
    basePricePerSqm: 980,
    recommendation: 'Vidro triplo laminado estrutural fixado em torre de aço AISI 304.',
    minHeight: 0.9,
    maxHeight: 1.2
  },
  {
    key: 'espelho',
    name: 'Espelho Lapidado Premium',
    basePricePerSqm: 380,
    recommendation: 'Espelho nacional Belga de 4mm antirreflexo Lapidado ou Bisotê.',
    minHeight: 0.5,
    maxHeight: 2.4
  }
];

export default function BudgetCalculator() {
  const [selectedType, setSelectedType] = useState<string>('box');
  const [width, setWidth] = useState<number>(1.2);
  const [height, setHeight] = useState<number>(1.9);
  const [glassThickness, setGlassThickness] = useState<'8mm' | '10mm'>('8mm');

  const currentGlass = GLASS_TYPES.find(g => g.key === selectedType) || GLASS_TYPES[0];

  // Calculate estimated price
  const area = width * height;
  const factor = glassThickness === '10mm' ? 1.25 : 1.0;
  const totalEstimate = Math.round(area * currentGlass.basePricePerSqm * factor);
  const installments = Math.round(totalEstimate / 5);

  const resetCalculator = () => {
    setSelectedType('box');
    setWidth(1.2);
    setHeight(1.9);
    setGlassThickness('8mm');
  };

  const currentMessage = `Olá! Simulei meu orçamento no calculador da página:
- Serviço: ${currentGlass.name}
- Largura: ${width.toFixed(2)}m
- Altura: ${height.toFixed(2)}m
- Espessura: ${glassThickness}
- Área total: ${area.toFixed(2)}m²
Gostaria de agendar uma visita para confirmar as medidas!`;

  const whatsappLink = `https://wa.me/${CONTACT_DATA.phone}?text=${encodeURIComponent(currentMessage)}`;

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-neutral-950 to-black text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-[0.2em] flex items-center justify-center gap-1.5">
            <Ruler className="w-4 h-4" />
            Transparência e Autonomia
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Simulador de Dimensões e Projetos
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-2"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
            Selecione o tipo de instalação ideal e simule as medidas do seu espaço para calcular uma estimativa rápida de material.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="calculator-widget-root">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-white/5 p-6 sm:p-8 rounded-2xl text-left flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Reset action trigger */}
              <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-4">
                <span className="text-sm font-bold text-white uppercase font-display tracking-wider">Parâmetros das Medidas</span>
                <button
                  onClick={resetCalculator}
                  className="flex items-center gap-1 text-[10px] uppercase font-mono text-gray-400 hover:text-amber-400 cursor-pointer transition-colors"
                  id="btn-reset-calc"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Redefinir
                </button>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-400 uppercase mb-2">1. Selecione o Tipo de Serviço</label>
                <select
                  value={selectedType}
                  onChange={(e) => {
                    const nextKey = e.target.value;
                    setSelectedType(nextKey);
                    // Match safe heights constraints naturally
                    const match = GLASS_TYPES.find(g => g.key === nextKey);
                    if (match) {
                      setHeight((match.minHeight + match.maxHeight) / 2);
                    }
                  }}
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer font-display"
                  id="select-glass-type"
                >
                  {GLASS_TYPES.map((g) => (
                    <option key={g.key} value={g.key}>{g.name}</option>
                  ))}
                </select>
              </div>

              {/* Sliders for Width */}
              <div>
                <div className="flex justify-between text-xs font-mono text-gray-400 uppercase mb-2">
                  <span>2. Largura Estimada (m)</span>
                  <span className="font-bold text-amber-400">{width.toFixed(2)} Metros</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="12.0"
                  step="0.05"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 bg-neutral-950 h-2 rounded-lg appearance-none cursor-pointer"
                  id="range-width"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-mono mt-1">
                  <span>0.5m</span>
                  <span>12.0m</span>
                </div>
              </div>

              {/* Sliders for Height */}
              <div>
                <div className="flex justify-between text-xs font-mono text-gray-400 uppercase mb-2">
                  <span>3. Altura Recomendada (m)</span>
                  <span className="font-bold text-amber-400">{height.toFixed(2)} Metros</span>
                </div>
                <input
                  type="range"
                  min={currentGlass.minHeight}
                  max={currentGlass.maxHeight}
                  step="0.05"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 bg-neutral-950 h-2 rounded-lg appearance-none cursor-pointer"
                  id="range-height"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-mono mt-1">
                  <span>Mín: {currentGlass.minHeight.toFixed(2)}m</span>
                  <span>Máx: {currentGlass.maxHeight.toFixed(2)}m</span>
                </div>
              </div>

              {/* Thick details options toggle */}
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase mb-2">4. Espessura dos Painéis de Vidro</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setGlassThickness('8mm')}
                    className={`py-3.5 rounded-xl border text-sm font-semibold cursor-pointer transition-all ${
                      glassThickness === '8mm'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                        : 'bg-neutral-950 border-white/5 text-gray-400 hover:border-white/10'
                    }`}
                    id="thickness-opt-8"
                  >
                    8mm (Box / Escadas / Espelho)
                  </button>
                  <button
                    onClick={() => setGlassThickness('10mm')}
                    className={`py-3.5 rounded-xl border text-sm font-semibold cursor-pointer transition-all ${
                      glassThickness === '10mm'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                        : 'bg-neutral-950 border-white/5 text-gray-400 hover:border-white/10'
                    }`}
                    id="thickness-opt-10"
                  >
                    10mm (Estrutural / Sacadas)
                  </button>
                </div>
              </div>

            </div>

            {/* Recommendation Tagline */}
            <div className="mt-8 border-t border-white/5 pt-5 flex items-start gap-3 bg-neutral-950/40 p-4 rounded-xl border border-white/5">
              <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-bold">Norma Recomendada:</span>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{currentGlass.recommendation}</p>
              </div>
            </div>

          </div>

          {/* Real-time Calculation Result Screen */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-black border border-glass-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-left">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.25em] block font-bold mb-1">PROJETO SIMULADO</span>
              <h3 className="text-xl font-display font-bold text-white">{currentGlass.name}</h3>
              <div className="h-px bg-white/5 my-4"></div>

              {/* Specs readout */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-neutral-900/60 p-3.5 rounded-xl border border-white/5 text-left">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Área Calculada</span>
                  <div className="text-xl font-display font-bold text-white mt-1">{area.toFixed(2)} m²</div>
                </div>
                <div className="bg-neutral-900/60 p-3.5 rounded-xl border border-white/5 text-left">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Espessura Indicada</span>
                  <div className="text-xl font-display font-bold text-white mt-1">{glassThickness}</div>
                </div>
              </div>

              {/* Estimate readout */}
              <div className="my-6">
                <span className="text-[10px] font-mono text-gray-400 uppercase flex items-center gap-1">
                  Valor Estimado de Referência
                  <span className="group relative cursor-help">
                    <HelpCircle className="w-3.5 h-3.5 text-gray-400 hover:text-white" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded bg-black text-[10px] text-gray-300 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 shadow-2xl">
                      Cálculo empírico baseado em média regional de materiais de qualidade. Não substitui medição final do técnico.
                    </span>
                  </span>
                </span>
                
                {/* Simulated Pricing Block */}
                <div className="mt-2.5">
                  <span className="text-4xl font-display font-bold text-white">R$ {totalEstimate.toLocaleString('pt-BR')}</span>
                  <span className="text-xs text-gray-400 block mt-1">À vista no PIX com super desconto</span>
                </div>
              </div>

              {/* Special payment conditions matching printed leaflet */}
              <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3.5 my-6">
                <div className="text-2xl font-bold font-display text-emerald-400 shrink-0">5X</div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block font-bold">Condição de Parcelamento:</span>
                  <p className="text-xs text-slate-300 mt-0.5 leading-tight">Ou em até <strong className="text-white">5x de R$ {installments.toLocaleString('pt-BR')}</strong> sem nenhum juros!</p>
                </div>
              </div>
            </div>

            {/* Quotation CTA */}
            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-extrabold rounded-xl text-sm transition-all focus:scale-95 active:scale-95 shadow-lg shadow-amber-500/10 cursor-pointer"
                id="btn-send-calculated-quote"
              >
                <Send className="w-4 h-4" />
                Desejo Confirmar no WhatsApp
              </a>
              <span className="text-[10px] font-mono text-gray-500 block text-center">
                *O orçamento definitivo requer verificação técnica gratuita in loco.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
