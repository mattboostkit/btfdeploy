import React, { useState, useEffect } from 'react';
import './BookingSection.css';

export default function BookingFlow() {
  const [activeCalendar, setActiveCalendar] = useState<'consultation' | 'treatments'>('consultation');
  const [iframeHeight, setIframeHeight] = useState(750);
  const [isLoading, setIsLoading] = useState(true);


  // Adjust iframe height based on screen size
  useEffect(() => {
    const updateIframeHeight = () => {
      if (window.innerWidth < 375) {
        setIframeHeight(950); // Extra small mobile
      } else if (window.innerWidth < 480) {
        setIframeHeight(900); // Small mobile
      } else if (window.innerWidth < 768) {
        setIframeHeight(800); // Mobile/tablet
      } else {
        setIframeHeight(750); // Desktop
      }
    };

    updateIframeHeight();
    window.addEventListener('resize', updateIframeHeight);
    return () => window.removeEventListener('resize', updateIframeHeight);
  }, []);

  // Load the BoostKit script
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="boostkit.io"]')) {
      setIsLoading(false);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://link.boostkit.io/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      setIsLoading(false);
    };
    
    script.onerror = () => {
      console.error('Failed to load BoostKit script');
      setIsLoading(false);
    };
    
    document.head.appendChild(script);

    return () => {
      // Don't remove the script on cleanup as it might be used by other components
    };
  }, []);

  // Handle iframe load events
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Handle iframe error
  const handleIframeError = () => {
    console.error('Failed to load booking iframe');
    setIsLoading(false);
  };

  return (
    <section className="booking-section py-16 bg-gradient-to-r from-primary-400 to-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-3xl font-serif font-bold sm:text-4xl">Book Your Appointment</h2>
        <p className="mt-4 text-xl mb-8">
          Choose the right booking option for your needs.
        </p>

        {/* Calendar Selection Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveCalendar('consultation')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCalendar === 'consultation'
                ? 'bg-white text-primary-600 shadow-lg transform scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-sm sm:text-base">📋</span>
              <span className="text-sm sm:text-base">Initial Consultation</span>
            </div>
            <div className="text-xs mt-1 opacity-80">
              Required for Vivace & Skin Peels
            </div>
          </button>

          <button
            onClick={() => setActiveCalendar('treatments')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCalendar === 'treatments'
                ? 'bg-white text-primary-600 shadow-lg transform scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-sm sm:text-base">💉</span>
              <span className="text-sm sm:text-base">Book Treatments</span>
            </div>
            <div className="text-xs mt-1 opacity-80">
              All other treatments
            </div>
          </button>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
            <h3 className="font-semibold text-lg mb-2">Initial Consultation</h3>
            <ul className="text-sm space-y-1">
              <li>• Required for Vivace RF Microneedling</li>
              <li>• Required for Environ/Theraderm Skin Peel</li>
              <li>• 30-minute consultation</li>
              <li>• Treatment plan discussion</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
            <h3 className="font-semibold text-lg mb-2">Direct Treatment Booking</h3>
            <ul className="text-sm space-y-1">
              <li>• Botox & Dermal Fillers</li>
              <li>• LED Light Therapy</li>
              <li>• Remedial Massage</li>
              <li>• Existing clients only</li>
            </ul>
          </div>
        </div>

        {/* Calendar Container */}
        <div className="booking-container mt-10 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
              <span className="ml-3 text-gray-600">Loading calendar...</span>
            </div>
          )}
          
          <div className="booking-iframe-container">
            {activeCalendar === 'consultation' ? (
              <iframe 
                src="https://link.boostkit.io/widget/booking/Ktomr74FyLiLn9N4Enpy" 
                style={{
                  width: '100%',
                  border: 'none',
                  overflow: 'auto',
                  minHeight: `${iframeHeight}px`,
                  height: '100%',
                  opacity: isLoading ? 0 : 1,
                }} 
                scrolling="yes" 
                id="tLdotUjYkYChCMUNo20b_1753093273731"
                title="Initial Consultation Booking"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                allow="fullscreen"
              />
            ) : (
              <iframe 
                src="https://link.boostkit.io/widget/service-menu/687e11ae7a55e04dfea6ea17" 
                style={{
                  width: '100%',
                  border: 'none',
                  overflow: 'auto',
                  minHeight: `${iframeHeight}px`,
                  height: '100%',
                  opacity: isLoading ? 0 : 1,
                }} 
                scrolling="yes" 
                id="687e11ae7a55e04dfea6ea17_1753093393676"
                title="Treatment Booking"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                allow="fullscreen"
              />
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-sm opacity-90 max-w-2xl mx-auto">
          <p>
            <strong>Need help?</strong> Call us at{' '}
            <a href="tel:+447717633418" className="underline hover:text-white">
              +44 7717 633418
            </a>{' '}
            or email{' '}
            <a href="mailto:maryna@beyondtheface.co.uk" className="underline hover:text-white">
              maryna@beyondtheface.co.uk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
