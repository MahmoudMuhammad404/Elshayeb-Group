import { useRef } from 'react';
import { COMPANIES } from '../i18n.js';
import { CARD_YS } from '../geometry.js';
import { useEnergyAnimation } from '../hooks/useEnergyAnimation.js';
import { EnergyLines, RingFront } from './EnergyLines.jsx';
import SourceSphere from './SourceSphere.jsx';
import CompanyCard from './CompanyCard.jsx';
import Headline from './Headline.jsx';

export default function Hero({ copy, lang }) {
  const comets = useRef([]);
  const ripples = useRef([]);
  const nodeRings = useRef([]);
  const source = useRef(null);
  const cards = useRef([]);
  useEnergyAnimation({ comets, ripples, nodeRings, source, cards });

  return (
    <>
      <EnergyLines comets={comets} ripples={ripples} nodeRings={nodeRings} />
      <Headline copy={copy} />
      <SourceSphere ref={source} />
      {COMPANIES.map((c, i) => (
        <CompanyCard key={c.id} company={c} y={CARD_YS[i]} lang={lang} ref={(el) => (cards.current[i] = el)} />
      ))}
      <RingFront />
    </>
  );
}
