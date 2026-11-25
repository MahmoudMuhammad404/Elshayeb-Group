import { COMPANIES } from '../i18n.js';
import { isRealLink } from '../config.js';
import { UI } from '../content.js';

/** Stacked hero for phones and tablets: sphere on top-left, one line down the side, a card on each branch. */
export default function HeroMobile({ copy, lang }) {
  return (
    <div className="hm">
      <div className="hm-head">
        <div className="kick">{copy.kicker}</div>
        <h1>
          <span>{copy.title[0]}</span> <em>{copy.title[1]}</em>
        </h1>
        <div className="ar" lang="ar" dir="rtl">{copy.tagline}</div>
        <a className="cta" href="#companies">{copy.cta}</a>
      </div>
      <div className="hm-tree">
        <div className="hm-src" aria-hidden="true">
          <img src="assets/el_mark.png" alt="" />
          <img src="assets/el_word.png" alt="" />
        </div>
        <span className="hm-line" aria-hidden="true" />
        <div className="hm-cards">
          {COMPANIES.map((c) => {
            const real = isRealLink(c.url);
            return (
              <a
                key={c.id}
                className="hm-card"
                href={c.url || '#'}
                {...(real ? { target: '_blank', rel: 'noopener noreferrer' } : { onClick: (e) => e.preventDefault(), title: UI[lang].comingSoon })}
                aria-label={`${c.name}, ${c.desc[lang]}`}
              >
                <span className="hm-node" aria-hidden="true" />
                <span className="hm-lg">
                  <img src={c.logo} alt="" />
                </span>
                <span className="hm-tx">
                  <b>{c.name}</b>
                  <small>{c.desc[lang]}</small>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
