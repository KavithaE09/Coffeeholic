"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { LanguageCode, LanguageOption, LANGUAGES, translations } from "@/data/translations";

interface LanguageContextType {
  language: LanguageCode;
  currentLang: LanguageOption;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "coffeeholic_preferred_language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");
  const [isMounted, setIsMounted] = useState(false);

  // Load language from localStorage or browser language on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (saved && (saved === "en" || saved === "th" || saved === "ru" || saved === "zh")) {
        setLanguageState(saved);
        document.documentElement.lang = saved;
        return;
      }

      // Check browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("th")) {
        setLanguageState("th");
        document.documentElement.lang = "th";
      } else if (browserLang.startsWith("ru")) {
        setLanguageState("ru");
        document.documentElement.lang = "ru";
      } else if (browserLang.startsWith("zh")) {
        setLanguageState("zh");
        document.documentElement.lang = "zh";
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (newLang: LanguageCode) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;

      // Sync Google Translate cookie for dynamic auto-translation fallback if active
      const googleTransCookie = `/auto/${newLang === "zh" ? "zh-CN" : newLang}`;
      document.cookie = `googtrans=${googleTransCookie}; path=/; domain=${window.location.hostname}`;
      document.cookie = `googtrans=${googleTransCookie}; path=/;`;
    } catch {
      // ignore
    }
  };

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const t = (key: string, fallback?: string): string => {
    const langDict = translations[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to English
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        currentLang,
        setLanguage,
        t,
        languages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
