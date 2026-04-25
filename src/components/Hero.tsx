import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, MapPin, Wifi } from 'lucide-react';
import backgroundImg from '/public/bg2.png'; 

export const Hero = () => {
  return (
    // Updated: h-screen mobile par better lagta hai scroll-locking ke liye
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImg}
          alt="Shree Dev Boys Hostel Building"
          className="w-full h-full object-cover opacity-60 md:opacity-70" 
        />
        {/* Adjusted Gradient: More darkness at bottom for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent md:bg-gradient-to-r md:from-slate-900 md:via-slate-900/60 md:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 md:pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Added text-xs for mobile, text-sm for desktop */}
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-600/20 backdrop-blur-md text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-4 md:mb-6 border border-white-500/20">
              Established Since 2020
            </span>
            
            {/* Updated: text-4xl for mobile, 6xl for tablet, 7xl for large screens */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 md:mb-6">
              Your Home Away <br className="hidden sm:block" />
              <span className="text-white">From Home in Jaipur</span>
            </h1>
            
            {/* Updated: text-base for mobile, text-xl for desktop */}
            <p className="text-base md:text-xl text-white/80 mb-8 md:mb-10 max-w-lg leading-relaxed">
              Experience comfort, security, and a vibrant community at Jaipur's most trusted boys hostel. Fully furnished rooms and home-style meals included.
            </p>

            {/* Buttons: full width on mobile, auto width on sm screen */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#rooms"
                className="bg-blue-600  text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-red-600/20 group"
              >
                Book Your Room
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border border-white/20 text-center transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Quick Stats/Features: grid-cols-1 for small mobile, grid-cols-2 for others */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-8 md:pt-10 border-t border-white/10"
          >
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 md:p-3 rounded-full bg-white/10">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
              </div>
              <span className="text-xs md:text-sm font-medium">24/7 Security</span>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 md:p-3 rounded-full bg-white/10">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
              </div>
              <span className="text-xs md:text-sm font-medium">Prime Location</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className="p-2 md:p-3 rounded-full bg-white/10">
                <Wifi className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
              </div>
              <span className="text-xs md:text-sm font-medium">High-Speed Wi-Fi</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-slate-900 bg-slate-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Student" />
                  </div>
                ))}
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-slate-900 bg-red-600 flex items-center justify-center text-[8px] md:text-[10px] font-bold">
                  50+
                </div>
              </div>
              <span className="text-xs md:text-sm font-medium pl-1 md:pl-2">Residents</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};