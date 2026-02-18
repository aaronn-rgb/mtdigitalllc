
import React from 'react';

const Compliance: React.FC = () => {
  return (
    <section id="compliance" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase mb-4">Standards</h2>
            <h3 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Compliance & <br/>Quality Protocols</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-12">
              MT DIGITAL LLC implements structured quality control procedures at appropriate stages of production. Our goal is to coordinate products intended for compliance with relevant safety and performance standards—including strict toy safety requirements—through meticulous technical alignment.
            </p>
            <div className="rounded-none overflow-hidden border border-gray-200 grayscale shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" 
                alt="Laboratory Standard Verification" 
                className="w-full h-64 object-cover" 
              />
            </div>
          </div>
          <div className="lg:col-span-7 bg-white p-10 border border-gray-200 shadow-sm rounded-none">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-900 flex items-center justify-center text-white font-bold text-xs uppercase">Toy</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 uppercase tracking-tight mb-2">Toy Standards Alignment</h4>
                  <p className="text-gray-600 leading-relaxed text-sm font-medium">Manufacturing processes are coordinated to support products intended to meet applicable safety standards for children's goods and gadgets (e.g., ASTM F963 or EN71 where specified).</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-900 flex items-center justify-center text-white font-bold text-xs uppercase">Doc</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 uppercase tracking-tight mb-2">Documentation Verification</h4>
                  <p className="text-gray-600 leading-relaxed text-sm font-medium">We manage the alignment of regulatory documentation and origin tracing, ensuring that assembly processes and component sources are verified for institutional reporting.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-900 flex items-center justify-center text-white font-bold text-xs uppercase">Qc</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 uppercase tracking-tight mb-2">Multi-Volume Control</h4>
                  <p className="text-gray-600 leading-relaxed text-sm font-medium">Quality checkpoints are implemented across Low, Medium, and High volume production stages to ensure consistent, repeatable outcomes for Private Label partners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
