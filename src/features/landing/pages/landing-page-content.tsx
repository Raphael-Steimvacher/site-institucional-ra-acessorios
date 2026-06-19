import { BudgetCalculatorSection } from "@/features/landing/components/budget-calculator-section";
import { CatalogSection } from "@/features/landing/components/catalog-section";
import { ContactSection } from "@/features/landing/components/contact-section";
import { HeroSection } from "@/features/landing/components/hero-section";
import { ServicesSection } from "@/features/landing/components/services-section";
import { SiteHeader } from "@/features/landing/components/site-header";

export function LandingPageContent() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-glass-dark text-white">
      <SiteHeader />
      <main id="main-content-flow">
        <HeroSection />
        <CatalogSection />
        <ServicesSection />
        <BudgetCalculatorSection />
        <ContactSection />
      </main>
    </div>
  );
}
