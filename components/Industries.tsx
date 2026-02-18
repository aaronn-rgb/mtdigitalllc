
import React from 'react';

const Industries: React.FC = () => {
  const industries = [
    "Consumer Electronics & Gadgets",
    "LED Desk Lamps & Unique Lighting",
    "Decorative Lighting Systems",
    "Toy-Standard Compliant Products",
    "Branded Promotional Electronics",
    "Private Label Consumer Goods"
  ];

  return (
    <section id="industries" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase mb-4">Market Verticals</h2>
          <h3 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Industries Served</h3>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            The company supports diverse consumer-oriented manufacturing projects, focusing on products that require specialized electronic integration, controlled assembly, and strict technical documentation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-200 rounded-none shadow-sm">
                <div className="w-2 h-8 bg-gray-900"></div>
                <span className="font-bold text-gray-900 uppercase text-xs tracking-wider">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
