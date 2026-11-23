"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, extraRemedies } from "@/data/menuData";
import { MenuItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

export default function Collection() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories = [
    { id: "all", label: t("collection.tab_all", "All Items") },
    { id: "caffeine", label: "Caffeine Stimulants" },
    { id: "iced", label: "Daily Dose of Iced" },
    { id: "frappe", label: "Fusion Frappe" },
    { id: "fizzy", label: "Fizzy Antidote" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const displayedItems = isExpanded ? filteredItems : filteredItems.slice(0, 6);
  const hasMore = filteredItems.length > 6;

  return (
    <section id="collection" className="relative py-28 sm:py-36 bg-[#3B2A22] text-[#FDF9F3] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D49B55]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#684433]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FDF9F3]">
              {t("collection.title", "The Cafe Collection.")}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setIsExpanded(false);
                }}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#8B5E33] text-[#FFF9F2] font-semibold shadow-[0_4px_15px_rgba(139,94,51,0.4)] border border-[#C4A77D]/50"
                    : "bg-[#4A352B]/90 text-[#E8DBCE] border border-[#C4A77D]/25 hover:border-[#D49B55]/60 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Extra Remedies Add-on Bar */}
        <div className="mb-10 p-4 rounded-2xl bg-[#48332A]/70 border border-[#C4A77D]/25 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D49B55] animate-pulse" />
            <span className="uppercase text-[#D49B55] font-semibold tracking-wider">
              Extra Remedies (+฿25 each):
            </span>
          </div>
          <div className="flex flex-wrap gap-2 text-[#E8DBCE]">
            {extraRemedies.map((remedy, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-[#3B2A22] border border-[#C4A77D]/30 text-[11px]"
              >
                + {remedy.name} <strong className="text-[#D49B55] ml-1">฿{remedy.priceTHB}</strong>
              </span>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Warm Coffee Cream and Mocha tones */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProduct(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#48332A] border border-[#C4A77D]/30 hover:border-[#D49B55]/70 transition-all duration-500 cursor-pointer flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(139,94,51,0.3)]"
              >
                {/* Product Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#3B2A22]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#48332A] via-transparent to-transparent opacity-85" />
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#FDF9F3] group-hover:text-[#D49B55] transition-colors">
                        {language === "th" ? item.thaiName : item.name}
                      </h3>
                      <div className="text-right shrink-0">
                        {item.priceHotTHB && item.priceIcedTHB ? (
                          <div className="text-xs sm:text-sm font-mono text-[#D49B55] font-semibold whitespace-nowrap">
                            <span className="text-[#E8DBCE]/60 text-[10px]">HOT </span>฿{item.priceHotTHB}
                            <span className="text-[#C4A77D]/40 mx-1">/</span>
                            <span className="text-[#E8DBCE]/60 text-[10px]">ICED </span>฿{item.priceIcedTHB}
                          </div>
                        ) : (
                          <span className="font-mono text-base font-semibold text-[#D49B55]">
                            ฿{item.priceTHB}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs font-mono text-[#C4A77D] tracking-wider mb-2">
                      {item.origin}
                    </p>
                  </div>

                  {/* Clean Card Footer with Details Action */}
                  <div className="pt-3 border-t border-[#C4A77D]/20 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#E8DBCE]/60 tracking-wider">
                      {item.servingTemp === "Both" ? "Hot / Iced" : item.servingTemp}
                    </span>
                    <span className="text-[11px] text-[#D49B55] font-mono uppercase tracking-wider group-hover:translate-x-1 transition-transform font-semibold">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore All / Show Less Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 sm:mt-14 flex flex-col items-center justify-center gap-2.5"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8B5E33] to-[#A36E3B] hover:brightness-110 active:scale-95 text-[#FFF9F2] text-xs font-mono uppercase tracking-[0.2em] font-semibold shadow-[0_6px_25px_rgba(139,94,51,0.45)] border border-[#C4A77D]/50 transition-all flex items-center gap-3 cursor-pointer"
            >
              <span>
                {isExpanded
                  ? "Show Less"
                  : `Explore Full Menu (${filteredItems.length} Items)`}
              </span>
              <span className={`text-[#FFF9F2] transition-transform duration-300 font-bold ${isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"}`}>
                &darr;
              </span>
            </button>
            
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#241C17] border border-[#FFA827]/40 rounded-2xl overflow-hidden shadow-2xl z-10 text-[#FDFBF7] my-8"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C17] via-[#241C17]/30 to-transparent" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#FFA827] transition-colors"
                >
                  &times;
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#FFA827]">
                      {selectedProduct.origin}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] mt-1">
                      {language === "th" ? selectedProduct.thaiName : selectedProduct.name}
                    </h3>
                    <p className="text-xs text-[#B69A70] font-mono mt-1">
                      {selectedProduct.servingTemp === "Both" ? "Hot & Iced Available" : `${selectedProduct.servingTemp} Served`}
                    </p>
                  </div>
                  <div className="text-right">
                    {selectedProduct.priceHotTHB && selectedProduct.priceIcedTHB ? (
                      <div className="font-mono text-xl sm:text-2xl font-bold text-[#FFA827]">
                        <span className="text-xs text-[#D9CBB8]/70 mr-1 font-normal">HOT</span>฿{selectedProduct.priceHotTHB}
                        <span className="mx-2 text-[#FFA827]/40">/</span>
                        <span className="text-xs text-[#D9CBB8]/70 mr-1 font-normal">ICED</span>฿{selectedProduct.priceIcedTHB}
                      </div>
                    ) : (
                      <span className="font-mono text-2xl font-bold text-[#FFA827]">
                        ฿{selectedProduct.priceTHB}
                      </span>
                    )}
                  </div>
                </div>

                {selectedProduct.description && (
                  <p className="text-sm text-[#D9CBB8] font-light leading-relaxed">
                    {selectedProduct.description}
                  </p>
                )}

                {selectedProduct.notes && selectedProduct.notes.length > 0 && (
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#B69A70]">
                      Cupping &amp; Sensory Notes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.notes.map((note, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#FFA827] bg-[#FFA827]/10 border border-[#FFA827]/30"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#D9CBB8]/70">
                  <span>Serving Style: {selectedProduct.servingTemp}</span>
                  <span>Roast Profile: {selectedProduct.roastLevel || "Artisanal Blend"}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
