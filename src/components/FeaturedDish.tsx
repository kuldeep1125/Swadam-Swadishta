"use client";

// [ADDED] Featured Dish / Today's Craving Section: Dynamically loaded from central configuration with subtle plate rotation and spice storytelling
import React from "react";
import Image from "next/image";
import { restaurant } from "@/config/restaurant";
import { BrushUnderline, DecorativeLeaf, SpiceSparkle, PureVegBadge } from "@/components/BrandMotifs";
import { Flame, Clock, ArrowRight } from "lucide-react";

export function FeaturedDish() {
  const dish = restaurant.featuredDish;

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-cream-50 overflow-hidden border-b border-turmeric-400/40" aria-label="Today's Featured Craving">
      
      {/* Decorative leaf motifs */}
      <div className="absolute top-1/2 -left-8 -translate-y-1/2 opacity-25 pointer-events-none">
        <DecorativeLeaf className="w-32 h-32 text-brandGreen-700 -rotate-45" />
      </div>

      <div className="mx-auto max-w-6xl">
        
        {/* Main Card */}
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-white via-cream-100 to-cream-200 border-2 border-turmeric-400 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative (Col 1-7) */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-50 border border-saffron-300 text-xs font-bold text-saffron-700">
                <Flame className="w-3.5 h-3.5 text-saffron-600" />
                <span>TODAY&apos;S CRAVING • {dish.category}</span>
              </div>

              <div className="space-y-1">
                <h2 className="font-display text-4xl sm:text-6xl font-black text-brown-900 tracking-tight leading-tight">
                  {dish.name}
                </h2>
                <span className="font-devanagari text-2xl sm:text-3xl font-bold text-brandGreen-800 block">
                  {dish.nameMarathi}
                </span>
                <div className="w-36">
                  <BrushUnderline className="w-full h-3 text-turmeric-gold" />
                </div>
              </div>

              <p className="font-display text-xl sm:text-2xl font-bold text-saffron-600">
                {dish.tagline}
              </p>

              <p className="text-sm sm:text-base text-brown-700 font-sans leading-relaxed">
                {dish.description}
              </p>

              <div className="flex items-baseline gap-4 pt-2">
                <span className="text-xs font-mono text-brown-500 font-bold uppercase">Price</span>
                <span className="font-display text-5xl font-black text-brown-900">
                  {dish.price}
                </span>
                <span className="text-xs text-brandGreen-700 font-semibold bg-brandGreen-50 px-2.5 py-1 rounded-md border border-brandGreen-200">
                  Freshly Prepared
                </span>
              </div>

              <div className="pt-4">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brown-900 hover:bg-brown-800 text-cream-100 font-bold text-sm shadow-md active:scale-95 transition-all group"
                >
                  <span>Order at Counter</span>
                  <ArrowRight className="w-4 h-4 text-turmeric-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right Interactive Image (Col 8-12) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[380px] aspect-square rounded-3xl overflow-hidden bg-white p-4 border-2 border-turmeric-400 shadow-2xl group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-cream-100">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-6 right-6 bg-gradient-to-r from-saffron-600 to-turmeric-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {dish.badge}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
