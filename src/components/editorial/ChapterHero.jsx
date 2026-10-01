function ChapterHero({ chapterNumber, subtitle, title, deck }) {
  return (
    <section className="chapter-hero">
      <div className="chapter-hero__frame">
        <p className="chapter-hero__eyebrow">Chapter {chapterNumber}</p>

        <div className="chapter-hero__content">
          <div className="chapter-hero__number" aria-hidden="true">
            {chapterNumber}
          </div>

          <div className="chapter-hero__copy">
            <h1>{title}</h1>
            <p className="chapter-hero__subtitle">{subtitle}</p>
            {deck ? <p className="chapter-hero__deck">{deck}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterHero;
