import { useState } from 'react';

export default function BookingFlow() {
  const [selection, setSelection] = useState<string | null>(null);
  const [hasConsulted, setHasConsulted] = useState<boolean | null>(null);

  return (
    <section className="booking-section py-16 bg-gradient-to-r from-primary-400 to-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-3xl font-serif font-bold sm:text-4xl">Ready to Transform Your Look?</h2>
        <p className="mt-4 text-xl">
          Book your consultation or treatment today and take the first step towards a more confident you.
        </p>

        {/* Step 1: What would you like to book? */}
        {!selection && (
          <div className="mt-8 space-y-4">
            <p className="text-lg mb-4">What would you like to book?</p>
            <button
              onClick={() => setSelection('requiresConsult')}
              className="bg-white text-primary-500 font-semibold py-2 px-4 rounded hover:bg-gray-100 mr-2 mb-2 md:mb-0"
            >
              A treatment that requires a consultation
            </button>
            <button
              onClick={() => setSelection('massageOnly')}
              className="bg-white text-primary-500 font-semibold py-2 px-4 rounded hover:bg-gray-100 ml-0 md:ml-2"
            >
              A massage (no consultation needed)
            </button>
          </div>
        )}

        {/* Step 2A: Treatments that require consultation */}
        {selection === 'requiresConsult' && hasConsulted === null && (
          <div className="mt-8 space-y-4">
            <p className="text-lg mb-4">Have you had an initial consultation with us?</p>
            <button
              onClick={() => setHasConsulted(true)}
              className="bg-white text-primary-500 font-semibold py-2 px-4 rounded hover:bg-gray-100 mr-2 mb-2 md:mb-0"
            >
              Yes, I have
            </button>
            <button
              onClick={() => setHasConsulted(false)}
              className="bg-white text-primary-500 font-semibold py-2 px-4 rounded hover:bg-gray-100 ml-0 md:ml-2"
            >
              No, not yet
            </button>
          </div>
        )}

        {/* Step 2B: Show the correct calendar based on consultation status */}
        {selection === 'requiresConsult' && hasConsulted !== null && (
          <div className="booking-container mt-10 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
              {hasConsulted
                ? 'Book Your Treatment'
                : 'Book Your Initial Consultation (£50 Redeemable)'}
            </h3>
            <div className="booking-iframe-container">
              <iframe
                src={
                  hasConsulted
                    ? 'https://link.boostkit.io/widget/booking/TREATMENT_CALENDAR_ID'
                    : 'https://link.boostkit.io/widget/booking/CONSULTATION_CALENDAR_ID'
                }
                title="Booking Calendar"
                className="booking-iframe"
                scrolling="no"
                style={{
                  height: '1426px',
                  minHeight: '750px',
                  width: '100%',
                  border: 'none',
                  overflow: 'hidden',
                }}
              />
            </div>
          </div>
        )}

        {/* Step 3: Show massage calendar directly */}
        {selection === 'massageOnly' && (
          <div className="booking-container mt-10 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">Book a Massage</h3>
            <div className="booking-iframe-container">
              <iframe
                src="https://link.boostkit.io/widget/booking/MASSAGE_CALENDAR_ID"
                title="Massage Calendar"
                className="booking-iframe"
                scrolling="no"
                style={{
                  height: '1426px',
                  minHeight: '750px',
                  width: '100%',
                  border: 'none',
                  overflow: 'hidden',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
