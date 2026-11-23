"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import BrandTicker from "@/components/common/BrandTicker";
import BrandStory from "@/components/sections/BrandStory";
import Collection from "@/components/sections/Collection";
import AtelierExperience from "@/components/sections/AtelierExperience";
import CinematicReel from "@/components/sections/CinematicReel";
import CuratedGallery from "@/components/sections/CuratedGallery";
import LocationsAndContact from "@/components/sections/LocationsAndContact";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationLocation, setReservationLocation] = useState<"pattaya">("pattaya");

  const handleOpenReservation = (location?: "pattaya") => {
    if (location) setReservationLocation(location);
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <main className="relative bg-[#3B2A22] min-h-screen text-[#FDF9F3] overflow-hidden">
      {/* Navigation */}
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      {/* Hero Section */}
      <Hero onOpenReservation={() => handleOpenReservation()} />

      {/* Kinetic Brand Marquee */}
      <BrandTicker />

      {/* Brand Story & Philosophy */}
      <BrandStory />

      {/* Product Collection & Tasting Flights */}
      <Collection />

      {/* Day vs Night Atelier Experience */}
      <AtelierExperience onOpenReservation={() => handleOpenReservation()} />

      {/* Cinematic 3D & Slow-Motion Coffee Reel */}
      <CinematicReel />

      {/* Visual Archive Gallery */}
      <CuratedGallery />

      {/* Bangkok & Pattaya Locations and Interactive Contact */}
      <LocationsAndContact onOpenReservation={() => handleOpenReservation()} />

      {/* Luxury Footer */}
      <Footer />

      {/* Table & Tasting Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
        defaultLocation={reservationLocation}
      />
    </main>
  );
}
