import React from 'react';

export function SectionAbout_SectionContactJan() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true">
    <section className="py-20 lg:py-28 jean-section-shell" style={{ backgroundColor: 'var(--color-surface-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Kontakt, který je po ruce</h2>
          <div dangerouslySetInnerHTML={{ __html: "<p style=\"color:var(--color-text);line-height:1.6\">Chcete se domluvit na spolupráci, konzultaci nebo review? Stačí zavolat, napsat nebo naskenovat QR — vCard vám ulehčí uložení kontaktu do telefonu.</p>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div style=\"padding:1rem 1.25rem;border-radius:1rem;background:var(--color-surface);border:1px solid rgba(0,0,0,.08)\"><strong style=\"display:block;color:var(--color-text);margin-bottom:.25rem\">E-mail</strong><span style=\"color:var(--color-muted)\">jan.krizek@example.com</span></div>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div style=\"padding:1rem 1.25rem;border-radius:1rem;background:var(--color-surface);border:1px solid rgba(0,0,0,.08)\"><strong style=\"display:block;color:var(--color-text);margin-bottom:.25rem\">Telefon</strong><span style=\"color:var(--color-muted)\">+420 777 123 456</span></div>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div style=\"padding:1rem 1.25rem;border-radius:1rem;background:var(--color-surface);border:1px solid rgba(0,0,0,.08)\"><strong style=\"display:block;color:var(--color-text);margin-bottom:.25rem\">Lokalita</strong><span style=\"color:var(--color-muted)\">Praha, CZ • vzdáleně po celé EU</span></div>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<p style=\"color:var(--color-text);line-height:1.6\">Preferuji stručný kontext v první zprávě (co řešíte, deadline a očekávání).</p>" }} />
        </div>
      </div>
    </section>
    </div>
  );
}
