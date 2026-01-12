
import React from 'react';
import { Language, Service } from '../types';
import { SERVICES, TRANSLATIONS } from '../constants';
import { ServiceIcon } from './Services';

interface ServicesPageProps {
  lang: Language;
  onSelectService: (service: Service) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ lang, onSelectService }) => {
  const t = TRANSLATIONS[lang].services;
  const isEn = lang === 'EN';

  // Asymmetrical grid logic from the home page's "Designed for Precision" section
  const getGridSpan = (index: number) => {
    const spans = [
      "md:col-span-8 md:row-span-1", // 1
      "md:col-span-4 md:row-span-1", // 2
      "md:col-span-4 md:row-span-1", // 3
      "md:col-span-8 md:row-span-1", // 4
      "md:col-span-6 md:row-span-1", // 5
      "md:col-span-6 md:row-span-1", // 6
    ];
    return spans[index] || "md:col-span-4";
  };

  return (
    <div className="pt-32 pb-32 px-6 bg-white min-h-screen overflow-hidden">
      {/* Precision Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-0" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cinematic Header with Ghost Text */}
        <div className="relative mb-32 md:mb-48">
          <div className="absolute -top-24 -left-12 text-[18vw] font-black text-gray-50 opacity-[0.04] select-none pointer-events-none leading-none tracking-tighter uppercase">
            ARSENAL
          </div>
          
          <div className="space-y-12 relative z-10">
            <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-[#F5F5F7] border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                {isEn ? 'The Diagnostic Suite' : 'ডায়াগনস্টিক সুইট'}
              </span>
            </div>
            
            <h1 className="text-8xl md:text-[180px] font-black tracking-tight text-[#1D1D1F] leading-[0.75] animate-in fade-in slide-in-from-bottom-12 duration-1000">
              Our<br />
              <span className="text-brand flex items-center gap-8">
                Scope<span className="text-gray-200">.</span>
                <div className="h-[2px] flex-1 bg-gray-100 hidden md:block"></div>
              </span>
            </h1>
            
            <p className="text-3xl md:text-5xl text-gray-400 font-medium max-w-4xl leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              {isEn 
                ? "Precision-engineered branding for the modern clinical landscape." 
                : "আধুনিক ক্লিনিকাল ল্যান্ডস্কেপের জন্য সুনির্দিষ্টভাবে তৈরি ব্র্যান্ডিং।"}
            </p>
          </div>
        </div>

        {/* Asymmetrical Bento Grid - Mirroring Home Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-auto">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service)}
              className={`group relative cursor-pointer overflow-hidden rounded-[56px] p-12 md:p-16 bg-[#F5F5F7] border border-transparent transition-all duration-700 hover:bg-white hover:shadow-[0_80px_160px_-40px_rgba(0,0,0,0.12)] hover:border-gray-100 flex flex-col justify-between opacity-0 animate-in fade-in slide-in-from-bottom-12 fill-mode-forwards ${getGridSpan(index)} min-h-[420px] md:min-h-[480px]`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Interactive Glow Effect */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand/5 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-12">
                  {/* Squircle Icon Container */}
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-white rounded-[32px] shadow-sm rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                    <div className="relative w-full h-full rounded-[32px] bg-white flex items-center justify-center border border-gray-100 group-hover:border-brand/20 group-hover:text-brand transition-all duration-500 shadow-xl shadow-black/5 overflow-hidden">
                      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <ServiceIcon name={service.icon} className="w-10 h-10 relative z-10" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Module S/0{index + 1}</div>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[#1D1D1F] leading-none transition-colors group-hover:text-brand">
                      {service.title[lang]}
                    </h3>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-sm">
                      {service.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-12">
                  <div className="flex items-center gap-4 group/btn">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center transition-all duration-500 group-hover:bg-brand group-hover:border-brand group-hover:text-white shadow-xl shadow-black/5">
                      <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4"/>
                      </svg>
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-[#1D1D1F] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      {t.learnMore}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Grid Pattern */}
              <div className="absolute bottom-0 right-0 w-full h-full opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                 <svg width="100%" height="100%"><defs><pattern id={`page-grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill={`url(#page-grid-${index})`} /></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Global Methodology Terminal Footer */}
        <div className="mt-64 p-16 md:p-32 rounded-[80px] bg-[#1D1D1F] text-center relative overflow-hidden shadow-[0_100px_200px_-50px_rgba(0,0,0,0.4)]">
          {/* Animated Mesh Grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand/5 opacity-30 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center text-left">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">The Proshar Methodology</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.85]">
                Built for<br />
                <span className="text-brand">Impact.</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-xl">
                {isEn 
                  ? "Every clinical brand we build follows a rigorous diagnostic phase, creative treatment plan, and performance-based follow-up." 
                  : "আমাদের প্রতিটি ক্লিনিকাল ব্র্যান্ড একটি কঠোর ডায়াগনস্টিক পর্যায় এবং পারফরম্যান্স-ভিত্তিক ফলো-আপ অনুসরণ করে।"}
              </p>

              <div className="flex flex-col md:flex-row items-center gap-8 pt-6">
                <button className="group relative w-full md:w-auto px-16 py-7 bg-brand text-white rounded-[32px] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand/20 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {isEn ? "Book Strategy Session" : "সেশন বুক করুন"}
                    <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                
                <div className="text-white/40 font-black text-xs uppercase tracking-[0.3em]">
                  100% Medical Focus Only
                </div>
              </div>
            </div>

            <div className="relative group hidden lg:block">
              <div className="relative aspect-square rounded-[64px] overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
                  alt="Strategy"
                />
                <div className="absolute inset-0 bg-brand/10 opacity-40 mix-blend-overlay" />
              </div>
              
              {/* Contextual Stats Floating */}
              <div className="absolute -bottom-12 -left-12 p-10 bg-white rounded-[40px] shadow-2xl -rotate-6 group-hover:-rotate-3 transition-transform duration-700">
                <div className="text-5xl font-black tracking-tighter text-[#1D1D1F]">100%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand mt-1">Ethical Integrity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
