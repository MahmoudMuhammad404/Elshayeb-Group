// Design height is fixed (DESIGN_H). Design width follows the window, so the hero
// always fills the viewport: headline centered, sphere on the left, cards on the right.
export const DESIGN_H = 840;
export const MIN_W = 1280;

export function computeViewport(innerWidth, innerHeight) {
  const k = Math.min(innerWidth / MIN_W, innerHeight / DESIGN_H);
  const W = innerWidth / k;
  const H = innerHeight / k;
  return { k, W, H, offsetY: Math.max(0, (H - DESIGN_H) / 2) };
}

const rad = (d) => (d * Math.PI) / 180;

export function computeLayout(W) {
  const pad = 72;
  const CARD_W = 500;
  const CARD_H = 108;
  const cardX = W - pad - CARD_W; // x of the orange nodes (left edge of the cards)
  const ys = [425, 565, 705];
  const R = 104; // sphere radius
  const sx = Math.max(pad + 220, Math.round(cardX * 0.36));
  const sy = ys[1];
  const branches = ys.map((y, i) => {
    const a = rad([-24, 0, 24][i]);
    const x0 = sx + R * Math.cos(a);
    const y0 = sy + R * Math.sin(a);
    const x1 = cardX - 20;
    const dx = (x1 - x0) * 0.45;
    return { y, d: `M${x0.toFixed(0)} ${y0.toFixed(0)} C ${(x0 + dx).toFixed(0)} ${y0.toFixed(0)}, ${(x1 - dx).toFixed(0)} ${y}, ${x1} ${y}` };
  });
  return { W, pad, CARD_W, CARD_H, cardX, ys, R, sx, sy, branches };
}
