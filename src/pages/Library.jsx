import { libraryContent } from "../data/portfolioData.js";

export default function LibraryPage() {
  return (
    <main className="page-frame inner-page library-page">
      <section className="library-intro" aria-labelledby="library-title">
        <h1 id="library-title">{libraryContent.title}</h1>
        <div className="library-intro-copy">
          <p className="library-title-en">{libraryContent.englishTitle}</p>
          <p className="library-description library-description--zh">
            {libraryContent.descriptionLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className="library-description library-description--en">
            {libraryContent.englishDescriptionLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </div>
      </section>

      <section className="library-grid" aria-label="其他设计分类">
        {libraryContent.items.map((item) => (
          <article
            key={item.id}
            className="library-card library-item"
            data-library-id={item.id}
            data-detail-ready="false"
          >
            <div className="library-card-title">
              <p className="library-card-title-zh">{item.titleZh}</p>
              <p className="library-card-title-en">{item.titleEn}</p>
            </div>
            <div className="library-card-tags">
              <p className="library-card-tags-zh">{item.tagsZh}</p>
              <p className="library-card-tags-en">{item.tagsEn}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
