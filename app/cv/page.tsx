import type { Metadata } from "next";
import { site, headline, about, experience, ventures, earlier, education, skills, certifications, languages, cvShort } from "@/lib/content";
import PrintButton from "./PrintButton";
import "./cv.css";

export const metadata: Metadata = {
  title: `CV – ${site.name}`,
  description: site.description,
  alternates: { canonical: "/cv" },
};

export default function CV() {
  return (
    <div className="cv-wrap">
      <div className="cv-bar no-print">
        <a href="/">← Back to site</a>
        <PrintButton />
      </div>
      <article className="cv">
        <header className="cv-head">
          <div>
            <h1>{site.name}</h1>
            <p className="cv-role">{site.role}</p>
            <p className="cv-tag">{headline.join(" ")}</p>
          </div>
          <p className="cv-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            {site.phone}
            <br />
            {site.location}
            {site.linkedin && (
              <>
                <br />
                <a href={site.linkedin}>{site.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</a>
              </>
            )}
            <br />
            <a href={site.url}>axelsamuelson.com</a>
          </p>
        </header>

        <section>
          <h2>Profile</h2>
          <p>{about}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {experience.map((r) => (
            <div className="cv-item" key={r.id}>
              <div className="cv-item-head">
                <p className="cv-item-title">
                  {r.title}, {r.company}
                </p>
                <p className="cv-period">{r.period}</p>
              </div>
              <ul>
                {(cvShort[r.id] ?? r.results ?? []).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Founder</h2>
          {ventures.map((r) => (
            <div className="cv-item" key={r.id}>
              <div className="cv-item-head">
                <p className="cv-item-title">
                  {r.title}, {r.company}
                </p>
                <p className="cv-period">{r.period}</p>
              </div>
              {r.results ? (
                <ul>
                  {r.results.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              ) : (
                <p>{r.summary}</p>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2>Earlier roles</h2>
          {earlier.map((e) => (
            <div className="cv-item compact" key={e.title + e.company}>
              <div className="cv-item-head">
                <p className="cv-item-title">
                  {e.title}, {e.company}
                </p>
                <p className="cv-period">{e.period}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="cv-grid">
          <div>
            <h2>Skills</h2>
            {skills.map((s) => (
              <p key={s.group} className="cv-skill">
                <strong>{s.group}:</strong> {s.items}
              </p>
            ))}
          </div>
          <div>
            <h2>Education</h2>
            {education.map((e) => (
              <p key={e.title} className="cv-skill">
                <strong>{e.title}</strong>, {e.school} ({e.period})
              </p>
            ))}
            <h2>Certifications</h2>
            {certifications.map((c) => (
              <p key={c} className="cv-skill">
                {c}
              </p>
            ))}
            <h2>Languages</h2>
            <p className="cv-skill">{languages}</p>
          </div>
        </section>
      </article>
    </div>
  );
}
