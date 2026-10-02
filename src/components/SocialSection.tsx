"use client";

// [ADDED] Social Section: Editorial Instagram showcase connecting visitors to @swadamswadishta with authentic visual assets
import React from "react";
import Image from "next/image";
import { restaurant } from "@/config/restaurant";
import { BrushUnderline, DecorativeLeaf } from "@/components/BrandMotifs";
import { Instagram, ArrowUpRight } from "lucide-react";

export function SocialSection() {
  const posts = [
    {
      image: "/images/real_storefront_street.png",
      caption: "Shop No. 5, 34 Western Pavilion, Baner. Welcoming Pune food lovers every morning! ✨",
      tag: "#SwadamSwadishta",
    },
    {
      image: "/images/hd_lunch_thali.jpg",
      caption: "Proper Maharashtrian Lunch Thali at ₹110. Simple food, big swad! 🍛",
      tag: "#PuneThali",
    },
    {
      image: "/images/hd_misal_pav.jpg",
      caption: "Garma-garam Misal Pav with spicy rassa and fresh farsan. 🌶️",
      tag: "#MisalPav",
    },
    {
      image: "/images/hd_tea.jpg",
      caption: "Cutting chai & evening cravings on Pan Card Club Road. ☕",
      tag: "#ChaiLovers",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-cream-100 overflow-hidden" aria-label="Social Media Highlights">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-turmeric-400/40">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-turmeric-400/50 text-xs font-bold text-brown-800 mb-2">
              <Instagram className="w-3.5 h-3.5 text-saffron-600" />
              <span>FOLLOW ALONG ON INSTAGRAM</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-brown-900 tracking-tight">
              See what&apos;s cooking.
            </h2>
            <span className="font-devanagari text-xl font-bold text-brandGreen-700 block mt-1">
              आमच्यासोबत कनेक्ट व्हा • {restaurant.instagramHandle}
            </span>
          </div>

          <a
            href={restaurant.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {restaurant.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Editorial Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href={restaurant.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl overflow-hidden bg-white border border-turmeric-400/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              <div className="relative w-full h-64 overflow-hidden bg-cream-200">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-saffron-600 shadow-lg">
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-brown-700 line-clamp-2 font-sans">
                  {post.caption}
                </p>
                <div className="mt-3 pt-2 border-t border-cream-200 flex items-center justify-between text-[11px] font-bold text-saffron-600">
                  <span>{post.tag}</span>
                  <span className="text-brown-500 group-hover:text-saffron-600 transition-colors">View ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
