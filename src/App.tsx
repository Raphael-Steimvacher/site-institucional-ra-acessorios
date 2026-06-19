/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import CatalogSlider from './components/CatalogSlider';
import Features from './components/Features';
import BudgetCalculator from './components/BudgetCalculator';
import FooterContacts from './components/FooterContacts';

export default function App() {
  return (
    <div id="app-viewport" className="min-h-screen bg-glass-dark text-white font-sans antialiased selection:bg-amber-500 selection:text-neutral-950">
      {/* Premium background gradient layout */}
      <Header />
      
      <main id="main-content-flow">
        {/* Presenting key landing page segments sequentially */}
        <Hero />
        
        <CatalogSlider />
        
        <Features />
        
        <BudgetCalculator />
        
        <FooterContacts />
      </main>
    </div>
  );
}

