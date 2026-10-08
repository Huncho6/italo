import ChapterHero from "../components/editorial/ChapterHero";
import ChapterSection from "../components/editorial/ChapterSection";
import ImagePlaceholder from "../components/editorial/ImagePlaceholder";
import PhotoCollage from "../components/editorial/PhotoCollage";
import SiteFooter from "../components/layout/SiteFooter";
import SiteHeader from "../components/layout/SiteHeader";
import GrainOverlay from "../components/ui/GrainOverlay";
import SectionDivider from "../components/ui/SectionDivider";
import StatBlock from "../components/editorial/StatBlock";
import { chapter4 } from "../data/chapter4";

function Chapter4() {
  return (
    <div className="app-shell app-shell--chapter app-shell--chapter-four">
      <GrainOverlay />
      <SiteHeader active="chapter-4" />

      <main className="page page--chapter">
        <ChapterHero
          chapterNumber={chapter4.number}
          deck={chapter4.deck}
          subtitle={chapter4.subtitle}
          title={chapter4.title}
        />

        <SectionDivider label="Chapter 4 begins" />

        {chapter4.sections.map((section, index) => {
          const isEven = index % 2 === 1;

          return (
            <ChapterSection
              deck={section.deck}
              eyebrow={section.eyebrow}
              key={section.id}
              title={section.title}
              variant={isEven ? "alt" : "default"}
            >
              <div
                className={`chapter-section__grid ${isEven ? "is-reversed" : ""}`}
              >
                <div className="chapter-section__body">
                  {section.body?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.stats ? (
                    <div className="chapter-section__stats">
                      {section.stats.map((stat) => (
                        <StatBlock key={stat.label} {...stat} />
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="chapter-section__aside">
                  {section.media ? (
                    <div className="chapter-section__media">
                      {section.media.map((item) => (
                        <ImagePlaceholder
                          key={item.id || item.src || item.caption}
                          {...item}
                        />
                      ))}
                    </div>
                  ) : null}

                  {section.collage ? (
                    <PhotoCollage items={section.collage} />
                  ) : null}
                </div>
              </div>
            </ChapterSection>
          );
        })}
      </main>

      <SiteFooter />
    </div>
  );
}

export default Chapter4;
