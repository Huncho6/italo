function ChapterSection({
  children,
  deck,
  eyebrow,
  title,
  variant = "default",
}) {
  return (
    <section className={`chapter-section chapter-section--${variant}`}>
      <header className="chapter-section__header">
        <p className="chapter-section__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {deck ? <p className="chapter-section__deck">{deck}</p> : null}
      </header>

      {children ? (
        <div className="chapter-section__content">{children}</div>
      ) : null}
    </section>
  );
}

export default ChapterSection;
