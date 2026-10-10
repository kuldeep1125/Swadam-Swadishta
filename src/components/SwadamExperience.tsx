"use client";
// [REFACTORED] Native accordion buttons make the six original values readable on every screen.
import { useState } from "react";
const pillars = [
  [
    "Fresh",
    "ताजे",
    "Prepared hot and served right for the day’s cravings.",
    "कढईतून थेट ताटात गरमा-गरम जेवण",
  ],
  [
    "Warm",
    "आपुलकी",
    "Heartfelt hospitality where every guest is welcomed like family.",
    "घरासारखी आपुलकी आणि प्रेम",
  ],
  [
    "Quick",
    "त्वरित",
    "Prompt service for your busy mornings and lunch hours.",
    "कामाच्या घाईतही झटपट व दर्जेदार सेवा",
  ],
  [
    "Veg",
    "शुद्ध शाकाहारी",
    "A 100% pure vegetarian kitchen, with fresh ingredients.",
    "१००% शुद्ध शाकाहारी",
  ],
  [
    "Local",
    "स्थानिक",
    "Rooted in Baner, Pune, feeding neighbours and food lovers.",
    "बाणेर, पुणे",
  ],
  [
    "Maharashtrian",
    "महाराष्ट्रीयन",
    "Authentic regional taste and time-honoured culinary identity.",
    "पिढ्यानपिढ्या चालत आलेली अस्सल मराठमोळी चव",
  ],
];
export function SwadamExperience() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="essence" className="essence-section section-space">
      <div className="editorial-container essence-grid">
        <header className="reveal">
          <p className="eyebrow">06 / The Swadam essence</p>
          <h2 className="section-title">
            Simple food.
            <br />
            <em>Big swad.</em>
          </h2>
          <p lang="mr" className="marathi-note">
            चव, स्वच्छता आणि आपुलकी
          </p>
        </header>
        <div className="essence-list">
          {pillars.map(([name, mr, desc, mrDesc], i) => (
            <article key={name} className="essence-item">
              <button
                aria-expanded={active === i}
                aria-controls={`value-${i}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="item-number">0{i + 1}</span>
                <span>
                  {name}
                  <small lang="mr">{mr}</small>
                </span>
                <span aria-hidden="true">{active === i ? "−" : "+"}</span>
              </button>
              <div id={`value-${i}`} hidden={active !== i}>
                <p>{desc}</p>
                <p lang="mr">{mrDesc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
