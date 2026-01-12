import React, { useState, useEffect } from 'react';
import { Language, Service } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'portfolio' | 'about'>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Scroll to top when view or service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView, selectedService]);

  const handleNavClick = (id: string) => {
    if (id === 'services') {
      setCurrentView('services');
      setSelectedService(null);
    } else if (id === 'portfolio') {
      setCurrentView('portfolio');
      setSelectedService(null);
    } else if (id === 'about') {
      setCurrentView('about');
      setSelectedService(null);
    } else {
      setCurrentView('home');
      setSelectedService(null);
      // Allow DOM update then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setCurrentView('home');
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (selectedService) {
      return (
        <div className="animate-in fade-in duration-700">
          <ServiceDetail 
            lang={lang} 
            service={selectedService} 
            onBack={() => setSelectedService(null)} 
          />
        </div>
      );
    }

    if (currentView === 'services') {
      return (
        <div className="animate-in fade-in duration-700">
          <ServicesPage lang={lang} onSelectService={setSelectedService} />
        </div>
      );
    }

    if (currentView === 'portfolio') {
      return (
        <div className="animate-in fade-in duration-700">
          <PortfolioPage lang={lang} />
        </div>
      );
    }

    if (currentView === 'about') {
      return (
        <div className="animate-in fade-in duration-700">
          <AboutPage lang={lang} />
        </div>
      );
    }

    return (
      <div className="animate-in fade-in duration-700 overflow-hidden">
        <section id="home">
          <Hero lang={lang} />
        </section>

        <section id="services" className="bg-white">
          <Services lang={lang} onSelectService={setSelectedService} />
        </section>

        <section id="portfolio" className="bg-[#F5F5F7]">
          <Portfolio lang={lang} />
        </section>

        <section id="about" className="bg-white">
          <AboutUs lang={lang} />
        </section>

        <section id="trust" className="bg-white border-y border-gray-100">
          <Trust lang={lang} />
        </section>

        <section id="contact" className="bg-[#F5F5F7]">
          <Contact lang={lang} />
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen selection:bg-brand selection:text-white">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onLogoClick={handleLogoClick} 
        onNavClick={handleNavClick}
        isSubPage={currentView !== 'home' || !!selectedService} 
      />
      
      <main>
        {renderContent()}
      </main>

      <Footer lang={lang} />

      {/* Mobile Sticky CTA - Revamped to be less intrusive */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <a 
          href="https://wa.me/8801711000000" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] active:scale-95 transition-all border border-white/20"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.525 1.44 5.503 1.441 5.428 0 9.847-4.419 9.85-9.847 0-2.628-1.023-5.099-2.882-6.958-1.859-1.859-4.327-2.883-6.957-2.883-5.429 0-9.847 4.419-9.851 9.848 0 2.058.541 4.054 1.564 5.792l-1.026 3.746 3.834-.993z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
