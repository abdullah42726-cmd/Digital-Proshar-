
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

const AboutUs: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;
  const isEn = lang === 'EN';

  return (
    <div className="relative py-32 md:py-64 px-6 overflow-hidden bg-white">
      {/* Background Precision Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gray-100/50" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gray-100/50" />
        <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-brand/5 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-32 items-center">
          
          {/* Visual Composition Column - "The Diagnostic Lens" */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main Cinematic Image with Precision Border */}
              <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.12)] z-10 border border-gray-100 group-hover:border-brand/20 transition-colors duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                  alt="Medical Professionalism" 
                  className="w-full h-full object-cover transition-transform duration-[3s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
                />
                
                {/* Diagnostic Overlay */}
                <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Precision Crosshair UI */}
                <div className="absolute top-10 left-10 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white" />
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-white" />
                </div>
                <div className="absolute bottom-10 right-10 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                  <div className="absolute bottom-0 right-0 w-full h-[1px] bg-white" />
                  <div className="absolute bottom-0 right-0 w-[1px] h-full bg-white" />
                </div>
              </div>

              {/* High-End Floating Performance Node */}
              <div className="absolute -top-12 -right-8 md:-right-16 p-8 rounded-[32px] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] z-20 transition-transform duration-700 group-hover:translate-y-[-10px] hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/5 flex items-center justify-center text-brand">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Precision Growth</span>
                    <span className="text-sm font-black text-[#1D1D1F]">Impact Audit 2024</span>
                  </div>
                </div>
                <div className="text-5xl font-black text-[#1D1D1F] tracking-tighter mb-1">1M+</div>
                <div className="text-[10px] font-black text-brand uppercase tracking-[0.2em]">Patient Engagements</div>
              </div>

              {/* Secondary Detail Image - The "Clinic Focus" */}
              <div className="absolute -bottom-20 -left-12 w-3/5 aspect-square rounded-[40px] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-15 hidden lg:block group-hover:-translate-y-4 transition-transform duration-1000 delay-100">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" 
                  alt="Laboratory" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Column - "The Strategic Core" */}
          <div className="lg:col-span-6 space-y-14 order-1 lg:order-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#F5F5F7] border border-gray-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                  {t.subtitle}
                </span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black tracking-tight text-[#1D1D1F] leading-[0.85]">
                Clinical Trust.<br />
                <span className="text-brand flex items-center gap-6">
                  Modern
                  <div className="h-[2px] w-24 bg-gray-100 hidden md:block"></div>
                </span>
                Innovation.
              </h2>
            </div>

            <p className="text-2xl md:text-3xl text-gray-400 font-medium leading-relaxed tracking-tight max-w-xl">
              {t.description}
            </p>
            
            {/* Bento-Style Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
              {t.stats.map((stat, idx) => (
                <div key={idx} className="group/stat p-8 rounded-[32px] bg-[#F5F5F7] border border-transparent transition-all duration-500 hover:bg-white hover:border-gray-100 hover:shadow-xl flex flex-col justify-between min-h-[160px]">
                  <div className="flex items-center justify-between">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/stat:bg-brand transition-colors" />
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">S/0{idx + 1}</span>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-[#1D1D1F] tracking-tighter mb-2 group-hover/stat:text-brand transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-10">
               <button className="group relative w-full sm:w-auto px-10 py-7 bg-[#1D1D1F] text-white rounded-[28px] font-black text-xl hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-4 whitespace-nowrap">
                    {lang === 'EN' ? 'Meet the Team' : 'টিমের সাথে পরিচিত হন'}
                    <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </button>
               
               <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-14 h-14 rounded-2xl border-[4px] border-white overflow-hidden shadow-xl transition-transform group-hover:translate-y-[-4px]" style={{ transitionDelay: `${n * 100}ms` }}>
                        <img src={`https://i.pravatar.cc/150?u=team-elite${n}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Team member" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-[12px] font-black text-[#1D1D1F] uppercase tracking-wider leading-none">
                      {isEn ? 'Expertise Core' : 'দক্ষতার মূলে'}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                      Healthcare PR Specialists
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
