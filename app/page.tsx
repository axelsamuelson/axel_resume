import {
  site,
  headline,
  about,
  now,
  highlights,
  highlightsTitle,
  experience,
  ventures,
  earlier,
  education,
  skills,
  certifications,
  languages,
  type Role,
  type Metric,
} from "@/lib/content";
import SideNav from "./SideNav";

function Logo({ name, src, text, full, size = "md" }: { name: string; src?: string; text?: string; full?: boolean; size?: "md" | "sm" }) {
  const label = text ?? name.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <div className={`logo logo-${size}${full ? " logo-full" : ""}`} aria-hidden="true">
      {src ? <img src={src} alt="" loading="lazy" /> : <span className={label.length > 3 ? "long" : ""}>{label}</span>}
    </div>
  );
}

function Metrics({ items, note }: { items: Metric[]; note?: string }) {
  return (
    <div className="metrics-wrap">
      <div className="metrics">
        {items.map((m) => (
          <div className="metric" key={m.label}>
            <p className="metric-value">{m.value}</p>
            <p className="metric-label">{m.label}</p>
            {m.context && <p className="metric-context">{m.context}</p>}
          </div>
        ))}
      </div>
      {note && <p className="metrics-note">{note}</p>}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function How({ items }: { items: string[] }) {
  return (
    <details className="how">
      <summary>
        How I did it <span className="how-count">{items.length}</span>
      </summary>
      <Bullets items={items} />
    </details>
  );
}

function RoleItem({ role }: { role: Role }) {
  return (
    <li className="role" id={role.id}>
      <div className="rail">
        <Logo name={role.company} src={role.logo} text={role.logoText} full={role.logoFull} />
      </div>
      <div className="role-body">
        <header className="role-head">
          <div>
            <h3 className="role-title">{role.title}</h3>
            <p className="role-company">{role.company}</p>
          </div>
          <p className="role-period">{role.period}</p>
        </header>
        {role.tags && <p className="role-tags">{role.tags}</p>}
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
        {role.metrics && <Metrics items={role.metrics} note={role.metricsNote} />}
        {role.results && <Bullets items={role.results} />}
        {role.how && <How items={role.how} />}
        {role.cases?.map((c) => (
          <div className="case" key={c.heading}>
            <div className="case-head">
              {c.company && <Logo name={c.company} src={c.logo} size="sm" />}
              <div>
                <p className="case-kicker">Client case</p>
                <p className="case-title">
                  {c.company} <span className="case-meta">· {c.meta}</span>
                </p>
              </div>
            </div>
            {c.intro && <p className="summary">{c.intro}</p>}
            {c.metrics && <Metrics items={c.metrics} note={c.metricsNote} />}
            {c.results && <Bullets items={c.results} />}
            {c.how && <How items={c.how} />}
          </div>
        ))}
      </div>
    </li>
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
  knowsAbout: ["Growth marketing", "DTC e-commerce", "Paid media", "SEO", "CRO", "Marketing analytics", "Contribution"],
  ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
};

const nav = [
  { href: "#results", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#founder", label: "Founder" },
  { href: "#earlier", label: "Earlier roles" },
  { href: "#skills", label: "Skills & education" },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div className="shell">
        <aside className="sidebar">
          <div className="side-id">
            <img className="avatar" src="/images/axel.webp" alt="Axel Samuelson" width={72} height={72} />
            <div>
              <p className="side-name">{site.name}</p>
              <p className="side-role">{site.role}</p>
            </div>
          </div>

          <div className="side-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener">
                LinkedIn ↗
              </a>
            )}
            <span>{site.location}</span>
          </div>

          <div className="side-actions">
            <a className="btn primary" href={`mailto:${site.email}`}>
              Get in touch
            </a>
            <a className="btn" href="/cv">
              CV (PDF)
            </a>
          </div>

          <SideNav items={nav} />
        </aside>

      <main id="main" className="page">
        <section className="hero" id="top">
          <h1>
            {headline.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h1>
          <p className="about">{about}</p>
          <p className="now">
            <span className="dot" aria-hidden="true" />
            <span>
              <strong>Now</strong> {now}
            </span>
          </p>
        </section>

        <section id="results" aria-labelledby="results-h" className="block">
          <h2 id="results-h" className="section-h">
            {highlightsTitle}
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
          <p className="logos-line">
            <span>Brands &amp; clients</span> CDLP · C&apos;est Normal · STIGA Sports · Sneakersnstuff · Klarna · OKQ8 · UNICEF · Husqvarna
          </p>
        </section>

        <section id="experience" aria-labelledby="exp-h" className="block">
          <h2 id="exp-h" className="section-h">
            Experience
          </h2>
          <ol className="timeline">
            {experience.map((r) => (
              <RoleItem key={r.id} role={r} />
            ))}
          </ol>
        </section>

        <section id="founder" aria-labelledby="ven-h" className="block">
          <h2 id="ven-h" className="section-h">
            Founder
          </h2>
          <ol className="timeline">
            {ventures.map((r) => (
              <RoleItem key={r.id} role={r} />
            ))}
          </ol>
        </section>

        <section id="earlier" aria-labelledby="ear-h" className="block">
          <h2 id="ear-h" className="section-h">
            Earlier roles
          </h2>
          <ul className="earlier">
            {earlier.map((e) => (
              <li key={e.title + e.company}>
                <p className="earlier-period">{e.period}</p>
                <div>
                  <p className="earlier-title">
                    {e.title} <span>· {e.company}</span>
                  </p>
                  <p className="earlier-text">{e.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" aria-labelledby="sk-h" className="block">
          <h2 id="sk-h" className="section-h">
            Skills
          </h2>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill-group" key={s.group}>
                <p className="skill-name">{s.group}</p>
                <ul className="tags">
                  {s.items.split(/,\s(?![^()]*\))/).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="facts">
            <div>
              <h2 className="section-h">Education</h2>
              {education.map((e) => (
                <div className="fact" key={e.title}>
                  <p className="fact-title">{e.title}</p>
                  <p className="fact-meta">
                    {e.school} · {e.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="section-h">Certifications</h2>
              {certifications.map((c) => {
                const [name, by] = c.split(" – ");
                return (
                  <div className="fact" key={c}>
                    <p className="fact-title">{name}</p>
                    {by && <p className="fact-meta">{by}</p>}
                  </div>
                );
              })}
            </div>
            <div>
              <h2 className="section-h">Languages</h2>
              {languages.split(" · ").map((l) => (
                <div className="fact" key={l}>
                  <p className="fact-title">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer">
          <p className="footer-lead">Let&apos;s talk growth.</p>
          <p className="footer-sub">Open to conversations about senior growth roles and advisory work.</p>
          <div className="footer-actions">
            <a className="btn primary lg" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="btn lg" href="/cv">
              Download CV (PDF)
            </a>
          </div>
          <p className="fine">© 2026 {site.name} · Stockholm</p>
        </footer>
      </main>
      </div>
    </>
  );
}
