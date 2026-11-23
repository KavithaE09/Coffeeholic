"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Film, Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface VideoClip {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  poster?: string;
  duration?: string;
  badge?: string;
  category?: string;
}

export default function CinematicReel() {
  const { t } = useLanguage();
  const clips: VideoClip[] = [
    {
      id: "beans-falling",
      title: "The Roaster's Descent",
      subtitle: "3D Slow-Motion Gravity Harvest",
      description:
        "High-altitude Chiang Mai Arabica beans tumbling through obsidian space in hyper-slow-motion. Every bean is roasted to medium-light profile to preserve delicate citrus aromatics.",
      src: "/assets/videos/coffee-beans-falling.mp4",
    },
    {
      id: "espresso-pour",
      title: "Liquid Gold Extraction",
      subtitle: "9-Bar Chrome Group Head Dripping",
      description:
        "Extracted under 92.4°C thermal stability. Thick golden hazelnut crema coalescing into an unctuous, syrupy ristretto stream with velvet mouthfeel.",
      src: "/assets/videos/espresso-extraction.mp4",
      poster: "/assets/cafe 1.webp",
    },
    {
      id: "iced-swirl",
      title: "Velvet Cloud Swirl",
      subtitle: "Cold Brew Meets Hokkaido Milk",
      description:
        "Our signature Pattaya afternoon ritual: slow-dripped single origin cascara and espresso swirling into chilled organic milk, creating hypnotic marble clouds.",
      src: "/assets/videos/iced-coffee-swirl.mp4",
      poster: "/assets/cafe2.webp",
    },
  ];

  const [activeClip, setActiveClip] = useState<VideoClip>(clips[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [activeClip]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="motion" className="relative py-28 sm:py-36 bg-gradient-to-b from-[#180E09] via-[#2A1A12] to-[#180E09] text-[#FDF9F3] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-[#D49B55]/15 rounded-full blur-[180px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#8B5E33]/20 rounded-full blur-[150px] pointer-events-none animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#D49B55] mb-3 font-medium">
              <Film className="w-4 h-4" />
              <span>{t("reel.badge", "Cinematic Motion Archive")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FDF9F3] leading-[1.15]">
              {t("reel.title", "The Craft in Motion.")}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#E8DBCE]/85 font-light max-w-md leading-relaxed">
            {t("reel.desc", "Slow down and observe coffee extraction as visual poetry. From 3D bean tumbling to golden crema swirls, witness specialty coffee engineered with Japanese reverence.")}
          </p>
        </div>

        {/* Master Cinema Screen */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#382318] to-[#1E110A] border border-[#D49B55]/40 shadow-[0_25px_70px_rgba(0,0,0,0.6)] mb-8">
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              key={activeClip.src}
              src={activeClip.src}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.95]"
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A22] via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/60 pointer-events-none" />

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20">
              <div className="max-w-xl">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FDF9F3] mt-1 mb-2">
                  {activeClip.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E8DBCE]/85 font-light line-clamp-2">
                  {activeClip.description}
                </p>
              </div>

              {/* Player buttons */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={togglePlay}
                  className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#FDF9F3] hover:bg-[#8B5E33] hover:text-[#FFF9F2] transition-all"
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#FDF9F3] hover:bg-[#8B5E33] hover:text-[#FFF9F2] transition-all"
                  aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleFullscreen}
                  className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#FDF9F3] hover:bg-[#8B5E33] hover:text-[#FFF9F2] transition-all"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {clips.map((clip) => {
            const isActive = activeClip.id === clip.id;
            return (
              <button
                key={clip.id}
                onClick={() => setActiveClip(clip)}
                className={`text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 relative border overflow-hidden group ${isActive
                    ? "bg-[#523B30] border-[#D49B55] shadow-[0_0_30px_rgba(139,94,51,0.3)]"
                    : "bg-[#48332A] border-[#C4A77D]/25 hover:border-[#D49B55]/50 hover:bg-[#4E382E]"
                  }`}
              >
                {/* Mini video thumbnail */}
                <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-black border border-white/10">
                  <video
                    src={clip.src}
                    poster={clip.poster}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Active playing indicator */}
                  {isActive && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#8B5E33]/60 backdrop-blur-md border border-[#D49B55]/50 text-[#FFF9F2] text-[10px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D49B55] animate-pulse" />
                      <span>NOW PLAYING</span>
                    </div>
                  )}
                </div>

                <h4 className="font-serif text-lg sm:text-xl text-[#FDF9F3] font-medium mb-1 group-hover:text-[#D49B55] transition-colors">
                  {clip.title}
                </h4>
                <p className="text-xs text-[#E8DBCE]/80 line-clamp-1">{clip.subtitle}</p>

                {isActive && (
                  <motion.div
                    layoutId="activeClipLine"
                    className="absolute -bottom-px left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#D49B55] to-transparent"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
