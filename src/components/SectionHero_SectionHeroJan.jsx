import React from 'react';

export function SectionHero_SectionHeroJan() {
  return (
    <section className="jean-bg-mesh jean-scroll-stage jean-hero-stage py-20 lg:py-28 relative overflow-hidden" data-jean-parallax-root="hero" style={{ backgroundColor: 'var(--color-surface-strong)' }}>

      <div className="jean-hero-shell">
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 w-full">
        <div className="flex-1 jean-panel-sticky jean-motion-layer jean-parallax-subtle" data-jean-reveal="true">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Jan Křížek</h1>
          <p className="mt-6 text-lg" style={{ color: 'var(--color-muted)' }}>Frontend &amp; Product Developer • vytvářím rychlé, přístupné a vizuálně čisté weby</p>
          <div className="mt-8"><a href="#vcard" className="jean-float inline-block px-8 py-3 rounded-full font-semibold text-white shadow-lg" style={{ backgroundColor: 'var(--color-primary)' }}>Stáhnout vCard</a></div>
        </div>
        <div className="flex-1 order-first jean-panel-sticky jean-motion-layer jean-parallax-down" data-jean-reveal="true"><div className="jean-glass-card rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center"><img src="/images/hero-1.jpg" alt="Profilová fotografie Jana Křížka" className="w-full h-full object-cover" /></div></div>
        </div>
      </div>
    </section>
  );
}
