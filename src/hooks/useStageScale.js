import { useEffect, useState } from 'react';
import { computeViewport } from '../geometry.js';

/** Scale, design width and vertical offset that make the hero fill the window. */
export function useViewport() {
  const [vp, setVp] = useState(() => computeViewport(window.innerWidth, window.innerHeight));
  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const next = computeViewport(window.innerWidth, window.innerHeight);
        setVp((prev) =>
          prev.k === next.k && prev.W === next.W && prev.H === next.H && prev.offsetY === next.offsetY ? prev : next,
        );
      });
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return vp;
}
