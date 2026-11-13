import type { Metadata } from "next";
import {
  site,
  headline,
  about,
  highlights,
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
import PrintButton from "./PrintButton";
import "./cv.css";

export const metadata: Metadata = {
  title: `CV – ${site.name}`,
  description: site.description,
  alternates: { canonical: "/cv" },
};

// How many "How I did it" points to show per role on the printed CV.
const HOW_ON_CV = 1;
// Max result bullets per role on the printed CV.
const RESULTS_ON_CV = 2;

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

function List({ items }: { items: string[] }) {
  return (
    <ul className="cv-list">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function RoleBlock({ r }: { r: Role }) {
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
      {r.metrics && <MetricRow items={r.metrics} note={r.metricsNote} />}
      {r.results && <List items={r.results.slice(0, RESULTS_ON_CV)} />}
      {r.how && <List items={r.how.slice(0, HOW_ON_CV)} />}
      {r.cases?.map((c) => (
        <div className="cv-case" key={c.heading}>
          <p className="cv-case-head">
            <Logo src={c.logo} text={c.company?.slice(0, 2)} size="sm" />
            <span className="cv-case-kicker">Client case</span>
            <strong>{c.company}</strong>
            <span className="cv-case-meta">{shortPeriod(c.meta ?? "")}</span>
          </p>
          {c.intro && <p className="cv-summary">{c.intro}</p>}
          {c.metrics && <MetricRow items={c.metrics} note={c.metricsNote} />}
          {c.how && <List items={c.how.slice(0, HOW_ON_CV)} />}
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

export default function CV() {
  const linkedinShort = site.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <div className="cv-wrap">
      <div className="cv-bar no-print">
        <a href="/">← Back to site</a>
        <PrintButton />
      </div>

      <article className="cv">
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

          <div className="cv-highlights" aria-label="Selected results">
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
              <RoleBlock key={r.id} r={r} />
            ))}
          </div>

          <SectionTitle n="02">Founder</SectionTitle>
          <div className="cv-timeline">
            {ventures.map((r) => (
              <RoleBlock key={r.id} r={r} />
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
