
import React from 'react';

interface HeaderProps {
  setView: (view: 'home' | 'privacy' | 'terms') => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Experience', href: '#experience' },
    { label: 'Process', href: '#process' },
    { label: 'Industries', href: '#industries' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => { setView('home'); window.scrollTo(0, 0); }}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity focus:outline-none"
          >
            <div className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-none">
              <span className="text-white font-black text-sm tracking-tighter">MTD</span>
            </div>
            <div className="flex flex-col items-start border-l border-gray-200 pl-3 leading-none">
              <span className="text-lg font-black tracking-tight text-gray-900 uppercase">MT DIGITAL LLC</span>
              <span className="text-[8px] text-gray-400 font-bold tracking-[0.3em] uppercase mt-1">Manufacturing & Coordination</span>
            </div>
          </button>
          
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="lg:hidden">
             <button 
              onClick={() => { 
                setView('home'); 
                setTimeout(() => document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}), 100); 
              }}
              className="px-4 py-2 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-none shadow-sm"
             >
              Contact
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
