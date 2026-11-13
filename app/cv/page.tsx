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

function Logo({ src, text, full }: { src?: string; text?: string; full?: boolean }) {
  return (
    <span className={`cv-logo${full ? " full" : ""}`} aria-hidden="true">
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
      <div className="cv-role-body">
        <div className="cv-role-head">
          <Logo src={r.logo} text={r.logoText} full={r.logoFull} />
          <div className="cv-role-id">
            <h3 className="cv-role-title">{r.title}</h3>
            <p className="cv-company">
              {r.company}
              {r.links && (
                <span className="cv-links">
                  {r.links.map((l) => (
                    <a key={l.href} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </span>
              )}
            </p>
          </div>
          <p className="cv-period">{r.period}</p>
        </div>
        <p className="cv-summary">{r.summary}</p>
        {r.metrics && <MetricRow items={r.metrics} note={r.metricsNote} />}
        {r.results && <List items={r.results.slice(0, RESULTS_ON_CV)} />}
        {r.how && <List items={r.how.slice(0, HOW_ON_CV)} />}
        {r.cases?.map((c) => (
          <div className="cv-case" key={c.heading}>
            <div className="cv-case-head">
              <Logo src={c.logo} text={c.company?.slice(0, 2)} />
              <p>
                <span className="cv-case-kicker">Client case</span> <strong>{c.company}</strong>{" "}
                <span className="cv-case-meta">· {c.meta}</span>
              </p>
            </div>
            {c.intro && <p className="cv-summary">{c.intro}</p>}
            {c.metrics && <MetricRow items={c.metrics} note={c.metricsNote} />}
            {c.how && <List items={c.how.slice(0, HOW_ON_CV)} />}
          </div>
        ))}
      </div>
    </section>
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
        <header className="cv-head">
          <img className="cv-photo" src="/images/axel.webp" alt="" />
          <div className="cv-id">
            <h1>{site.name}</h1>
            <p className="cv-role-line">{site.role}</p>
            <p className="cv-tag">{headline.join(" ")}</p>
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
        </header>

        <section className="cv-intro">
          <p>{about}</p>
        </section>

        <section className="cv-highlights" aria-label="Selected results">
          {highlights.map((h) => (
            <div className="cv-hl" key={h.label}>
              <p className="cv-hl-value">{h.value}</p>
              <p className="cv-hl-label">{h.label}</p>
              <p className="cv-hl-context">{h.context}</p>
            </div>
          ))}
        </section>

        <h2 className="cv-h">Experience</h2>
        {experience.map((r) => (
          <RoleBlock key={r.id} r={r} />
        ))}

        <h2 className="cv-h">Founder</h2>
        {ventures.map((r) => (
          <RoleBlock key={r.id} r={r} />
        ))}

        <h2 className="cv-h">Earlier roles</h2>
        <div className="cv-earlier">
        {earlier.map((e) => (
          <section className="cv-role compact" key={e.title + e.company}>
            <p className="cv-compact-title">{e.title}</p>
            <p className="cv-compact-meta">
              {e.company} · {e.period}
            </p>
          </section>
        ))}
        </div>

        <h2 className="cv-h">Skills</h2>
        <div className="cv-skills">
          {skills.map((s) => (
            <p className="cv-skill" key={s.group}>
              <strong>{s.group}</strong> {s.items.split(/,\s(?![^()]*\))/).join(" · ")}
            </p>
          ))}
        </div>

        <div className="cv-bottom">
          <section>
            <h2 className="cv-h">Education</h2>
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
            <h2 className="cv-h">Certifications</h2>
            {certifications.map((c) => {
              const [name, by] = c.split(" – ");
              return (
                <p className="cv-fact-line" key={c}>
                  <strong>{name}</strong>
                  {by && <span> · {by}</span>}
                </p>
              );
            })}
          </section>
          <section>
            <h2 className="cv-h">Languages</h2>
            {languages.split(" · ").map((l) => (
              <p className="cv-fact-line" key={l}>
                <strong>{l}</strong>
              </p>
            ))}
          </section>
        </div>
      </article>
    </div>
  );
}
