import { useEffect, useState } from 'react';
import { SECTIONS } from '../content.js';

/** Which section is under the header, plus whether the page has scrolled at all. */
export function useScrollSpy() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      setScrolled(window.scrollY > 40);
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(SECTIONS[SECTIONS.length - 1]);
        return;
      }
      const line = window.innerHeight * 0.35;
      let cur = '';
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) cur = id;
      });
      setActive(cur);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return { active, scrolled };
}
