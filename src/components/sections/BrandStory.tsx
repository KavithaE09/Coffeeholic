"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function BrandStory() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-dual-cream text-[#2C1F18] overflow-hidden">
      {/* Dynamic Dual-Color Glowing Orbs */}
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#FFA827]/30 to-[#FFD580]/20 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
      <div className="absolute -bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#8B5E33]/30 to-[#D46B28]/25 rounded-full blur-[140px] pointer-events-none animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-3d relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#D5C2B0] shadow-[0_25px_60px_rgba(44,31,24,0.22),0_0_40px_rgba(212,155,85,0.2)]"
            >
              <Image
                src="/assets/real/storefront-night.jpg"
                alt="Coffee HOLIC Cafe & Bar - Pattaya"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F18]/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Overlapping Smaller Detail Image Card with Floating 3D Feel */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="animate-float hidden sm:block absolute -bottom-6 -right-5 w-44 sm:w-56 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#D49B55] shadow-[0_20px_45px_rgba(0,0,0,0.35)] z-10"
            >
              <Image
                src="/assets/cafe.jpeg"
                alt="Coffee HOLIC shop sign"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#2C1F18] leading-[1.15]">
              {t("story.title", "From Sacred Highlands to Pattaya Shores")}
            </h2>

            {/* Elegant Accent Gradient Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#D49B55] via-[#8B5E33] to-transparent rounded-full" />

            <div className="space-y-5 text-[#5A453A] font-light text-base sm:text-lg leading-relaxed">
              <p>
                {t("story.p1", "Coffee HOLIC was born from a singular obsession: to liberate specialty coffee from rush culture. Located in Pattaya, Thailand, our atelier is designed as a space of pause.")}
              </p>
              <p>
                {t("story.p2", "Every bean is sourced from single-origin micro-lots nestled in Chiang Mai's mist-covered canopies and world-renowned volcanic terroirs. Hand-roasted in small batches, extracted at precise pressure profiles.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
