import { forwardRef } from 'react';

const SourceSphere = forwardRef(function SourceSphere({ layout }, ref) {
  const { sx, sy, R } = layout;
  const s = R / 84;
  return (
    <div
      ref={ref}
      className="src"
      style={{ left: sx - R, top: sy - R, width: R * 2, height: R * 2, gap: 8 * s }}
    >
      <img src="assets/el_mark.png" style={{ width: 80 * s }} alt="" />
      <img src="assets/el_word.png" style={{ width: 106 * s }} alt="Elshayeb" />
    </div>
  );
});

export default SourceSphere;
