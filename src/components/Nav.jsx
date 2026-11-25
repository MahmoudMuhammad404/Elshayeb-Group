export default function Nav({ copy, onToggleLang }) {
  return (
    <nav className="nav">
      <b>ELSHAYEB GROUP</b>
      <div>
        {copy.nav.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <button className="btn" type="button" onClick={onToggleLang} aria-label="Switch language">
        {copy.langButton}
      </button>
    </nav>
  );
}
