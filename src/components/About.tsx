import React from 'react';
import { motion } from 'motion/react';
import { BadgeCheck, Users, Clock, Star } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/bacha.jpeg"
                alt="Proprietor: Sanwar Gurjar"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 p-8">
                <h3 className="text-white text-2xl font-bold">Sanwar Gurjar</h3>
                <p className="text-white/70 font-medium">(Sanwal Ram Gurjar)</p>
                <p className="text-brand-secondary font-bold mt-1 uppercase text-sm tracking-widest">Founder & Proprietor</p>
              </div>
            </div>
            {/* Design Accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-secondary/10 rounded-full z-0" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-brand-primary/10 rounded-2xl z-0" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4">
              <Star className="w-4 h-4 fill-current" />
              About Our Legacy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              4 Years of Providing <br />
              <span className="text-brand-primary">A Secure Haven for Students</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Shree Dev Boys Hostel, we understand that finding a home away from home is crucial for your academic and professional success. For the past 4 years, we've dedicated ourselves to creating a space that combines discipline with comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-6 h-6 text-brand-secondary" />
                  <h4 className="font-bold text-slate-900">Trusted Guidance</h4>
                </div>
                <p className="text-slate-500 text-sm">Personally managed by Sanwar Gurjar to ensure a family-like atmosphere.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-brand-secondary" />
                  <h4 className="font-bold text-slate-900">Community Life</h4>
                </div>
                <p className="text-slate-500 text-sm">Join a network of focused students and young professionals from across India.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-brand-secondary" />
                  <h4 className="font-bold text-slate-900">Round-the-Clock Support</h4>
                </div>
                <p className="text-slate-500 text-sm">Our staff is always available to help you with any room or meal requests.</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-600 relative">
              <span className="absolute -top-4 left-6 text-6xl text-brand-secondary/20 leading-none">"</span>
              We treat every resident like a member of our own family. Your comfort and safety are my top priorities.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
