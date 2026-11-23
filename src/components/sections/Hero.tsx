"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NeonSign from "@/components/common/NeonSign";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onOpenReservation?: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const { t } = useLanguage();

  const heroVideos = [
    {
      id: "beans",
      src: "/assets/videos/coffee-beans-falling.mp4",
    },
    {
      id: "crema",
      src: "/assets/videos/espresso-extraction.mp4",
    },
    {
      id: "swirl",
      src: "/assets/videos/iced-coffee-swirl.mp4",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = useCallback(() => {
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  }, [heroVideos.length]);

  // Automatically cycle to the next video every 8.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextVideo();
    }, 8500);

    return () => clearInterval(interval);
  }, [handleNextVideo]);

  return (
    <section className="relative min-h-[92vh] sm:min-h-[96vh] flex items-center overflow-hidden bg-[#3B2A22] pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Atmospheric Full Background Video covering entire width with wide zoom-out view */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.video
            key={heroVideos[currentVideoIndex].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            autoPlay
            muted
            playsInline
            onEnded={handleNextVideo}
            poster="/assets/real/storefront-night.jpg"
            className="w-full h-full object-cover object-right md:object-center filter brightness-[0.72] contrast-[1.08] saturate-[1.1] scale-100 sm:scale-[0.98] lg:scale-95"
          >
            <source src={heroVideos[currentVideoIndex].src} type="video/mp4" />
          </motion.video>
        </AnimatePresence>

        {/* Soft Warm Roasted Coffee Gradient Overlay so Left-Side Text & Logo have crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B2A22]/95 via-[#3B2A22]/65 to-[#3B2A22]/20 pointer-events-none" />

        {/* Vertical vignettes top and bottom with warm tone */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#3B2A22] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#3B2A22] to-transparent pointer-events-none" />

        {/* Ambient warm caramel glow */}
        <div className="absolute top-1/3 left-10 w-[550px] h-[450px] bg-[#D49B55]/15 rounded-full blur-[170px] pointer-events-none" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 translate-y-0 sm:translate-y-2 lg:translate-y-4">
        <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">

          {/* Interactive Logo Sign (Aligned Left on Desktop, Shifted down) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3 sm:mb-5 max-w-full flex justify-center lg:justify-start"
          >
            <NeonSign size="large" align="left" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#FDF9F3] font-normal tracking-wide leading-[1.2] mb-4 sm:mb-6"
          >
            {t("hero.headline_prefix", "A Different Kind of")}{" "}
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#D49B55] via-[#FDF9F3] to-[#C4A77D]">
              {t("hero.headline_highlight", "Coffee Ritual.")}
            </span>
          </motion.h1>

          {/* Action Buttons with Caramel & Warm Brown Shades */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center gap-4 w-full sm:w-auto justify-center lg:justify-start"
          >
            <a
              href="#collection"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8B5E33] to-[#A36E3B] text-[#FFF9F2] font-semibold text-xs uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_20px_rgba(139,94,51,0.4)] flex items-center justify-center gap-2 border border-[#C4A77D]/40"
            >
              {t("hero.explore", "Explore Collection")}
            </a>
            <a
              href="#experience"
              className="px-7 py-3.5 rounded-full bg-[#4A352B] border border-[#C4A77D]/40 text-[#E8DBCE] hover:text-[#D49B55] hover:border-[#D49B55]/60 font-medium text-xs uppercase tracking-[0.15em] transition-all"
            >
              Atelier Bar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
