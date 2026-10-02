// [ADDED] Main Home Page: Continuous interactive visual journey for Swadam Swadishta
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FoodMarquee } from "@/components/FoodMarquee";
import { EditorialIntro } from "@/components/EditorialIntro";
import { SignatureMenu } from "@/components/SignatureMenu";
import { FeaturedDish } from "@/components/FeaturedDish";
import { FoodShowcase } from "@/components/FoodShowcase";
import { WeAreOpen } from "@/components/WeAreOpen";
import { StorefrontSection } from "@/components/StorefrontSection";
import { SwadamExperience } from "@/components/SwadamExperience";
import { StickyStory } from "@/components/StickyStory";
import { BulkOrders } from "@/components/BulkOrders";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SocialSection } from "@/components/SocialSection";
import { LocationSection } from "@/components/LocationSection";
import { EnquirySection } from "@/components/EnquirySection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-cream-bg selection:bg-saffron-500 selection:text-white pb-16 sm:pb-20 lg:pb-0">
      {/* Morphing Sticky Glass Navigation */}
      <Navigation />

      {/* Hero: The Living Maharashtrian Food Poster */}
      <Hero />

      {/* Dynamic Direction-Sensitive Food Marquee */}
      <FoodMarquee />

      {/* Editorial Introduction: "Some food reminds you of home." */}
      <EditorialIntro />

      {/* Signature Menu Experience: Breakfast -> Lunch Thali -> Evening Snacks */}
      <SignatureMenu />

      {/* Today's Craving / Featured Dish */}
      <FeaturedDish />

      {/* Cinematic Food Showcase: "Made to make you hungry." */}
      <FoodShowcase />

      {/* "WE ARE OPEN" Moment: Direct translation of authentic storefront promotional artwork */}
      <WeAreOpen />

      {/* Authentic Storefront: Shop No. 5, 34 Western Pavilion, Baner, Pune */}
      <StorefrontSection />

      {/* The Swadam Experience: Giant Typographic Rhythm */}
      <SwadamExperience />

      {/* Sticky Story: Full-screen Pinned Visual Sequence */}
      <StickyStory />

      {/* Bulk Orders CTA Section */}
      <BulkOrders />

      {/* Verified Google Reviews & Trust */}
      <ReviewsSection />

      {/* Social / Instagram Showcase: @swadamswadishta */}
      <SocialSection />

      {/* Location & Custom Stylized SVG Map */}
      <LocationSection />

      {/* Contact & Enquiry Form */}
      <EnquirySection />

      {/* Final High-Impact CTA & Substantial Footer */}
      <Footer />

      {/* Floating Magnetic CTA (Desktop) & Sticky Bottom Bar (Mobile) */}
      <FloatingCTA />
    </main>
  );
}
