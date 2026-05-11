import React, { useEffect } from 'react';
import { SectionHeader_SectionHeaderJan } from './components/SectionHeader_SectionHeaderJan';
import { SectionHero_SectionHeroJan } from './components/SectionHero_SectionHeroJan';
import { SectionAbout_SectionContactJan } from './components/SectionAbout_SectionContactJan';
import { SectionFeatures_SectionSocialJan } from './components/SectionFeatures_SectionSocialJan';
import { SectionCtaBanner_SectionVcardQr } from './components/SectionCtaBanner_SectionVcardQr';
import { SectionHowItWorks_SectionHowIWork } from './components/SectionHowItWorks_SectionHowIWork';
import { SectionTestimonials_SectionTestimonials } from './components/SectionTestimonials_SectionTestimonials';
import { SectionFooter_SectionFooterJan } from './components/SectionFooter_SectionFooterJan';

function useJeanScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealNodes = Array.from(document.querySelectorAll('[data-jean-reveal]'));
    const parallaxRoots = Array.from(document.querySelectorAll('[data-jean-parallax-root]'));
    const showAll = () => revealNodes.forEach((node) => node.classList.add('is-visible'));

    if (reducedMotion) {
      showAll();
      return undefined;
    }

    let observer = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
      revealNodes.forEach((node) => observer.observe(node));
    } else {
      showAll();
    }

    let frameId = 0;
    const updateParallax = () => {
      frameId = 0;
      const viewportHeight = window.innerHeight || 1;
      parallaxRoots.forEach((root) => {
        const rect = root.getBoundingClientRect();
        const progress = ((viewportHeight * 0.5) - rect.top) / (viewportHeight + rect.height);
        const clamped = Math.max(-1.2, Math.min(1.2, progress));
        root.style.setProperty('--jean-scroll-progress', clamped.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateParallax);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      observer?.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);
}

export default function App() {
  useJeanScrollEffects();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div className="jean-site-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SectionHeader_SectionHeaderJan />
      <SectionHero_SectionHeroJan />
      <SectionAbout_SectionContactJan />
      <SectionFeatures_SectionSocialJan />
      <SectionCtaBanner_SectionVcardQr />
      <SectionHowItWorks_SectionHowIWork />
      <SectionTestimonials_SectionTestimonials />
      <SectionFooter_SectionFooterJan />
      </div>
    </>
  );
}
