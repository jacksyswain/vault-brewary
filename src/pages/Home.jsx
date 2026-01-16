import React from "react";
import HeroSection from "../sections/HeroSection";
import EventsSection from "../sections/EventsSection";
import GallerySection from "../sections/GallerySection";
import MenuSection from "../sections/MenuSection";
import BookingCTA from "../sections/BookingCTA";
import ExperienceStrip from "../sections/ExperienceStrip";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-[#050b1a]">
      <HeroSection />
      <ExperienceStrip />
      <EventsSection />
      <GallerySection />
      <MenuSection />
      <BookingCTA />
    </div>
  );
}
