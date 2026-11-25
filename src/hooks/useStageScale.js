import { useEffect, useState } from 'react';
import { STAGE } from '../geometry.js';

/** Scale factor that fits the fixed design stage inside the window. */
export function useStageScale() {
  const calc = () => Math.min(window.innerWidth / STAGE.w, window.innerHeight / STAGE.h);
  const [k, setK] = useState(calc);
  useEffect(() => {
    const on = () => setK(calc());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return k;
}
