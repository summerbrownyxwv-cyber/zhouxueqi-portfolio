import { BackButton, DetailMediaList, ProjectCover } from "../components/DetailMedia.jsx";

function getProjectMedia(project) {
  const media = [];
  const detailAssets =
    project.detailVideo && project.replaceFirstDetailAssetWithVideo
      ? project.detailAssets.slice(1)
      : project.detailAssets;

  if (project.detailVideo) {
    media.push({
      type: "video",
      src: project.detailVideo,
      poster: project.videoPoster || project.detailAssets[0] || project.image,
    });
  }

  detailAssets.forEach((src) => {
    media.push({ type: "image", src });
  });

  const [cover, ...gallery] = media;
  return { cover, gallery };
}

function getProjectSubtitle(project) {
  if (project.detailEnglishName) return project.detailEnglishName;
  if (project.englishName) return project.englishName.replace(/^\[/, "").replace(/\]$/, "");
  return project.englishType;
}

function getProjectMeta(project) {
  if (project.detailMeta) return project.detailMeta;

  return [
    project.tags?.length ? { label: "项目类型", value: project.tags.join(" / ") } : null,
    project.year ? { label: "制作周期", value: project.year } : null,
    project.time ? { label: "制作信息", value: project.time.replace("制作时间：", "") } : null,
  ].filter(Boolean);
}

function ProjectHero({ project, backHref, onNavigate }) {
  const subtitle = getProjectSubtitle(project);
  const meta = getProjectMeta(project);
  const descriptionZh = project.subtitle || project.type;
  const descriptionEn = project.englishSubtitle || project.englishType;

  return (
    <section className="project-hero">
      <div className="project-hero-main">
        <BackButton href={backHref} onNavigate={onNavigate} />
        <p className="project-category">{project.category}</p>
        <h1 className="project-title">{project.name}</h1>
        {subtitle && <p className="project-subtitle">{subtitle}</p>}
      </div>

      <div className="project-info">
        {descriptionZh && <p className="project-description-zh">{descriptionZh}</p>}
        {descriptionEn && <p className="project-description-en">{descriptionEn}</p>}
        <dl className="project-meta">
          {meta.map((item) => (
            <div className="project-meta-item" key={item.label}>
              <dt className="project-meta-label">{item.label}</dt>
              <dd className="project-meta-value">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default function ProjectDetailPage({ project, onNavigate }) {
  const backHref =
    project.category === "01.竞赛项目"
      ? "/#competition"
      : project.category === "03.其他设计"
        ? "/03-01"
        : "/work";
  const { cover, gallery } = getProjectMedia(project);

  return (
    <main
      className="inner-page project-detail"
      data-project-id={project.id}
      data-project-category={project.category}
    >
      <ProjectHero project={project} backHref={backHref} onNavigate={onNavigate} />
      <ProjectCover item={cover} project={project} />
      <DetailMediaList project={project} items={gallery} />
    </main>
  );
}
