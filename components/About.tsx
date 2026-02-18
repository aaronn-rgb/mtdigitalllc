import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase mb-4">Corporate Strategy</h2>
            <h3 className="text-3xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tight">Structured Production <br/>& Operational Control</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-base">
              <p>
                Established in 2017, MT DIGITAL LLC serves as a manufacturing coordination organization dedicated to providing a stable, transparent alternative to direct factory management. We operate as the central nexus for brands requiring consistent outcomes without the complexity of internal manufacturing overhead.
              </p>
              <p>
                Our core expertise is in <strong>Production Management Alignment</strong>. We coordinate the procurement of specialized components, manage precision assembly lines, and oversee technical secondary processes including acrylic fabrication and laser engraving.
              </p>
              <p>
                As a US registered entity based in Wyoming, we maintain high standards for project documentation and verification, ensuring that every production run meets the stringent quality requirements of our institutional partners.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2 italic">Institutional Continuity Since 2017</p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Operating under strict operational protocols to support independent brands and complex custom projects with verified manufacturing outcomes.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[600px] bg-gray-100 border border-gray-200 shadow-sm overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/aaronn-rgb/mtdigitalllc/refs/heads/main/9.png" 
                alt="Technical Quality Verification at Bench" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                 <div className="w-1.5 h-16 bg-white"></div>
                 <div>
                    <p className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-1">Technical Verification</p>
                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">Institutional Oversight & Engineering</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;