export default function Research({ research }) {
  if (!Array.isArray(research) || research.length === 0) return null;
  return (
    <section id="research" className="section">
      <h2>Research interests</h2>
      <div className="research-grid">
        {research.map((r) => (
          <div className="research-card" key={r.title}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
