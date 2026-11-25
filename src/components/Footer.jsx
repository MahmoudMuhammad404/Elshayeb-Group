import { COMPANY_DETAILS, FOOTER, SECTIONS, UI } from '../content.js';
import { COMPANY_LINKS } from '../config.js';
import { linkProps } from './linkProps.js';

export default function Footer({ lang }) {
  const t = UI[lang];
  const f = FOOTER[lang];
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div className="ftr-brand">
          <b>ELSHAYEB GROUP</b>
          <p lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>{f.tagline}</p>
        </div>
        <nav className="ftr-nav" aria-label="Footer">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`}>{t.nav[id]}</a>
          ))}
        </nav>
        <ul className="ftr-co">
          {COMPANY_DETAILS.map((d) => (
            <li key={d.id}>
              <a {...linkProps(COMPANY_LINKS[d.id], lang)}>{d.name[lang]}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap ftr-base">
        <span>© {new Date().getFullYear()} {lang === 'ar' ? 'مجموعة الشايب' : 'Elshayeb Group'}. {f.rights}</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{f.top} ↑</a>
      </div>
    </footer>
  );
}
