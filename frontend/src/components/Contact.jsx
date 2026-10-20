import { useState } from "react";
import { sendContactMessage } from "../api.js";

const initialForm = { name: "", email: "", message: "", company: "" };

export default function Contact({ contact }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  if (!contact) return null;

  function updateField(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      await sendContactMessage(form);
      setStatus({ state: "success", message: "Thanks — your message is on its way." });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong. Please try again." });
    }
  }

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-grid">
        <div>
          <ul className="contact-links">
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`}>Email — {contact.email}</a>
              </li>
            )}
            {contact.githubUrl && (
              <li>
                <a href={contact.githubUrl} target="_blank" rel="noreferrer">
                  GitHub — {contact.github}
                </a>
              </li>
            )}
            {contact.linkedinUrl && (
              <li>
                <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn — {contact.linkedin}
                </a>
              </li>
            )}
          </ul>
          {contact.quote && <p className="quote">"{contact.quote}"</p>}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" required value={form.name} onChange={updateField("name")} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required value={form.email} onChange={updateField("email")} />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" required value={form.message} onChange={updateField("message")} />
          </div>
          {/* Honeypot field — hidden from real users, catches simple bots */}
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={updateField("company")}
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={status.state === "loading"}>
            {status.state === "loading" ? "Sending…" : "Send message"}
          </button>

          {status.state === "success" && <p className="form-status success">{status.message}</p>}
          {status.state === "error" && <p className="form-status error">{status.message}</p>}
        </form>
      </div>
    </section>
  );
}
