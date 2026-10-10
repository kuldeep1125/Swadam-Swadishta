"use client";
// [FIXED] Continuous motion has an explicit pause control and a reduced-motion fallback.
import { useState } from "react";
import { Pause, Play } from "lucide-react";
const names = [
  "Poha / पोहे",
  "Misal Pav / मिसळ पाव",
  "Lunch Thali / थाळी",
  "Wada Pav / वडा पाव",
  "Cutting Chai / चहा",
];
export function FoodMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="food-marquee"
      role="group"
      aria-label="Maharashtrian favourites"
    >
      <div className={`marquee-track ${paused ? "paused" : ""}`}>
        <div>
          {names.map((n) => (
            <span key={n}>
              {n}
              <i aria-hidden="true">✳</i>
            </span>
          ))}
        </div>
        <div aria-hidden="true">
          {names.map((n) => (
            <span key={n}>
              {n}
              <i>✳</i>
            </span>
          ))}
        </div>
      </div>
      <button
        className="marquee-control"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Play food marquee" : "Pause food marquee"}
        aria-pressed={paused}
      >
        {paused ? <Play size={16} /> : <Pause size={16} />}
      </button>
    </div>
  );
}
