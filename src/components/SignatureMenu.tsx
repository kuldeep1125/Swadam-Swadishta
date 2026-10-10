"use client";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { useModalDialog } from "@/hooks/useModalDialog";
import styles from "./Interactive.module.css";

type Category = "all" | "breakfast" | "lunch" | "evening" | "specialties";
const categories = [
  {
    id: "breakfast",
    anchor: "breakfast",
    label: "Breakfast",
    marathi: "सकाळचा नाश्ता",
    title: "A good morning, made here.",
    time: restaurant.timings.breakfast,
    photo: 0,
  },
  {
    id: "lunch",
    anchor: "thali",
    label: "Lunch Thali",
    marathi: "लंच थाळी",
    title: "A little of everything. All heart.",
    time: restaurant.timings.lunch,
    photo: 1,
  },
  {
    id: "evening",
    anchor: "snacks",
    label: "Evening Snacks",
    marathi: "संध्याकाळचे स्नॅक्स",
    title: "For the in-between moments.",
    time: restaurant.timings.evening,
    photo: 0,
  },
  {
    id: "specialties",
    anchor: "specialties",
    label: "Specialties & Drinks",
    marathi: "खास पदार्थ आणि पेये",
    title: "The flavours we come home to.",
    time: "Maharashtrian favourites",
    photo: 3,
  },
] as const;
const artworks = [
  {
    src: "/images/menu_original.jpg",
    label: "Original Full Menu Card",
    marathi: "मूळ संपूर्ण मेनू कार्ड",
  },
  {
    src: "/images/menu_flyer_vertical.png",
    label: "In-Store Vertical Flyer",
    marathi: "दुकानातील मेनू फ्लायर",
  },
  {
    src: "/images/banner_original.png",
    label: "Swadam Kitchen Banner",
    marathi: "स्वादम किचन बॅनर",
  },
];

