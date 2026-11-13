import {
  site,
  headline,
  about,
  now,
  highlights,
  experience,
  ventures,
  earlier,
  education,
  skills,
  certifications,
  languages,
  type Role,
} from "@/lib/content";

function Bullets({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`bullets ${className ?? ""}`}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Logo({ name, src, text, size = "md" }: { name: string; src?: string; text?: string; size?: "md" | "sm" }) {
  const label = text ?? name.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <div className={`logo logo-${size}`} aria-hidden="true">
      {src ? <img src={src} alt="" loading="lazy" /> : <span className={label.length > 3 ? "long" : ""}>{label}</span>}
    </div>
  );
}

function RoleCard({ role }: { role: Role }) {
  return (
    <article className="card" id={role.id}>
      <div className="card-body">
        <header className="card-head">
          <Logo name={role.company} src={role.logo} text={role.logoText} />
          <div>
            <p className="eyebrow">{role.tags}</p>
            <h3 className="card-title">
              {role.title} <span className="at">· {role.company}</span>
            </h3>
            <p className="period">
              {role.period} · {role.location}
            </p>
          </div>
        </header>
        {role.links && (
          <p className="links">
            {role.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener">
                {l.label} ↗
              </a>
            ))}
          </p>
        )}
        <p className="summary">{role.summary}</p>
        {role.results && (
          <>
            <p className="label">{role.cases ? "Highlights" : "Results"}</p>
            <Bullets items={role.results} className="results" />
          </>
        )}
        {role.how && (
          <details className="how">
            <summary>How I did it</summary>
            <Bullets items={role.how} />
          </details>
        )}
        {role.cases?.map((c) => (
          <div className="case" key={c.heading}>
            <div className="case-head">
              {c.company && <Logo name={c.company} src={c.logo} size="sm" />}
              <p className="case-title">
                {c.heading} <span className="period">· {c.meta}</span>
              </p>
            </div>
            {c.intro && <p className="summary">{c.intro}</p>}
            {c.results && (
              <>
                <p className="label">Results, first 4.5 months vs. same period last year</p>
                <Bullets items={c.results} className="results" />
              </>
            )}
            {c.how && (
              <details className="how">
                <summary>How I did it</summary>
                <Bullets items={c.how} />
              </details>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/axel.webp`,
  jobTitle: "Head of Growth",
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
  worksFor: { "@type": "Organization", name: "Orange Juice Ecommerce Agency" },
  founder: { "@type": "Organization", name: "PACT", url: "https://pactwines.com/" },
  alumniOf: { "@type": "EducationalOrganization", name: "IHM Business School" },
  knowsAbout: ["Growth marketing", "DTC e-commerce", "Paid media", "SEO", "CRO", "Marketing analytics", "Contribution margin"],
  ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="shell">
        <aside className="sidebar">
          <div className="id">
            <img className="avatar" src="/images/axel.webp" alt="Axel Samuelson" width={88} height={88} />
            <div>
              <p className="name">{site.name}</p>
              <p className="role">{site.role}</p>
            </div>
          </div>

          <div className="contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener">
                LinkedIn ↗
              </a>
            )}
            <span>{site.location}</span>
          </div>

          <div className="actions">
            <a className="btn primary" href={`mailto:${site.email}`}>
              Get in touch
            </a>
            <a className="btn" href="/cv">
              CV (PDF)
            </a>
          </div>

          <nav className="toc" aria-label="Sections">
            <a href="#results">Results</a>
            <a href="#experience">Experience</a>
            <a href="#ventures">Founder</a>
            <a href="#earlier">Earlier roles</a>
            <a href="#skills">Skills & education</a>
          </nav>
        </aside>

        <main id="main">
          <header className="hero">
            <h1>
              {headline.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h1>
            <p className="about">{about}</p>
            <p className="now">
              <span className="dot" aria-hidden="true" /> <strong>Now:</strong> {now}
            </p>
          </header>

          <section id="results" aria-labelledby="results-h">
            <h2 id="results-h" className="section-h">
              Selected results
            </h2>
            <div className="stats">
              {highlights.map((h) => (
                <div className="stat" key={h.label}>
                  <p className="stat-value">{h.value}</p>
                  <p className="stat-label">{h.label}</p>
                  <p className="stat-context">{h.context}</p>
                </div>
              ))}
            </div>
            <p className="logos">
              Brands & clients: CDLP · C&apos;est Normal · Sneakersnstuff · Klarna · OKQ8 · UNICEF · Husqvarna
            </p>
          </section>

          <section id="experience" aria-labelledby="exp-h">
            <h2 id="exp-h" className="section-h">
              Experience
            </h2>
            {experience.map((r) => (
              <RoleCard key={r.id} role={r} />
            ))}
          </section>

          <section id="ventures" aria-labelledby="ven-h">
            <h2 id="ven-h" className="section-h">
              Founder
            </h2>
            {ventures.map((r) => (
              <RoleCard key={r.id} role={r} />
            ))}
          </section>

          <section id="earlier" aria-labelledby="ear-h">
            <h2 id="ear-h" className="section-h">
              Earlier roles
            </h2>
            <div className="list">
              {earlier.map((e) => (
                <div className="row" key={e.title + e.company}>
                  <div className="row-head">
                    <p className="row-title">
                      {e.title} <span className="at">· {e.company}</span>
                    </p>
                    <p className="period">{e.period}</p>
                  </div>
                  <p className="row-text">{e.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" aria-labelledby="sk-h">
            <h2 id="sk-h" className="section-h">
              Skills
            </h2>
            <dl className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <dt>{s.group}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>

            <div className="two-col">
              <div>
                <h2 className="section-h">Education</h2>
                {education.map((e) => (
                  <div className="row" key={e.title}>
                    <p className="row-title">{e.title}</p>
                    <p className="period">
                      {e.school} · {e.period}
                    </p>
                    {e.text && <p className="row-text">{e.text}</p>}
                  </div>
                ))}
              </div>
              <div>
                <h2 className="section-h">Certifications</h2>
                <ul className="plain">
                  {certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <h2 className="section-h">Languages</h2>
                <p className="row-text">{languages}</p>
              </div>
            </div>
          </section>

          <footer className="footer">
            <p>Open to conversations about senior growth roles and advisory work.</p>
            <a className="btn primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="fine">© 2026 {site.name}</p>
          </footer>
        </main>
      </div>
    </>
  );
}
