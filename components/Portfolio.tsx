
import React from 'react';
import { Language } from '../types';
import { PROJECTS, TRANSLATIONS } from '../constants';

const Portfolio: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].portfolio;
  const isEn = lang === 'EN';

  return (
    <div className="py-24 md:py-48 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-32 md:mb-48 gap-12">
        <div className="space-y-10 max-w-3xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
              {isEn ? 'Proof of Impact' : 'প্রমাণিত প্রভাব'}
            </span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black tracking-tight text-[#1D1D1F] leading-[0.85]">
            Success<br />
            <span className="italic font-medium text-gray-300 ml-4 md:ml-12">{isEn ? 'through' : ''}</span>
            <span className="text-brand block md:inline md:ml-4">{isEn ? 'Stories' : 'গল্প'}</span>
          </h2>
        </div>
        <div className="md:max-w-xs space-y-6 text-right">
          <p className="text-xl text-gray-400 font-medium leading-relaxed">
            {t.subtitle} {isEn ? "Evidence-based creative results for clinics and specialists." : ""}
          </p>
          <div className="h-[2px] w-12 bg-gray-100 ml-auto"></div>
        </div>
      </div>

      {/* Editorial Staggered Grid */}
      <div className="space-y-32 md:space-y-64">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={project.id} 
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24 opacity-0 animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-forwards`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image Showcase */}
              <div className="w-full md:w-3/5 group cursor-pointer relative">
                <div className="relative overflow-hidden rounded-[64px] aspect-[16/10] bg-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:shadow-[0_80px_160px_-40px_rgba(235,36,39,0.15)] group-hover:scale-[1.02]">
                  <img 
                    src={project.imageUrl} 
                    alt={project.clientName} 
                    className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
                  />
                  
                  {/* Performance Overlay (Hover State) */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Diagnostic Scan Line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.8)] -translate-y-full group-hover:animate-scan z-20 pointer-events-none" />

                  {/* Floating Performance Data Nodes */}
                  {project.metrics && (
                    <div className="absolute bottom-10 left-10 right-10 flex flex-wrap gap-4 z-30">
                      {project.metrics[lang].split('|').map((metric, mIdx) => (
                        <div 
                          key={mIdx} 
                          className="px-8 py-4 rounded-[24px] bg-white/80 backdrop-blur-xl border border-white/40 text-[#1D1D1F] shadow-2xl translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"
                          style={{ transitionDelay: `${mIdx * 100}ms` }}
                        >
                          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">
                            {isEn ? 'Key Metric' : 'মূল মেট্রিক'}
                          </div>
                          <div className="text-xl font-black tracking-tight">{metric.trim()}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-10 right-10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="px-6 py-3 rounded-2xl bg-brand text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                      {project.type[lang]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-2/5 space-y-8">
                <div className="space-y-4">
                  <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-300">
                    Case S/0{index + 1}
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tight text-[#1D1D1F] leading-none">
                    {project.clientName}
                  </h3>
                </div>
                
                <p className="text-2xl text-gray-500 font-medium leading-relaxed">
                  {project.description[lang]}
                </p>

                <button className="group flex items-center gap-6 pt-4">
                  <div className="w-16 h-16 rounded-3xl bg-white border border-gray-100 flex items-center justify-center text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white shadow-xl shadow-black/5">
                    <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-black uppercase tracking-widest text-[#1D1D1F]">
                      {t.viewCase}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {isEn ? 'Full Documentation' : 'সম্পূর্ণ ডকুমেন্টেশন'}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Archive Explorer Footer */}
      <div className="mt-48 md:mt-64 flex flex-col items-center">
        <button className="group relative px-20 py-8 rounded-[32px] bg-[#1D1D1F] text-white font-black text-xl hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="relative z-10 flex items-center gap-6">
            <span>{isEn ? 'Explore Full Archive' : 'সম্পূর্ণ আর্কাইভ দেখুন'}</span>
            <div className="w-8 h-[2px] bg-brand group-hover:w-12 transition-all duration-500"></div>
          </div>
          {/* Liquid Background Fill */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand/40 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
        </button>
        
        <div className="mt-12 text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
           Precision in every pixel.
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .group:hover .group-hover\\:animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
