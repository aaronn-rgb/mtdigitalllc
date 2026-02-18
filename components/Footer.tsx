import React from 'react';

interface FooterProps {
  setView: (view: 'home' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8 text-white">
              <div className="w-8 h-8 border-2 border-gray-600 flex items-center justify-center">
                <span className="text-[10px] font-bold">MTD</span>
              </div>
              <span className="text-xl font-bold tracking-tight">MT DIGITAL LLC</span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed text-sm text-gray-500">
              A US based manufacturing coordination and assembly entity since 2017. Specializing in consumer electronic assembly, production management, and operational compliance.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setView('privacy')} className="text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">Privacy Policy</button>
              <span className="text-gray-700">|</span>
              <button onClick={() => setView('terms')} className="text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Corporate Office</h4>
            <address className="not-italic text-sm leading-relaxed space-y-2">
              <p>MT DIGITAL LLC</p>
              <p>30 N Gould St.</p>
              <p>Sheridan, WY 82801</p>
              <p>United States</p>
            </address>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Commercial Contacts</h4>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-tighter text-gray-600 mb-1">Telephone</span>
                <a href="tel:7603380111" className="text-sm font-medium hover:text-white transition-colors">+1 (760) 338 0111</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-tighter text-gray-600 mb-1">Electronic Mail</span>
                <a href="mailto:info@mtdigitalllc.com" className="text-sm font-medium hover:text-white transition-colors">info@mtdigitalllc.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
          <p>© {new Date().getFullYear()} MT DIGITAL LLC. OFFICIAL CORPORATE ENTITY.</p>
          <div className="flex gap-8">
            <span>WYOMING LLC REGISTERED</span>
            <span>DOMICILE: UNITED STATES</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;