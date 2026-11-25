// Fixed 1440x900 design stage. All coordinates are in stage units.
export const STAGE = { w: 1440, h: 900 };
export const SOURCE = { x: 604, y: 450, r: 84 };
export const CARD_X = 960; // left edge of every card = x of the orange nodes
export const CARD_YS = [190, 450, 710];

const rad = (d) => (d * Math.PI) / 180;

export const BRANCHES = CARD_YS.map((y, i) => {
  const a = rad([-26, 0, 26][i]);
  const x0 = SOURCE.x + SOURCE.r * Math.cos(a);
  const y0 = SOURCE.y + SOURCE.r * Math.sin(a);
  return { y, d: `M${x0.toFixed(0)} ${y0.toFixed(0)} C 790 ${y0.toFixed(0)}, 800 ${y}, ${CARD_X - 16} ${y}` };
});
