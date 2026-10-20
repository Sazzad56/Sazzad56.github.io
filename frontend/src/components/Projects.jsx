export default function Projects({ projects }) {
  if (!Array.isArray(projects) || projects.length === 0) return null;

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      {projects.map((p) => (
        <article
          className={`project-card${p.featured ? " featured" : ""}`}
          key={p.id}
        >
          {p.image && (
            <img
              className="project-image"
              src={p.image}
              alt={`${p.title} project`}
            />
          )}

          <div className="project-body">

            <div className="project-meta">
              {p.period && <span>{p.period}</span>}
              {p.role && <span>{p.role}</span>}
            </div>

            <h3>{p.title}</h3>

            {p.organization && (
              <p className="project-organization">
                {p.organization}
              </p>
            )}

            <p>{p.description}</p>

            {(p.mentor || p.mentorRole) && (
              <div className="project-mentor">
                <span className="project-label">Mentor</span>

                {p.mentor && (
                  <strong>{p.mentor}</strong>
                )}

                {p.mentorRole && (
                  <span>{p.mentorRole}</span>
                )}
              </div>
            )}

            {Array.isArray(p.tags) && (
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}

            {Array.isArray(p.details) && p.details.length > 0 && (
              <details className="project-details">
                <summary>
                  Project details
                  <span aria-hidden="true"> →</span>
                </summary>

                <div className="project-details-content">
                  <ul>
                    {p.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </details>
            )}

            {(p.githubUrl || p.liveUrl) && (
              <div className="project-links">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                  </a>
                )}
              </div>
            )}

          </div>
        </article>
      ))}
    </section>
  );
}
