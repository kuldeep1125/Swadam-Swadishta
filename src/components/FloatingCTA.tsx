"use client";
import { ArrowUpRight, Utensils } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import styles from "./Interactive.module.css";
// [FIXED] Two primary journeys with safe-area spacing on mobile.
export function FloatingCTA() {
  return (
    <nav className={styles.actionBar} aria-label="Quick actions">
      <a href="#menu">
        <Utensils size={17} /> Menu{" "}
        <span className="font-devanagari">मेनू</span>
      </a>
      <a
        href={restaurant.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions <span className="font-devanagari">मार्ग</span>
        <ArrowUpRight size={18} />
      </a>
    </nav>
  );
}
