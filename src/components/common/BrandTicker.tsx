"use client";

import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BrandTicker() {
  const { t } = useLanguage();

  const items = [
    "CoffeeHolic Pattaya",
    "5.0 ★ Google Verified",
    "Jomtien, Bang Lamung",
    t("ticker.specialty", "Specialty Fresh Roast"),
    t("ticker.cold_drip", "Cold Drip Mastery"),
    t("ticker.omakase", "Omakase Tasting"),
    t("ticker.cocktails", "Signature Cocktails"),
    t("ticker.night_salon", "Twilight Cocktail Salon"),
    "Open Daily • 08:00–20:00",
  ];

  const duplicated = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#190F09] via-[#352319] to-[#190F09] border-y border-[#D49B55]/30 py-3.5 select-none z-20 shadow-md">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#190F09] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#190F09] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 28,
        }}
        className="flex whitespace-nowrap gap-10 items-center w-max"
      >
        {duplicated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.22em] text-[#E8DBCE]">
            <span className="hover:text-[#D49B55] transition-colors">{item}</span>
            {idx % 2 === 0 ? (
              <Star className="w-3 h-3 text-[#D49B55] fill-[#D49B55]" />
            ) : (
              <Sparkles className="w-3 h-3 text-[#D49B55]" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
