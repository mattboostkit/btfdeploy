import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TreatmentsSection from '../components/TreatmentsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BookingSection from '../components/BookingSection';
import FAQSection from '../components/FAQSection';
import GallerySection from '../components/GallerySection';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  // Define structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Beyond The Face",
    "description": "Premium aesthetics clinic in Tunbridge Wells offering advanced, non-invasive treatments designed to enhance your natural beauty.",
    "url": "https://beyondtheface.co.uk",
    "telephone": "+44 7717 633418",
    "email": "maryna@beyondtheface.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "19 Vale Road",
      "addressLocality": "Tunbridge Wells",
      "addressRegion": "Kent",
      "postalCode": "TN1 1BS",
      "addressCountry": "UK"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "09:30",
        "closes": "15:30",
        "description": "Massage / Facials"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "10:00",
        "closes": "18:00",
        "description": "Injectables"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:30",
        "closes": "15:30",
        "description": "Facials"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:30",
        "closes": "15:30",
        "description": "Facials"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:30",
        "closes": "15:00",
        "description": "Facials"
      }
    ],
    "image": "https://beyondtheface.co.uk/favicons/android-chrome-512x512.png",
    "priceRange": "££"
  };

  return (
    <div id="top" className="relative">
      <SEO
        title="Premium Aesthetics Clinic in Tunbridge Wells"
        description="Beyond The Face is Tunbridge Wells' premier aesthetics clinic, offering advanced, non-invasive treatments designed to enhance your natural beauty and boost your confidence."
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Hero />
      <AboutSection />
      <TreatmentsSection />
      <GallerySection />
      <TestimonialsSection />
      <div id="booking" className="mb-16">
        <BookingSection />
      </div>
      <FAQSection />
    </div>
  );
};

export default HomePage;