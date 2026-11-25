import { useEffect, useState } from 'react';
import { computeViewport } from '../geometry.js';

/** Scale, design width and vertical offset that make the hero fill the window. */
export function useViewport() {
  const [vp, setVp] = useState(() => computeViewport(window.innerWidth, window.innerHeight));
  useEffect(() => {
    const on = () => setVp(computeViewport(window.innerWidth, window.innerHeight));
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return vp;
}
