import { useRef } from 'react';
import { COMPANIES } from '../i18n.js';
import { useEnergyAnimation } from '../hooks/useEnergyAnimation.js';
import { EnergyLines, RingFront } from './EnergyLines.jsx';
import SourceSphere from './SourceSphere.jsx';
import CompanyCard from './CompanyCard.jsx';
import Headline from './Headline.jsx';

export default function HeroStage({ copy, lang, layout }) {
  const comets = useRef([]);
  const ripples = useRef([]);
  const nodeRings = useRef([]);
  const source = useRef(null);
  const cards = useRef([]);
  useEnergyAnimation({ comets, ripples, nodeRings, source, cards }, layout);

  return (
    <>
      <EnergyLines layout={layout} comets={comets} ripples={ripples} nodeRings={nodeRings} />
      <Headline copy={copy} />
      <SourceSphere ref={source} layout={layout} />
      {COMPANIES.map((c, i) => (
        <CompanyCard key={c.id} company={c} y={layout.ys[i]} lang={lang} layout={layout} ref={(el) => (cards.current[i] = el)} />
      ))}
      <RingFront layout={layout} />
    </>
  );
}
