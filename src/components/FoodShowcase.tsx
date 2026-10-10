// [REFACTORED] A varied photographic gallery uses menu data as the source of prices and names.
import { restaurant } from "@/config/restaurant";
import { ResponsiveImage } from "@/components/ResponsiveImage";
export function FoodShowcase() {
  const dishes = [
    restaurant.menu.breakfast[0],
    restaurant.menu.lunch[0],
    restaurant.menu.breakfast[2],
    restaurant.menu.specialties[4],
  ];
  return (
    <section
      id="showcase"
      className="section-space editorial-container"
      aria-labelledby="gallery-title"
    >
      <header className="section-heading reveal">
        <div>
          <p className="eyebrow">04 / From our kitchen</p>
          <h2 id="gallery-title" className="section-title">
            Made to make
            <br />
            <em>you hungry.</em>
          </h2>
        </div>
        <p lang="mr" className="marathi-note">
          अस्सल चव. प्रत्येक घासात.
        </p>
      </header>
      <div className="food-gallery">
        {dishes.map((d, i) => (
          <figure
            key={d.id}
            className={`gallery-item gallery-item-${i} reveal`}
          >
            <div className="image-frame">
              <ResponsiveImage
                src={d.image}
                alt={d.name}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
            <figcaption>
              <span>
                <strong>{d.name}</strong>
                <span lang="mr">{d.nameMarathi}</span>
              </span>
              <span>{d.price}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
