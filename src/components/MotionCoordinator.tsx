"use client";

import { useEffect } from "react";

// [ADDED] Progressive section entrances with live reduced-motion preference support.
export function MotionCoordinator() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    const configure = () => {
      observer?.disconnect();
      elements.forEach((element) =>
        element.classList.remove("is-pending", "is-visible"),
      );
      if (preference.matches || !window.IntersectionObserver) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) return;
            target.classList.remove("is-pending");
            target.classList.add("is-visible");
            observer?.unobserve(target);
          });
        },
        { threshold: 0.08 },
      );
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight)
          element.classList.add("is-pending");
        observer?.observe(element);
      });
    };
    configure();
    preference.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
      elements.forEach((element) =>
        element.classList.remove("is-pending", "is-visible"),
      );
    };
  }, []);
  // [ADDED] Event-driven photo depth: no scroll hijacking or permanently running frame loop.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    const photos = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-photo]"),
    );
    const visible = new Set<HTMLElement>();
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const paint = () => {
      frame = 0;
      visible.forEach((photo) => {
        const bounds = photo.parentElement!.getBoundingClientRect();
        const progress = Math.max(
          -1,
          Math.min(
            1,
            (window.innerHeight / 2 - bounds.top - bounds.height / 2) /
              window.innerHeight,
          ),
        );
        photo.style.setProperty(
          "--photo-depth",
          `${(progress * 12).toFixed(2)}px`,
        );
      });
    };
    const requestPaint = () => {
      if (!frame && visible.size) frame = requestAnimationFrame(paint);
    };
    const configure = () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      frame = 0;
      visible.clear();
      photos.forEach((photo) => photo.style.removeProperty("--photo-depth"));
      if (
        reducedMotion.matches ||
        !desktop.matches ||
        document.hidden ||
        !window.IntersectionObserver
      )
        return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const photo = target as HTMLElement;
          if (isIntersecting) visible.add(photo);
          else {
            visible.delete(photo);
            photo.style.removeProperty("--photo-depth");
          }
        });
        requestPaint();
      });
      photos.forEach((photo) => observer?.observe(photo));
    };
    configure();
    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint);
    reducedMotion.addEventListener("change", configure);
    desktop.addEventListener("change", configure);
    document.addEventListener("visibilitychange", configure);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", requestPaint);
      reducedMotion.removeEventListener("change", configure);
      desktop.removeEventListener("change", configure);
      document.removeEventListener("visibilitychange", configure);
      photos.forEach((photo) => photo.style.removeProperty("--photo-depth"));
    };
  }, []);
  return null;
}
