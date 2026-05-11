import React from 'react';

export function SectionFooter_SectionFooterJan() {
  return (
    <footer className="py-10 mt-auto" style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-surface)', '--color-text': 'var(--color-surface)', '--color-muted': 'rgba(255,255,255,0.72)', '--color-surface': 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3"><div dangerouslySetInnerHTML={{ __html: "<p style=\"color:var(--color-text);line-height:1.6\">© 2026 Jan Křížek. Všechna práva vyhrazena.</p>" }} /></div>
        <div className="flex flex-col items-center gap-3"><div dangerouslySetInnerHTML={{ __html: "<nav style=\"display:flex;flex-wrap:wrap;justify-content:center;gap:1rem\"><a href=\"#kontakt\" style=\"color:var(--color-text);font-weight:500\">Kontakt</a><a href=\"#vcard\" style=\"color:var(--color-text);font-weight:500\">QR &amp; vCard</a><a href=\"#social\" style=\"color:var(--color-text);font-weight:500\">Sociální sítě</a><a href=\"#jak-to-funguje\" style=\"color:var(--color-text);font-weight:500\">Jak to funguje</a></nav>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div style=\"display:flex;flex-wrap:wrap;gap:.75rem\"><a href=\"https://www.linkedin.com/in/jankrizek\" style=\"display:inline-flex;align-items:center;padding:.55rem .95rem;border-radius:9999px;background:var(--color-surface);border:1px solid rgba(0,0,0,.08);color:var(--color-text);font-weight:500\">LinkedIn</a><a href=\"https://github.com/jankrizek\" style=\"display:inline-flex;align-items:center;padding:.55rem .95rem;border-radius:9999px;background:var(--color-surface);border:1px solid rgba(0,0,0,.08);color:var(--color-text);font-weight:500\">GitHub</a><a href=\"https://twitter.com/jankrizek\" style=\"display:inline-flex;align-items:center;padding:.55rem .95rem;border-radius:9999px;background:var(--color-surface);border:1px solid rgba(0,0,0,.08);color:var(--color-text);font-weight:500\">Twitter</a></div>" }} /></div>
        
        <div className="flex flex-col gap-4"><div dangerouslySetInnerHTML={{ __html: "<img src=\"/images/footer-1.jpg\" alt=\"Digitální vizitka — Jan Křížek\" style=\"border-radius:.875rem;width:100%;max-height:360px;object-fit:cover;display:block;box-shadow:0 12px 34px rgba(0,0,0,.12)\" />" }} /></div>
      </div>
    </footer>
  );
}
