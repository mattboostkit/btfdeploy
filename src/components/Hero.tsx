import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div id="top" className="relative bg-gray-50 overflow-hidden h-[600px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/BTF_Hero.avif?updatedAt=1740599856547"
          alt="Beyond The Face aesthetics clinic"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/60 to-secondary-800/50 mix-blend-multiply" />
      </div>

      {/* Content Wrapper: Use flex to position content vertically */}
      {/* On mobile (flex-col): justify-end pushes content down, pb-16 adds space below buttons */}
      {/* On sm+ screens: justify-center centers content vertically */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16 sm:justify-center sm:pb-0 items-start">
        <div className="max-w-2xl bg-black/10 backdrop-blur-sm p-6 rounded-lg">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            Revealing Your True Beauty
          </h1>
          <p className="mt-6 text-xl text-white drop-shadow-md">
            Beyond The Face is Tunbridge Wells' premier aesthetics clinic, offering advanced, non-invasive treatments
            designed to enhance your natural beauty and boost your confidence. Experience transformation at the cellular level.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/treatments#top"
              className="inline-block bg-gradient-to-r from-white to-gray-100 text-primary-500 hover:text-primary-600 px-6 py-3 rounded-md text-base font-medium shadow-md transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Our Treatments
            </Link>
            <Link
              to="/contact#top"
              className="inline-block bg-gradient-to-r from-primary-400 to-primary-500 text-white hover:from-primary-500 hover:to-primary-600 px-6 py-3 rounded-md text-base font-medium shadow-md transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;