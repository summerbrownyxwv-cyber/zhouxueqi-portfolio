import { getAssetDimensions } from "../data/assetDimensions.generated.js";
import { resumeContent, siteMeta } from "../data/portfolioData.js";

function ResumeSection({ title, children }) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function TimelineList({ items, compact = false }) {
  return (
    <div className={`timeline-list ${compact ? "timeline-list--compact" : ""}`}>
      {items.map((item) => (
        <article key={`${item.title}-${item.date}`} className="timeline-item">
          <div className="timeline-head">
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
          {item.description && <p className="timeline-desc">{item.description}</p>}
        </article>
      ))}
    </div>
  );
}

export default function ResumePage() {
  const smileDimensions = getAssetDimensions(siteMeta.smile);

  return (
    <main className="page-frame inner-page resume-page">
      <img
        className="smile-mark resume-smile"
        src={siteMeta.smile}
        alt="笑脸图形"
        width={smileDimensions?.width}
        height={smileDimensions?.height}
        decoding="async"
      />

      <section className="resume-hero" aria-labelledby="resume-name">
        <p>{resumeContent.name}</p>
        <div>
          <h1 id="resume-name">{resumeContent.role}</h1>
          <p className="resume-direction">{resumeContent.direction}</p>
          <p className="resume-intro">{resumeContent.intro}</p>
        </div>
      </section>

      <ResumeSection title="教育背景">
        <TimelineList items={resumeContent.education} compact />
      </ResumeSection>

      <ResumeSection title="工作经历">
        <TimelineList items={resumeContent.workExperience} />
      </ResumeSection>

      <ResumeSection title="项目经历">
        <TimelineList items={resumeContent.projectExperience} />
      </ResumeSection>

      <ResumeSection title="专业技能">
        <ul className="plain-grid">
          {resumeContent.skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="荣誉证书">
        <ul className="inline-list">
          {resumeContent.honors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="核心能力">
        <ul className="inline-list">
          {resumeContent.capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="联系方式">
        <address className="resume-contact">
          <p>电话：{resumeContent.contact.phone}</p>
          <p>邮箱：{resumeContent.contact.email}</p>
        </address>
      </ResumeSection>
    </main>
  );
}
