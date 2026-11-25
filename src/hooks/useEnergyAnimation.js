import { useEffect } from 'react';

const LOOP_MS = 3000;

/**
 * Drives the hero motion with requestAnimationFrame. It writes straight to the DOM
 * (SVG attributes and a few styles) instead of React state, so React does not
 * re-render 60 times a second.
 */
export function useEnergyAnimation({ comets, ripples, nodeRings, source, cards }, layout) {
  const { W, R, CARD_H } = layout;
  useEffect(() => {
    const cm = comets.current.filter(Boolean);
    const rp = ripples.current.filter(Boolean);
    const nr = nodeRings.current.filter(Boolean);
    const src = source.current;
    const cds = cards.current.filter(Boolean);
    const lens = cm.map((el) => el.getTotalLength());
    const baseR = nr.map((c) => Number(c.dataset.r));
    const TAU = Math.PI * 2;
    const s = R / 84;

    function frame(now) {
      const ph = (now % LOOP_MS) / LOOP_MS;

      cm.forEach((el, k) => {
        const i = Math.floor(k / 2);
        const head = ((ph + i * 0.17) % 1) * (lens[k] + 120) - 20;
        el.setAttribute('stroke-dasharray', `70 ${lens[k] + 400}`);
        el.setAttribute('stroke-dashoffset', String(-(head - 70)));
      });

      rp.forEach((c, n) => {
        const u = (ph + n / 4) % 1;
        c.setAttribute('r', R * 1.1 + u * R * 2.9);
        c.setAttribute('stroke', `rgba(244,74,34,${(0.55 * (1 - u) * (1 - u)).toFixed(3)})`);
        c.setAttribute('stroke-width', 3 - u * 2);
      });

      nr.forEach((c, k) => {
        const i = Math.floor(k / 2);
        const inner = k % 2;
        const u = (((ph - ((0.62 + i * 0.17) % 1)) % 1) + 1) % 1;
        if (u > 0.45) {
          c.setAttribute('opacity', 0);
          return;
        }
        const w = u / 0.45;
        c.setAttribute('r', baseR[k] + w * (inner ? 44 : 32));
        c.setAttribute('opacity', (1 - w).toFixed(3));
        c.setAttribute('stroke', 'rgba(255,150,100,.9)');
      });

      const b = 0.5 + 0.5 * Math.sin(ph * TAU);
      if (src) {
        src.style.boxShadow =
          `inset -${16 * s}px -${21 * s}px ${42 * s}px rgba(244,74,34,${(0.6 + 0.3 * b).toFixed(2)}),` +
          `inset ${12 * s}px ${14 * s}px ${30 * s}px rgba(255,255,255,.14),` +
          `0 0 ${(70 + 50 * b) * s}px rgba(244,74,34,${(0.4 + 0.3 * b).toFixed(2)}),` +
          `0 0 ${(180 + 60 * b) * s}px rgba(244,74,34,.22)`;
        src.style.transform = `scale(${(1 + 0.02 * b).toFixed(4)})`;
      }

      cds.forEach((c, i) => {
        c.style.marginTop = `${-CARD_H / 2 + Math.sin(ph * TAU + i * 1.1) * 5}px`;
      });
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      frame(900); // still frame
      return undefined;
    }
    let id = requestAnimationFrame(function loop(now) {
      frame(now);
      id = requestAnimationFrame(loop);
    });
    return () => cancelAnimationFrame(id);
  }, [comets, ripples, nodeRings, source, cards, W, R, CARD_H]);
}
