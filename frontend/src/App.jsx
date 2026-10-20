import { useEffect, useState } from "react";
import { fetchPortfolio } from "./api.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Research from "./components/Research.jsx";
import Experience from "./components/Experience.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolio()
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="state-message">
        Couldn't load portfolio content ({error}).
      </div>
    );
  }

  if (!data) {
    return <div className="state-message">Loading…</div>;
  }

  return (
    <div className="layout">
      <Nav name={data.profile?.name} email={data.contact?.email} />
      <main>
        <Hero profile={data.profile} />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Research research={data.research} />
        <Experience experience={data.experience} />
        <Certificates certificates={data.certificates} />
        <Contact contact={data.contact} />
        <footer>
          {data.profile?.name} · {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
