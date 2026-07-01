import { getAssetDimensions } from "../data/assetDimensions.generated.js";

export function BackButton({ href, onNavigate, children = "返回项目列表" }) {
  return (
    <a
      className="project-back back-button"
      href={href}
      onClick={(event) => {
        if (onNavigate) onNavigate(event, href);
      }}
    >
      {children}
    </a>
  );
}

export function DetailVideo({ src, title, poster, className = "" }) {
  return (
    <figure className={`project-gallery-item detail-media detail-video ${className}`.trim()}>
      <video src={src} title={title} poster={poster} controls playsInline preload="metadata" />
    </figure>
  );
}

export function DetailImage({ src, alt, loading = "lazy", className = "" }) {
  const dimensions = getAssetDimensions(src);

  return (
    <figure className={`project-gallery-item detail-media detail-image ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={loading === "eager" ? "high" : undefined}
        width={dimensions?.width}
        height={dimensions?.height}
      />
    </figure>
  );
}

export function ProjectCover({ item, project }) {
  if (!item) return null;

  return (
    <section className="project-cover" aria-label={`${project.name}首图`}>
      {item.type === "video" ? (
        <DetailVideo
          src={item.src}
          title={project.name}
          poster={item.poster}
          className="project-cover-media"
        />
      ) : (
        <DetailImage
          src={item.src}
          alt={`${project.name} 首图`}
          loading="eager"
          className="project-cover-media"
        />
      )}
    </section>
  );
}

export function DetailMediaList({ project, items }) {
  if (!items.length) return null;

  return (
    <section className="project-gallery detail-media-list" aria-label={`${project.name}详情素材`}>
      {items.map((item, index) =>
        item.type === "video" ? (
          <DetailVideo key={item.src} src={item.src} title={project.name} poster={item.poster} />
        ) : (
          <DetailImage
            key={item.src}
            src={item.src}
            alt={`${project.name} ${index + 1}`}
            loading="lazy"
          />
        ),
      )}
    </section>
  );
}
