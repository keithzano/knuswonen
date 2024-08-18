import React from 'react';

// Footer component
export const Footer: React.FC = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* Top section with contact details and social media links */}
      <div className="bg-neutral-200 w-full">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 p-6 md:py-16 gap-6">
          {/* Contact information */}
          <div>
            <h3>Bel of mail ons</h3>
            <p className='text-wrap break-words '>
              012 - 345 67 89
              <br />
              klantenservice@knuswonen.nu
            </p>
          </div>

          {/* Opening hours */}
          <div>
            <h3>Openingstijden</h3>
            <p>
              Maandag t/m donderdag van 8:30 tot 16:30 uur.
              <br />
              Vrijdag van 8:30 tot 12:00 uur
            </p>
          </div>

          {/* Address information */}
          <div>
            <h3>Kom langs op afspraak</h3>
            <p>
              Straatweglaan 123
              <br />
              1234 AB Dorpstad
            </p>
          </div>

          {/* Social media and additional contact */}
          <div>
            <h3>Volg ons op onze sociale kanalen</h3>
            <p>
              012 - 345 67 89
              <br />
              klantenservice@knuswonen.nu
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section with privacy links and copyright */}
      <div className="flex flex-row bg-white px-6 py-4 container mx-auto justify-between">
        {/* Privacy, Cookie Policy, and Disclaimer links */}
        <div className="space-x-6 underline">
          <a href="#">Privacy</a>
          <a href="#">Cookieverklaring</a>
          <a href="#">Disclaimer</a>
        </div>

        {/* Copyright notice */}
        <p>© KnusWonen 2024</p>
      </div>
    </section>
  );
};
