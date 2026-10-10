// [REFACTORED] One dramatic forest-green feature replaces competing decorative elements.
import { restaurant } from "@/config/restaurant";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { ArrowUpRight } from "lucide-react";
export function FeaturedDish() {
  const d = restaurant.featuredDish;
  return (
    <section
      id="featured"
      className="dark-section featured section-space"
      aria-labelledby="featured-title"
    >
      <div className="editorial-container feature-grid">
        <div className="feature-copy reveal">
          <p className="eyebrow">03 / The Pune favourite</p>
          <p lang="mr" className="feature-marathi-title">
            {d.nameMarathi}
          </p>
          <h2 id="featured-title" className="section-title">
            A little fire.
            <br />A lot of flavour.
          </h2>
          <p>{d.description}</p>
          <div className="feature-price">
            <strong>{d.name}</strong>
            <span>{d.price}</span>
          </div>
          <p lang="mr" className="marathi-note">
            {d.taglineMarathi}
          </p>
          <a className="button-secondary" href="#breakfast">
            Explore breakfast <ArrowUpRight size={17} />
          </a>
        </div>
        <figure className="feature-photo image-frame reveal">
          {/* [ADDED] Separate depth and reveal layers avoid conflicting image transforms. */}
          <div className="feature-camera photo-depth" data-scroll-photo>
            <ResponsiveImage
              src={d.image}
              alt="Misal Pav with spicy sprouted matki rassa, crunchy farsan, onions, lemon and pav"
              sizes="(max-width: 767px) 100vw, 60vw"
            />
          </div>
          <figcaption>Rassa. Farsan. Pav. Pure Maharashtra.</figcaption>
        </figure>
      </div>
    </section>
  );
}
