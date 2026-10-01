import ChapterHero from "../components/editorial/ChapterHero";
import StatBlock from "../components/editorial/StatBlock";
import SiteFooter from "../components/layout/SiteFooter";
import SiteHeader from "../components/layout/SiteHeader";
import GrainOverlay from "../components/ui/GrainOverlay";
import RetroLabel from "../components/ui/RetroLabel";
import { chapterRoadmap, siteTitle } from "../data/chapters";

function Home() {
  return (
    <div className="app-shell app-shell--home">
      <GrainOverlay />
      <SiteHeader active="home" />

      <main className="page page--home">
        <section className="home-intro">
          <div className="home-intro__lead">
            <RetroLabel>Interactive football history</RetroLabel>
            <h1>{siteTitle}</h1>
            <p className="home-intro__subtitle">
              How Italian football became the center of world football - and
              what happened next.
            </p>
            <p className="home-intro__copy">
              This front end is built as a documentary-style archive: strong
              typography, layered paper surfaces, broad image frames and chapter
              navigation that can expand as the series grows.
            </p>
          </div>

          <div className="home-intro__stats">
            <StatBlock
              value="01"
              label="Chapter implemented"
              note="The Rise is live as the first editorial chapter."
            />
            <StatBlock
              value="05"
              label="Chapters planned"
              note="The remaining chapters stay visible as future sections."
            />
            <StatBlock
              value="90s"
              label="Editorial mood"
              note="Magazine spreads, broadcast graphics and archive textures."
            />
          </div>
        </section>

        <ChapterHero
          chapterNumber="01"
          deck="The first chapter is framed like a feature spread, ready for the supplied article and image assets."
          subtitle="How Serie A became the destination for football's biggest stars"
          title="THE RISE"
        />

        <section className="home-roadmap">
          <div className="section-heading">
            <p className="section-heading__eyebrow">Series roadmap</p>
            <h2>Five chapters, one editorial archive</h2>
          </div>

          <div className="home-roadmap__grid">
            {chapterRoadmap.map((chapter) => (
              <a
                className={`roadmap-card ${chapter.status === "implemented" ? "is-live" : "is-locked"}`}
                href={
                  chapter.status === "implemented"
                    ? `#${chapter.slug}`
                    : "#home"
                }
                key={chapter.slug}
              >
                <span className="roadmap-card__number">{chapter.number}</span>
                <strong>{chapter.title}</strong>
                <p>
                  {chapter.status === "implemented"
                    ? "Open chapter"
                    : "Coming soon"}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default Home;
