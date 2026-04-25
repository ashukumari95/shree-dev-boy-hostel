import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-brand-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">Connect With Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Reach Out for Admissions</h3>
            <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed">
              Have questions or want to schedule a visit? Our team is ready to help you find your perfect room in Jaipur.
            </p>

            <div className="grid gap-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center shrink-0 border border-brand-primary/5 text-brand-primary">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Our Location</h4>
                  <p className="text-slate-500 leading-relaxed max-w-xs">
                    Goner Mod Flyover, Saraswati Vihar, Sukhdeopura Nohara, Jaipur, Murlipura at Mishra Ka Barh, Rajasthan 302022</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center shrink-0 border border-brand-primary/5 text-brand-primary">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Call Us Directly</h4>
                  <p className="text-slate-500 text-lg font-medium">+91 9636363629</p>
                  <p className="text-slate-500 text-lg font-medium">+91 9636946726</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center shrink-0 border border-brand-primary/5 text-brand-primary">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Send Email</h4>
                  <p className="text-brand-secondary font-semibold">Shreedevboyshostel6118@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
               <div className="p-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-full cursor-pointer transition-colors"><Instagram className="w-5 h-5"/></div>
               <div className="p-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-full cursor-pointer transition-colors"><Facebook className="w-5 h-5"/></div>
               <div className="p-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-full cursor-pointer transition-colors"><Linkedin className="w-5 h-5"/></div>
            </div>
          </div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-primary/5 rounded-[3rem] -rotate-3 scale-105" />
            <div className="relative h-full min-h-[400px] w-full bg-slate-200 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              {/* Google Maps Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3562.3357810951684!2d75.84461226!3d26.76556451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc90058ec6f7f%3A0xe3277c7b3ef9d666!2sSHREE%20DEV%20BOYS%20HOSTEL%20AND%20PG!5e0!3m2!1sen!2sin!4v1777145924217!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
