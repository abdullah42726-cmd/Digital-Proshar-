
export type Language = 'EN' | 'BN';

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  details: Record<Language, string[]>;
  icon: string;
}

export interface Project {
  id: string;
  clientName: string;
  type: Record<Language, string>;
  imageUrl: string;
  description: Record<Language, string>;
  metrics?: Record<Language, string>;
}

export interface Testimonial {
  id: string;
  name: string;
  role: Record<Language, string>;
  quote: Record<Language, string>;
  avatar: string;
}

export interface TranslationStrings {
  nav: {
    services: string;
    portfolio: string;
    about: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    back: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    viewCase: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    callback: string;
    whatsapp: string;
  };
}
