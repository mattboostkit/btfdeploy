export interface Treatment {
  id: string;
  name: string;
  category: string;
  description: string;
  expectedResults: string;
  duration: string;
  recovery: string;
  price: string; // Price per treatment
  image: string;
  requiresConsultation?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  image?: string; // Made image optional
  quote: string;
  treatment: string;
}