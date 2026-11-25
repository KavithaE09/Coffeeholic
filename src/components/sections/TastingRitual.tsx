"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Sparkles, Coffee, Flame, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface RitualStep {
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export default function TastingRitual() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps: RitualStep[] = [
    {
      step: "01",
      badge: "Stage 01 • Olfactory Preparation",
      title: t("ritual.step1_title", "Calibration & Dry Aroma"),
      subtitle: "Micrometer precision grinding & bean awakening",
      description: t("ritual.step1_desc", "Every single origin is calibrated daily based on local ambient humidity and barometric pressure. Whole beans are ground on customized Japanese titanium flat burrs to an exact 420-micron distribution. The guest is invited to inhale the dry aromatics before a single drop of water touches the grounds."),
      image: "/assets/cafe 1.webp",
      metrics: [
        { label: "Dosage", value: "18.5g ± 0.05g" },
        { label: "Burr Alignment", value: "420 μm Precision" },
        { label: "Rest Period", value: "14 Days Degassed" },
      ],
      tags: ["Dry Aromatics", "Zero Retention", "Terroir Assessment"],
    },
    {
      step: "02",
      badge: "Stage 02 • Thermal Extraction",
      title: t("ritual.step2_title", "The Controlled Pulse Bloom"),
      subtitle: "92.4°C soft mineral water through artisan ceramics",
      description: t("ritual.step2_desc", "Reverse-osmosis water remineralized with magnesium and calcium is heated precisely to 92.4°C. A 45-second bloom awakens volatile esters, followed by two concentric laminar pours through hand-thrown Japanese ceramic drippers to extract crystalline sweetness without harsh tannins."),
      image: "/assets/cafe6.webp",
      metrics: [
        { label: "Water Temperature", value: "92.4°C" },
        { label: "Bloom Duration", value: "45 Seconds" },
        { label: "Total Drawdown", value: "2 min 45 sec" },
      ],
      tags: ["Hasami Porcelain", "Laminar Flow", "Sweetness Extraction"],
    },
    {
      step: "03",
      badge: "Stage 03 • Sensory Evolution",
      title: t("ritual.step3_title", "Three-Stage Temperature Flight"),
      subtitle: "Tasting notes unfold as the beverage cools",
      description: t("ritual.step3_desc", "Served in dual-walled borosilicate sensory carafes. Our baristas guide you through three distinct temperature phases: initial warmth highlights bright bergamot and jasmine, cooling reveals sweet stone fruit and wild honey, and room temperature settles into velvety cacao and black tea."),
      image: "/assets/cafe 8.webp",
      metrics: [
        { label: "Thermal Stages", value: "Hot • Warm • Ambient" },
        { label: "SCA Benchmark", value: "88+ Specialty" },
        { label: "Cup Profile", value: "Complex & Silky" },
      ],
      tags: ["Thermal Curve", "Dynamic Palate", "Artisan Glassware"],
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="ritual" className="relative py-28 sm:py-36 bg-[#0D0A08] text-[#F4F0E8] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[400px] bg-[#FFA827]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#B69A70]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
       

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
          {steps.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 relative border ${
                  isActive
                    ? "bg-[#181410] border-[#FFA827]/60 shadow-[0_0_25px_rgba(255,168,39,0.12)]"
                    : "bg-[#120F0C] border-white/5 hover:border-white/20 hover:bg-[#16120E]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono tracking-widest ${
                      isActive ? "text-[#FFA827]" : "text-[#D9CBB8]/60"
                    }`}
                  >
                    STEP {item.step}
                  </span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#FFA827] animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  )}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#F4F0E8] font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D9CBB8]/70 line-clamp-1">{item.subtitle}</p>

                {isActive && (
                  <motion.div
                    layoutId="activeRitualIndicator"
                    className="absolute -bottom-px left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#FFA827] to-transparent"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Presentation */}
        <div className="relative rounded-3xl bg-[#14100D] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Visual Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#B69A70]/30 shadow-2xl">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover object-center filter contrast-105 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A08]/80 via-transparent to-transparent" />

                  {/* Watermark Step Number */}
                  <div className="absolute top-4 right-6 font-mono text-6xl font-bold text-white/10 select-none">
                    {current.step}
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-black/60 backdrop-blur-md text-[#FFA827] border border-[#FFA827]/30">
                      {current.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Metrics */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-[#FFA827]">
                    Step {current.step} of 03
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#F4F0E8] mt-2 mb-3">
                    {current.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D9CBB8]/85 font-light leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
                  {current.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] sm:text-xs font-mono uppercase text-[#D9CBB8]/60 mb-1">
                        {m.label}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F4F0E8]">{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {current.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-light text-[#D9CBB8]/90 bg-white/5 border border-white/10"
                    >
                      <Check className="w-3 h-3 text-[#FFA827]" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Next Step Navigation Button */}
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wide text-[#FFA827] hover:text-[#FFB84D] transition-colors group"
                  >
                    <span>
                      {activeStep === steps.length - 1 ? "Revisit Step 01" : `Proceed to Step 0${activeStep + 2}`}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

