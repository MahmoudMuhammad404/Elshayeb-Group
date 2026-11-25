import { DESIGN_H } from '../geometry.js';

/** Back layer: background, floor, ring (back half), tubes, comets, arrows, nodes. */
export function EnergyLines({ layout, comets, ripples, nodeRings }) {
  const { W, R, sx, sy, cardX, branches } = layout;
  const s = R / 84;
  const arrow = (y) => `${cardX - 12},${y} ${cardX - 38},${y - 11} ${cardX - 30},${y} ${cardX - 38},${y + 11}`;
  const floorY = sy + R * 2.2;
  let cometIdx = 0;
  let ringIdx = 0;
  return (
    <svg width={W} height={DESIGN_H} viewBox={`0 0 ${W} ${DESIGN_H}`} aria-hidden="true">
      <defs>
        <radialGradient id="ambient-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#F44A22" stopOpacity=".11" />
          <stop offset="0.65" stopColor="#F44A22" stopOpacity=".03" />
          <stop offset="1" stopColor="#F44A22" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="floor-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#F44A22" stopOpacity=".55" />
          <stop offset="0.6" stopColor="#F44A22" stopOpacity=".2" />
          <stop offset="1" stopColor="#F44A22" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lg" gradientUnits="userSpaceOnUse" x1={sx + R} x2={cardX}>
          <stop offset="0" stopColor="#F44A22" />
          <stop offset="1" stopColor="#ffc08a" />
        </linearGradient>
        <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,.1)" />
        </pattern>
      </defs>
      <rect width={W} height={DESIGN_H} fill="url(#dots)" opacity=".7" />
      <ellipse cx={(sx + cardX) / 2 + 80} cy={sy + 20} rx={(cardX - sx) * 0.8} ry="380" fill="url(#ambient-glow)" />
      <ellipse cx={sx} cy={floorY} rx={R * 2.5} ry={R * 0.4} fill="url(#floor-glow)" />
      <ellipse cx={sx} cy={floorY} rx={R * 3.8} ry={R * 0.62} fill="none" stroke="rgba(244,74,34,.25)" />
      <ellipse cx={sx} cy={floorY} rx={R * 5.1} ry={R * 0.86} fill="none" stroke="rgba(244,74,34,.12)" />
      <g transform={`rotate(-16 ${sx} ${sy})`}>
        <path d={`M${sx - R * 1.9} ${sy} A${R * 1.9} ${R * 0.48} 0 0 1 ${sx + R * 1.9} ${sy}`} fill="none" stroke="rgba(255,150,100,.5)" strokeWidth="2.5" />
      </g>
      {[0, 1, 2, 3].map((n) => (
        <circle key={n} ref={(el) => (ripples.current[n] = el)} cx={sx} cy={sy} r={R * 1.1} fill="none" />
      ))}
      {branches.map(({ y, d }) => (
        <g key={y}>
          <path d={d} transform={`translate(0,${54 * s})`} fill="none" stroke="#000" strokeWidth={16 * s} opacity=".35" strokeLinecap="round" />
          <path d={d} fill="none" stroke="#F44A22" strokeWidth={28 * s} opacity=".14" strokeLinecap="round" />
          <path d={d} fill="none" stroke="#F44A22" strokeWidth={18 * s} opacity=".22" strokeLinecap="round" />
          <path d={d} fill="none" stroke="#9b2208" strokeWidth={11 * s} strokeLinecap="round" />
          <path d={d} fill="none" stroke="url(#lg)" strokeWidth={7.5 * s} strokeLinecap="round" transform="translate(0,-1)" />
          <path d={d} fill="none" stroke="#fff" strokeWidth={2 * s} opacity=".75" transform="translate(0,-3)" />
          <path ref={(el) => (comets.current[cometIdx++] = el)} d={d} fill="none" stroke="#ffb27a" strokeWidth={12 * s} strokeLinecap="round" opacity=".38" />
          <path ref={(el) => (comets.current[cometIdx++] = el)} d={d} fill="none" stroke="#fff" strokeWidth={5 * s} strokeLinecap="round" />
          <polygon points={arrow(y)} fill="#ffb27a" />
          <circle cx={cardX} cy={y} r="11" fill="#F44A22" stroke="#fff" strokeWidth="2.5" />
          <circle ref={(el) => (nodeRings.current[ringIdx++] = el)} data-r="22" cx={cardX} cy={y} r="22" fill="none" stroke="rgba(244,74,34,.6)" />
          <circle ref={(el) => (nodeRings.current[ringIdx++] = el)} data-r="34" cx={cardX} cy={y} r="34" fill="none" stroke="rgba(244,74,34,.25)" />
        </g>
      ))}
    </svg>
  );
}

/** Front half of the tilted ring (drawn above the sphere). */
export function RingFront({ layout }) {
  const { W, R, sx, sy } = layout;
  return (
    <svg width={W} height={DESIGN_H} viewBox={`0 0 ${W} ${DESIGN_H}`} style={{ zIndex: 6 }} aria-hidden="true">
      <g transform={`rotate(-16 ${sx} ${sy})`}>
        <path d={`M${sx - R * 1.9} ${sy} A${R * 1.9} ${R * 0.48} 0 0 0 ${sx + R * 1.9} ${sy}`} fill="none" stroke="#F44A22" strokeWidth="10" opacity=".24" strokeLinecap="round" />
        <path d={`M${sx - R * 1.9} ${sy} A${R * 1.9} ${R * 0.48} 0 0 0 ${sx + R * 1.9} ${sy}`} fill="none" stroke="rgba(255,190,150,.9)" strokeWidth="3" />
      </g>
    </svg>
  );
}
