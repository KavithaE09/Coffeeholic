"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLocation?: "pattaya";
}

export default function ReservationModal({
  isOpen,
  onClose,
  defaultLocation = "pattaya",
}: ReservationModalProps) {
  const { t } = useLanguage();
  const [location, setLocation] = useState<"pattaya">(defaultLocation);
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("14:00");
  const [ritualType, setRitualType] = useState("slow-bar");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#FFA827", "#F4F0E8", "#B69A70", "#76543B"],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-xl bg-[#241C17] border border-[#B69A70]/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#FDFBF7] z-10 my-8 overflow-hidden"
          >
            {/* Ambient amber top accent glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#FFA827] to-transparent opacity-75" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-[#D9CBB8] hover:text-[#FFA827] transition-colors rounded-full hover:bg-white/5"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-widest text-[#FFA827] bg-[#FFA827]/10 border border-[#FFA827]/20 mb-3">
                    <Sparkles className="w-3.5 h-3.5" /> {t("modal.title", "Table & Tasting Reservation")}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FDFBF7] tracking-tight">
                    Experience Coffee HOLIC
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D9CBB8]/75 mt-1 font-light">
                    {t("modal.subtitle", "your seat at our slow extraction bar or evening cocktail salon.")}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Location Display (Pattaya only) */}
                  <div className="p-3 rounded-lg border border-[#FFA827]/30 bg-[#FFA827]/5 flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#FFA827] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#FFA827] uppercase tracking-wider">CoffeeHolic Pattaya</p>
                      <p className="text-xs text-[#D9CBB8]/70">353/109 Nong Prue, Jomtien • Chon Buri, Thailand</p>
                    </div>
                  </div>

                  {/* Experience Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B69A70] mb-2 font-medium">
                      Experience Type
                    </label>
                    <select
                      value={ritualType}
                      onChange={(e) => setRitualType(e.target.value)}
                      className="w-full bg-[#1C1612] border border-[#B69A70]/25 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#FDFBF7] focus:border-[#FFA827] focus:outline-none transition-colors"
                    >
                      <option value="slow-bar">Daytime Pour-Over Tasting Flight (Single Origin)</option>
                      <option value="cocktail-lounge">Evening Coffee Mixology Salon (Twilight Bar)</option>
                      <option value="vip-room">Private Omakase Coffee Ritual (Up to 6 Guests)</option>
                      <option value="casual-table">Standard Atelier Table Reservation</option>
                    </select>
                  </div>

                  {/* Date, Time, Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A70] mb-1.5 font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Date
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#1C1612] border border-[#B69A70]/25 rounded-lg px-3 py-2 text-xs sm:text-sm text-[#FDFBF7] focus:border-[#FFA827] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A70] mb-1.5 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Time
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#1C1612] border border-[#B69A70]/25 rounded-lg px-3 py-2 text-xs sm:text-sm text-[#FDFBF7] focus:border-[#FFA827] focus:outline-none transition-colors"
                      >
                        <option value="09:00">09:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="13:30">01:30 PM</option>
                        <option value="15:30">03:30 PM</option>
                        <option value="18:00">06:00 PM (Bar)</option>
                        <option value="20:00">08:00 PM (Bar)</option>
                        <option value="21:30">09:30 PM (Bar)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B69A70] mb-1.5 font-medium flex items-center gap-1">
                        <Users className="w-3 h-3" /> Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-[#1C1612] border border-[#B69A70]/25 rounded-lg px-3 py-2 text-xs sm:text-sm text-[#FDFBF7] focus:border-[#FFA827] focus:outline-none transition-colors"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3-4 Guests</option>
                        <option value="6">5-6 Guests</option>
                        <option value="8">VIP Salon (7-10 Guests)</option>
                      </select>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#1C1612] border border-[#B69A70]/25 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#FDFBF7] placeholder:text-[#D9CBB8]/40 focus:border-[#FFA827] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp (+66)"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#1C1612] border border-[#B69A70]/25 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#FDFBF7] placeholder:text-[#D9CBB8]/40 focus:border-[#FFA827] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address (for instant confirmation)"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#1C1612] border border-[#B69A70]/25 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#FDFBF7] placeholder:text-[#D9CBB8]/40 focus:border-[#FFA827] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Dietary requests, anniversary notes, bean preference..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#1C1612] border border-[#B69A70]/25 rounded-lg px-3 py-2 text-xs sm:text-sm text-[#FDFBF7] placeholder:text-[#D9CBB8]/40 focus:border-[#FFA827] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#FFA827] to-[#E59524] text-[#140F0B] font-semibold text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(255,168,39,0.3)] mt-2"
                  >
                    {t("modal.submit", "Confirm Table Reservation")}
                  </button>
                </form>
              </>
            ) : (
              /* Success Screen */
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FFA827]/10 border border-[#FFA827] text-[#FFA827] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(255,168,39,0.35)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8]">
                  {t("modal.success_title", "Table Reserved!")}
                </h3>
                <p className="text-xs sm:text-sm text-[#D9CBB8]/80 max-w-md mx-auto font-light leading-relaxed">
                  {t("modal.success_desc", "We have received your reservation request. Our host will confirm via WhatsApp or Email shortly.")}
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-[#F4F0E8] text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  {t("modal.done", "Done")}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
