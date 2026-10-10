"use client";
// [REFACTORED] A compact bilingual editorial hero puts food and the two visit journeys first.
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown, Pause, Play } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { useServingStatus } from "@/lib/serving-status";
export function Hero() {
  const serving = useServingStatus();
  const thali = restaurant.menu.lunch[0];
  // [ADDED] A moving still photograph stays honest, pausable, and asleep offscreen.
  const photo = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [motionAvailable, setMotionAvailable] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setMotionAvailable(!preference.matches && !document.hidden);
    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(([entry]) =>
            setPhotoVisible(entry.isIntersecting),
          );
    if (photo.current) observer?.observe(photo.current);
    if (!observer) setPhotoVisible(true);
    update();
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <section
      id="hero"
      className="hero editorial-container"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="eyebrow hero-enter">Baner, Pune · Pure vegetarian</p>
        <h1 id="hero-title" className="hero-enter">
          <span lang="mr">चव महाराष्ट्राची.</span>
          <span>
            A little taste
            <br />
            of home.
          </span>
        </h1>
        <p className="hero-description hero-enter">
          Honest flavours. Warm plates. A Maharashtrian welcome, right here in
          Baner.
        </p>
        <div className="hero-actions hero-enter">
          <a className="button-primary" href="#menu">
            Explore Menu <ArrowDown size={17} />
          </a>
          <a
            className="button-secondary"
            href={restaurant.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions <ArrowUpRight size={17} />
          </a>
        </div>
        <p className="hero-status">
          <span aria-hidden="true" /> {serving}
        </p>
        <a
          className="text-link hero-whatsapp"
          href={`https://wa.me/${restaurant.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Have a question? WhatsApp us ↗
        </a>
      </div>
      <figure className="hero-photo hero-enter">
        <div
          ref={photo}
          className="image-frame hero-cinema"
          data-motion-running={!paused && motionAvailable && photoVisible}
        >
          <div className="hero-camera">
            <ResponsiveImage
              src="/images/premium_hero_thali.png"
              alt="Traditional vegetarian lunch thali with chapatis, rice, dal, vegetables and papad"
              priority
              sizes="(max-width: 767px) 100vw, 55vw"
            />
          </div>
          <button
            type="button"
            className="hero-motion-control"
            aria-label={
              !motionAvailable
                ? "Photo motion unavailable while reduced motion or background viewing is active"
                : paused
                  ? "Play photo motion"
                  : "Pause photo motion"
            }
            aria-pressed={paused}
            disabled={!motionAvailable}
            onClick={() => setPaused(!paused)}
          >
            {paused || !motionAvailable ? (
              <Play size={14} aria-hidden="true" />
            ) : (
              <Pause size={14} aria-hidden="true" />
            )}
            <span>
              {!motionAvailable
                ? "Still photo"
                : paused
                  ? "Play motion"
                  : "Pause motion"}
            </span>
          </button>
        </div>
        <figcaption>
          <span>
            <strong>{thali.name}</strong>
            <span lang="mr">{thali.nameMarathi}</span>
          </span>
          <span>
            {thali.price}
            <small>Freshly served</small>
          </span>
        </figcaption>
      </figure>
      <div className="hero-bottom">
        <span>{restaurant.taglineEnglish}</span>
        <span lang="mr">१००% शुद्ध शाकाहारी</span>
        <a href="#experience">Our story ↓</a>
      </div>
    </section>
  );
}
