"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageOption } from "@/data/translations";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export default function LanguageSwitcher({
  className = "",
  variant = "desktop",
}: LanguageSwitcherProps) {
  const { language, setLanguage, languages, currentLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (lang: LanguageOption) => {
    setLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`flex items-center gap-2 rounded-full transition-all duration-300 focus:outline-none ${
          variant === "mobile"
            ? "p-2 bg-white/5 border border-white/10 text-[#F4F0E8] hover:text-[#FFA827] hover:border-[#FFA827]/40"
            : "px-3 py-2 rounded-full bg-[#28201A]/85 border border-[#B69A70]/30 hover:border-[#FFA827] hover:bg-[#FFA827]/10 text-[#FDFBF7] hover:text-[#FFA827] shadow-sm"
        } ${isOpen ? "border-[#FFA827] text-[#FFA827] shadow-[0_0_12px_rgba(255,168,39,0.3)]" : ""}`}
      >
        <Languages className="w-4 h-4 text-[#FFA827]" />
        {variant === "desktop" && (
          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#D9CBB8]">
            {currentLang.countryCode}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="listbox"
            aria-label="Language options"
            className="absolute right-0 top-full mt-2 z-50 w-60 max-w-[calc(100vw-2rem)] rounded-2xl bg-[#241C17] border border-[#B69A70]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2 backdrop-blur-2xl overflow-hidden"
          >
            {/* Top subtle golden ambient flare */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FFA827]/60 to-transparent" />

            <div className="flex flex-col gap-1 py-1">
              {languages.map((lang) => {
                const isSelected = language === lang.code;

                return (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(lang)}
                    className={`group w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 text-left cursor-pointer ${
                      isSelected
                        ? "bg-[#FFA827]/15 text-[#FFA827]"
                        : "hover:bg-white/5 text-[#F4F0E8]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Country Code Pill / Badge */}
                      <span
                        className={`text-xs font-mono font-bold tracking-wider w-7 transition-colors ${
                          isSelected
                            ? "text-[#FFA827]"
                            : "text-[#D9CBB8]/50 group-hover:text-[#FFA827]"
                        }`}
                      >
                        {lang.countryCode}
                      </span>

                      {/* Language Names */}
                      <div className="flex flex-col leading-tight">
                        <span
                          className={`text-sm font-medium transition-colors ${
                            isSelected
                              ? "text-[#FFA827] font-semibold"
                              : "text-[#F4F0E8] group-hover:text-white"
                          }`}
                        >
                          {lang.name}
                        </span>
                        <span
                          className={`text-xs transition-colors ${
                            isSelected
                              ? "text-[#FFA827]/80"
                              : "text-[#D9CBB8]/50 group-hover:text-[#D9CBB8]/80"
                          }`}
                        >
                          {lang.nativeName}
                        </span>
                      </div>
                    </div>

                    {/* Selected Checkmark */}
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#FFA827] shrink-0 stroke-[2.5]" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
