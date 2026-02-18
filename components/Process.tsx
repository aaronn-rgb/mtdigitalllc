
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Concept Review",
      description: "Technical evaluation of product requirements and target specifications."
    },
    {
      title: "Engineering Coordination",
      description: "Engagement of engineering resources to support manufacturability alignment."
    },
    {
      title: "Prototype Validation",
      description: "Pre production samples and functional verification of assembly processes."
    },
    {
      title: "Mass Production",
      description: "High volume manufacturing aligned with defined technical requirements."
    },
    {
      title: "Final Quality Review",
      description: "Final inspection and verification prior to packaging and handover."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase mb-12 text-center">Lifecycle</h2>
        <h3 className="text-3xl font-black text-gray-900 mb-20 text-center uppercase tracking-tight">Operational Framework</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-px bg-gray-200 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-900 flex items-center justify-center text-xl font-black text-white mb-8 shadow-sm">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <h4 className="text-xs font-black text-gray-900 mb-4 text-center uppercase tracking-widest">{step.title}</h4>
              <p className="text-gray-500 text-[11px] text-center leading-relaxed font-medium px-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
