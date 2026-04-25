import React from 'react';
import { motion } from 'motion/react';
import { Check, Wifi, Droplets, Zap, Shield } from 'lucide-react';

const PlanCard = ({ title, price, features, image, isPopular = false, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`relative group rounded-[2.5rem] border overflow-hidden transition-all duration-500 hover:shadow-2xl ${isPopular ? 'bg-brand-primary text-white border-brand-primary scale-105 z-10 shadow-xl' : 'bg-white text-slate-900 border-slate-100 shadow-lg'}`}
  >
    {/* Room Image Container */}
    <div className="relative h-56 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      {isPopular && (
        <span className="absolute top-4 right-4 bg-brand-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
          Most Popular
        </span>
      )}
      <div className="absolute bottom-4 left-6">
         <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </div>

    <div className="p-8">
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-black">₹{price}</span>
        <span className={`text-sm font-bold ${isPopular ? 'text-white/70' : 'text-slate-500'}`}>/ month</span>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature: string) => (
          <div key={feature} className="flex items-center gap-3">
            <div className={`p-1 rounded-full ${isPopular ? 'bg-white/20' : 'bg-brand-secondary/10'}`}>
              <Check className={`w-3.5 h-3.5 ${isPopular ? 'text-white' : 'text-brand-secondary'}`} />
            </div>
            <span className="text-sm font-medium opacity-90">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${isPopular ? 'bg-white text-brand-primary hover:bg-slate-100' : 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-md'}`}>
        Select Package
      </button>

      {/* Amenity Icons */}
      <div className={`mt-8 pt-6 border-t flex justify-between ${isPopular ? 'border-white/10' : 'border-slate-100'}`}>
        <Wifi className="w-5 h-5 opacity-30" />
        <Droplets className="w-5 h-5 opacity-30" />
        <Zap className="w-5 h-5 opacity-30" />
        <Shield className="w-5 h-5 opacity-30" />
      </div>
    </div>
  </motion.div>
);

export const Pricing = () => {
  const commonFeatures = ["Fully Furnished", "High-Speed Wi-Fi", "24/7 Water", "Regular Cleaning"];
  
  return (
    <section id="rooms" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 text-balance">
        <h2 className="text-brand-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4">Pricing Guide</h2>
        <h3 className="text-4xl md:text-5xl font-black text-brand-primary italic">Affordable Excellence</h3>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
          Premium living quarters designed for focus and relaxation. Choose the layout that fits your needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-center">
        <PlanCard 
          title="Triple Seater" 
          price="6,000" 
          image="/public/3seater.png"
          features={[...commonFeatures]} 
          delay={0.1}
        />
        <PlanCard 
          title="Double Seater" 
          price="6,500" 
          image="/public/2seater.png"
          features={[...commonFeatures]} 
          isPopular={true}
          delay={0.2}
        />
        <PlanCard 
          title="Single Seater" 
          price="7,500" 
          image="/public/1seater.png"
          features={[...commonFeatures, "Private Desk", "Large Closet"]} 
          delay={0.3}
        />
      </div>
    </section>
  );
};
