
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-white py-24 sm:py-32 overflow-hidden border-b border-gray-200 min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          alt="Advanced Manufacturing Facility" 
          className="w-full h-full object-cover grayscale opacity-20 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-gray-900"></span>
            <span className="text-[10px] font-bold text-gray-900 uppercase tracking-[0.3em]">Operational Manufacturing Entity</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-8 uppercase leading-[1.1]">
            Comprehensive Manufacturing <br/>
            & Assembly Coordination
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-10 font-medium">
            MT DIGITAL LLC provides high-reliability assembly coordination and production support for specialized consumer electronics. We specialize in <strong>Low, Medium, and High Volume</strong> execution for desk lamps, unique lighting fixtures, electronic gadgets, and toy-compliant products under <strong>Private Label</strong> and OEM models.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-200 pt-8">
             <div>
               <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Established</span>
               <span className="text-lg font-bold text-gray-900 uppercase">Since 2017</span>
             </div>
             <div>
               <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Production Range</span>
               <span className="text-lg font-bold text-gray-900 uppercase tracking-tight">Scalable Volume</span>
             </div>
             <div>
               <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Focus</span>
               <span className="text-lg font-bold text-gray-900 uppercase tracking-tight">Private Label Support</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
