
import React from 'react';
import { Language, Service } from '../types';
import { TRANSLATIONS } from '../constants';

interface ServiceDetailProps {
  lang: Language;
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ lang, service, onBack }) => {
  const t = TRANSLATIONS[lang].services;
  const isEn = lang === 'EN';

  const getServiceImage = (id: string) => {
    const images: Record<string, string> = {
      '1': 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=2000',
      '2': 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=2000',
      '3': 'https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=2000',
      '4': 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000',
      '5': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000',
      '6': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    };
    return images[id] || images['1'];
  };

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-gray-400 hover:text-brand transition-colors mb-12 font-bold uppercase tracking-[0.2em] text-[10px]"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7"/>
          </svg>
          {t.back}
        </button>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-xl bg-brand/5 border border-brand/10 text-brand text-[10px] font-black uppercase tracking-[0.2em]">
                {isEn ? 'Detailed Expertise' : 'বিস্তারিত দক্ষতা'}
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1D1D1F] leading-[0.95]">
                <span className="gradient-text">{service.title[lang]}</span>
              </h1>
            </div>

            <p className="text-2xl md:text-3xl text-gray-500 font-medium leading-relaxed tracking-tight">
              {service.description[lang]}
            </p>

            <div className="grid gap-6">
              {service.details[lang].map((detail, idx) => (
                <div key={idx} className="flex items-start gap-5 p-6 rounded-2xl bg-[#F5F5F7] border border-gray-100 group hover:border-brand/20 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-brand/20">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-lg font-bold text-[#1D1D1F]">{detail}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact" 
                onClick={onBack}
                className="px-10 py-5 bg-[#1D1D1F] text-white rounded-2xl font-black text-center transition-all hover:bg-black hover:scale-105 shadow-xl shadow-black/10"
              >
                {isEn ? 'Start Project' : 'প্রকল্প শুরু করুন'}
              </a>
              <button className="px-10 py-5 bg-white border border-gray-200 rounded-2xl font-black text-center transition-all hover:border-brand hover:text-brand">
                {isEn ? 'Download PDF Guide' : 'পিডিএফ গাইড ডাউনলোড'}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand/5 rounded-[40px] rotate-3 -z-10 blur-2xl" />
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border border-white">
              <img 
                src={getServiceImage(service.id)} 
                alt={service.title[lang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Contextual stat widget */}
            <div className="absolute -bottom-10 -right-10 p-8 rounded-3xl bg-white/80 apple-blur border border-white shadow-2xl hidden md:block">
              <div className="text-4xl font-black text-brand tracking-tighter">98%</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Strategy Section Bottom */}
        <div className="mt-40 pt-32 border-t border-gray-100">
          <div className="max-w-3xl space-y-8">
            <h3 className="text-4xl font-black tracking-tight text-[#1D1D1F]">
              {isEn ? 'Our Approach' : 'আমাদের পদ্ধতি'}
            </h3>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              {isEn 
                ? "We don't just execute; we strategize based on medical ethics and patient psychology. Every touchpoint is analyzed for clinical trust and modern aesthetic appeal." 
                : "আমরা শুধু কাজ করি না; আমরা মেডিকেল এথিক্স এবং রোগীর মনোবিজ্ঞানের ভিত্তিতে কৌশল তৈরি করি। প্রতিটি টাচপয়েন্ট ক্লিনিকাল বিশ্বাস এবং আধুনিক নান্দনিক আবেদনের জন্য বিশ্লেষণ করা হয়।"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
