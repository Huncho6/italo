import { chapterRoadmap, siteTitle } from "../../data/chapters";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__kicker">{siteTitle}</p>
          <p className="site-footer__copy">
            A long-form football history publication about the rise of Serie A,
            built with a restrained editorial frame.
          </p>
        </div>

        <p className="site-footer__roadmap">
          {chapterRoadmap.map((chapter) => chapter.title).join(" / ")}
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
