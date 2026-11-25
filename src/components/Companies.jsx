import { COMPANIES_SECTION, COMPANY_DETAILS, UI } from '../content.js';
import { COMPANY_LINKS } from '../config.js';
import { Reveal } from '../hooks/useReveal.jsx';
import { linkProps } from './linkProps.js';

export default function Companies({ lang }) {
  const s = COMPANIES_SECTION[lang];
  return (
    <section id="companies" className="sec">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">{s.eyebrow}</div>
          <h2>
            {s.title} <em>{s.title2}</em>
          </h2>
          <p className="lead">{s.sub}</p>
        </Reveal>
        <div className="co-list">
          {COMPANY_DETAILS.map((d, i) => {
            const lp = linkProps(COMPANY_LINKS[d.id], lang);
            return (
              <Reveal key={d.id} className="co">
                <div className="co-txt">
                  <div className="co-no">0{i + 1}</div>
                  <div className="co-tag">{d.tag[lang]}</div>
                  <h3>{d.name[lang]}</h3>
                  <p className="co-slogan">{d.slogan[lang]}</p>
                  <p className="co-desc">{d.desc[lang]}</p>
                  <ul className="chips">
                    {d.services[lang].map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <a className="co-link" {...lp}>
                    {UI[lang].visit} <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <a className={`co-vis co-vis-${d.id}`} {...lp} aria-label={`${d.name[lang]}, ${UI[lang].visit}`}>
                  <span className="co-glow" aria-hidden="true" />
                  <img src={d.logo} alt="" loading="lazy" decoding="async" />
                  <span className="co-corner" aria-hidden="true" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
