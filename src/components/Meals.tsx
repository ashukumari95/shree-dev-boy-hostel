import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Utensils, Moon, Clock } from 'lucide-react';

const MealItem = ({ icon: Icon, time, title, description, color }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className={`p-8 rounded-[2rem] bg-white/90 backdrop-blur-sm border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2`}>
      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">
        <Clock className="w-3 h-3" />
        {time}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export const Meals = () => {
  return (
    <section 
      id="meals" 
      className="py-24 overflow-hidden relative min-h-[800px] flex items-center"
      style={{
        // UPDATED: Path to your new illustration and adjusted gradient for purple theme
        backgroundImage: `linear-gradient(to bottom, rgba(58, 64, 153, 0.85), rgba(45, 49, 115, 0.9)), url('/background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Lavender/Purple decorative glows to match the illustration colors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 text-white">
          <h2 className="text-purple-300 font-bold uppercase tracking-[0.2em] text-sm mb-4 italic">Fresh & Simple</h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Hostel Mess & Meal Timings
          </motion.h3>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Hygienic meals in a peaceful environment. We ensure every bite feels like home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <MealItem 
            icon={Coffee}
            time="7:00 AM - 8:00 AM"
            title="Breakfast"
            description="Morning tea, seasonal parathas, and light snacks to start your day right."
            color="bg-indigo-500"
          />
          <MealItem 
            icon={Utensils}
            time="1:00 PM - 4:00 PM"
            title="Lunch"
            description="Traditional thali with dal, rice, and fresh vegetables. Served warm and fresh."
            color="bg-purple-600"
          />
          <MealItem 
            icon={Moon}
            time="7:30 PM - 9:00 PM"
            title="Dinner"
            description="Wholesome dinner options focused on nutrition and easy digestion."
            color="bg-slate-800"
          />
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-white/10 border border-white/20 backdrop-blur-xl text-center max-w-4xl mx-auto">
          <h4 className="text-white text-xl font-bold mb-4 flex items-center justify-center gap-3">
            <BadgeCheck className="w-6 h-6 text-purple-300" />
            Quality Assurance
          </h4>
          <p className="text-white/60 leading-relaxed italic">
            "We maintain strict hygiene protocols in our kitchen to ensure safety and quality in every meal."
          </p>
        </div>
      </div>
    </section>
  );
};

const BadgeCheck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);