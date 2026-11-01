import { useEffect, useState } from "react";

const SECTIONS = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["research", "Research"],
  ["focus", "Current Focus"],
  ["experience", "Experience"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];

export default function Nav({ name, email }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let initialTheme = "light";

    try {
      const savedTheme = window.localStorage.getItem("theme");

      if (savedTheme === "light" || savedTheme === "dark") {
        initialTheme = savedTheme;
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        initialTheme = "dark";
      }
    } catch {
      initialTheme = "light";
    }

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Theme still works even when browser storage is unavailable.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

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

        <div className="nav-footer">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
          >
            {theme === "light" ? "☾ Dark mode" : "☀ Light mode"}
          </button>

          {email && (
            <a className="contact-mini" href={`mailto:${email}`}>
              {email}
            </a>
          )}
        </div>
      </nav>

      <div className="mobile-nav">
        <a href="#top" className="brand">
          {name?.toLowerCase().replace(/\s+/g, ".") || "portfolio"}
        </a>

        <div className="mobile-nav-actions">
          <button
            className="theme-toggle theme-toggle-mobile"
