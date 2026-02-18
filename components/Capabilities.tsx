
import React from 'react';

const Capabilities: React.FC = () => {
  const capabilities = [
    {
      title: "Private Label Development",
      desc: "End-to-end coordination for independent brands, focusing on unique product identity, custom laser engraving, and retail-ready outcomes."
    },
    {
      title: "Volume Scalability",
      desc: "Flexible production frameworks supporting Low, Medium, and High Volume (Mass Production) runs with consistent quality oversight."
    },
    {
      title: "Precision Laser Engraving",
      desc: "Industrial-grade laser marking for technical components, unique product serials, and high-tolerance aesthetic engravings."
    },
    {
      title: "Lighting & Gadget Assembly",
      desc: "Specialized assembly nodes for LED-based desk lamps, electronic gadgets, and custom unique lighting systems."
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase mb-4">Core Competencies</h2>
        <h3 className="text-2xl font-black text-gray-900 mb-12 uppercase tracking-tight">Manufacturing Capability Matrix</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {capabilities.map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 rounded-none hover:border-gray-900 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-8 bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center">0{index + 1}</span>
                  <h4 className="text-md font-bold text-gray-900 uppercase tracking-tight">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-600 pl-12 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-white border border-gray-200 p-10 rounded-none shadow-sm relative overflow-hidden flex flex-col justify-center h-full">
                <h4 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-wider">Multi-Volume Capacity</h4>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm font-medium">
                  MT DIGITAL LLC specializes in coordinating production runs that match market demand. From Low-Volume validation batches to sustained Mass Production cycles, we ensure technical alignment and cost-efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-gray-200">Low Volume</span>
                  <span className="px-3 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-gray-200">Medium</span>
                  <span className="px-3 py-1 bg-gray-900 text-[10px] font-bold text-white uppercase tracking-widest">High Volume</span>
                </div>
            </div>
            <div className="rounded-none overflow-hidden border border-gray-200 grayscale">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" 
                alt="Technical Hardware and Component Review" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
