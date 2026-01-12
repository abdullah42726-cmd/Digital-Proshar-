
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import Logo from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  onLogoClick?: () => void;
  onNavClick?: (id: string) => void;
  isSubPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onLogoClick, onNavClick, isSubPage = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.services, id: 'services' },
    { name: t.portfolio, id: 'portfolio' },
    { name: t.about, id: 'about' },
    { name: t.contact, id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(id);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isSubPage ? 'bg-white/80 apple-blur border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={onLogoClick} className="hover:opacity-80 transition-opacity">
          <Logo className="h-7 md:h-8" />
        </button>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleLinkClick(e, item.id)}
                className="text-sm font-medium hover:text-brand transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'EN' ? 'BN' : 'EN')}
              className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-gray-200 transition-colors"
            >
              {lang === 'EN' ? 'BN' : 'EN'}
            </button>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
