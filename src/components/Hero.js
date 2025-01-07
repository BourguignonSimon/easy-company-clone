import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Easy Company
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            We make digital products that people love to use
          </p>
          <a href="#contact" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;