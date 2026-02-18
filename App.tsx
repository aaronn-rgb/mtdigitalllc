
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Process from './components/Process';
import Industries from './components/Industries';
import Compliance from './components/Compliance';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header setView={setView} currentView={view} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <About />
            <Capabilities />
            <Experience />
            <Process />
            <Industries />
            <Compliance />
            <Contact />
          </>
        )}
        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'terms' && <TermsOfService />}
      </main>

      <Footer setView={setView} />
    </div>
  );
};

export default App;
