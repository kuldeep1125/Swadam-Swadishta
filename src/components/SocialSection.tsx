// [FIXED] Local dish illustrations lead to the actual Instagram profile without claiming a documentary feed.
import { restaurant } from "@/config/restaurant";
import { ResponsiveImage } from "@/components/ResponsiveImage";
export function SocialSection() {
  const dishes = [
    restaurant.menu.breakfast[0],
    restaurant.menu.evening[1],
    restaurant.menu.specialties[3],
  ];
  return (
    <section id="social" className="section-space editorial-container">
      <header className="section-heading reveal">
        <div>
          <p className="eyebrow">10 / Stay for another bite</p>
          <h2 className="section-title">
            From our kitchen,
            <br />
            to your feed.
          </h2>
          <p lang="mr" className="marathi-note">
            काय नवीन शिजतंय?
          </p>
        </div>
        <a
          className="text-link"
          href={restaurant.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {restaurant.instagramHandle} ↗
        </a>
      </header>
      <div className="social-strip">
        {dishes.map((d) => (
          <a
            key={d.id}
            href={restaurant.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="image-frame reveal"
            aria-label={`View ${d.name} and more on Instagram`}
          >
            <ResponsiveImage
              src={d.image}
              alt={d.name}
              sizes="(max-width: 767px) 50vw, 33vw"
            />
            <span>{d.name} ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
