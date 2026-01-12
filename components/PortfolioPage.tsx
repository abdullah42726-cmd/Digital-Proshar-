
import React, { useState } from 'react';
import { Language } from '../types';
import { PROJECTS, TRANSLATIONS } from '../constants';

const PortfolioPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].portfolio;
  const isEn = lang === 'EN';
  const [filter, setFilter] = useState<'All' | 'Branding' | 'Media' | 'Web'>('All');

  // Logic to filter projects (mapping our data types to general filters)
  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Branding') return p.type.EN.includes('Branding') || p.type.EN.includes('Identity');
    if (filter === 'Media') return p.type.EN.includes('Media') || p.type.EN.includes('OVC');
    if (filter === 'Web') return p.type.EN.includes('Web');
    return true;
  });

  const categories = [
    { id: 'All', label: isEn ? 'All Works' : 'সব কাজ' },
    { id: 'Branding', label: isEn ? 'Branding' : 'ব্র্যান্ডিং' },
    { id: 'Media', label: isEn ? 'Production' : 'প্রোডাকশন' },
    { id: 'Web', label: isEn ? 'Digital' : 'ডিজিটাল' },
  ];

  return (
    <div className="pt-32 pb-32 px-6 bg-[#F5F5F7] min-h-screen overflow-hidden">
      {/* Precision Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cinematic Split-Layer Header */}
        <div className="mb-32 md:mb-48 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="space-y-12 max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                {isEn ? 'The Evidence Hub' : 'ফলাফল কেন্দ্র'}
              </span>
            </div>
            
            <h1 className="text-8xl md:text-[160px] font-black tracking-tighter text-[#1D1D1F] leading-[0.75] animate-in fade-in slide-in-from-bottom-12 duration-1000">
              Impact<br />
              <span className="text-brand">Stories.</span>
            </h1>
          </div>
          
          <div className="md:max-w-xs space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <p className="text-2xl text-gray-400 font-medium leading-tight tracking-tight">
              {isEn 
                ? "Transforming healthcare through clinically vetted, design-driven outcomes." 
                : "স্বাস্থ্যসেবা খাতের আমূল পরিবর্তন, সৃজনশীল এবং তথ্য-চালিত ফলাফলের মাধ্যমে।"}
            </p>
            <div className="h-[1px] w-24 bg-gray-200"></div>
          </div>
        </div>

        {/* Glassmorphic Navigation Hub */}
        <div className="mb-24 flex justify-start md:justify-center animate-in fade-in duration-1000 delay-500">
          <div className="p-2 rounded-[28px] bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-8 py-3.5 rounded-[22px] text-sm font-black transition-all duration-500 relative ${
                  filter === cat.id ? 'text-white' : 'text-gray-400 hover:text-[#1D1D1F]'
                }`}
              >
                <span className="relative z-10 uppercase tracking-widest">{cat.label}</span>
                {filter === cat.id && (
                  <div className="absolute inset-0 bg-[#1D1D1F] rounded-[22px] shadow-xl animate-in fade-in zoom-in duration-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {filteredProjects.map((project, index) => {
            const isTall = index % 3 === 0;
            return (
              <div 
                key={project.id} 
                className={`group cursor-pointer opacity-0 animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-forwards ${isTall ? 'md:mt-24' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative space-y-10">
                  {/* Image Context Area */}
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[56px] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-1000 group-hover:shadow-[0_80px_160px_-40px_rgba(235,36,39,0.2)] group-hover:scale-[1.01]">
                    <img 
                      src={project.imageUrl} 
                      alt={project.clientName} 
                      className="w-full h-full object-cover transition-all duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
                    />
                    
                    {/* Diagnostic UI Layer */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.8)] -translate-y-full group-hover:animate-scan z-20" />
                    
                    {/* Floating Info Badge */}
                    <div className="absolute top-10 right-10 z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-10 group-hover:translate-x-0">
                      <div className="px-5 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white text-[10px] font-black text-[#1D1D1F] uppercase tracking-[0.2em] shadow-2xl">
                        {project.type[lang]}
                      </div>
                    </div>

                    {/* Performance Micro-Data Layer */}
                    {project.metrics && (
                      <div className="absolute bottom-10 left-10 flex flex-wrap gap-3 z-30">
                        {project.metrics[lang].split('|').map((metric, mIdx) => (
                          <div 
                            key={mIdx} 
                            className="px-6 py-3 rounded-2xl bg-[#1D1D1F]/90 text-white backdrop-blur-md translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700"
                            style={{ transitionDelay: `${mIdx * 100}ms` }}
                          >
                            <div className="text-[9px] font-black uppercase tracking-widest text-brand/80 mb-0.5">Verified Result</div>
                            <div className="text-sm font-black tracking-tight">{metric.trim()}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Textual Anatomy Area */}
                  <div className="px-6 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Case S/0{project.id}</div>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1D1D1F] leading-none transition-colors group-hover:text-brand">
                          {project.clientName}
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1D1D1F] group-hover:bg-[#1D1D1F] group-hover:text-white transition-all duration-500 shadow-xl shadow-black/5 active:scale-90">
                        <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                      {project.description[lang]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Immersive Impact Terminal Footer */}
        <div className="mt-64 p-16 md:p-32 rounded-[80px] bg-[#1D1D1F] text-center relative overflow-hidden shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)]">
          {/* Reactive Background Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand/10 opacity-40 pointer-events-none" />
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand rounded-full blur-[180px] opacity-[0.05]" />
          
          <div className="relative z-10 space-y-16">
             <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Next Operation</span>
             </div>
             
             <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] max-w-5xl mx-auto">
               Ready to be our<br />
               <span className="text-brand">Next Story?</span>
             </h2>

             <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-10">
                <button className="group relative w-full md:w-auto px-20 py-8 bg-brand text-white rounded-[32px] font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand/30 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-6">
                    {isEn ? "Start Diagnostic" : "ডায়াগনস্টিক শুরু করুন"}
                    <svg className="w-7 h-7 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                  {/* Liquid Fill Effect */}
                  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="flex -space-x-4">
                    {[4, 5, 6].map((n) => (
                      <div key={n} className="w-14 h-14 rounded-2xl border-[4px] border-[#1D1D1F] overflow-hidden shadow-2xl transition-transform group-hover:translate-y-[-4px]">
                        <img src={`https://i.pravatar.cc/150?u=doc-footer${n}`} className="w-full h-full object-cover grayscale" alt="Client" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left text-white/40 font-black text-xs uppercase tracking-widest">
                    {isEn ? 'Join 50+ Partners' : '৫০+ পার্টনারদের সাথে যোগ দিন'}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
        .group:hover .group-hover\\:animate-scan {
          animation: scan 3s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
