import {
  site,
  headline,
  about,
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
  type Point,
} from "@/lib/content";
import PrintButton from "./PrintButton";
import "./cv.css";

export type Variant = "short" | "full";

// What the short (two-page) version keeps. The full version shows everything.
const SHORT = { how: 2, results: 2 };

// "Nov 2025 – Present" -> "Nov 2025 – now"
const shortPeriod = (p: string) => p.replace("Present", "now");

function Logo({ src, text, full, size = "md" }: { src?: string; text?: string; full?: boolean; size?: "md" | "sm" }) {
  return (
    <span className={`cv-logo ${size}${full ? " full" : ""}`} aria-hidden="true">
      {src ? <img src={src} alt="" /> : <span>{text}</span>}
    </span>
  );
}

function MetricRow({ items, note }: { items: Metric[]; note?: string }) {
  return (
    <>
      <div className="cv-metrics">
        {items.map((m) => (
          <div className="cv-metric" key={m.label}>
            <p className="cv-metric-value">{m.value}</p>
            <p className="cv-metric-label">{m.label}</p>
            {m.context && <p className="cv-metric-context">{m.context}</p>}
          </div>
        ))}
      </div>
      {note && <p className="cv-note">{note}</p>}
    </>
  );
}

function List({ items, label }: { items: Point[]; label?: string }) {
  return (
    <>
    {label && <p className="cv-list-label">{label}</p>}
    <ul className="cv-list">
      {items.map((t) => (
        <li key={typeof t === "string" ? t : t.title}>
          {typeof t === "string" ? (
            t
          ) : (
            <>
              <strong className="cv-pt-title">{t.title}</strong> {t.text}
            </>
          )}
        </li>
      ))}
    </ul>
    </>
  );
}

function RoleBlock({ r, full }: { r: Role; full: boolean }) {
  // Short version: only the action titles (or the first plain points).
  const how = (items: Point[]) =>
    full ? items : items.slice(0, SHORT.how).map((p) => (typeof p === "string" ? p : p.title));
  const results = (items: string[]) => (full ? items : items.slice(0, SHORT.results));
  return (
    <section className="cv-role">
      <Logo src={r.logo} text={r.logoText} full={r.logoFull} />
      <div className="cv-role-head">
        <div className="cv-role-id">
          <h3 className="cv-role-title">{r.title}</h3>
          <p className="cv-company">
            {r.company}
            {r.links?.map((l) => (
              <a key={l.href} href={l.href} className="cv-link">
                {l.label}
              </a>
            ))}
          </p>
        </div>
        <p className="cv-period">{shortPeriod(r.period)}</p>
      </div>
      <p className="cv-summary">{r.summary}</p>
      {r.metrics && <MetricRow items={r.metrics} note={full ? r.metricsNote : undefined} />}
      {r.results && <List items={results(r.results)} />}
      {r.how && <List items={how(r.how)} label={full ? "How I did it" : undefined} />}
      {r.cases?.map((c) => (
        <div className="cv-case" key={c.heading}>
          <p className="cv-case-head">
            <Logo src={c.logo} text={c.company?.slice(0, 2)} size="sm" />
            <span className="cv-case-kicker">Client case</span>
            <strong>{c.company}</strong>
            <span className="cv-case-meta">{shortPeriod(c.meta ?? "")}</span>
          </p>
          {c.intro && <p className="cv-summary">{c.intro}</p>}
          {c.metrics && <MetricRow items={c.metrics} note={full ? c.metricsNote : undefined} />}
          {c.how && <List items={how(c.how)} label={full ? "How I did it" : undefined} />}
        </div>
      ))}
    </section>
  );
}

function SectionTitle({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="cv-sec">
      <span className="cv-sec-n">{n}</span>
      {children}
    </h2>
  );
}

export default function CvDocument({ variant }: { variant: Variant }) {
  const full = variant === "full";
  const linkedinShort = site.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <div className="cv-wrap">
      <div className="cv-bar no-print">
        <a href="/">← Back to site</a>
        <nav className="cv-switch" aria-label="CV version">
          <a href="/cv" aria-current={!full ? "page" : undefined}>
            Short version
          </a>
          <a href="/cv/full" aria-current={full ? "page" : undefined}>
            Full version
          </a>
        </nav>
        <PrintButton />
      </div>

      <article className={`cv${full ? " cv-full" : ""}`}>
        <header className="cv-band">
          <div className="cv-top">
            <img className="cv-photo" src="/images/axel.webp" alt="" />
            <div className="cv-id">
              <h1>{site.name}</h1>
              <p className="cv-role-line">{site.role}</p>
            </div>
            <ul className="cv-contact">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>{site.phone}</li>
              {site.linkedin && (
                <li>
                  <a href={site.linkedin}>{linkedinShort}</a>
                </li>
              )}
              <li>
                <a href={site.url}>axelsamuelson.com</a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>

          <p className="cv-tagline">
            {headline[0]} <span>{headline[1]}</span>
          </p>
          <p className="cv-about">{about}</p>

          <p className="cv-hl-title">{highlightsTitle}</p>
          <div className="cv-highlights" aria-label={highlightsTitle}>
            {highlights.map((h) => (
              <div className="cv-hl" key={h.label}>
                <p className="cv-hl-value">{h.value}</p>
                <p className="cv-hl-label">{h.label}</p>
                <p className="cv-hl-context">{h.context}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="cv-body">
          <SectionTitle n="01">Experience</SectionTitle>
          <div className="cv-timeline">
            {experience.map((r) => (
              <RoleBlock key={r.id} r={r} full={full} />
            ))}
          </div>

          <SectionTitle n="02">Founder</SectionTitle>
          <div className="cv-timeline">
            {ventures.map((r) => (
              <RoleBlock key={r.id} r={r} full={full} />
            ))}
          </div>

          <SectionTitle n="03">Earlier roles</SectionTitle>
          <div className="cv-earlier">
            {earlier.map((e) => (
              <div className="cv-early" key={e.title + e.company}>
                <p className="cv-early-title">{e.title}</p>
                <p className="cv-early-meta">
                  {e.company} <span>{e.period}</span>
                </p>
                {full && e.text && <p className="cv-early-text">{e.text}</p>}
              </div>
            ))}
          </div>

          <SectionTitle n="04">Skills</SectionTitle>
          <div className="cv-skills">
            {skills.map((s) => (
              <div className="cv-skill" key={s.group}>
                <p className="cv-skill-name">{s.group}</p>
                <p className="cv-skill-items">{s.items.split(/,\s(?![^()]*\))/).join(" · ")}</p>
              </div>
            ))}
          </div>

          <div className="cv-facts">
            <section>
              <SectionTitle n="05">Education</SectionTitle>
              {education.map((e) => (
                <div className="cv-fact" key={e.title}>
                  <p className="cv-fact-title">{e.title}</p>
                  <p className="cv-fact-meta">
                    {e.school} · {e.period}
                  </p>
                  {full && e.text && <p className="cv-fact-text">{e.text}</p>}
                </div>
              ))}
            </section>
            <section>
              <SectionTitle n="06">Certifications</SectionTitle>
              {certifications.map((c) => {
                const [name, by] = c.split(" – ");
                return (
                  <p className="cv-fact cv-fact-title" key={c}>
                    {name}
                    {by && <span className="cv-fact-by"> · {by}</span>}
                  </p>
                );
              })}
            </section>
            <section>
              <SectionTitle n="07">Languages</SectionTitle>
              {languages.split(" · ").map((l) => (
                <div className="cv-fact" key={l}>
                  <p className="cv-fact-title">{l}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
