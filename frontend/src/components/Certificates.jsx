export default function Certificates({ certificates }) {
  if (!Array.isArray(certificates) || certificates.length === 0) return null;
  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>
      <div className="cert-grid">
        {certificates.map((c) => (
          <div className="cert-card" key={c.title}>
            {c.image && <img src={c.image} alt={`${c.title} certificate`} />}
            <div className="cert-body">
              <div className="issuer">{c.issuer}</div>
              <h3>{c.title}</h3>
              {c.verifyUrl && (
                <a href={c.verifyUrl} target="_blank" rel="noreferrer">
                  View certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
