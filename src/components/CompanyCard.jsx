import { forwardRef } from 'react';
import { CARD_X } from '../geometry.js';

const CompanyCard = forwardRef(function CompanyCard({ company, y, lang }, ref) {
  return (
    <div ref={ref} className="card" style={{ top: y, left: CARD_X }}>
      <div className="lg">
        <img src={company.logo} style={company.logoStyle} alt={company.name} />
      </div>
      <div>
        <h3>{company.name}</h3>
        <p>{company.desc[lang]}</p>
      </div>
    </div>
  );
});

export default CompanyCard;
