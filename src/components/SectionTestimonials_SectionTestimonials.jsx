import React from 'react';

export function SectionTestimonials_SectionTestimonials() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true">
    <section className="py-20 lg:py-28 jean-scroll-stage jean-section-shell" data-jean-parallax-root="testimonials" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="max-w-7xl mx-auto px-6 jean-panel-layout">
        <div className="jean-panel-sticky jean-motion-layer jean-parallax-subtle" data-jean-reveal="true"><h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Reference z praxe</h2></div>
        <div className="jean-stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="jean-glass-card jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-pullquote-card lg:col-span-2" data-jean-reveal="true" style={{ transitionDelay: '0s', paddingTop: '3.5rem' }}>
            <p className="italic mb-4 text-2xl lg:text-4xl leading-tight" style={{ color: 'var(--color-muted)' }}>"Jan trefil přesně to, co mělo být v UI jednodušší. Výsledek je rychlejší, přístupný a přitom vizuálně zůstáváme „my“. "</p>
            <p className="font-semibold" style={{ color: 'var(--color-text)' }}>Marek Svoboda</p>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Product Owner, SaaS tým</p>
          </div>
          <div className="jean-glass-card jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.08s', paddingTop: '1.5rem' }}>
            <p className="italic mb-4 " style={{ color: 'var(--color-muted)' }}>"Nejvíc jsem ocenil jeho schopnost převést požadavky do konkrétních rozhodnutí — komponenty, stav, edge-casy. Víc než kód, je to systém."</p>
            <p className="font-semibold" style={{ color: 'var(--color-text)' }}>Eliška Nováková</p>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Design Lead, e-commerce</p>
          </div>
          <div className="jean-glass-card jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.16s', paddingTop: '1.5rem' }}>
            <p className="italic mb-4 " style={{ color: 'var(--color-muted)' }}>"Komunikace i tempo: krátké iterace, jasný plán a kvalitní předání. Zůstali jsme udržitelní i po změnách scope."</p>
            <p className="font-semibold" style={{ color: 'var(--color-text)' }}>Tomáš Dvořák</p>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Engineering Manager</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
