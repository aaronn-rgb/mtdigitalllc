
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase mb-4">Specialized Categories</h2>
          <h3 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tight">Product Development & Manufacturing</h3>
          <div className="space-y-6 text-gray-600 text-base leading-relaxed max-w-3xl">
            <p className="font-medium">
              MT DIGITAL LLC possesses extensive experience in coordinating the production of technical consumer goods. Our history includes successful initiatives for <strong>unique lighting products, LED desk lamps, electronic gadgets,</strong> and products requiring strict alignment with <strong>toy safety standards</strong>.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col group">
            <div className="h-80 bg-gray-50 relative overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" 
                alt="LED Lighting Systems Review" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="mt-6 border-b border-gray-100 pb-4">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">01 / Specialized Lighting</span>
              <h4 className="text-md font-bold text-gray-900 uppercase mt-1 tracking-tight">Desk Lamps & LED Systems</h4>
            </div>
          </div>

          <div className="flex flex-col group">
            <div className="h-80 bg-gray-50 relative overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                alt="Precision Laser Engraving on Technical Hardware" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="mt-6 border-b border-gray-100 pb-4">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">02 / Technical Customization</span>
              <h4 className="text-md font-bold text-gray-900 uppercase mt-1 tracking-tight">Precision Laser Engraving</h4>
            </div>
          </div>

          <div className="flex flex-col group">
            <div className="h-80 bg-gray-50 relative overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" 
                alt="Electronic Gadget Assembly Coordination" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="mt-6 border-b border-gray-100 pb-4">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">03 / Hardware</span>
              <h4 className="text-md font-bold text-gray-900 uppercase mt-1 tracking-tight">Gadgets & Devices</h4>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-gray-50 p-8 border border-gray-200 flex flex-col sm:flex-row gap-8 items-center">
             <div className="w-full sm:w-1/3 h-48 overflow-hidden border border-gray-200 grayscale hover:grayscale-0 transition-all">
               <img 
                src="https://images.unsplash.com/photo-1503691010445-8829baec6963?auto=format&fit=crop&q=80&w=600" 
                alt="Safety and Standard Verification" 
                className="w-full h-full object-cover" 
              />
             </div>
             <div className="w-full sm:w-2/3">
               <h4 className="text-base font-bold text-gray-900 uppercase mb-2 tracking-tight">Compliance-Led Assembly</h4>
               <p className="text-sm text-gray-600 leading-relaxed font-medium">
                 Coordination of manufacturing for products designed to align with strict safety standards, including those relevant to the toys and children's goods sectors.
               </p>
             </div>
           </div>
           
           <div className="bg-gray-50 p-8 border border-gray-200 flex flex-col sm:flex-row gap-8 items-center">
             <div className="w-full sm:w-1/3 h-48 overflow-hidden border border-gray-200 grayscale hover:grayscale-0 transition-all">
               <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=600" 
                alt="Industrial Packaging and Labeling Coordination" 
                className="w-full h-full object-cover" 
              />
             </div>
             <div className="w-full sm:w-2/3">
               <h4 className="text-base font-bold text-gray-900 uppercase mb-2 tracking-tight">Packaging & Labeling Coordination</h4>
               <p className="text-sm text-gray-600 leading-relaxed font-medium">
                 Oversight of customized branding, engraving, and unique packaging requirements for long-term private label manufacturing partnerships.
               </p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
