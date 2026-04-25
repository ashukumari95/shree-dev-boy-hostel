import React from 'react';
// 1. Change to a default import (remove the curly braces)
import logoImg from '/public/logo1.png';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 pb-16 border-b border-white/5">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-8">
              {/* 2. Replace <Logo /> with an <img> tag */}
              <img 
                src={logoImg} 
                alt="Shree Dev Boys Hostel Logo" 
                className="w-32 h-auto" 
              />
            </div>
            <p className="text-white/50 max-w-sm text-lg leading-relaxed mb-8">
              Providing a secure, comfortable, and disciplined environment for students and professionals in the heart of Jaipur since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2 w-full">
            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-brand-secondary text-xs">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/60 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#rooms" className="text-white/60 hover:text-white transition-colors">Room Packages</a></li>
                <li><a href="#gallery" className="text-white/60 hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#meals" className="text-white/60 hover:text-white transition-colors">Meal Timings</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-brand-secondary text-xs">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Rules & Regulations</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-sm">
            © 2026 Shree Dev Boys Hostel & PG. All rights reserved. 
            <span className="ml-4">Managed by Sanwar Gurjar</span>
          </p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-widest text-white/40 border border-white/5">Jaipur Division</span>
            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-widest text-white/40 border border-white/5">Govt. Authorized</span>
          </div>
        </div>
      </div>
    </footer>
  );
};