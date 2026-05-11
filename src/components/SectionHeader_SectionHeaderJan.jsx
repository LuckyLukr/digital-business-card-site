import React from 'react';

export function SectionHeader_SectionHeaderJan() {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
        <span className="text-xl font-bold tracking-tight flex-shrink-0" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Jan Křížek</span>
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'var(--color-nav)', border: '1px solid var(--color-nav-border)' }}>
          <a href="#kontakt" className="text-sm font-medium px-3 py-1.5 rounded-full hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>Kontakt</a>
          <a href="#social" className="text-sm font-medium px-3 py-1.5 rounded-full hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>Sociální sítě</a>
          <a href="#vcard" className="text-sm font-medium px-3 py-1.5 rounded-full hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>QR &amp; vCard</a>
          <a href="#o-mne" className="text-sm font-medium px-3 py-1.5 rounded-full hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>O mně</a>
        </nav>
        
      </div>
    </header>
  );
}
