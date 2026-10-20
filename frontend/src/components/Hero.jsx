export default function Hero({ profile }) {
  if (!profile) return null;
  const { name, tagline, subtitle, intro, photoUrl, resumeUrl, stats } = profile;

  return (
    <header id="top">
      <div className="hero">
        <div>
          <div className="kicker">Hello, I'm</div>
          <h1>{name}</h1>
          <p className="hero-role">{tagline}</p>
          <p className="subtitle">{subtitle}</p>
          <p className="subtitle">{intro}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#contact">
              Contact me
            </a>
            {resumeUrl && (
              <a className="btn btn-secondary" href={resumeUrl} download>
                Download CV
              </a>
            )}
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="frame">
            <img src={photoUrl} alt={`Portrait of ${name}`} />
          </div>
          <figcaption>
            {name} · {tagline}
          </figcaption>
        </figure>
      </div>

      {Array.isArray(stats) && stats.length > 0 && (
        <div className="stats-row">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="value">{s.value}+</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
