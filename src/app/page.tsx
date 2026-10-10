// [REFACTORED] Bilingual editorial home page with every original restaurant section.
import React from "react";
import { MotionCoordinator } from "@/components/MotionCoordinator";
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
  // [ADDED] Accessible landmark id="main-content" and role="main" for WCAG compliance
  return (
    <>
      <Navigation />
      <MotionCoordinator />
      <main id="main-content" role="main" className="min-h-screen">
        {/* Photo-led welcome and menu / directions actions */}
        <Hero />

        {/* Pausable food marquee */}
        <FoodMarquee />

        {/* Editorial Introduction: "Some food reminds you of home." */}
        <EditorialIntro />

        {/* Signature Menu Experience: Breakfast -> Lunch Thali -> Evening Snacks */}
        <SignatureMenu />

        {/* Today's Craving / Featured Dish */}
        <FeaturedDish />

        {/* Cinematic Food Showcase: "Made to make you hungry." */}
        <FoodShowcase />

        {/* Configured daily service windows */}
        <WeAreOpen />

        {/* Authentic Storefront: Shop No. 5, 34 Western Pavilion, Baner, Pune */}
        <StorefrontSection />

        {/* Interactive restaurant values */}
        <SwadamExperience />

        {/* Five-chapter interactive story with native scrolling */}
        <StickyStory />

        {/* Bulk Orders CTA Section */}
        <BulkOrders />

        {/* Google Maps reviews destination */}
        <ReviewsSection />

        {/* Social / Instagram Showcase: @swadamswadishta */}
        <SocialSection />

        {/* Visit details and lazy-loaded Google map */}
        <LocationSection />

        {/* Contact & Enquiry Form */}
        <EnquirySection />

        {/* Final High-Impact CTA & Substantial Footer */}
        <Footer />

        {/* Compact mobile menu and directions actions */}
        <FloatingCTA />
      </main>
    </>
  );
}
