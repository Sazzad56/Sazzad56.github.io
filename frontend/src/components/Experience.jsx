export default function Experience({ experience }) {
  if (!Array.isArray(experience) || experience.length === 0) return null;
  return (
    <section id="experience" className="section">
      <h2>Experience &amp; education</h2>
      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={`${item.period}-${item.title}`}>
            <div className="period">{item.period}</div>
            <h3>{item.title}</h3>
            <div className="org">{item.org}</div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
