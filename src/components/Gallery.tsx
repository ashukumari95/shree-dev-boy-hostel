import React from 'react';
import { motion } from 'motion/react';
import { Maximize2, Camera } from 'lucide-react';

export const Gallery = () => {
  const images = [
    { src: "/public/visual.png", alt: "Modern Shared Room", title: "Comfortable Living" },
    { src: "/public/bg.jpeg", alt: "Hostel Exterior", title: "Main Building" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-brand-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">Inside Look</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Our Living Spaces</h3>
          </div>
          <p className="text-slate-500 max-w-md text-lg">
            Take a virtual tour of our facilities. We maintain the highest standards of cleanliness and comfort for our residents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-brand-secondary font-bold text-sm uppercase tracking-widest mb-2">
                  <Camera className="w-4 h-4" />
                  Visual Tour
                </div>
                <h4 className="text-white text-2xl font-bold">{img.title}</h4>
                <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                  <Maximize2 className="w-4 h-4" />
                  View Full Screen
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quality Indicator */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-slate-100 pt-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-primary">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-slate-900">Daily Cleaning</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Hygiene First</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-primary">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-slate-900">Premium Ventilation</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Fresh Air Always</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
