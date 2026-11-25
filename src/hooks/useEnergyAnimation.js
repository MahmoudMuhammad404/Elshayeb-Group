import { useEffect } from 'react';

const LOOP_MS = 3000;

/**
 * Drives the hero motion with requestAnimationFrame. It writes straight to the DOM
 * (SVG attributes and GPU-composited transforms) instead of React state, and pauses
 * when the hero is off-screen or the tab is hidden.
 */
export function useEnergyAnimation({ comets, ripples, nodeRings, source, cards }, layout) {
  const { W, R } = layout;
  useEffect(() => {
    const cm = comets.current.filter(Boolean);
    const rp = ripples.current.filter(Boolean);
    const nr = nodeRings.current.filter(Boolean);
    const src = source.current;
    const cds = cards.current.filter(Boolean);
    const lens = cm.map((el) => el.getTotalLength());
    cm.forEach((el, k) => el.setAttribute('stroke-dasharray', `70 ${lens[k] + 400}`));
    const baseR = nr.map((c) => Number(c.dataset.r));
    const TAU = Math.PI * 2;

    function frame(now) {
      const ph = (now % LOOP_MS) / LOOP_MS;

      cm.forEach((el, k) => {
        const i = Math.floor(k / 2);
        const head = ((ph + i * 0.17) % 1) * (lens[k] + 120) - 20;
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
        src.style.transform = `scale(${(1 + 0.02 * b).toFixed(4)})`;
        src.style.setProperty('--pulse', (0.55 + 0.45 * b).toFixed(3));
      }

      cds.forEach((c, i) => {
        const dy = (Math.sin(ph * TAU + i * 1.1) * 5).toFixed(2);
        c.style.transform = `perspective(1500px) rotateY(-11deg) translateY(${dy}px)`;
      });
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      frame(900); // still frame
      return undefined;
    }

    let id = 0;
    let inView = true;

    const start = () => {
      if (id || document.hidden || !inView) return;
      id = requestAnimationFrame(function loop(now) {
        frame(now);
        id = requestAnimationFrame(loop);
      });
    };

    const stop = () => {
      if (id) {
        cancelAnimationFrame(id);
        id = 0;
      }
    };

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);

    const heroEl = src?.closest('.hero');
    let io;
    if (heroEl && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          if (inView) start();
          else stop();
        },
        { threshold: 0.01 },
      );
      io.observe(heroEl);
    }

    start();
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
      if (io) io.disconnect();
    };
  }, [comets, ripples, nodeRings, source, cards, W, R]);
}
