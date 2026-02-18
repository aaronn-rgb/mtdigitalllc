import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase mb-4">Specialized Categories</h2>
          <h3 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tight">Product Development & Manufacturing</h3>
          <div className="space-y-6 text-gray-600 text-base leading-relaxed max-w-3xl">
            <p className="font-medium text-justify">
              MT DIGITAL LLC possesses extensive experience in coordinating the production of technical consumer goods. Our history includes successful initiatives for <strong>unique lighting, LED desk lamps, electronic gadgets,</strong> and projects requiring strict alignment with <strong>toy safety standards</strong>. We provide comprehensive support for established brands and <strong>Private Label</strong> programs.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col group">
            <div className="h-80 bg-gray-50 relative overflow-hidden border border-gray-200">
              <img 
                src="https://raw.githubusercontent.com/aaronn-rgb/mtdigitalllc/main/IMAGES%20FOR%20THE%20WEB/IMAGES%20FOR%20THE%20WEB%202/Whisk_51e108172a0496aae7042477872ac743dr.png" 
                alt="Industrial LED Assembly Components" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="mt-6 border-b border-gray-100 pb-4">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">01 / Specialized Lighting</span>
              <h4 className="text-md font-bold text-gray-900 uppercase mt-1 tracking-tight">Engineering Design</h4>
            </div>
          </div>

          <div className="flex flex-col group">
            <div className="h-80 bg-gray-50 relative overflow-hidden border border-gray-200">
              <img 
                src="https://raw.githubusercontent.com/aaronn-rgb/mtdigitalllc/refs/heads/main/7.png" 
                alt="Close-up of Industrial Laser Engraving Process" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="mt-6 border-b border-gray-100 pb-4">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">02 / Technical Customization</span>
              <h4 className="text-md font-bold text-gray-900 uppercase mt-1 tracking-tight">QA Testing</h4>
            </div>
          </div>

          <div className="flex flex-col group">
            <div className="h-80 bg-gray-50 relative overflow-hidden border border-gray-200">
              <img 
                src="https://raw.githubusercontent.com/aaronn-rgb/mtdigitalllc/refs/heads/main/1.png" 
                alt="Specialized Electronic Gadget Verification" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="mt-6 border-b border-gray-100 pb-4">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">03 / Hardware</span>
              <h4 className="text-md font-bold text-gray-900 uppercase mt-1 tracking-tight">Process Planning</h4>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-gray-50 p-8 border border-gray-200 flex flex-col sm:flex-row gap-8 items-center">
             <div className="w-full sm:w-1/3 h-48 overflow-hidden border border-gray-200 grayscale hover:grayscale-0 transition-all">
               <img 
                src="https://raw.githubusercontent.com/aaronn-rgb/mtdigitalllc/refs/heads/main/8.png" 
                alt="Quality Compliance Testing Station" 
                className="w-full h-full object-cover" 
              />
             </div>
             <div className="w-full sm:w-2/3">
               <h4 className="text-base font-bold text-gray-900 uppercase mb-2 tracking-tight">Compliance Led Assembly</h4>
               <p className="text-sm text-gray-600 leading-relaxed font-medium">
                 Coordination of manufacturing for products designed to align with strict safety standards, including child safe electronics and industrial gadget compliance.
               </p>
             </div>
           </div>
           
           <div className="bg-gray-50 p-8 border border-gray-200 flex flex-col sm:flex-row gap-8 items-center">
             <div className="w-full sm:w-1/3 h-48 overflow-hidden border border-gray-200 grayscale hover:grayscale-0 transition-all">
               <img 
                src="https://raw.githubusercontent.com/aaronn-rgb/mtdigitalllc/refs/heads/main/4.png" 
                alt="Packaging and Industrial Labeling Workflow" 
                className="w-full h-full object-cover" 
              />
             </div>
             <div className="w-full sm:w-2/3">
               <h4 className="text-base font-bold text-gray-900 uppercase mb-2 tracking-tight">Packaging & Labeling Coordination</h4>
               <p className="text-sm text-gray-600 leading-relaxed font-medium">
                 Oversight of customized branding, marking, and high tolerance unique packaging requirements for consistent commercial distribution.
               </p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;