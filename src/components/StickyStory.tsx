"use client";
// [REFACTORED] A five-chapter story keeps native scrolling and explicit keyboard-friendly controls.
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { restaurant } from "@/config/restaurant";
const stages = [
  {
    word: "Swad",
    mr: "स्वाद",
    subtitle: "The taste that defines us",
    desc: "Rooted in authentic homemade Maharashtrian seasonings, balancing spicy, tangy and savoury flavours.",
    // [FIXED] Story chapters share the configured dish photography.
    image: restaurant.featuredDish.image,
    alt: "Misal Pav",
  },
  {
    word: "Masala",
    mr: "मसाला",
    subtitle: "The soul of Marathi spice",
    desc: "Aromatic goda masala, roasted dry coconut, mustard and carom seeds. The familiar fragrance of a Maharashtrian kitchen.",
    image: restaurant.menu.evening[1].image,
    alt: "Kanda Bhaji",
  },
  {
    word: "Garma-garam",
    mr: "गरमा-गरम",
    subtitle: "From the kadhai to your plate",
    desc: "Hot breakfast, wholesome lunch and warm evening snacks, freshly prepared through the day.",
    image: restaurant.menu.evening[0].image,
    alt: "Wada Pav",
  },
  {
    word: "Maharashtra",
    mr: "महाराष्ट्र",
    subtitle: "Culture on a plate",
    desc: "From the breakfast streets of Pune to the thali traditions of Maharashtra. Pure vegetarian comfort in every bite.",
    image: restaurant.menu.lunch[0].image,
    alt: "Lunch Thali",
  },
  {
    word: "Swadam",
    mr: "स्वादिष्ट",
    subtitle: "The taste of Maharashtra",
    desc: restaurant.address.fullFormatted,
    image: "/images/hd_storefront_street.jpg",
    alt: "Swadam Swadishta storefront",
  },
];
export function StickyStory() {
  const [active, setActive] = useState(0);
  const s = stages[active];
  return (
    <section
      id="story"
      className="dark-section section-space story-section"
      aria-labelledby="story-title"
    >
      <div className="editorial-container">
        <div className="story-top">
          <p className="eyebrow">07 / Our story, in five flavours</p>
          <div className="story-arrows">
            <button
              aria-label="Previous story stage"
              disabled={active === 0}
              onClick={() => setActive(active - 1)}
            >
              <ChevronLeft />
            </button>
            <button
              aria-label="Next story stage"
              disabled={active === 4}
              onClick={() => setActive(active + 1)}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="story-grid">
          <div className="story-copy" aria-live="polite">
            <span className="item-number">Chapter 0{active + 1} / 05</span>
            <h2
              key={`${active}-title`}
              id="story-title"
              className="section-title story-chapter-enter"
            >
              {s.word}
            </h2>
            <p
              key={`${active}-marathi`}
              lang="mr"
              className="story-marathi story-chapter-enter"
            >
              {s.mr}
            </p>
            <h3 key={`${active}-subtitle`} className="story-chapter-enter">
              {s.subtitle}
            </h3>
            <p key={`${active}-description`} className="story-chapter-enter">
              {s.desc}
            </p>
          </div>
          <figure className="story-photo image-frame">
            {/* [ADDED] Chapter changes are finite; the image pan is scoped to visible desktop frames. */}
            <div className="photo-depth" data-scroll-photo>
              <div key={s.image} className="story-image-enter">
                <ResponsiveImage
                  key={s.image}
                  src={s.image}
                  alt={s.alt}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
            </div>
          </figure>
        </div>
        <div className="story-rail" role="group" aria-label="Story chapters">
          {stages.map((stage, i) => (
            <button
              key={stage.word}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              <span>0{i + 1}</span>
              {stage.word}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
