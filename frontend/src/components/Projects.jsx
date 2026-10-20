export default function Projects({ projects }) {
  if (!Array.isArray(projects) || projects.length === 0) return null;
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      {projects.map((p) => (
        <article className={`project-card${p.featured ? " featured" : ""}`} key={p.id}>
          {p.image && <img src={p.image} alt={`Screenshot of ${p.title}`} />}
          <div className="project-body">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {Array.isArray(p.tags) && (
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            )}
            <div className="project-links">
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
