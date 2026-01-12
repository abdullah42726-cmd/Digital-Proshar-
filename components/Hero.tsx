
import React, { useEffect, useState, useRef } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;
  const isEn = lang === 'EN';
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - left) / width,
        y: (e.clientY - top) / height,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setMagneticPos({
      x: (e.clientX - centerX) * 0.25,
      y: (e.clientY - centerY) * 0.25,
    });
  };

  const resetMagnetic = () => setMagneticPos({ x: 0, y: 0 });

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-white px-6 pt-24"
    >
      {/* 
          Spatial Canvas Architecture 
          Refined light volumes for depth without clutter.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dynamic Light Fields */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[90vw] h-[90vw] rounded-full bg-brand/[0.03] blur-[220px] transition-transform duration-[4s] ease-out"
          style={{ transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)` }}
        />
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[70vw] h-[70vw] rounded-full bg-gray-50 blur-[180px] transition-transform duration-[4s] ease-out"
          style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
        />
        
        {/* Micro-Precision Grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{ 
            backgroundImage: `radial-gradient(#1D1D1F 1px, transparent 1px)`, 
            backgroundSize: '80px 80px' 
          }} 
        />
        
        {/* Structural Technical Guides */}
        <div className="absolute top-[15%] left-0 w-full h-[1px] bg-gray-100/30" />
        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gray-100/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="space-y-16 md:space-y-24">
          
          {/* Headline Engine (Primary Focus) */}
          <div className="space-y-10">
            <h1 className="hero-title flex flex-col text-left">
              <div className="overflow-hidden">
                <span className={`block text-5xl md:text-8xl lg:text-[100px] font-black text-[#1D1D1F] leading-[1.05] tracking-tight transition-all duration-[1.2s] cubic-bezier(0.16, 1, 0.3, 1) ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  {isEn ? 'Modern Impact ' : 'আধুনিক প্রভাব '}
                  <span className="text-brand font-extrabold whitespace-nowrap opacity-90 text-[0.7em] md:text-[0.75em]">
                    {isEn ? 'for Medical Professionals.' : 'মেডিকেল পেশাদারদের জন্য।'}
                  </span>
                </span>
              </div>
              
              {/* Subheadline (Secondary Focus) */}
              <div className="overflow-hidden mt-10">
                <span className={`block text-xl md:text-3xl font-medium text-gray-400 leading-[1.4] max-w-4xl tracking-tight transition-all duration-[1.2s] delay-300 cubic-bezier(0.16, 1, 0.3, 1) ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  {isEn 
                    ? "Engineering high-fidelity brands and digital experiences specifically tailored for the pioneers of medical excellence and clinical authority." 
                    : "চিকিৎসা উৎকর্ষ এবং ক্লিনিকাল অথরিটির অগ্রগামীদের জন্য বিশেষভাবে তৈরি উচ্চমানের ব্র্যান্ডিং এবং ডিজিটাল অভিজ্ঞতা।"}
                </span>
              </div>
            </h1>
          </div>

          {/* Action Hub (Quaternary Focus) */}
          <div className={`flex flex-col sm:flex-row items-center justify-start gap-12 pt-4 transition-all duration-[1.2s] delay-500 cubic-bezier(0.16, 1, 0.3, 1) ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button 
              onMouseMove={handleMagneticMove}
              onMouseLeave={resetMagnetic}
              style={{ transform: `translate(${magneticPos.x}px, ${magneticPos.y}px)` }}
              className="group relative w-full sm:w-auto px-16 py-8 bg-[#1D1D1F] text-white rounded-[32px] font-black text-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-6">
                {t.cta}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand transition-colors duration-500">
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>
              </span>
              <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)" />
            </button>

            <div className="flex items-center gap-8 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 rounded-[28px] bg-white border border-gray-100 flex items-center justify-center text-[#1D1D1F] shadow-xl transition-all duration-500 group-hover:bg-[#1D1D1F] group-hover:text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M10 15.065V8.935c0-.856.911-1.35 1.637-.894l4.903 3.065a1.05 1.05 0 010 1.788l-4.903 3.065c-.726.456-1.637-.038-1.637-.894zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/></svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand rounded-full border-4 border-white animate-pulse" />
              </div>
              <div className="text-left">
                <div className="text-xs font-black text-[#1D1D1F] uppercase tracking-widest">{isEn ? 'Latest Case Study' : 'সাম্প্রতিক কেস স্টাডি'}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Ref: Delta Hospital OVC</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes laser-scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(1400%); opacity: 0; }
        }
        .animate-laser-scan {
          animation: laser-scan 4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .hero-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Hero;
