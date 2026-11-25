import { SOURCE, CARD_X, BRANCHES, STAGE } from '../geometry.js';

const arrow = (y) => `${CARD_X - 10},${y} ${CARD_X - 30},${y - 9} ${CARD_X - 24},${y} ${CARD_X - 30},${y + 9}`;

/** Back layer: background, floor, tilted ring (back half), tubes, comets, arrows, nodes. */
export function EnergyLines({ comets, ripples, nodeRings }) {
  let cometIdx = 0;
  let ringIdx = 0;
  return (
    <svg width={STAGE.w} height={STAGE.h} viewBox={`0 0 ${STAGE.w} ${STAGE.h}`}>
      <defs>
        <filter id="g"><feGaussianBlur stdDeviation="5" /></filter>
        <filter id="g2"><feGaussianBlur stdDeviation="14" /></filter>
        <linearGradient id="lg" gradientUnits="userSpaceOnUse" x1="684" x2="950">
          <stop offset="0" stopColor="#F44A22" />
          <stop offset="1" stopColor="#ffc08a" />
        </linearGradient>
        <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="rgba(255,255,255,.1)" />
        </pattern>
      </defs>
      <rect width={STAGE.w} height={STAGE.h} fill="url(#dots)" opacity=".7" />
      <ellipse cx="820" cy="470" rx="540" ry="320" fill="rgba(244,74,34,.07)" filter="url(#g2)" />
      {/* floor */}
      <ellipse cx={SOURCE.x} cy="640" rx="190" ry="30" fill="rgba(244,74,34,.5)" filter="url(#g)" />
      <ellipse cx={SOURCE.x} cy="640" rx="320" ry="52" fill="none" stroke="rgba(244,74,34,.25)" />
      <ellipse cx={SOURCE.x} cy="640" rx="430" ry="72" fill="none" stroke="rgba(244,74,34,.12)" />
      {/* ring, back half */}
      <g transform={`rotate(-16 ${SOURCE.x} ${SOURCE.y})`}>
        <path d="M444 450 A160 40 0 0 1 764 450" fill="none" stroke="rgba(255,150,100,.5)" strokeWidth="2" />
      </g>
      {/* ripples leaving the source */}
      {[0, 1, 2, 3].map((n) => (
        <circle key={n} ref={(el) => (ripples.current[n] = el)} cx={SOURCE.x} cy={SOURCE.y} r="92" fill="none" />
      ))}
      {BRANCHES.map(({ y, d }, i) => (
        <g key={y}>
          <path d={d} transform="translate(0,46)" fill="none" stroke="#000" strokeWidth="10" opacity=".45" filter="url(#g)" />
          <path d={d} fill="none" stroke="#F44A22" strokeWidth="20" opacity=".3" filter="url(#g)" />
          <path d={d} fill="none" stroke="#9b2208" strokeWidth="9" strokeLinecap="round" />
          <path d={d} fill="none" stroke="url(#lg)" strokeWidth="6" strokeLinecap="round" transform="translate(0,-1)" />
          <path d={d} fill="none" stroke="#fff" strokeWidth="1.6" opacity=".75" transform="translate(0,-2.5)" />
          <path ref={(el) => (comets.current[cometIdx++] = el)} d={d} fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" filter="url(#g)" opacity=".9" />
          <path ref={(el) => (comets.current[cometIdx++] = el)} d={d} fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <polygon points={arrow(y)} fill="#ffb27a" />
          <circle cx={CARD_X} cy={y} r="9" fill="#F44A22" stroke="#fff" strokeWidth="2" />
          <circle ref={(el) => (nodeRings.current[ringIdx++] = el)} data-r="18" cx={CARD_X} cy={y} r="18" fill="none" stroke="rgba(244,74,34,.6)" />
          <circle ref={(el) => (nodeRings.current[ringIdx++] = el)} data-r="28" cx={CARD_X} cy={y} r="28" fill="none" stroke="rgba(244,74,34,.25)" />
        </g>
      ))}
    </svg>
  );
}

/** Front half of the tilted ring (drawn above the sphere). */
export function RingFront() {
  return (
    <svg width={STAGE.w} height={STAGE.h} viewBox={`0 0 ${STAGE.w} ${STAGE.h}`} style={{ zIndex: 6 }}>
      <defs><filter id="g3"><feGaussianBlur stdDeviation="5" /></filter></defs>
      <g transform={`rotate(-16 ${SOURCE.x} ${SOURCE.y})`}>
        <path d="M444 450 A160 40 0 0 0 764 450" fill="none" stroke="rgba(255,190,150,.9)" strokeWidth="2.5" />
        <path d="M444 450 A160 40 0 0 0 764 450" fill="none" stroke="#F44A22" strokeWidth="8" opacity=".35" filter="url(#g3)" />
      </g>
    </svg>
  );
}
