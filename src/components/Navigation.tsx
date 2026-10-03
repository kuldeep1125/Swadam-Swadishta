"use client";

// [ADDED] Navigation with scroll-linked glassmorphism, responsive mobile poster-unfold menu and accessibility controls
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/config/restaurant";
import { PureVegBadge, DecorativeLeaf } from "@/components/BrandMotifs";
import { MapPin, Phone, Menu, X, ArrowUpRight } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on esc key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // [ADDED] Body scroll lock when mobile menu is active for optimal touch UX
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Menu", href: "#menu", marathi: "मेनू" },
    { label: "The Thali", href: "#thali", marathi: "लंच थाळी" },
    { label: "Evening Snacks", href: "#snacks", marathi: "संध्याकाळचे स्नॅक्स" },
    { label: "Our Story", href: "#experience", marathi: "अनुभव" },
    { label: "Storefront", href: "#storefront", marathi: "दुकान" },
    { label: "Reviews", href: "#reviews", marathi: "अभिप्राय" },
    { label: "Visit Us", href: "#location", marathi: "पत्ता" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${
          isScrolled
            ? "py-2.5 sm:py-3 px-3 sm:px-6 md:px-8"
            : "py-3 sm:py-5 px-3 sm:px-8 md:px-12"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl transition-all duration-500 rounded-full ${
            isScrolled
              ? "bg-[#FFF9EE]/95 backdrop-blur-md border border-turmeric-400/40 shadow-xl shadow-brown-900/5 px-3.5 sm:px-6 py-2 sm:py-2.5"
              : mobileMenuOpen
              ? "bg-transparent px-2 py-1"
              : "bg-transparent px-2 py-1"
          } flex items-center justify-between gap-2`}
        >
          {/* Brand Identity / Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 rounded-full flex-shrink-0"
            aria-label="Swadam Swadishta Homepage"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-brandGreen-700/20 bg-white shadow-sm flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Swadam Swadishta Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-display font-bold text-base sm:text-xl tracking-tight text-brown-900 group-hover:text-saffron-600 transition-colors">
                  SWADAM
                </span>
                <span className="font-devanagari font-bold text-xs sm:text-sm text-brandGreen-700">
                  स्वादिष्ट
                </span>
                <PureVegBadge className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-0.5 flex-shrink-0" />
              </div>
              <span className="text-[10px] font-medium tracking-widest text-brown-600 uppercase font-sans -mt-0.5 sm:-mt-1 hidden sm:block">
                चव महाराष्ट्राची • Pune
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - [ADDED] Bilingual English + Marathi touch */}
          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-2 text-xs xl:text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2 xl:px-3 py-1 rounded-full text-brown-800 hover:text-saffron-600 hover:bg-cream-200/50 transition-all duration-200 relative group whitespace-nowrap text-center"
              >
                <div className="flex flex-col items-center leading-tight">
                  <span className="font-semibold text-xs xl:text-sm">{link.label}</span>
                  <span className="text-[10px] text-brown-600 group-hover:text-brandGreen-700 font-devanagari transition-colors">{link.marathi}</span>
                </div>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-saffron-500 rounded-full group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-3 flex-shrink-0">
            {/* Quick Call Button (hidden when mobile menu is open to keep header distraction-free) */}
            <a
              href={`tel:${restaurant.phoneRaw}`}
              className={`${
                mobileMenuOpen ? "hidden" : "hidden sm:inline-flex"
              } items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-semibold text-brown-800 bg-cream-200/70 hover:bg-turmeric-400/40 border border-turmeric-400/50 transition-colors whitespace-nowrap`}
              title="Call restaurant"
            >
              <Phone className="w-3.5 h-3.5 text-brandGreen-700 flex-shrink-0" />
              <span className="hidden xl:inline">{restaurant.phone}</span>
              <span className="inline xl:hidden">Call <span className="font-devanagari text-[10px]">/ कॉल</span></span>
            </a>

            {/* Main CTA: Directions (condensed on small screens / hidden when mobile menu open to give full focus to close button) */}
            <a
              href={restaurant.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                mobileMenuOpen ? "hidden" : "inline-flex"
              } items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-saffron-600 to-saffron-500 hover:from-saffron-500 hover:to-turmeric-gold shadow-md hover:shadow-lg hover:shadow-saffron-500/20 active:scale-95 transition-all duration-200 whitespace-nowrap`}
            >
              <MapPin className="w-3.5 h-3.5 text-cream-100 flex-shrink-0" />
              <span className="hidden xs:inline sm:inline">Directions <span className="font-devanagari text-[11px] opacity-90 font-normal">/ मार्ग</span></span>
              <span className="inline xs:hidden sm:hidden">Map</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 flex-shrink-0" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-brown-800 bg-cream-200/60 hover:bg-cream-200/90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-saffron-500"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-brown-900" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-brown-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu (Maharashtrian Poster Aesthetic) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-[#FFF7E3] overflow-y-auto lg:hidden animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* [FIXED] Wrapped in min-h-full flex container so small-height screens can scroll smoothly */}
          <div className="min-h-full flex flex-col justify-between p-4 xs:p-5 sm:p-6 pt-24 pb-8 max-w-lg mx-auto w-full relative">
            {/* Subtle Decorative Elements */}
            <div className="absolute top-16 right-6 opacity-30 pointer-events-none">
              <DecorativeLeaf className="w-20 h-20 text-brandGreen-700" />
            </div>

            <div className="flex flex-col space-y-3 sm:space-y-4 w-full">
            <div className="border-b border-turmeric-400/40 pb-3 mb-1">
              <span className="font-devanagari text-2xl font-bold text-brandGreen-800">
                चव महाराष्ट्राची
              </span>
              <p className="text-xs text-brown-600 mt-1">
                Authentic Vegetarian Maharashtrian Flavours in Baner, Pune
              </p>
            </div>

            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-2 sm:py-2.5 border-b border-cream-200 text-brown-900 hover:text-saffron-600 active:scale-[0.98] transition-all min-h-[44px]"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-saffron-600 font-mono">0{idx + 1}</span>
                  <span className="font-display text-xl sm:text-2xl font-bold">{link.label}</span>
                </div>
                <span className="font-devanagari text-sm sm:text-base text-brandGreen-700 font-medium">
                  {link.marathi}
                </span>
              </a>
            ))}
          </div>

          {/* Quick Contact Actions in Mobile Menu - [ADDED] Bilingual English + Marathi */}
          <div className="mt-6 pt-4 border-t border-turmeric-400/40 flex flex-col gap-3 max-w-lg mx-auto w-full">
            <div className="flex items-center justify-between text-xs text-brown-700 font-medium">
              <span>{restaurant.address.building}, {restaurant.address.area}</span>
              <span className="text-brandGreen-700 font-bold">100% Pure Veg • १००% शुद्ध शाकाहारी</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={`tel:${restaurant.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-brown-900 text-cream-100 font-semibold text-xs xs:text-sm active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4 text-turmeric-400 flex-shrink-0" />
                <span>Call Us <span className="font-devanagari text-xs opacity-80">/ कॉल</span></span>
              </a>
              <a
                href={`https://wa.me/${restaurant.whatsappNumber}?text=Namaskar%20Swadam%20Swadishta!%20I%20would%20like%20to%20enquire%20about%20your%20menu.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-brandGreen-700 text-white font-semibold text-xs xs:text-sm active:scale-95 transition-transform"
              >
                <span>WhatsApp <span className="font-devanagari text-xs opacity-90">/ व्हॉट्सॲप</span></span>
              </a>
            </div>

            <a
              href={restaurant.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white font-bold text-sm shadow-md active:scale-95 transition-transform"
            >
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Get Directions <span className="font-devanagari opacity-90 font-normal">/ मार्ग पहा</span></span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
