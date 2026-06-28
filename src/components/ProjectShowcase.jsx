export default function ProjectShowcase({ project, variant = "competition", onNavigate }) {
  const isWork = variant === "work";
  const actionHref = project.externalUrl || project.route;
  const isExternal = Boolean(project.externalUrl);

  return (
    <article
      className={`project-card project-showcase project-showcase--${variant}`}
      data-project-id={project.id}
      data-project-type={project.type || variant}
    >
      <header className="project-heading">
        {isWork ? (
          <div className="project-title-row project-title-row--work work-title-layout">
            <div className="work-title-main">
              <p className="project-client">{project.client}</p>
              <h2 className="project-card-title">{project.name}</h2>
            </div>
            <span className="project-separator work-divider" aria-hidden="true">
              |
            </span>
            <div className="project-type project-card-subtitle">
              <p>{project.type}</p>
              <p>{project.englishType}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="project-card-title">{project.name}</h2>
            <div className="project-title-row">
              <p className="project-english project-card-subtitle">{project.englishName}</p>
              <span className="project-separator">|</span>
              <div className="project-type project-card-meta">
                <p>{project.subtitle}</p>
                <p>{project.englishSubtitle}</p>
              </div>
            </div>
          </>
        )}
      </header>

      <figure className="project-media">
        <img src={project.image} alt={project.name} loading="lazy" />
      </figure>

      <div className="project-card-meta project-foot">
        <p>{project.time}</p>
        {actionHref ? (
          <a
            className="project-card-action"
            href={actionHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            onClick={(event) => {
              if (!isExternal && onNavigate) onNavigate(event, actionHref);
            }}
          >
            {project.buttonText}
          </a>
        ) : (
          <span className="project-card-action is-disabled" aria-disabled="true">
            {project.buttonText}
          </span>
        )}
      </div>
    </article>
  );
}