// [FIXED] Editorial category spreads preserve every dish and the original artwork.
export function SignatureMenu() {
  const [active, setActive] = useState<Category>("all");
  const [artwork, setArtwork] = useState<(typeof artworks)[number] | null>(
    null,
  );
  const dialog = useRef<HTMLDialogElement>(null);
  useModalDialog(dialog, !!artwork);

  useEffect(() => {
    let frame = 0;
    const activate = (hash: string, immediate = false) => {
      const category = categories.find((cat) => `#${cat.anchor}` === hash);
      if (!category) return false;
      if (immediate) flushSync(() => setActive(category.id));
      else setActive(category.id);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        document.getElementById(category.anchor)?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
          block: "start",
        }),
      );
      return true;
    };
    const click = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link =
        event.target instanceof Element
          ? (event.target.closest("a[href]") as HTMLAnchorElement | null)
          : null;
      if (
        !link ||
        link.target === "_blank" ||
        link.origin !== location.origin ||
        link.pathname !== location.pathname
      )
        return;
      if (activate(link.hash, true)) {
        event.preventDefault();
        if (location.hash !== link.hash) history.pushState(null, "", link.hash);
      }
    };
    const hashChange = () => activate(location.hash);
    hashChange();
    document.addEventListener("click", click);
    window.addEventListener("hashchange", hashChange);
    window.addEventListener("popstate", hashChange);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", click);
      window.removeEventListener("hashchange", hashChange);
      window.removeEventListener("popstate", hashChange);
    };
  }, []);

  return (
    <section
      id="menu"
      className={styles.menuSection}
      aria-labelledby="menu-title"
    >
      <div
        className={`editorial-container section-space ${styles.menuIntroduction}`}
      >
        <div>
          <p className="eyebrow">02 / The kitchen menu</p>
          <h2 id="menu-title" className="section-title">
            Simple food.
            <br />
            Extraordinary swad.
          </h2>
          <p className={`font-devanagari ${styles.marathiSubtitle}`}>
            अस्सल चव, मनापासून बनवलेली.
          </p>
        </div>
        <p className={styles.menuIntroText}>
          From the first poha of the morning to a comforting thali and chai-time
          favourites. Find your little taste of Maharashtra.
        </p>
      </div>
      <div
        className={`editorial-container ${styles.filterRail}`}
        role="group"
        aria-label="Filter menu categories"
      >
        <button
          type="button"
          aria-pressed={active === "all"}
          onClick={() => setActive("all")}
        >
          All dishes <span className="font-devanagari">सर्व</span>
        </button>
        {categories.map((cat) => (
          <button
            type="button"
            key={cat.id}
            aria-pressed={active === cat.id}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
            <span className="font-devanagari">{cat.marathi}</span>
          </button>
        ))}
      </div>
      {/* [ADDED] Discoverability hint for categories outside the mobile viewport. */}
      <p className={`editorial-container ${styles.filterHint}`}>
        Swipe to explore categories →{" "}
        <span className="font-devanagari">आणखी पदार्थ पाहा</span>
      </p>
      <p className="sr-only" aria-live="polite">
        Showing{" "}
        {active === "all"
          ? "all dishes"
          : categories.find((cat) => cat.id === active)?.label}
      </p>
      {/* [ADDED] Set an honest expectation for illustrative food photography. */}
      <p className={`editorial-container ${styles.photographyNote}`}>
        Dish images are illustrative; presentation may vary.
      </p>
      {categories
        .filter((cat) => active === "all" || cat.id === active)
        .map((cat, index) => {
          const items = restaurant.menu[cat.id];
          const featured = items[cat.photo] || items[0];
          return (
            <section
              key={cat.id}
              id={cat.anchor}
              aria-labelledby={`${cat.anchor}-title`}
              className={`${styles.menuChapter} ${cat.id === "evening" ? styles.darkChapter : ""}`}
            >
              <div className="editorial-container">
                <div className={styles.chapterHeading}>
                  <div>
                    <p className="eyebrow">
                      0{categories.indexOf(cat) + 1} / {cat.label}
                    </p>
                    <h3 id={`${cat.anchor}-title`}>{cat.title}</h3>
                    <p className="font-devanagari">{cat.marathi}</p>
                  </div>
                  <span className={styles.servingTime}>{cat.time}</span>
                </div>
                <div
                  className={`${styles.chapterSpread} ${index % 2 ? styles.reverseSpread : ""}`}
                >
                  <figure className={styles.menuPhoto}>
                    <div className="image-frame">
                      <ResponsiveImage
                        src={featured.image}
                        alt={featured.name}
                        width={800}
                        height={900}
                        sizes="(max-width: 767px) 90vw, 42vw"
                      />
                    </div>
                    <figcaption>
                      <span>
                        {featured.name}{" "}
                        <span className="font-devanagari">
                          / {featured.nameMarathi}
                        </span>
                      </span>
                      <span>{featured.price}</span>
                    </figcaption>
                  </figure>
                  <div className={styles.dishList}>
                    {items.map((item) => (
                      <article key={item.id} className={styles.dish}>
                        {/* [ADDED] Every dish has a local, lazy-loaded visual alongside its name and price. */}
                        <div className={styles.dishIdentity}>
                          <div className={styles.dishThumbnail}>
                            <ResponsiveImage
                              src={item.image}
                              alt=""
                              sizes="(max-width: 767px) 72px, 96px"
                              width={128}
                              height={96}
                            />
                          </div>
                          <div className={styles.dishTop}>
                            <h4>
                              {item.name}
                              <span className="font-devanagari">
                                {item.nameMarathi}
                              </span>
                            </h4>
                            <span className={styles.price}>{item.price}</span>
                          </div>
                        </div>
                        <p>{item.description}</p>
                        {item.includes && (
                          <ul className={styles.includes}>
                            {item.includes.map((include) => (
                              <li key={include}>{include}</li>
                            ))}
                          </ul>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      <div className={`editorial-container section-space ${styles.artworks}`}>
        <div className={styles.artworkHeading}>
          <div>
            <p className="eyebrow">From our shop</p>
            <h3>Our original menu, up close.</h3>
            <p className="font-devanagari">दुकानातील मूळ मेनू आणि पोस्टर्स</p>
          </div>
          <p>Select an artwork to view it in full size.</p>
        </div>
        <div className={styles.artworkGrid}>
          {artworks.map((item) => (
            <button
              key={item.src}
              type="button"
              className={styles.artworkButton}
              onClick={() => setArtwork(item)}
              aria-haspopup="dialog"
            >
              <div className={styles.artworkThumb}>
                <ResponsiveImage
                  src={item.src}
                  alt=""
                  width={600}
                  height={360}
                  sizes="(max-width: 767px) 90vw, 30vw"
                />
              </div>
              <span>
                {item.label}
                <ArrowUpRight size={18} />
              </span>
              <small className="font-devanagari">{item.marathi}</small>
            </button>
          ))}
        </div>
      </div>
      <dialog
        ref={dialog}
        className={styles.artworkDialog}
        aria-labelledby="artwork-title"
        onClose={() => setArtwork(null)}
      >
        <div className={styles.dialogTop}>
          <h3 id="artwork-title">{artwork?.label || "Original artwork"}</h3>
          <button
            type="button"
            autoFocus
            className={styles.closeButton}
            aria-label="Close artwork viewer"
            onClick={() => setArtwork(null)}
          >
            <X />
          </button>
        </div>
        {artwork && (
          <div className={styles.fullArtwork}>
            <Image
              src={artwork.src}
              alt={`${artwork.label} — full original artwork`}
              width={1800}
              height={1800}
              sizes="95vw"
              className={styles.originalImage}
            />
          </div>
        )}
        {artwork && (
          <a
            href={artwork.src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Open original image for zoom <ArrowUpRight size={16} />
          </a>
        )}
      </dialog>
    </section>
  );
}
