
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

const TEAM_MEMBERS = [
  {
    id: "UNIT-01",
    name: "Ariful Islam",
    role: { EN: "Creative Director", BN: "ক্রিয়েটিভ ডিরেক্টর" },
    bio: { EN: "A visionary storyteller with a decade of experience in medical branding.", BN: "মেডিকেল ব্র্যান্ডিংয়ে এক দশকের অভিজ্ঞতা সম্পন্ন একজন স্বপ্নদ্রষ্টা।" },
    avatar: "https://i.pravatar.cc/400?u=arif"
  },
  {
    id: "UNIT-02",
    name: "Dr. Farah Jabin",
    role: { EN: "Chief Strategy Officer", BN: "চিফ স্ট্র্যাটেজি অফিসার" },
    bio: { EN: "Bridging the gap between clinical ethics and digital innovation.", BN: "ক্লিনিকাল এথিক্স এবং ডিজিটাল উদ্ভাবনের মধ্যে ব্যবধান ঘোচাতে কাজ করছেন।" },
    avatar: "https://i.pravatar.cc/400?u=farah"
  },
  {
    id: "UNIT-03",
    name: "Tanvir Ahmed",
    role: { EN: "Lead Content Strategist", BN: "লিড কন্টেন্ট স্ট্র্যাটেজিস্ট" },
    bio: { EN: "Master of medical narratives and high-conversion social content.", BN: "মেডিকেল ন্যারেটিভ এবং হাই-কনভার্সন সোশ্যাল কন্টেন্টের মাস্টার।" },
    avatar: "https://i.pravatar.cc/400?u=tanvir"
  },
  {
    id: "UNIT-04",
    name: "Nabila Khan",
    role: { EN: "Client Success Manager", BN: "ক্লায়েন্ট সাকসেস ম্যানেজার" },
    bio: { EN: "Ensuring every healthcare partner reaches their maximum digital potential.", BN: "প্রতিটি স্বাস্থ্যসেবা অংশীদারের সর্বোচ্চ ডিজিটাল সম্ভাবনা নিশ্চিত করছেন।" },
    avatar: "https://i.pravatar.cc/400?u=nabila"
  }
];

const AboutPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const isEn = lang === 'EN';
  const t = TRANSLATIONS[lang].about;

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen overflow-hidden">
      {/* Background Precision Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-0" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cinematic Header with Parallax Ghost Text */}
        <div className="relative mb-48 md:mb-64">
           <div className="absolute -top-24 -left-12 text-[20vw] font-black text-gray-50 opacity-[0.03] select-none pointer-events-none leading-none tracking-tighter">
             PRECISION
           </div>
           
           <div className="space-y-12 relative z-10">
             <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-[#F5F5F7] border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
               <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                 {isEn ? 'The Architecture of Trust' : 'বিশ্বাসের স্থাপত্য'}
               </span>
             </div>
             
             <h1 className="text-8xl md:text-[180px] font-black tracking-tighter text-[#1D1D1F] leading-[0.75] animate-in fade-in slide-in-from-bottom-12 duration-1000">
               The<br />
               <span className="text-brand flex items-center gap-8">
                 Core<span className="text-gray-200">.</span>
                 <div className="h-[2px] flex-1 bg-gray-100 hidden md:block"></div>
               </span>
             </h1>
             
             <p className="text-3xl md:text-5xl text-gray-400 font-medium max-w-5xl leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
               {isEn 
                 ? "Synthesizing medical ethics with vanguard creative technology." 
                 : "মেডিকেল এথিক্স এবং ভ্যানগার্ড ক্রিয়েটিভ প্রযুক্তির সমন্বয়।"}
             </p>
           </div>
        </div>

        {/* The Blueprint (Philosophy) - Enhanced Layout */}
        <div className="grid lg:grid-cols-12 gap-16 md:gap-32 mb-64 items-center">
          <div className="lg:col-span-7 relative group">
            {/* Split Exposure Container */}
            <div className="relative aspect-[16/10] rounded-[64px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1400" 
                alt="The Laboratory" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              {/* Technical Schematic Overlay */}
              <div className="absolute inset-0 bg-brand/10 mix-blend-multiply opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
              
              {/* Floating UI Callouts */}
              <div className="absolute top-12 left-12 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-2xl hidden md:block">
                <div className="text-[10px] font-black text-brand uppercase tracking-widest mb-1">Diagnostic Phase</div>
                <div className="text-sm font-bold text-[#1D1D1F]">Market Anatomy Analysis</div>
              </div>
            </div>
            {/* Precision Lines */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-b-2 border-r-2 border-gray-100 rounded-br-[64px] hidden lg:block" />
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
               <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#1D1D1F] leading-none">
                 {isEn ? "The Studio Philosophy" : "স্টুডিও ফিলোসফি"}
               </h2>
               <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                 {isEn 
                   ? "Digital Proshar operates as a Clinical Brand Architect. We treat every practice with the precision of a surgeon and the vision of an artist."
                   : "ডিজিটাল প্রসার একটি ক্লিনিকাল ব্র্যান্ড আর্কিটেক্ট হিসেবে কাজ করে। আমরা প্রতিটি প্র্যাকটিসকে একজন সার্জনের সূক্ষ্মতা এবং একজন শিল্পীর দূরদৃষ্টি দিয়ে পরিচালনা করি।"}
               </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: isEn ? "Clinical Trust First" : "ক্লিনিকাল ট্রাস্ট", desc: isEn ? "Vetted through medical ethics." : "মেডিকেল এথিক্স দ্বারা যাচাইকৃত।" },
                { label: isEn ? "Cinematic Excellence" : "সিনেমাটিক উৎকর্ষ", desc: isEn ? "World-class visual output." : "বিশ্বমানের ভিজ্যুয়াল আউটপুট।" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-[#F5F5F7] border border-transparent hover:border-brand/10 transition-all group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand font-black group-hover/item:bg-brand group-hover/item:text-white transition-all">
                    0{i+1}
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#1D1D1F]">{item.label}</div>
                    <div className="text-sm text-gray-400 font-medium">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Specialized Unit (Team) - Asymmetrical Bento Grid */}
        <div className="space-y-32">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-[#1D1D1F]">
                The Unit<span className="text-brand">.</span>
              </h2>
              <p className="text-xl text-gray-400 font-medium uppercase tracking-[0.4em]">
                {isEn ? "Specialized Minds" : "বিশেষজ্ঞ চিন্তাবিদ"}
              </p>
            </div>
            <div className="h-[2px] flex-1 bg-gray-100 hidden md:block mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={member.id} 
                className="group relative opacity-0 animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-forwards"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="space-y-10">
                  {/* Portrait Container with Squircle Mask */}
                  <div className="relative aspect-[3/4] rounded-[56px] overflow-hidden bg-[#F5F5F7] transition-all duration-700 group-hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.15)] group-hover:scale-[1.02]">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-all duration-[2s] grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                    
                    {/* Diagnostic UI Layer */}
                    <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/50 shadow-[0_0_15px_rgba(255,255,255,0.8)] -translate-y-full group-hover:animate-scan-fast z-20 pointer-events-none" />
                    
                    {/* Unit ID Badge */}
                    <div className="absolute top-8 left-8 z-30">
                       <div className="px-4 py-2 rounded-2xl bg-[#1D1D1F]/90 text-white backdrop-blur-md text-[9px] font-black uppercase tracking-widest border border-white/10">
                         {member.id}
                       </div>
                    </div>

                    {/* Quick Action Profile Button */}
                    <div className="absolute bottom-8 right-8 z-30 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#1D1D1F] shadow-2xl hover:bg-brand hover:text-white transition-all cursor-pointer">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-3xl font-black tracking-tight text-[#1D1D1F] group-hover:text-brand transition-colors leading-none">
                        {member.name}
                      </h3>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] pt-1">
                        {member.role[lang]}
                      </div>
                    </div>
                    <p className="text-lg text-gray-500 font-medium leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {member.bio[lang]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Command Center CTA Footer */}
        <div className="mt-64 p-16 md:p-32 rounded-[80px] bg-[#1D1D1F] text-center relative overflow-hidden shadow-[0_100px_200px_-50px_rgba(0,0,0,0.4)]">
          {/* Animated Mesh Grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand/5 opacity-30 pointer-events-none" />
          
          <div className="relative z-10 space-y-12">
             <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Headquarters - Dhanmondi</span>
             </div>
             
             <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] max-w-5xl mx-auto">
               Join the<br />
               <span className="text-brand">Partnership.</span>
             </h2>

             <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-8">
                <button className="group relative w-full md:w-auto px-16 py-7 bg-white text-[#1D1D1F] rounded-[32px] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {isEn ? "Collaborate with Us" : "আমাদের সাথে কাজ করুন"}
                    <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                  <div className="absolute inset-0 bg-brand/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                
                <div className="text-white/40 font-black text-xs uppercase tracking-[0.3em]">
                  {isEn ? "Verified Healthcare Agency" : "ভেরিফাইড হেলথকেয়ার এজেন্সি"}
                </div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan-fast {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
        .group:hover .group-hover\\:animate-scan-fast {
          animation: scan-fast 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
