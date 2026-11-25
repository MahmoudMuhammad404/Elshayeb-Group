import { ABOUT, COMPANY_DETAILS } from '../content.js';
import { Reveal } from '../hooks/useReveal.jsx';

export default function About({ lang }) {
  const s = ABOUT[lang];
  return (
    <section id="about" className="sec sec-alt">
      <div className="wrap">
        <div className="about-top">
          <Reveal className="about-copy">
            <div className="eyebrow">{s.eyebrow}</div>
            <h2>{s.title}</h2>
            <p className="lead">{s.intro}</p>
            <p className="ar-tag" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>{s.tagline}</p>
          </Reveal>
          <Reveal className="org" delay={120} aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 50 C 30 50, 30 12, 62 12" vectorEffect="non-scaling-stroke" />
              <path d="M0 50 L 62 50" vectorEffect="non-scaling-stroke" />
              <path d="M0 50 C 30 50, 30 88, 62 88" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="org-src">
              <img src="assets/el_mark.png" alt="" loading="lazy" decoding="async" />
              <img src="assets/el_word.png" alt="" loading="lazy" decoding="async" />
            </div>
            <span className="org-cap">{s.parent}</span>
            {COMPANY_DETAILS.map((d, i) => (
              <div key={d.id} className="org-pill" style={{ top: `${[12, 50, 88][i]}%` }}>
                <span className="org-node" />
                <span className="org-t">{d.name[lang]}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="vm">
          <Reveal className="vm-card">
            <h3>{s.visionTitle}</h3>
            <p>{s.vision}</p>
          </Reveal>
          <Reveal className="vm-card" delay={120}>
            <h3>{s.missionTitle}</h3>
            <p>{s.mission}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
