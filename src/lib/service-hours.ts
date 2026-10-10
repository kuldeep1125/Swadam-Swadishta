import type { RestaurantConfig } from "../config/restaurant";

type Timings = RestaurantConfig["timings"];

function clockMinutes(clock: string): number | null {
  const match = clock.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour < 1 || hour > 12 || minute > 59) return null;
  return (hour % 12 + (match[3].toUpperCase() === "PM" ? 12 : 0)) * 60 + minute;
}

// [ADDED] Restaurant-local service status from published configuration, including preparation gaps.
export function getServingStatus(date: Date, timings: Timings): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(date);
  const minutes = Number(parts.find((part) => part.type === "hour")?.value) * 60
    + Number(parts.find((part) => part.type === "minute")?.value);
  const windows = (["breakfast", "lunch", "evening"] as const).map((key) => {
    const [startLabel, endLabel] = timings[key].split(/\s*[–—-]\s*/);
    return {
      label: key === "evening" ? "Evening snacks" : key === "lunch" ? "Lunch" : "Breakfast",
      startLabel, start: clockMinutes(startLabel ?? ""), end: clockMinutes(endLabel ?? ""),
    };
  });
  if (windows.some((window) => window.start === null || window.end === null)) return "See our daily serving hours";
  const current = windows.find((window) => minutes >= window.start! && minutes < window.end!);
  if (current) return `${current.label} ${current.label === "Evening snacks" ? "are" : "is"} being served`;
  const next = windows.find((window) => minutes < window.start!);
  if (next) return `${next.label} from ${next.startLabel}`;
  return `${windows[0].label} from ${windows[0].startLabel} tomorrow`;
}
