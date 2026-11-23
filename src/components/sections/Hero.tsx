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

        {/* Ambient warm caramel glow orbs with breathing pulse */}
        <div className="absolute top-1/3 left-10 w-[550px] h-[450px] bg-[#D49B55]/20 rounded-full blur-[170px] pointer-events-none animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-12 w-[420px] h-[420px] bg-[#8B5E33]/25 rounded-full blur-[150px] pointer-events-none animate-float" />
        <div className="absolute top-12 right-1/4 w-[320px] h-[320px] bg-[#D49B55]/15 rounded-full blur-[130px] pointer-events-none animate-float-delayed" />
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

          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-luxury mb-4 border border-[#D49B55]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#D49B55] animate-ping" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#E8DBCE]">
              Pattaya, Thailand • Cafe &amp; Bar
            </span>
          </motion.div>

          {/* Main Headline with 3D Shimmer Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#FDF9F3] font-normal tracking-wide leading-[1.2] mb-4 sm:mb-6"
          >
            {t("hero.headline_prefix", "A Different Kind of")}{" "}
            <span className="italic font-light shimmer">
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
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#collection"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8B5E33] via-[#D49B55] to-[#8B5E33] bg-[length:200%_auto] hover:bg-[position:right_center] text-[#FFF9F2] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_6px_25px_rgba(212,155,85,0.4)] flex items-center justify-center gap-2 border border-[#F5C842]/40"
            >
              {t("hero.explore", "Explore Collection")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#experience"
              className="px-7 py-3.5 rounded-full glass-luxury border border-[#C4A77D]/40 text-[#E8DBCE] hover:text-[#D49B55] hover:border-[#D49B55]/70 font-medium text-xs uppercase tracking-[0.15em] transition-all shadow-lg"
            >
              Atelier Bar
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none z-20"
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C4A77D]/60">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-[#D49B55]/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[#D49B55]"
          />
        </div>
      </motion.div>
    </section>
  );
}
