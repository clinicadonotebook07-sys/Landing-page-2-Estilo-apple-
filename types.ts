export interface FormData {
  name: string;
  whatsapp: string;
  email: string;
  siteType: string;
  niche: string;
  goals: string[];
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export enum SectionId {
  HOME = 'home',
  BENEFITS = 'benefits',
  HOW_IT_WORKS = 'how-it-works',
  EXAMPLES = 'examples',
  CONTACT = 'contact',
  FAQ = 'faq'
}