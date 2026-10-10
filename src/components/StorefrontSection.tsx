"use client";
// [REFACTORED] Retain both local shop photographs with accessible selected-state controls.
import { useState } from "react";
import { restaurant } from "@/config/restaurant";
import { ResponsiveImage } from "@/components/ResponsiveImage";
const photos = [
  {
    src: "/images/hd_storefront_street.jpg",
    label: "Street & seating",
    mr: "बाहेरील बैठक",
    alt: "Swadam Swadishta storefront and outdoor seating in Baner",
  },
  {
    src: "/images/hd_storefront_counter.jpg",
    label: "Counter & kitchen",
    mr: "स्वागत काउंटर",
    alt: "The Swadam Swadishta entrance and service counter",
  },
];
export function StorefrontSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="storefront" className="section-space editorial-container">
      <header className="section-heading reveal">
        <div>
          <p className="eyebrow">05 / Your neighbourhood table</p>
          <h2 className="section-title">Pull up a chair.</h2>
        </div>
        <p className="body-copy">
          A warm welcome on Pan Card Club Road.
          <br />
          <span lang="mr">आमच्या दुकानाला नक्की भेट द्या.</span>
        </p>
      </header>
      <div className="storefront-grid reveal">
        <figure>
          <div className="image-frame storefront-photo">
            <ResponsiveImage
              src={photos[active].src}
              alt={photos[active].alt}
              sizes="(max-width: 767px) 100vw, 70vw"
            />
          </div>
          <figcaption className="photo-controls">
            {photos.map((p, i) => (
              <button
                key={p.src}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                {p.label}
                <span lang="mr">{p.mr}</span>
              </button>
            ))}
          </figcaption>
        </figure>
        <aside className="storefront-note">
          <span className="item-number">Baner / Pune</span>
          <h3>
            Find your
            <br />
            way home.
          </h3>
          <address>{restaurant.address.fullFormatted}</address>
          <a
            className="text-link"
            href={restaurant.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions ↗
          </a>
          <p className="license">{restaurant.fssaiNumber}</p>
        </aside>
      </div>
    </section>
  );
}
