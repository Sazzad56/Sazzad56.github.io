export default function Focus({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="focus" className="section">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker">What I'm working on now</div>
          <h2>Current Focus</h2>
        </div>
      </div>

      <div className="focus-grid">
        {items.map((item) => (
          <article className="focus-card" key={item.title}>
            <div className="focus-status">{item.status}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
