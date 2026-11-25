export default function Headline({ copy }) {
  return (
    <div className="hd">
      <div className="kick">{copy.kicker}</div>
      <h1>
        {copy.title[0]} <em>{copy.title[1]}</em>
      </h1>
      <div className="ar" lang="ar" dir="rtl">{copy.tagline}</div>
      <a className="cta" href="#companies">{copy.cta}</a>
    </div>
  );
}
