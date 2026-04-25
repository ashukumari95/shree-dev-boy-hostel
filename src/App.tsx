/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Meals } from './components/Meals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Pricing Section */}
        <Pricing />

        {/* Gallery Section */}
        <Gallery />
        
        {/* Meals Section */}
        <Meals />
        
        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
      
      {/* Floating WhatsApp/Call Button for conversions */}
      <a 
        href="tel:+919636363629"
        className="fixed bottom-8 right-8 z-[100] bg-brand-secondary text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A15 15 0 013 6a1 1 0 011-1h3.41a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11l-2.2 2.2z" />
        </svg>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Call for Admission
        </span>
      </a>
    </div>
  );
}
