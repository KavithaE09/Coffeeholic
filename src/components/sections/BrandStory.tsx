"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function BrandStory() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F7F2EC] text-[#2C1F18] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#D5C2B0] shadow-2xl"
            >
              <Image
                src="/assets/real/storefront-night.jpg"
                alt="Coffee HOLIC Cafe & Bar - Pattaya"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F18]/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Overlapping Smaller Detail Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-6 -right-5 w-44 sm:w-56 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#8B5E33] shadow-2xl z-10"
            >
              <Image
                src="/assets/real/storefront-night.jpg"
                alt="Coffee HOLIC shop sign"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#2C1F18] leading-[1.15]">
              {t("story.title", "From Sacred Highlands to Pattaya Shores")}
            </h2>

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
