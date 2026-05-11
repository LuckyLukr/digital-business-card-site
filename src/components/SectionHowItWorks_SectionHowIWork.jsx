import React from 'react';
import { Search, Settings, Zap } from 'lucide-react';

export function SectionHowItWorks_SectionHowIWork() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true">
    <section className="py-20 lg:py-28 jean-section-shell" style={{ backgroundColor: 'var(--color-surface-strong)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-5" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Jak spolupráce obvykle probíhá</h2>
        
        <div className="jean-stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><article className="jean-glass-card jean-float p-7 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0s' }}>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 text-sm font-bold" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 16%, white)', color: 'var(--color-primary)' }}>1</div>
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Search size={28} /></div><h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>1) Rychlé zmapování</h3><p style={{ color: 'var(--color-muted)' }}>Co je cílem, jaké jsou limity a co je „hotovo“.</p>
          </article>
          <article className="jean-glass-card jean-float p-7 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.08s' }}>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 text-sm font-bold" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 16%, white)', color: 'var(--color-primary)' }}>2</div>
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Settings size={28} /></div><h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>2) Návrh řešení</h3><p style={{ color: 'var(--color-muted)' }}>Architektura, přístupnost a výkon — s ohledem na produkt.</p>
          </article>
          <article className="jean-glass-card jean-float p-7 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.16s' }}>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 text-sm font-bold" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 16%, white)', color: 'var(--color-primary)' }}>3</div>
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Zap size={28} /></div><h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>3) Iterace a dodání</h3><p style={{ color: 'var(--color-muted)' }}>Krátké cykly, měřitelný pokrok a čisté předání.</p>
          </article>
          <article className="jean-glass-card jean-float p-7 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.24s' }}>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 text-sm font-bold" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 16%, white)', color: 'var(--color-primary)' }}>4</div>
            <div dangerouslySetInnerHTML={{ __html: "<div style=\"padding:1.25rem;border-radius:1rem;background:var(--color-surface);border:1px solid rgba(0,0,0,.08);text-align:center\"><strong style=\"display:block;font-size:2rem;color:var(--color-primary);line-height:1\">2–5 dní</strong><span style=\"display:block;margin-top:.5rem;color:var(--color-muted)\">První užitečný výstup (typicky)</span></div>" }} />
          </article></div>
        
      </div>
    </section>
    </div>
  );
}
