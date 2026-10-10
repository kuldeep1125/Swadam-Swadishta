// [REFACTORED] A spacious editorial introduction retains the complete bilingual restaurant philosophy.
import { restaurant } from "@/config/restaurant";
export function EditorialIntro() {
  return (
    <section id="experience" className="section-space editorial-container">
      <div className="intro-grid reveal">
        <p className="eyebrow">
          01 / A familiar feeling
          <br />
          <span lang="mr">घरची चव</span>
        </p>
        <div>
          <h2 className="section-title">
            Some food fills you up.
            <br />
            <em>Some brings you home.</em>
          </h2>
          <p lang="mr" className="marathi-note">
            काही अन्न पोट भरतं, काही अन्न घराची आठवण करून देतं.
          </p>
          <p className="body-copy">
            Swadam Swadishta brings the familiar flavours of Maharashtra to
            Baner, serving vegetarian breakfast, lunch and evening favourites
            fresh and warm.
          </p>
        </div>
      </div>
      <div className="intro-features">
        {restaurant.features.map((f, i) => (
          <article className="reveal" key={f.title}>
            <span className="item-number">0{i + 1}</span>
            <h3>{f.title}</h3>
            <p lang="mr" className="marathi-note">
              {f.titleMarathi}
            </p>
            <p>{f.description}</p>
            <p lang="mr" className="feature-marathi">
              {f.descriptionMarathi}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
