
import { Service, Project, Testimonial, TranslationStrings } from './types';

export const TRANSLATIONS: Record<'EN' | 'BN', TranslationStrings> = {
  EN: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About Us',
      contact: 'Contact'
    },
    hero: {
      headline: 'Creative Solutions for Medical Professionals',
      subheadline: 'We combine clinical trust with modern innovation to build world-class medical brands.',
      cta: 'Request a Proposal'
    },
    services: {
      title: 'Our Specializations',
      subtitle: 'Focused expertise for the healthcare landscape.',
      learnMore: 'Explore Service',
      back: 'Back to Services'
    },
    portfolio: {
      title: 'Success Stories',
      subtitle: 'Proven results for clinics and hospitals across Bangladesh.',
      viewCase: 'View Project'
    },
    about: {
      title: 'Clinical Trust. Modern Innovation.',
      subtitle: 'Who We Are',
      description: 'Digital Proshar is a premium agency dedicated to bridging the gap between healthcare excellence and digital visibility. We understand the sensitivity of medical communication.',
      stats: [
        { label: 'Active Clients', value: '10+' },
        { label: 'Projects Delivered', value: '150+' },
        { label: 'Patient Reach', value: '1M+' }
      ]
    },
    contact: {
      title: 'Ready to Grow?',
      subtitle: 'Schedule a free 15-minute diagnostic session.',
      name: 'Full Name',
      email: 'Work Email',
      message: 'Practice Goals',
      submit: 'Send Request',
      callback: 'Request a Callback',
      whatsapp: 'Chat on WhatsApp'
    }
  },
  BN: {
    nav: {
      services: 'সেবা সমূহ',
      portfolio: 'পোর্টফোলিও',
      about: 'আমাদের সম্পর্কে',
      contact: 'যোগাযোগ'
    },
    hero: {
      headline: 'চিকিৎসা পেশাদারদের জন্য সৃজনশীল সমাধান',
      subheadline: 'আমরা বিশ্বমানের মেডিকেল ব্র্যান্ড তৈরির জন্য ক্লিনিকাল ট্রাস্টের সাথে আধুনিক উদ্ভাবন যুক্ত করি।',
      cta: 'প্রস্তাবনা অনুরোধ করুন'
    },
    services: {
      title: 'আমাদের বিশেষত্ব',
      subtitle: 'স্বাস্থ্যসেবা ল্যান্ডস্কপের জন্য নিবেদিত দক্ষতা।',
      learnMore: 'সেবা দেখুন',
      back: 'সেবা তালিকায় ফিরে যান'
    },
    portfolio: {
      title: 'সাফল্যের গল্প',
      subtitle: 'বাংলাদেশ জুড়ে ক্লিনিক এবং হাসপাতালের জন্য প্রমাণিত ফলাফল।',
      viewCase: 'প্রকল্প দেখুন'
    },
    about: {
      title: 'ক্লিনিকাল ট্রাস্ট। আধুনিক উদ্ভাবন।',
      subtitle: 'আমরা কে',
      description: 'ডিজিটাল প্রসার একটি প্রিমিয়াম এজেন্সি যা স্বাস্থ্যসেবা উৎকর্ষ এবং ডিজিটাল দৃশ্যমানতার মধ্যে ব্যবধান ঘোচাতে কাজ করে। আমরা চিকিৎসা যোগাযোগের সংবেদনশীলতা বুঝি।',
      stats: [
        { label: 'সক্রিয় ক্লায়েন্ট', value: '১০+' },
        { label: 'প্রকল্প সম্পন্ন', value: '১৫০+' },
        { label: 'রোগীর কাছে পৌঁছানো', value: '১এম+' }
      ]
    },
    contact: {
      title: 'আপনি কি প্রস্তুত?',
      subtitle: 'বিনামূল্যে ১৫ মিনিটের পরামর্শ সেশন বুক করুন।',
      name: 'পুরো নাম',
      email: 'ইমেইল ঠিকানা',
      message: 'আপনার লক্ষ্য',
      submit: 'অনুরোধ পাঠান',
      callback: 'কলব্যাক অনুরোধ করুন',
      whatsapp: 'হোয়াটসঅ্যাপে চ্যাট করুন'
    }
  }
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: { EN: 'Static Post Design', BN: 'স্ট্যাটিক পোস্ট ডিজাইন' },
    description: { EN: 'Crafting high-conversion visual content for clinical social profiles.', BN: 'ক্লিনিকাল সোশ্যাল প্রোফাইলের জন্য হাই-কনভার্সন ভিজ্যুয়াল কন্টেন্ট তৈরি করা।' },
    details: { 
      EN: ['Custom Medical Illustrations', 'Patient Education Graphics', 'High-Engagement Layouts', 'Platform Optimization'],
      BN: ['কাস্টম মেডিকেল ইলাস্ট্রেশন', 'রোগী শিক্ষা গ্রাফিক্স', 'হাই-এনগেজমেন্ট লেআউট', 'প্ল্যাটফর্ম অপ্টিমাইজেশন']
    },
    icon: 'Palette'
  },
  {
    id: '2',
    title: { EN: 'OVC Production', BN: 'ওভিসি প্রোডাকশন' },
    description: { EN: 'High-quality video commercials highlighting trust and safety.', BN: 'বিশ্বাস এবং নিরাপত্তার উপর আলোকপাত করে উচ্চ-মানের ভিডিও বিজ্ঞাপন।' },
    details: {
      EN: ['Clinical Storytelling', 'High-End Cinematography', 'Medical Grade Editing', 'Social Media Ready'],
      BN: ['ক্লিনিকাল স্টোরিটেলিং', 'হাই-এন্ড সিনেমাটোগ্রাফি', 'মেডিকেল গ্রেড এডিটিং', 'সোশ্যাল মিডিয়া রেডি']
    },
    icon: 'Video'
  },
  {
    id: '3',
    title: { EN: 'Website Development', BN: 'ওয়েবসাইট ডেভেলপমেন্ট' },
    description: { EN: 'Secure, fast, and HIPAA-compliant digital patient experiences.', BN: 'নিরাপদ, দ্রুত এবং হিপ্পা-কমপ্লায়েন্ট ডিজিটাল পেশেন্ট এক্সপেরিয়েন্স।' },
    details: {
      EN: ['Patient Portals', 'Appointment Integration', 'Medical SEO Structure', 'Mobile-First UI/UX'],
      BN: ['রোগী পোর্টাল', 'অ্যাপয়েন্টমেন্ট ইন্টিগ্রেশন', 'মেডিকেল এসইও স্ট্রাকচার', 'মোবাইল-ফার্স্ট ইউআই/ইউএক্স']
    },
    icon: 'Code'
  },
  {
    id: '4',
    title: { EN: 'Medical Branding', BN: 'মেডিকেল ব্র্যান্ডিং' },
    description: { EN: 'Building trust through clinical yet approachable visual identities.', BN: 'ক্লিনিকাল কিন্তু অ্যাক্সেসযোগ্য ভিজ্যুয়াল আইডেন্টিটির মাধ্যমে বিশ্বাস তৈরি করা।' },
    details: { 
      EN: ['Logo & Identity Design', 'Brand Guidelines', 'Clinical Typography', 'Patient-Friendly Visuals'],
      BN: ['লোগো এবং আইডেন্টিটি ডিজাইন', 'ব্র্যান্ড নির্দেশিকা', 'ক্লিনিকাল টাইপোগ্রাফি', 'রোগী-বান্ধব ভিজ্যুয়াল']
    },
    icon: 'ShieldCheck'
  },
  {
    id: '5',
    title: { EN: 'Social Media Management', BN: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট' },
    description: { EN: 'Engaging content strategy for clinics and medical profiles.', BN: 'ক্লিনিক এবং মেডিকেল প্রোফাইলের জন্য আকর্ষণীয় কন্টেন্ট স্ট্র্যাটেজি।' },
    details: {
      EN: ['Content Calendars', 'Community Engagement', 'Educational Posts', 'Influencer PR'],
      BN: ['কন্টেন্ট ক্যালেন্ডার', 'কমিউনিটি এনগেজমেন্ট', 'শিক্ষামূলক পোস্ট', 'ইনফ্লুয়েন্সার পিআর']
    },
    icon: 'Users'
  },
  {
    id: '6',
    title: { EN: 'Media Buying', BN: 'মিডিয়া বায়িং' },
    description: { EN: 'Strategic ad placement to maximize patient reach and conversion.', BN: 'রোগীর রিচ এবং রূপান্তর সর্বাধিক করার জন্য কৌশলগত বিজ্ঞাপন প্লেসমেন্ট।' },
    details: {
      EN: ['Facebook/Instagram Ads', 'Google Search Ads', 'Precise Targeting', 'ROAS Optimization'],
      BN: ['ফেসবুক/ইনস্টাগ্রাম বিজ্ঞাপন', 'গুগল সার্চ বিজ্ঞাপন', 'সুনির্দিষ্ট টার্গেটিং', 'আরওএএস অপ্টিমাইজেশন']
    },
    icon: 'BarChart'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    clientName: 'City Heart Center',
    type: { EN: 'Branding & OVC', BN: 'ব্র্যান্ডিং এবং ওভিসি' },
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    description: { EN: 'Full brand overhaul and trust-building video campaign for a leading cardiology clinic.', BN: 'একটি শীর্ষস্থানীয় কার্ডিওলজি ক্লিনিকের জন্য সম্পূর্ণ ব্র্যান্ড ওভারহল এবং বিশ্বাস তৈরির ভিডিও ক্যাম্পেইন।' },
    metrics: { EN: '40% Growth in Patients | 2M+ Views', BN: 'রোগীর সংখ্যায় ৪০% বৃদ্ধি | ২এম+ ভিউ' }
  },
  {
    id: '2',
    clientName: 'SafeGuard Diagnostics',
    type: { EN: 'Media Buying', BN: 'মিডিয়া বায়িং' },
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    description: { EN: 'Precision-targeted performance marketing campaign across digital platforms.', BN: 'ডিজিটাল প্ল্যাটফর্ম জুড়ে সুনির্দিষ্ট পারফরম্যান্স মার্কেটিং ক্যাম্পেইন।' },
    metrics: { EN: '3.5x ROAS | 15k+ Appointments', BN: '৩.৫ গুণ আরওএএস | ১৫হাজার+ অ্যাপয়েন্টমেন্ট' }
  },
  {
    id: '3',
    clientName: 'Luxe Dental Studio',
    type: { EN: 'Web & Identity', BN: 'ওয়েব এবং আইডেন্টিটি' },
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    description: { EN: 'Premium website design and visual identity for aesthetic dentistry.', BN: 'অ্যাসথেটিক ডেন্টিস্ট্রির জন্য প্রিমিয়াম ওয়েবসাইট ডিজাইন এবং ভিজ্যুয়াল আইডেন্টিটি।' },
    metrics: { EN: '60% Booking Increase | Award Winner', BN: 'বুকিংয়ে ৬০% বৃদ্ধি | পুরস্কার বিজয়ী' }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Sarah Ahmed',
    role: { EN: 'Chief Surgeon, Delta Hospital', BN: 'চিফ সার্জন, ডেল্টা হাসপাতাল' },
    quote: { EN: 'Digital Proshar transformed our clinic’s patient outreach with their professional approach.', BN: 'ডিজিটাল প্রসার তাদের পেশাদার পদ্ধতির মাধ্যমে আমাদের ক্লিনিকের রোগীর আউটরিচ পরিবর্তন করেছে।' },
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Dr. Rafiqul Islam',
    role: { EN: 'Founder, Apex Heart Institute', BN: 'প্রতিষ্ঠাতা, অ্যাপেক্স হার্ট ইনস্টিটিউট' },
    quote: { EN: 'The OVC they produced built immediate trust with our patients. Exceptional quality.', BN: 'তারা যে ওভিসি তৈরি করেছে তা আমাদের রোগীদের সাথে তাৎক্ষণিক বিশ্বাস তৈরি করেছে। অসাধারণ গুণমান।' },
    avatar: 'https://i.pravatar.cc/150?u=rafiq'
  },
  {
    id: '3',
    name: 'Dr. Ananya Roy',
    role: { EN: 'Senior Gynecologist', BN: 'সিনিয়র গাইনোকোলজিস্ট' },
    quote: { EN: 'Digital visibility is crucial for specialized care. Proshar helped me reach patients who truly needed my help.', BN: 'বিশেষায়িত সেবার জন্য ডিজিটাল দৃশ্যমানতা অত্যন্ত গুরুত্বপূর্ণ। প্রসার আমাকে এমন রোগীদের কাছে পৌঁছাতে সাহায্য করেছে যাদের সত্যিই আমার সাহায্য প্রয়োজন।' },
    avatar: 'https://i.pravatar.cc/150?u=ananya'
  },
  {
    id: '4',
    name: 'Dr. Kamal Uddin',
    role: { EN: 'Orthopedic Consultant', BN: 'অর্থোপেডিক কনসালটেন্ট' },
    quote: { EN: 'Their social media strategy is educational yet keeps the professional dignity of a doctor intact.', BN: 'তাদের সোশ্যাল মিডিয়া স্ট্র্যাটেজি শিক্ষামূলক এবং একই সাথে একজন ডাক্তারের পেশাদার মর্যাদা অক্ষুণ্ণ রাখে।' },
    avatar: 'https://i.pravatar.cc/150?u=kamal'
  },
  {
    id: '5',
    name: 'Dr. Selina Parveen',
    role: { EN: 'Pediatric Specialist', BN: 'পেডিয়াট্রিক বিশেষজ্ঞ' },
    quote: { EN: 'Trust is everything in pediatrics. Their branding made my clinic feel warm and approachable.', BN: 'পেডিয়াট্রিক্সে বিশ্বাসই সবকিছু। তাদের ব্র্যান্ডিং আমার ক্লিনিককে উষ্ণ এবং অ্যাক্সেসযোগ্য করে তুলেছে।' },
    avatar: 'https://i.pravatar.cc/150?u=selina'
  },
  {
    id: '6',
    name: 'Dr. Mahbub Alam',
    role: { EN: 'Consultant Neurologist', BN: 'কনসালটেন্ট নিউরোলজিস্ট' },
    quote: { EN: 'The clinical storytelling they used for my practice OVC was unparalleled. High precision work.', BN: 'আমার প্র্যাকটিস ওভিসি-র জন্য তারা যে ক্লিনিকাল স্টোরিটেলিং ব্যবহার করেছে তা অতুলনীয় ছিল। অত্যন্ত নিখুঁত কাজ।' },
    avatar: 'https://i.pravatar.cc/150?u=mahbub'
  }
];
