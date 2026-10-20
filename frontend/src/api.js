// This site is built to run two ways:
//
// 1. Static (GitHub Pages) — the default. Portfolio content is read from
//    the bundled /content.json, and the contact form posts to a free
//    Formspree endpoint (https://formspree.io) since GitHub Pages can't
//    run a server to send email itself.
//
// 2. With a real backend — if you deploy the Express API from backend/
//    elsewhere (Render, Railway, etc.), set VITE_API_URL in your build
//    environment and both content and the contact form will use it
//    instead, giving you live-editable content and your own mailer.

const API_URL = import.meta.env.VITE_API_URL; // e.g. https://your-backend.onrender.com/api
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID; // e.g. "abcdwxyz"

export async function fetchPortfolio() {
  const url = API_URL ? `${API_URL}/portfolio` : "/content.json";
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load portfolio content (${res.status})`);
  return res.json();
}

export async function sendContactMessage(payload) {
  if (API_URL) {
    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || `Request failed with status ${res.status}`);
    return data;
  }

  if (FORMSPREE_ID) {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Message could not be sent. Please try again.");
    return { success: true };
  }

  throw new Error(
    "Contact form isn't configured yet — set VITE_FORMSPREE_ID (or VITE_API_URL) before deploying."
  );
}
