import { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, Star, Clock } from 'lucide-react';
import { CONTACT_DATA } from '../types';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
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
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-glass-dark/95 backdrop-blur-md py-3 border-b border-glass-border/40 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top Banner Bar - Subtle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex justify-between items-center text-[10px] sm:text-xs font-mono text-gray-400 border-b border-white/5 pb-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Atendimento Rápido
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-amber-500" />
            Garantia de Qualidade & Instalação Segura
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            {CONTACT_DATA.hours.split('|')[0]}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Styled mimicking golden card logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
            id="brand-logo-btn"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-b from-neutral-900 to-black border border-amber-500/30 overflow-hidden shadow-inner group-hover:border-amber-400 transition-colors">
              <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform">
                RA
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </div>
            <div>
              <div className="text-lg font-bold font-display tracking-wider bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent uppercase leading-tight">
                RA ACESSÓRIOS
              </div>
              <div className="text-[9px] font-mono tracking-[0.25em] text-gray-400 uppercase leading-none">
                e Vidraçaria
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-gray-300">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
              id="nav-link-hero"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
              id="nav-link-portfolio"
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection('services-list')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
              id="nav-link-services"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
              id="nav-link-calc"
            >
              Simulador
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
              id="nav-link-contact"
            >
              Contato
            </button>
          </nav>

          {/* Quick Contact Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={`https://wa.me/${CONTACT_DATA.phone}?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20de%20vidros.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold px-4 py-2 rounded-lg text-sm shadow-md shadow-amber-500/10 cursor-pointer transform hover:-translate-y-0.5 transition-all"
              id="btn-fast-quote-header"
            >
              <Phone className="w-4 h-4" />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={`https://wa.me/${CONTACT_DATA.phone}?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20de%20vidros.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-950/40 text-emerald-400 border border-emerald-900/40 hover:bg-emerald-900/60 transition-colors cursor-pointer"
              aria-label="WhatsApp rápido"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-glass-dark border border-glass-border text-gray-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Menu principal"
              id="btn-toggle-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-glass-dark/95 backdrop-blur-lg border-b border-glass-border/60 py-6 px-6 md:hidden flex flex-col gap-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 font-sans text-lg font-medium text-gray-200">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left py-2 hover:text-amber-400 border-b border-white/5 pb-2 transition-colors cursor-pointer"
              id="mobile-link-hero"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left py-2 hover:text-amber-400 border-b border-white/5 pb-2 transition-colors cursor-pointer"
              id="mobile-link-portfolio"
            >
              Catálogo de Projetos
            </button>
            <button
              onClick={() => scrollToSection('services-list')}
              className="text-left py-2 hover:text-amber-400 border-b border-white/5 pb-2 transition-colors cursor-pointer"
              id="mobile-link-services"
            >
              Todos os Serviços
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-left py-2 hover:text-amber-400 border-b border-white/5 pb-2 transition-colors cursor-pointer"
              id="mobile-link-calc"
            >
              Simulador de Orçamento
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 hover:text-amber-400 pb-1 transition-colors cursor-pointer"
              id="mobile-link-contact"
            >
              Fale Conosco
            </button>
          </div>

          <a
            href={`https://wa.me/${CONTACT_DATA.phone}?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20de%20vidros.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-display font-medium rounded-lg text-base shadow-lg shadow-amber-500/10 cursor-pointer"
            id="mobile-cta-btn"
          >
            <Phone className="w-5 h-5" />
            Fale Direto no WhatsApp
          </a>

          <div className="flex flex-col gap-1 items-center justify-center text-xs text-gray-500 font-mono mt-2">
            <div>Atendimento das 8h às 18h</div>
            <div>Ferraz de Vasconcelos - SP</div>
          </div>
        </div>
      )}
    </header>
  );
}
