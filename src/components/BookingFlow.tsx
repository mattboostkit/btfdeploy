export default function BookingFlow() {
  return (
    <section className="booking-section py-16 bg-gradient-to-r from-primary-400 to-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-3xl font-serif font-bold sm:text-4xl">Book Your Appointment</h2>
        <p className="mt-4 text-xl mb-8">
          Select an available time that works for you.
        </p>

        <div className="booking-container mt-10 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="booking-iframe-container">
            <iframe 
              src="https://link.boostkit.io/widget/group/tLdotUjYkYChCMUNo20b" 
              style={{
                width: '100%',
                border: 'none',
                overflow: 'hidden',
                minHeight: '750px',
                height: '100%',
              }} 
              scrolling="no" 
              id="tLdotUjYkYChCMUNo20b_1747412899653"
              title="Booking Calendar"
            />
            <script src="https://link.boostkit.io/js/form_embed.js" type="text/javascript" />
          </div>
        </div>
      </div>
    </section>
  );
}
