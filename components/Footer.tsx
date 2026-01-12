
import React from 'react';
import { Language } from '../types';
import Logo from './Logo';

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const isEn = lang === 'EN';

  return (
    <footer className="bg-[#F2F2F7] pt-24 pb-12 px-6 border-t border-gray-200 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-6">
              <Logo className="h-10 md:h-12" />
              <div className="space-y-4">
                <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm">
                  {isEn 
                    ? 'Elevating healthcare brands through cinematic storytelling and digital precision.' 
                    : 'সিনেমাটিক স্টোরিটেলিং এবং ডিজিটাল প্রিসিশনের মাধ্যমে স্বাস্থ্যসেবা ব্র্যান্ডকে উন্নত করা।'}
                </p>
                
                {/* Sister Concern Branding */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="h-[1px] w-6 bg-gray-300"></span>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                    {isEn ? 'A Sister Concern of ' : ''}
                    <span className="text-brand">Doctorkoi</span>
                    {isEn ? '' : ' - এর একটি সহযোগী প্রতিষ্ঠান'}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-black uppercase tracking-[0.2em] text-[#1D1D1F]">
                {isEn ? 'Join our newsletter' : 'নিউজলেটারে যোগ দিন'}
              </h5>
              <div className="flex max-w-sm gap-2">
                <input 
                  type="email" 
                  placeholder={isEn ? "Professional Email" : "আপনার ইমেল"}
                  className="flex-1 bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand focus:outline-none transition-all"
                />
                <button className="bg-[#1D1D1F] text-white px-6 rounded-xl font-bold hover:bg-black transition-all shadow-lg active:scale-95">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
              {isEn ? 'Specializations' : 'বিশেষত্ব'}
            </h5>
            <ul className="space-y-4">
              <FooterLink label={isEn ? 'Medical Branding' : 'মেডিকেল ব্র্যান্ডিং'} />
              <FooterLink label={isEn ? 'OVC Production' : 'ওভিসি প্রোডাকশন'} />
              <FooterLink label={isEn ? 'Media Buying' : 'মিডিয়া বায়িং'} />
              <FooterLink label={isEn ? 'Practice SEO' : 'প্র্যাকটিস এসইও'} />
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
              {isEn ? 'Company' : 'কোম্পানি'}
            </h5>
            <ul className="space-y-4">
              <FooterLink label={isEn ? 'Our Impact' : 'আমাদের প্রভাব'} />
              <FooterLink label={isEn ? 'The Studio' : 'স্টুডিও'} />
              <FooterLink label={isEn ? 'Case Studies' : 'কেস স্টাডি'} />
              <FooterLink label={isEn ? 'Contact' : 'যোগাযোগ'} />
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
              {isEn ? 'Headquarters' : 'সদর দপ্তর'}
            </h5>
            <div className="text-sm font-medium text-gray-500 leading-relaxed space-y-4">
              <div className="space-y-1">
                <p className="text-[#1D1D1F] font-bold tracking-tight">16/A Road 7</p>
                <p>Dhanmondi, Dhaka</p>
                <p>Bangladesh</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <p className="text-[#1D1D1F] font-bold">+880 1711 000 000</p>
                <p className="text-brand font-bold cursor-pointer hover:underline transition-all">hello@digitalproshar.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>© 2024 Digital Proshar</span>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Terms of Service</a>
          </div>

          <div className="flex items-center gap-6">
            <SocialIcon path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            <SocialIcon path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ label }: { label: string }) => (
  <li>
    <a href="#" className="relative group text-sm font-medium text-gray-500 hover:text-brand transition-colors inline-block">
      {label}
      <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-brand transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
);

const SocialIcon = ({ path }: { path: string }) => (
  <a href="#" className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand/20 hover:shadow-lg transition-all transform hover:-translate-y-1">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  </a>
);

export default Footer;
