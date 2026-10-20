export default function About({ about }) {
  if (!about) return null;
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <div className="about-grid">
        <div className="about-block">
          <h3>Who I am</h3>
          <p>{about.who}</p>
        </div>
        <div className="about-block">
          <h3>What I do</h3>
          <p>{about.what}</p>
        </div>
        <div className="about-block">
          <h3>Where I'm going</h3>
          <p>{about.going}</p>
        </div>
      </div>
      {Array.isArray(about.tags) && (
        <div className="tag-row">
          {about.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
