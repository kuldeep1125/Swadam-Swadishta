"use client";

// [ADDED] Food Showcase: Cinematic gallery with parallax depth, oversized authentic image crops and appetizing food storytelling
import React from "react";
import Image from "next/image";
import { BrushUnderline, DecorativeLeaf, SpiceSparkle } from "@/components/BrandMotifs";

export function FoodShowcase() {
  const showcaseItems = [
    {
      title: "Spicy Misal Pav",
      marathi: "झणझणीत मिसळ पाव",
      desc: "Pune's signature spicy moth bean curry crowned with crunchy farsan and served with buttery pav.",
      image: "/images/hd_misal_pav.jpg",
      tag: "Pune Icon",
      price: "₹90",
    },
    {
      title: "Poha & Peanuts",
      marathi: "कांदे पोहे",
      desc: "Fluffy flattened rice with roasted peanuts, fresh coriander, mustard temper, and lemon.",
      image: "/images/hd_poha_plate.jpg",
      tag: "Morning Must",
      price: "₹40",
    },
    {
      title: "Full Lunch Thali",
      marathi: "महाराष्ट्रीयन लंच थाळी",
      desc: "Complete meal with 3 Chapatis, 2 Sabjis, Steamed Rice, Dal, Papad, and Pickle.",
      image: "/images/hd_lunch_thali.jpg",
      tag: "Wholesome Feast",
      price: "₹110",
    },
    {
      title: "Pure Ghee Sheera",
      marathi: "रवा शिरा",
      desc: "Warm golden semolina dessert slow-cooked in pure desi ghee with cashews and saffron.",
      image: "/images/hd_sheera.jpg",
      tag: "Sweet Craving",
      price: "₹40",
    },
    {
      title: "Kadak Cutting Tea",
      marathi: "गरमा-गरम चहा",
      desc: "Steaming aromatic tea brewed with ginger and cardamom, the ultimate partner to evening snacks.",
      image: "/images/hd_tea.jpg",
      tag: "Chai Time",
      price: "Authentic",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-cream-100 overflow-hidden" aria-label="Food Showcase">
      
      {/* Decorative leaf motifs */}
      <div className="absolute top-12 left-6 opacity-30 pointer-events-none">
        <DecorativeLeaf className="w-16 h-16 text-brandGreen-700" />
      </div>
      <div className="absolute bottom-12 right-8 opacity-25 pointer-events-none">
        <DecorativeLeaf className="w-24 h-24 text-saffron-500 rotate-45" />
      </div>

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 border border-turmeric-400/50 text-xs font-bold text-brown-800">
            <SpiceSparkle className="w-3.5 h-3.5 text-saffron-600" />
            <span>AUTHENTIC VISUAL GALLERY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-brown-900 tracking-tight leading-tight">
            Made to make you hungry.
          </h2>

          <div className="w-36 mx-auto">
            <BrushUnderline className="w-full h-3 text-turmeric-gold" />
          </div>

          <p className="text-base sm:text-lg text-brown-700 font-sans leading-relaxed">
            Every dish at Swadam Swadishta is made fresh upon order — using traditional Maharashtrian seasonings, pure desi ingredients, and warmth.
          </p>
        </div>

        {/* Cinematic Grid of Real Food Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden bg-white border border-turmeric-400/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image Frame with Zoom Effect */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-cream-200/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brown-900 shadow-sm border border-turmeric-400/40">
                  {item.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-brown-900/90 text-turmeric-gold px-3.5 py-1 rounded-xl text-lg font-black font-display shadow-md backdrop-blur-sm">
                  {item.price}
                </div>
              </div>

              {/* Dish Meta */}
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display text-2xl font-bold text-brown-900 group-hover:text-saffron-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-devanagari text-base font-bold text-brandGreen-700">
                    {item.marathi}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-brown-600 leading-relaxed font-sans mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
