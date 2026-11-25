import { useState, useEffect } from 'react';
import { COPY } from './i18n.js';
import { STAGE } from './geometry.js';
import { useStageScale } from './hooks/useStageScale.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';

export default function App() {
  const [lang, setLang] = useState(() => (new URLSearchParams(window.location.search).get('lang') === 'ar' ? 'ar' : 'en'));
  const k = useStageScale();
  const copy = COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.classList.toggle('is-ar', lang === 'ar');
  }, [lang]);

  return (
    <div
      id="stage"
      style={{
        transform: `translate(${(-STAGE.w * k) / 2}px, ${(-STAGE.h * k) / 2}px) scale(${k})`,
      }}
    >
      <Nav copy={copy} onToggleLang={() => setLang(lang === 'en' ? 'ar' : 'en')} />
      <Hero copy={copy} lang={lang} />
    </div>
  );
}
