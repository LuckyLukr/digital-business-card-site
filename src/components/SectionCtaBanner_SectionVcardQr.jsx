import React from 'react';

export function SectionCtaBanner_SectionVcardQr() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true">
    <section className="py-16 lg:py-20" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">QR pro rychlé uložení vCard</h2>
        <a href="https://example.com/jan-krizek.vcf" className="inline-block px-8 py-3 rounded-full font-semibold bg-white" style={{ color: 'var(--color-primary)' }}>Stáhnout vCard</a>
      </div>
    </section>
    </div>
  );
}
