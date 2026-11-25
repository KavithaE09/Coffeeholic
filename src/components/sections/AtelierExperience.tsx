"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Disc3, Coffee, GlassWater, Sparkles, Sliders } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AtelierExperienceProps {
  onOpenReservation?: () => void;
}

export default function AtelierExperience({ onOpenReservation }: AtelierExperienceProps) {
  const { t } = useLanguage();
  const [activeMood, setActiveMood] = useState<"day" | "night">("day");

  const moodData = {
    day: {
      title: t("exp.day_title", "Day Cafe"),
      headline: t("exp.day_headline", "Sunlit Pour-Overs & Single-Origin Terroir"),
      description: t(
        "exp.day_desc",
        "Sunlit minimalism, whispering steam wands, and the contemplation of rare origin coffees poured through artisan glassware."
      ),
      musicTrack: t("exp.day_music", "Lo-Fi Beats & Ambient Acoustic Jazz"),
      image: "/assets/cafe6.webp",
      detailTag: "Hasami Ceramics • 92.4°C Micro-Pour",
      accent: "#FFA827",
      features: [
        {
          icon: Coffee,
          title: t("exp.day_feat0_title", "Single-Origin Geisha Flights"),
          desc: t("exp.day_feat0_desc", "Rotating micro-lots from Chiang Mai highlands extracted with custom titanium flat-burr calibrations."),
        },
        {
          icon: Sparkles,
          title: t("exp.day_feat1_title", "Ceremonial Uji Matcha"),
          desc: t("exp.day_feat1_desc", "First-harvest Kyoto Uji green tea whisked fresh over chilled organic Hokkaido fresh milk."),
        },
        {
          icon: Sun,
          title: t("exp.day_feat2_title", "Sunlit Kissaten Sanctuary"),
          desc: t("exp.day_feat2_desc", "Natural illumination, warm timber counter finishes, and indoor lush tropical ferns."),
        },
        {
          icon: Sliders,
          title: t("exp.day_feat3_title", "Precision Boilers & Scales"),
          desc: t("exp.day_feat3_desc", "9-bar thermal pressure stability and digital gram profiling for velvety golden hazelnut crema."),
        },
      ],
      ctaText: "Reserve Day Tasting Flight",
    },
    night: {
      
      title: t("exp.night_title", "Night Sanctuary"),
      headline: t("exp.night_headline", "Bespoke Cascara Elixirs & Vinyl Sounds"),
      description: t(
        "exp.night_desc",
        "Warm low-frequency vinyl, bespoke cold-drip mixology, and amber luminescence where coffee transforms into intoxicating twilight elixirs."
      ),
      musicTrack: t("exp.night_music", "Warm Vinyl Soul & Late-Night Downtempo"),
      image: "/assets/real/storefront-night.jpg",
      detailTag: "Hand-Carved Ice • Smoked Cascara Elixirs",
      accent: "#FF8800",
      features: [
        {
          icon: GlassWater,
          title: t("exp.night_feat0_title", "Smoked Cascara Cold Drip"),
          desc: t("exp.night_feat0_desc", "Specialty cold drip cascara infused with aged botanicals, torched orange peel, and dark cacao."),
        },
        {
          icon: Sparkles,
          title: t("exp.night_feat1_title", "Hand-Carved Ice Spheres"),
          desc: t("exp.night_feat1_desc", "Zero-dilution crystal clear spheres hand-carved for optimum slow-sipping temperature."),
        },
        {
          icon: Moon,
          title: t("exp.night_feat2_title", "Amber Neon Luminescence"),
          desc: t("exp.night_feat2_desc", "Warm neon reflections across acoustic glass and comfortable tufted leather lounge seating."),
        },
        {
          icon: Disc3,
          title: t("exp.night_feat3_title", "Vinyl Hi-Fi Listening Lounge"),
          desc: t("exp.night_feat3_desc", "Analog sound system spinning curated lo-fi jazz, neo-soul, and late-night acoustic vinyl."),
        },
      ],
      ctaText: "Reserve Evening Salon Table",
    },
  };

  const current = moodData[activeMood];

  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-gradient-to-br from-[#FFFBF5] via-[#F5EAD9] to-[#EBD5BC] text-[#241711] overflow-hidden">
      {/* Decorative dynamic ambient glow with intense dual-color pulse */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full blur-[160px] pointer-events-none transition-colors duration-700 animate-glow-pulse ${
          activeMood === "day" ? "bg-gradient-to-r from-[#FFA827]/25 to-[#F5C842]/15" : "bg-gradient-to-r from-[#8B5E33]/30 to-[#D46B28]/20"
        }`}
      />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#FFA827]/20 rounded-full blur-[130px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#241711]">
              {t("exp.section_title", "Day Slow Bar • Night Lounge.")}
            </h2>
          
          </div>

          {/* Interactive Mood Toggle */}
          <div className="flex items-center bg-[#EDE4DA] border border-[#D5C2B0] rounded-full p-1.5 shadow-md">
            <button
              onClick={() => setActiveMood("day")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                activeMood === "day"
                  ? "bg-[#8B5E33] text-[#FFF9F2] font-semibold shadow-[0_4px_15px_rgba(139,94,51,0.35)]"
                  : "text-[#5A453A] hover:text-[#2C1F18]"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              {t("exp.tab_day", "Daylight Sanctuary")}
            </button>
            <button
              onClick={() => setActiveMood("night")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                activeMood === "night"
                  ? "bg-[#2C1F18] text-[#FFF9F2] font-semibold shadow-[0_4px_15px_rgba(44,31,24,0.35)]"
                  : "text-[#5A453A] hover:text-[#2C1F18]"
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              {t("exp.tab_night", "Twilight Cafe & Bar")}
            </button>
          </div>
        </div>

        {/* Cinematic Split Experience Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMood}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Cinematic Image Side */}
            <div className="lg:col-span-7 relative">
              <div
                className={`relative rounded-2xl overflow-hidden border border-[#D5C2B0] shadow-[0_20px_50px_rgba(44,31,24,0.2),0_0_35px_rgba(212,155,85,0.15)] ${
                  activeMood === "night"
                    ? "aspect-[3/4] w-full max-w-[460px] mx-auto"
                    : "aspect-[4/3] w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[520px]"
                }`}
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-center filter contrast-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 pointer-events-none" />
              </div>
            </div>

            {/* Narrative & Rich Feature Cards Grid */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#2C1F18] leading-tight mt-1 mb-2 font-normal">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A453A] font-light leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* 2x2 Feature Cards Grid (Warm White & Cream Card Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-[#E2D5C8] hover:border-[#D49B55] hover:shadow-[0_8px_25px_rgba(139,94,51,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="p-1.5 rounded-lg bg-[#F7F2EC] border border-[#D5C2B0] text-[#8B5E33] group-hover:scale-110 transition-transform">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="font-serif text-sm font-semibold text-[#2C1F18] group-hover:text-[#8B5E33] transition-colors">
                          {feat.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#6D5345] font-light leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Cafe Walk-in Note */}
              <div className="pt-4 border-t border-[#D5C2B0] flex items-center justify-between text-xs font-mono text-[#6D5345]">
                <span>{t("exp.walkin_note", "No reservation required for slow bar counter")}</span>
                <span className="text-[#8B5E33] font-semibold">{t("exp.walkins_welcome", "Walk-ins welcome")}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
