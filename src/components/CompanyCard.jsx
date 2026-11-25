import { forwardRef } from 'react';
import { isRealLink } from '../config.js';
import { UI } from '../content.js';

const CompanyCard = forwardRef(function CompanyCard({ company, y, lang, layout }, ref) {
  const { cardX, CARD_W, CARD_H } = layout;
  const real = isRealLink(company.url);
  return (
    <a
      ref={ref}
      className="card"
      href={company.url || '#'}
      {...(real ? { target: '_blank', rel: 'noopener noreferrer' } : { onClick: (e) => e.preventDefault(), title: UI[lang].comingSoon })}
      aria-label={`${company.name}, ${company.desc[lang]}`}
      style={{ top: y, left: cardX, width: CARD_W, height: CARD_H, marginTop: -CARD_H / 2 }}
    >
      <div className="lg">
        <img src={company.logo} style={company.logoStyle} alt="" />
      </div>
      <div>
        <h3>{company.name}</h3>
        <p>{company.desc[lang]}</p>
      </div>
    </a>
  );
});

export default CompanyCard;
