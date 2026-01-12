
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;
  const isEn = lang === 'EN';

  return (
    <div className="py-24 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* The Hub Layout - Centered for Maximum Impact */}
        <div className="relative group">
          {/* Background Decorative Element */}
          <div className="absolute inset-0 bg-brand/5 rounded-[64px] blur-3xl opacity-30 -z-10 transition-transform duration-1000 group-hover:scale-110" />
          
          <div className="p-10 md:p-20 rounded-[64px] bg-[#F5F5F7] border border-gray-100 relative overflow-hidden flex flex-col items-center text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
            {/* Decorative Pulse */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-12 w-full max-w-2xl">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white shadow-sm border border-gray-100 mx-auto">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#1D1D1F]">
                  {isEn ? 'Direct Line Available' : 'সরাসরি যোগাযোগ'}
                </span>
              </div>

              <div className="space-y-6">
                <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-[#1D1D1F] leading-[0.85]">
                  {isEn ? 'Start' : 'শুরু'} <span className="text-brand">{isEn ? 'Intake' : 'ইনটেক'}</span>.
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-lg mx-auto">
                  {isEn 
                    ? 'Connect with our clinical strategists to transform your medical brand identity.' 
                    : 'আপনার মেডিকেল ব্র্যান্ড পরিবর্তনের জন্য আমাদের ক্লিনিকাল স্ট্র্যাটেজিস্টদের সাথে যোগাযোগ করুন।'}
                </p>
              </div>

              {/* Action Hub - Vertical Stack for Clarity */}
              <div className="grid gap-6 pt-4">
                <a 
                  href="https://wa.me/8801711000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-8 md:p-10 rounded-[40px] bg-[#25D366] text-white shadow-[0_40px_80px_-20px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-[1.03] active:scale-95 overflow-hidden relative"
                >
                  <div className="relative z-10 flex items-center gap-8">
                    <div className="w-16 h-16 rounded-[24px] bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.525 1.44 5.503 1.441 5.428 0 9.847-4.419 9.85-9.847 0-2.628-1.023-5.099-2.882-6.958-1.859-1.859-4.327-2.883-6.957-2.883-5.429 0-9.847 4.419-9.851 9.848 0 2.058.541 4.054 1.564 5.792l-1.026 3.746 3.834-.993z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-black">{isEn ? 'WhatsApp Us' : 'হোয়াটসঅ্যাপ'}</div>
                      <div className="text-[11px] font-black uppercase tracking-[0.2em] opacity-80">Priority Support • Instant Response</div>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center transform transition-transform group-hover:translate-x-2">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                  
                  {/* Animated Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </a>

                <button className="group w-full flex items-center justify-between p-8 md:p-10 rounded-[40px] bg-white border border-gray-100 shadow-xl shadow-black/5 transition-all duration-500 hover:border-brand/20 active:scale-95">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-[24px] bg-gray-50 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-500 shadow-sm">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-black text-[#1D1D1F]">{isEn ? 'Download Pitch Deck' : 'আমাদের পিচ ডেক ডাউনলোড করুন'}</div>
                      <div className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">PDF Guide • Updated v2.4</div>
                    </div>
                  </div>
                  <div className="w-12 h-[2px] bg-gray-100 group-hover:w-16 group-hover:bg-brand transition-all duration-500" />
                </button>
              </div>

              {/* Centered Trust Strip */}
              <div className="pt-16 space-y-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] w-8 bg-gray-200" />
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Trusted by Clinical Pioneers</div>
                  <div className="h-[1px] w-8 bg-gray-200" />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 grayscale opacity-50">
                   <span className="text-xl font-black tracking-tighter">Delta Hospital.</span>
                   <span className="text-xl font-black tracking-tighter">Square.</span>
                   <span className="text-xl font-black tracking-tighter">United.</span>
                   <span className="text-xl font-black tracking-tighter">Evercare.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
