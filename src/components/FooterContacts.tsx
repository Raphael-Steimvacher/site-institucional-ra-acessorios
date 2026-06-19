import { useState, FormEvent } from 'react';
import { Phone, MapPin, Mail, Clock, Send, ShieldAlert, CreditCard, CheckCircle, Smartphone } from 'lucide-react';
import { CONTACT_DATA } from '../types';

export default function FooterContacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'sacada',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate simple form submission API latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clear data optionally after visual feedback
      setFormData({
        name: '',
        phone: '',
        service: 'sacada',
        message: ''
      });
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  const handleWhatsappQuickForm = () => {
    const formattedMessage = `Olá! Meu nome é ${formData.name || 'Cliente'}.
Fiz o preenchimento de contato no site:
- Meu Telefone: ${formData.phone || 'Não informado'}
- Interesse: ${formData.service}
- Mensagem: ${formData.message || 'Gostaria de agendar orçamento.'}`;
    
    const url = `https://wa.me/${CONTACT_DATA.phone}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <footer id="contact" className="bg-glass-dark text-white relative pt-24 pb-8 overflow-hidden">
      {/* Background glowing effects for visual elegance */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Embedded horizontal slider separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-white/5">
          
          {/* Column 1: Core Company Info */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-b from-neutral-900 to-black border border-amber-500/30 overflow-hidden shadow-inner font-display">
                <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600 bg-clip-text text-transparent">
                  RA
                </span>
              </div>
              <div>
                <h3 className="text-xl font-display font-extrabold tracking-wider bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent uppercase">
                  RA ACESSÓRIOS
                </h3>
                <span className="text-[9px] font-mono tracking-[0.25em] text-gray-400 uppercase leading-none">
                  e Vidraçaria
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Trabalhando com soluções residenciais e comerciais de alta performance em Ferraz de Vasconcelos, São Paulo e toda a região metropolitana. Peça já sua simulação e agende uma visita técnica in loco para confirmar as dimensões.
            </p>

            <div className="space-y-4 font-sans text-sm text-gray-300" id="contact-info-list">
              <a
                href={`https://wa.me/${CONTACT_DATA.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group hover:text-amber-400 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-900/80 border border-white/5 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">WhatsApp Oficial</span>
                  <span className="font-semibold text-white mt-1 group-hover:text-amber-300 transition-colors">{CONTACT_DATA.phoneFormatted}</span>
                </div>
              </a>

              <a
                href={CONTACT_DATA.addressMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group hover:text-amber-400 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-900/80 border border-white/5 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Nosso Endereço</span>
                  <span className="text-xs text-slate-300 group-hover:text-amber-300 transition-colors leading-tight block mt-0.5">{CONTACT_DATA.address}</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-neutral-900/80 border border-white/5 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Horário de Atendimento</span>
                  <span className="text-xs text-slate-300 mt-0.5 leading-tight block">{CONTACT_DATA.hours}</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-neutral-900/80 border border-white/5 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">E-mail Comercial</span>
                  <span className="text-xs text-slate-300 mt-0.5 leading-tight block">{CONTACT_DATA.email}</span>
                </div>
              </div>
            </div>

            {/* Payment banner styled directly from printed pamphlet */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-neutral-950 to-neutral-900/90 border border-white/5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">PAGAMENTO FACILITADO</span>
              </div>
              <div className="text-base font-bold font-display text-white">
                TUDO EM ATÉ <span className="text-amber-400">5X SEM JUROS!</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {/* Simulated payment badges representing pamphlet icons */}
                <span className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded">VISA</span>
                <span className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded">MASTERCARD</span>
                <span className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded">ELO</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 px-2.5 py-1 rounded font-bold">PIX</span>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Custom Contact Form */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-white/5 p-6 sm:p-8 rounded-2xl text-left" id="contact-form-wrapper">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold mb-1">AGENDAMENTO DE VISITAS</span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-6">Solicite Atendimento Rápido</h4>

            {isSuccess ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center gap-4 bg-emerald-950/10 border border-emerald-500/30 rounded-xl" id="contact-success-notification">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h5 className="text-lg font-display font-bold text-white">Obrigado pelo seu contato!</h5>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed max-w-sm mx-auto">
                    Nossa equipe técnica comercial recebeu sua mensagem e entrará em contato via telefone ou WhatsApp em até 1 hora no horário comercial.
                  </p>
                </div>
                
                <button
                  onClick={handleWhatsappQuickForm}
                  className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                  id="btn-backup-whatsapp-send"
                >
                  <Smartphone className="w-4 h-4" />
                  Garantir Envio no WhatsApp
                </button>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-[10px] font-mono uppercase text-gray-500 hover:text-white mt-2 cursor-pointer"
                >
                  Enviar Novo Formulário
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="main-contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase mb-2">Seu Nome Complete</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 font-sans"
                      id="form-input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase mb-2">Telefone de Contato (WhatsApp)</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 font-sans"
                      id="form-input-phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-400 uppercase mb-2">Instalação Pretendida</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                    id="form-select-service"
                  >
                    <option value="sacada">Envidraçamento de Sacada</option>
                    <option value="fachada">Fachadas Glazing</option>
                    <option value="box">Box de Banheiro</option>
                    <option value="guardacorpo">Guarda-Corpos</option>
                    <option value="outro">Espelhos, Escadas e Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-400 uppercase mb-2">Mensagem Detalhada (Opcional)</label>
                  <textarea
                    rows={4}
                    placeholder="Deixe instruções ou envie medidas aproximadas para agilizarmos a resposta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 font-sans"
                    id="form-textarea-message"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:from-amber-700 disabled:to-amber-800 text-neutral-950 font-bold rounded-xl text-sm cursor-pointer transition-all active:scale-95 text-center shrink-0"
                    id="form-submit-btn"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Contato'}
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsappQuickForm}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-zinc-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-xl border border-white/5 transition-all text-center cursor-pointer"
                    id="form-whatsapp-direct-btn"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400 animate-pulse" />
                    Enviar Direto no WhatsApp
                  </button>
                </div>

                <div className="flex items-start gap-2 text-[11px] text-gray-500 font-mono mt-4 leading-relaxed">
                  <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Seus dados são protegidos e usados apenas para podermos estruturar seu orçamento comercial. Sem Spam.</span>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* Dynamic Static Map Navigation / Address Details Block */}
        <div className="py-12 text-left" id="map-address-banner">
          <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-amber-500/5 to-transparent pointer-events-none"></div>
            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-bold mb-1">UNIDADE MATRIZ DE VISITAS</span>
              <h5 className="text-lg font-display font-bold text-white">Rua dos Ipês, 320 - Ferraz de Vasconcelos, SP</h5>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">Atendemos plenamente as regiões de Mogi das Cruzes, Suzano, Poá, Itaquaquecetuba, Zona Leste de São Paulo e ABC Paulista.</p>
            </div>
            
            <a
              href={CONTACT_DATA.addressMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl border border-white/10 transition-colors shrink-0 text-center cursor-pointer"
              id="btn-open-gps"
            >
              Como Chegar via GPS
              <MapPin className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

        {/* Final legal and copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-4">
          <div>
            &copy; {currentYear} RA Acessórios e Vidraçaria. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Selo de Autenticidade Registrado</span>
            <span>|</span>
            <span>Estilo e Segurança Premium</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
