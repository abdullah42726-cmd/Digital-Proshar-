
import React from 'react';
import { Language, Service } from '../types';
import { SERVICES, TRANSLATIONS } from '../constants';

interface ServicesProps {
  lang: Language;
  onSelectService: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ lang, onSelectService }) => {
  const t = TRANSLATIONS[lang].services;
  const isEn = lang === 'EN';

  // Custom span logic for a sophisticated asymmetrical grid
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
    <div className="py-24 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 md:mb-32 gap-12">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#F5F5F7] border border-gray-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                {isEn ? 'Capability Hub' : 'আমাদের সামর্থ্য'}
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1D1D1F] leading-[0.85]">
              Designed for<br />
              <span className="text-brand">Precision.</span>
            </h2>
          </div>
          <div className="md:max-w-sm space-y-6">
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              {t.subtitle} {isEn ? "Strategic solutions engineered exclusively for the modern healthcare landscape." : ""}
            </p>
            <div className="h-[2px] w-12 bg-gray-100"></div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-auto">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service)}
              className={`group relative cursor-pointer overflow-hidden rounded-[48px] p-10 md:p-14 bg-[#F5F5F7] border border-transparent transition-all duration-700 hover:bg-white hover:shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)] hover:border-gray-100 flex flex-col justify-between ${getGridSpan(index)} min-h-[380px] md:min-h-[420px]`}
            >
              {/* Interactive Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-12">
                  {/* Icon Container (Squircle) */}
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 bg-white rounded-[28px] shadow-sm rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                    <div className="relative w-full h-full rounded-[28px] bg-white flex items-center justify-center border border-gray-100 group-hover:border-brand/20 group-hover:text-brand transition-all duration-500 shadow-xl shadow-black/5 overflow-hidden">
                      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <ServiceIcon name={service.icon} className="w-9 h-9 relative z-10" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-[#1D1D1F] leading-none transition-colors group-hover:text-brand">
                      {service.title[lang]}
                    </h3>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-sm">
                      {service.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-12">
                  <div className="flex items-center gap-4 group/btn">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center transition-all duration-500 group-hover:bg-brand group-hover:border-brand group-hover:text-white shadow-sm">
                      <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4"/>
                      </svg>
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1D1D1F] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      {t.learnMore}
                    </span>
                  </div>
                  
                  {/* Service Counter */}
                  <div className="text-[10px] font-black text-gray-200 uppercase tracking-widest transition-colors group-hover:text-gray-300">
                    S/0{index + 1}
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Grid Pattern */}
              <div className="absolute bottom-0 right-0 w-full h-full opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                 <svg width="100%" height="100%"><defs><pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill={`url(#grid-${index})`} /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ServiceIcon = ({ name, className }: { name: string, className?: string }) => {
  const iconClass = className || "w-8 h-8";
  switch(name) {
    case 'ShieldCheck': return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    case 'Video': return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
    case 'BarChart': return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
    case 'Users': return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    case 'Palette': return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;
    case 'Code': return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    default: return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  }
}

export default Services;
