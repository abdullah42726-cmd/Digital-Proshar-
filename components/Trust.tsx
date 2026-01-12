
import React, { useRef, useState, useEffect } from 'react';
import { Language } from '../types';
import { TESTIMONIALS } from '../constants';

const Trust: React.FC<{ lang: Language }> = ({ lang }) => {
  const isEn = lang === 'EN';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      const cardWidth = scrollRef.current.querySelector('.testimonial-card')?.clientWidth || 0;
      const gap = 32; 
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(index);

      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.testimonial-card')?.clientWidth || 0;
      const gap = 32;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const scrollStep = (direction: 'left' | 'right') => {
    const nextIndex = direction === 'left' ? Math.max(0, activeIndex - 1) : Math.min(TESTIMONIALS.length - 1, activeIndex + 1);
    scrollTo(nextIndex);
  };

  const institutionalPartners = [
    'Square', 'Evercare', 'Labaid', 'United', 'Apollo', 'Ibn Sina', 'Popular', 'Delta'
  ];

  return (
    <div className="py-24 md:py-48 bg-white overflow-hidden relative border-y border-gray-100">
      {/* Ghost Parallax Background */}
      <div 
        className="absolute top-1/2 left-0 w-full whitespace-nowrap text-[25vw] font-black pointer-events-none select-none transition-transform duration-1000 ease-out flex gap-20 opacity-[0.03]"
        style={{ 
          transform: `translateX(${-scrollProgress * 0.1}%) translateY(-50%)`,
          WebkitTextStroke: '1px #000',
          color: 'transparent'
        }}
      >
        <span>TRUST</span>
        <span>IMPACT</span>
        <span>CARE</span>
        <span>RESULTS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 md:mb-24 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-brand"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand">
                {isEn ? 'The Community Trust' : 'কমিউনিটি ট্রাস্ট'}
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1D1D1F] leading-[0.85]">
              Trusted by<br />Experts<span className="text-brand">.</span>
            </h2>
          </div>

          <div className="md:max-w-xs space-y-8 pt-4">
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              {isEn 
                ? 'Join 50+ medical professionals who have redefined their digital presence with us.' 
                : '৫০-এর বেশি চিকিৎসা পেশাদারদের সাথে যোগ দিন যারা আমাদের সাথে তাদের ডিজিটাল উপস্থিতি পুনর্নির্ধারণ করেছেন।'}
            </p>
            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => scrollStep('left')}
                className={`w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-brand hover:border-brand hover:text-white active:scale-90 shadow-lg shadow-black/5'}`}
                disabled={activeIndex === 0}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button 
                onClick={() => scrollStep('right')}
                className={`w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${activeIndex === TESTIMONIALS.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-brand hover:border-brand hover:text-white active:scale-90 shadow-lg shadow-black/5'}`}
                disabled={activeIndex === TESTIMONIALS.length - 1}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Slider Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollPaddingLeft: '0',
              scrollPaddingRight: '0'
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="testimonial-card flex-shrink-0 w-[85vw] md:w-[600px] snap-center transition-all duration-700 ease-out"
                style={{
                  opacity: Math.abs(activeIndex - idx) > 1 ? 0.3 : 1,
                  transform: `scale(${activeIndex === idx ? 1 : 0.92})`,
                }}
              >
                <div className={`h-full p-10 md:p-14 rounded-[40px] border transition-all duration-500 ${
                  activeIndex === idx 
                    ? 'bg-white border-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)]' 
                    : 'bg-[#F5F5F7]/50 border-transparent grayscale opacity-60'
                }`}>
                  <div className="flex flex-col h-full justify-between gap-12">
                    <div className="space-y-8">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(s => (
                            <svg key={s} className="w-3 h-3 text-brand fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 border-l border-gray-200 pl-3">Clinical Story</span>
                      </div>
                      
                      <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#1D1D1F] leading-snug">
                        "{t.quote[lang]}"
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-4 ring-[#F5F5F7]">
                        <img src={t.avatar} className="w-full h-full object-cover" alt={t.name} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl md:text-2xl font-black tracking-tight text-[#1D1D1F]">{t.name}</h4>
                        <p className="text-[10px] font-black uppercase tracking-[0.1em] text-brand">{t.role[lang]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-8 md:w-48 h-1" />
          </div>

          <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === i ? 'w-10 bg-brand' : 'w-2 bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-4">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <div className="w-12 h-[1px] bg-gray-200"></div>
              <span>{String(TESTIMONIALS.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Revamped Institutional Trust: Kinetic Gallery */}
        <div className="mt-48 md:mt-64 space-y-12">
          <div className="text-center">
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-4">
              {isEn ? 'Institutional Partnerships' : 'প্রাতিষ্ঠানিক পার্টনারশিপ'}
            </h5>
            <div className="w-12 h-[1px] bg-gray-100 mx-auto"></div>
          </div>

          <div className="relative group overflow-hidden py-10">
            {/* Visual Fade Masks */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <div className="flex gap-8 md:gap-16 whitespace-nowrap animate-marquee group-hover:pause-marquee">
              {[...institutionalPartners, ...institutionalPartners].map((name, i) => (
                <div 
                  key={i}
                  className="inline-flex items-center px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-gray-50/50 border border-gray-100/50 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1 group/chip"
                >
                  <span className="text-2xl md:text-4xl font-black tracking-tighter text-gray-300 transition-colors duration-500 group-hover/chip:text-[#1D1D1F]">
                    {name}<span className="text-brand transition-transform duration-500 group-hover/chip:scale-125 inline-block">.</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .pause-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Trust;
