export default function Skills({ skills }) {
  if (!Array.isArray(skills) || skills.length === 0) return null;
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
