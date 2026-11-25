import { CAREERS, COMPANY_DETAILS } from '../content.js';
import { Reveal } from '../hooks/useReveal.jsx';

export default function Careers({ lang, onPickTopic }) {
  const s = CAREERS[lang];
  return (
    <section id="careers" className="sec">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">{s.eyebrow}</div>
          <h2>{s.title}</h2>
          <p className="lead">{s.sub}</p>
        </Reveal>
        <ul className="job-list">
          {COMPANY_DETAILS.map((d, i) => (
            <Reveal as="li" key={d.id} className="job" delay={i * 90}>
              <span className="job-no">0{i + 1}</span>
              <span className="job-area">{s.areas[i]}</span>
              <span className="job-co">{d.name[lang]}</span>
              <a className="job-cta" href="#contact" onClick={() => onPickTopic('careers')}>
                {s.cta} <span aria-hidden="true" className="arr">→</span>
              </a>
            </Reveal>
          ))}
        </ul>
        <Reveal className="job-hint">{s.hint}</Reveal>
      </div>
    </section>
  );
}
