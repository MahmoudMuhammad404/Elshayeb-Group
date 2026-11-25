# Elshayeb Group

Hero page (3D Energy Flow). React 18 + Vite.

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serve the build
```
Add `?lang=ar` to the URL to open in Arabic.

## Structure
- `src/App.jsx`: language state, fits the 1440x900 design stage to the window.
- `src/i18n.js`: all text (EN / AR) and the company list.
- `src/geometry.js`: stage coordinates for the sphere, branches and cards.
- `src/components/`: Nav, Headline, SourceSphere, CompanyCard, EnergyLines, Hero.
- `src/hooks/useEnergyAnimation.js`: requestAnimationFrame loop (comets, ripples, node pulses, glow, floating cards).
- `public/assets/`: logos (Zeroo1 SVG, Elshayeb mark and wordmark, Go Ads transparent PNG).
