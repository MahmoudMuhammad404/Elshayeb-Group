import { useId } from 'react';

/** The Elshayeb assistant mascot: a glossy 3D-look robot in graphite with orange light accents. */
export default function Robot({ head = false, className = '' }) {
  const id = useId().replace(/:/g, '');
  const g = (n) => `${n}-${id}`;
  return (
    <svg
      className={`robot ${className}`}
      viewBox={head ? '16 4 68 62' : '0 0 100 132'}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={g('shell')} cx="35%" cy="24%" r="85%">
          <stop offset="0" stopColor="#7c7c86" />
          <stop offset=".35" stopColor="#35353c" />
          <stop offset="1" stopColor="#0d0d11" />
        </radialGradient>
        <radialGradient id={g('visor')} cx="40%" cy="20%" r="90%">
          <stop offset="0" stopColor="#2a2a31" />
          <stop offset=".4" stopColor="#0a0a0d" />
          <stop offset="1" stopColor="#020203" />
        </radialGradient>
        <radialGradient id={g('glow')}>
          <stop offset="0" stopColor="#ffd9c8" />
          <stop offset=".35" stopColor="#ff7a4d" />
          <stop offset="1" stopColor="#F44A22" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={g('ring')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb08f" />
          <stop offset="1" stopColor="#F44A22" />
        </linearGradient>
        <radialGradient id={g('floor')}>
          <stop offset="0" stopColor="#F44A22" stopOpacity=".65" />
          <stop offset="1" stopColor="#F44A22" stopOpacity="0" />
        </radialGradient>
      </defs>
      {!head && <ellipse className="r-floor" cx="50" cy="125" rx="30" ry="6" fill={`url(#${g('floor')})`} />}
      <g className="r-body">
        {!head && (
          <>
            {/* legs and feet */}
            <rect x="39" y="94" width="9" height="20" rx="4.5" fill={`url(#${g('shell')})`} />
            <rect x="52" y="94" width="9" height="20" rx="4.5" fill={`url(#${g('shell')})`} />
            <ellipse cx="42.5" cy="117" rx="9" ry="5" fill={`url(#${g('shell')})`} />
            <ellipse cx="57.5" cy="117" rx="9" ry="5" fill={`url(#${g('shell')})`} />
            <path d="M34 117 q8.5 4 17 0 M49 117 q8.5 4 17 0" stroke="#F44A22" strokeWidth="1.2" fill="none" opacity=".8" />
            {/* arms */}
            <g className="r-arm-l">
              <ellipse cx="29.5" cy="76" rx="6" ry="13" transform="rotate(14 29.5 76)" fill={`url(#${g('shell')})`} />
              <circle cx="27.5" cy="88" r="4.6" fill="#16161a" stroke="#F44A22" strokeWidth="1" />
            </g>
            <g className="r-arm-r">
              <ellipse cx="70.5" cy="76" rx="6" ry="13" transform="rotate(-14 70.5 76)" fill={`url(#${g('shell')})`} />
              <circle cx="72.5" cy="88" r="4.6" fill="#16161a" stroke="#F44A22" strokeWidth="1" />
            </g>
            {/* torso */}
            <path d="M33 70 q0-12 17-12 t17 12 v10 q0 16-17 16 t-17-16z" fill={`url(#${g('shell')})`} />
            <path d="M36 84 q14 7 28 0" stroke="#F44A22" strokeWidth="1.2" fill="none" opacity=".75" />
            <circle cx="50" cy="72" r="9" fill={`url(#${g('glow')})`} />
            <circle cx="50" cy="72" r="3.2" fill="#fff4ee" />
            <ellipse cx="42" cy="66" rx="5" ry="3" fill="#fff" opacity=".18" />
            <rect x="44" y="55" width="12" height="6" rx="3" fill="#121216" />
          </>
        )}
        {/* ear pieces */}
        <ellipse cx="23.5" cy="35" rx="4.6" ry="9.5" fill={`url(#${g('shell')})`} />
        <ellipse cx="23.5" cy="35" rx="2.6" ry="7" fill="none" stroke={`url(#${g('ring')})`} strokeWidth="1.8" />
        <ellipse cx="76.5" cy="35" rx="4.6" ry="9.5" fill={`url(#${g('shell')})`} />
        <ellipse cx="76.5" cy="35" rx="2.6" ry="7" fill="none" stroke={`url(#${g('ring')})`} strokeWidth="1.8" />
        {/* helmet */}
        <ellipse cx="50" cy="33" rx="28" ry="26" fill={`url(#${g('shell')})`} />
        <ellipse cx="50" cy="33" rx="28" ry="26" fill="none" stroke="#F44A22" strokeWidth=".8" opacity=".45" />
        <ellipse cx="38" cy="15" rx="12" ry="5" transform="rotate(-24 38 15)" fill="#fff" opacity=".3" />
        {/* visor */}
        <ellipse cx="50" cy="36" rx="22" ry="16.5" fill={`url(#${g('visor')})`} stroke="#1c1c22" strokeWidth="1" />
        <ellipse cx="42" cy="28" rx="9" ry="3" transform="rotate(-14 42 28)" fill="#fff" opacity=".12" />
        {/* eyes */}
        <g className="r-eyes">
          <circle cx="41" cy="37" r="7" fill={`url(#${g('glow')})`} opacity=".8" />
          <circle cx="59" cy="37" r="7" fill={`url(#${g('glow')})`} opacity=".8" />
          <circle className="r-eye" cx="41" cy="37" r="3.4" fill="#fff" />
          <circle className="r-eye" cx="59" cy="37" r="3.4" fill="#fff" />
        </g>
      </g>
    </svg>
  );
}
