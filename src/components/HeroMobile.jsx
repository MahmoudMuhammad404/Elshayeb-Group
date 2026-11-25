import { COMPANIES } from '../i18n.js';
import { linkProps } from './linkProps.js';

/** Stacked hero for phones and tablets: sphere on top-left, one line down the side, a card on each branch. */
export default function HeroMobile({ copy, lang }) {
  return (
    <div className="hm">
      <div className="hm-head">
        <div className="kick">{copy.kicker}</div>
        <h1>
          <span>{copy.title[0]}</span> <em>{copy.title[1]}</em>
        </h1>
        <div className="hero-tagline" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>{copy.tagline}</div>
        <a className="cta" href="#companies">{copy.cta}</a>
      </div>
      <div className="hm-tree">
        <div className="hm-src" aria-hidden="true">
          <img src="assets/el_mark.png" alt="" width="36" height="36" />
          <img src="assets/el_word.png" alt="" width="50" height="16" />
        </div>
        <div className="hm-cards">
          {COMPANIES.map((c) => (
            <a
              key={c.id}
              className="hm-card"
              {...linkProps(c.url, lang)}
              aria-label={`${c.name}, ${c.desc[lang]}`}
            >
              <span className="hm-node" aria-hidden="true" />
              <span className="hm-lg">
                <img src={c.logo} alt="" decoding="async" />
              </span>
              <span className="hm-tx">
                <b>{c.name}</b>
                <small>{c.desc[lang]}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
