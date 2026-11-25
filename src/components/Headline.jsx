export default function Headline({ copy, lang }) {
  return (
    <div className="hd">
      <div className="kick">{copy.kicker}</div>
      <h1>
        {copy.title[0]} <em>{copy.title[1]}</em>
      </h1>
      <div className="hero-tagline" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>{copy.tagline}</div>
      <a className="cta" href="#companies">{copy.cta}</a>
    </div>
  );
}
