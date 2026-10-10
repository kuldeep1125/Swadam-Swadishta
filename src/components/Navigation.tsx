"use client";
import { useEffect, useRef, useState } from "react";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { useModalDialog } from "@/hooks/useModalDialog";
import styles from "./Interactive.module.css";

// [FIXED] Four clear destinations and native modal navigation.
const links = [
  { label: "Menu", href: "#menu", marathi: "मेनू" },
  { label: "Our Story", href: "#experience", marathi: "आमची गोष्ट" },
  { label: "Bulk Orders", href: "#bulk-orders", marathi: "मोठ्या ऑर्डर्स" },
  { label: "Visit Us", href: "#location", marathi: "भेट द्या" },
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  useModalDialog(dialog, open);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = "";
      // [FIXED] Choose the latest passed section by page position, independently of link order.
      let latestTop = -Infinity;
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;
        const top = section.getBoundingClientRect().top;
        if (top <= window.innerHeight * 0.35 && top > latestTop) {
          current = link.href;
          latestTop = top;
        }
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
      onScroll();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <header className={styles.header}>
        <div className={`editorial-container ${styles.headerInner}`}>
          <a
            href="#hero"
            className={styles.brand}
            aria-label={`${restaurant.name} — home`}
          >
            <ResponsiveImage
              src="/images/logo.png"
              alt=""
              width={48}
              height={48}
              sizes="48px"
              priority
            />
            <span>
              <strong>{restaurant.brandNameEnglish}</strong>
              <span className="font-devanagari">
                {restaurant.brandNameMarathi}
              </span>
            </span>
          </a>
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className={`button-primary ${styles.headerDirections}`}
            href={restaurant.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions <ArrowUpRight size={16} />
          </a>
          <button
            className={styles.menuToggle}
            type="button"
            aria-label="Open navigation"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      <dialog
        id="mobile-navigation"
        ref={dialog}
        className={styles.navigationDialog}
        aria-labelledby="navigation-title"
        onClose={() => setOpen(false)}
      >
        <div className={styles.dialogTop}>
          <span className="eyebrow" id="navigation-title">
            Explore Swadam
          </span>
          <button
            type="button"
            autoFocus
            className={styles.closeButton}
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className={styles.mobileNav}>
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span className={styles.navNumber}>0{index + 1}</span>
              <span>
                {link.label}
                <small className="font-devanagari">{link.marathi}</small>
              </span>
              <ArrowUpRight size={22} />
            </a>
          ))}
        </nav>
        <p className={styles.mobileAddress}>
          {restaurant.address.building}, {restaurant.address.area},{" "}
          {restaurant.address.city}
        </p>
        <a
          className="button-primary"
          href={restaurant.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Get Directions <ArrowUpRight size={18} />
        </a>
        <a className={styles.mobilePhone} href={`tel:${restaurant.phoneRaw}`}>
          {restaurant.phone}
        </a>
      </dialog>
    </>
  );
}
