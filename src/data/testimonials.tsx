import testimonialsFR from './testimonials_fr.json';
import testimonialsEN from './testimonials_en.json';
import testimonialsEL from './testimonials_el.json';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  age?: number;
  category: string;
  short_quote: string;
  image?: string;
  images?: string[];
  gallery_type?: 'before_after' | 'gallery';
  before_image?: string;
  after_image?: string;
  full_story: string[];
}

export function getTestimonials(locale: string = 'fr'): Testimonial[] {
  switch (locale) {
    case 'en':
      return testimonialsEN as Testimonial[];
    case 'el':
      return testimonialsEL as Testimonial[];
    case 'fr':
    default:
      return testimonialsFR as Testimonial[];
  }
}