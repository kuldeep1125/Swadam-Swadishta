"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/config/restaurant";
import { getServingStatus } from "./service-hours";

// [ADDED] Hydration-safe serving status, refreshed each minute and when returning to the tab.
export function useServingStatus(): string {
  const [status, setStatus] = useState("Freshly prepared in Baner, Pune");
  useEffect(() => {
    const refresh = () => setStatus(getServingStatus(new Date(), restaurant.timings));
    refresh();
    const interval = window.setInterval(refresh, 60_000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);
  return status;
}
