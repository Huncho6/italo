import { chapterRoadmap, siteTitle } from "../../data/chapters";

function SiteHeader({ active = "home" }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#home">
          <span className="site-brand__title">{siteTitle}</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a className={active === "home" ? "is-active" : ""} href="#home">
            Intro
          </a>
          {chapterRoadmap.map((chapter) => (
            <a
              aria-current={active === chapter.slug ? "page" : undefined}
              className={
                active === chapter.slug
                  ? "is-active"
                  : chapter.status === "coming-soon"
                    ? "is-disabled"
                    : ""
              }
              href={
                chapter.status === "implemented" ? `#${chapter.slug}` : "#home"
              }
              key={chapter.slug}
            >
              {chapter.number} {chapter.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
