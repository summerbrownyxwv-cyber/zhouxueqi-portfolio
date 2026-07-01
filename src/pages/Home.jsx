import MouseReactiveBackground from "../components/interaction/MouseReactiveBackground.jsx";
import RotatingText from "../components/interaction/RotatingText.jsx";
import ProjectShowcase from "../components/ProjectShowcase.jsx";
import SectionDivider from "../components/SectionDivider.jsx";
import { getAssetDimensions } from "../data/assetDimensions.generated.js";
import { competitionProjects, homeContent, siteMeta } from "../data/portfolioData.js";

const identityTexts = [
  "一位视觉设计师",
  "一位品牌设计师",
  "一位视觉系统研究者",
  "A Visual Designer",
  "A Brand Designer",
];

export default function HomePage({ onNavigate }) {
  const titleParts = homeContent.hero.title.split("，");
  const introLines = homeContent.hero.introLines ?? [homeContent.hero.intro];
  const smileDimensions = getAssetDimensions(siteMeta.smile);

  return (
    <main>
      <section className="home-hero page-frame">
        <MouseReactiveBackground className="home-ascii-background" />
        <img
          className="smile-mark home-smile"
          src={siteMeta.smile}
          alt="笑脸图形"
          width={smileDimensions?.width}
          height={smileDimensions?.height}
          decoding="async"
          fetchPriority="high"
        />

        <div className="hero-copy">
          <p className="eyebrow">
            {homeContent.hero.eyebrow}
            <br />
            {homeContent.hero.eyebrowEn}
          </p>
          <h1>
            <span>{titleParts[0]}，</span>
            <span>
              <RotatingText
                items={identityTexts}
                interval={3400}
                suffix="。"
                className="hero-title-identity"
                ariaLabel="身份切换"
              />
            </span>
          </h1>
        </div>

        <div className="hero-bottom">
          <p className="hero-intro">
            {introLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <nav className="home-nav" aria-label="Home navigation">
            {homeContent.hero.nav.map((item) => (
              <a
                className="nav-item"
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  if (item.href.startsWith("/")) onNavigate(event, item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="reel-section page-frame" aria-labelledby="reel-title">
        <div className="reel-copy">
          <h2 id="reel-title">{homeContent.reel.title}</h2>

          <div className="reel-media">
            <video
              src={homeContent.reel.video}
              poster={homeContent.reel.coverImage}
              aria-label={`${homeContent.reel.name}作品集短片`}
              controls
              playsInline
              preload="metadata"
              width="1920"
              height="1080"
            />
          </div>

          <p className="reel-music">{homeContent.reel.musicLabel}</p>
        </div>
      </section>

      <section className="page-frame project-list" aria-labelledby="competition-heading">
        <SectionDivider id="competition">{homeContent.competitionTitle}</SectionDivider>
        <h2 className="visually-hidden" id="competition-heading">
          {homeContent.competitionTitle}
        </h2>
        {competitionProjects.map((project) => (
          <ProjectShowcase key={project.id} project={project} onNavigate={onNavigate} />
        ))}
      </section>
    </main>
  );
}
