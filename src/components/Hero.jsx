import { DESIGN_H, computeLayout } from '../geometry.js';
import { useViewport } from '../hooks/useStageScale.js';
import { HERO } from '../content.js';
import HeroStage from './HeroStage.jsx';
import HeroMobile from './HeroMobile.jsx';

export const MOBILE_BREAKPOINT = 1000;

/** Desktop: the approved fixed-design hero scaled to fill the window. Narrow screens: a stacked version of the same idea. */
export default function Hero({ lang }) {
  const { k, W, H, vw, offsetY } = useViewport();
  const copy = HERO[lang];
  if (vw < MOBILE_BREAKPOINT) {
    return (
      <section id="top" className="hero hero-m">
        <HeroMobile copy={copy} lang={lang} />
      </section>
    );
  }
  const layout = computeLayout(W);
  return (
    <section id="top" className="hero" style={{ height: Math.round(H * k) }}>
      <div id="stage" style={{ width: W, transform: `scale(${k})` }}>
        <div id="scene" style={{ width: W, height: DESIGN_H, top: offsetY }}>
          <HeroStage copy={copy} lang={lang} layout={layout} />
        </div>
      </div>
    </section>
  );
}
