import { useEffect, useRef, useState } from 'react';
import { SECTIONS, UI } from '../content.js';
import { useScrollSpy } from '../hooks/useScrollSpy.js';

export default function Header({ lang, onToggleLang }) {
  const t = UI[lang];
  const { active, scrolled } = useScrollSpy();
  const [open, setOpen] = useState(false);
  const hdrRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    const onDown = (e) => {
      if (open && hdrRef.current && !hdrRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const goTop = (e) => {
    e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header ref={hdrRef} className={`hdr${scrolled || open ? ' solid' : ''}`}>
      <div className="hdr-in">
        <a className="brand" href="#top" onClick={goTop} aria-label={t.homeLabel}>
          ELSHAYEB GROUP
        </a>
        <nav id="main-nav" className={`menu${open ? ' open' : ''}`} aria-label="Main">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="hdr-end">
          <button className="lang" type="button" onClick={onToggleLang} aria-label={t.langLabel}>
            {t.langButton}
          </button>
          <button
            className={`burger${open ? ' open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}
