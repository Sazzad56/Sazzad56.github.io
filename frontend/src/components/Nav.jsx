const SECTIONS = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["research", "Research"],
  ["experience", "Experience"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];

export default function Nav({ name, email }) {
  return (
    <>
      <nav className="sidenav" aria-label="Section navigation">
        <div>
          <a href="#top" className="brand">
            {name?.toLowerCase().replace(/\s+/g, ".") || "portfolio"}
          </a>
          <ul>
            {SECTIONS.map(([id, label]) => (
              <li key={id}>
                <a className="nav-link" href={`#${id}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {email && (
          <a className="contact-mini" href={`mailto:${email}`}>
            {email}
          </a>
        )}
      </nav>

      <div className="mobile-nav">
        <a href="#top" className="brand">
          {name?.toLowerCase().replace(/\s+/g, ".") || "portfolio"}
        </a>
        <select
          aria-label="Jump to section"
          onChange={(e) => {
            if (e.target.value) window.location.hash = e.target.value;
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Jump to…
          </option>
          {SECTIONS.map(([id, label]) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
