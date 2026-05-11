import React from 'react';
import { Users } from 'lucide-react';

export function SectionFeatures_SectionSocialJan() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true">
    <section className="py-20 lg:py-28 jean-scroll-stage jean-section-shell" data-jean-parallax-root="features" style={{ backgroundColor: 'var(--color-surface-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 jean-motion-layer" data-jean-reveal="true" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Sociální sítě</h2>
        <div className="jean-stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="jean-glass-card jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0s' }}>
            
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Users size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Rád sdílím know-how</h3>
            <p style={{ color: 'var(--color-muted)' }}>Od frontend architektury po produktové detaily — stručně a prakticky.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
