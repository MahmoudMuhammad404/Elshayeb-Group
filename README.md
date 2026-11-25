# Elshayeb Group website

React + Vite. English and Arabic (EN / ع button), responsive from phone to desktop.

```
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

## What to edit

- `src/config.js`: the three company website links (`COMPANY_LINKS`, currently the placeholder `#`) and the contact details (`CONTACT`). Empty contact fields are hidden. When `CONTACT.email` is set, the contact form opens the visitor's mail app addressed to it.
- `src/content.js`: all section text, English and Arabic. Arabic wording is a draft for review.
- `src/chatbot/knowledge.js`: the chatbot questions and answers (English and Arabic), built only from the site content.
- `src/i18n.js`: the short text and logos inside the hero cards.

## Structure

- `src/components/Hero.jsx`: the hero. Wide screens use the animated 3D energy-flow design (`HeroStage.jsx`). Narrow screens (under 1000px) use `HeroMobile.jsx`.
- `Header`, `Companies`, `About`, `Careers`, `Contact`, `Footer`, `Chatbot`: the rest of the page.
- `src/styles.css`: hero styles. `src/site.css`: everything else.
- Fonts are bundled (Inter and Cairo), so the site makes no external font requests.
