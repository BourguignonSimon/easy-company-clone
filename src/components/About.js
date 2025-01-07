import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a digital agency focused on delivering innovative and user-friendly solutions. 
            Our team combines creativity with technical expertise to build remarkable digital experiences.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="rounded-lg bg-orange-100 p-6 mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with creative solutions</p>
            </div>
          </div>
          <div className="text-center">
            <div className="rounded-lg bg-orange-100 p-6 mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Delivering excellence in every project</p>
            </div>
          </div>
          <div className="text-center">
            <div className="rounded-lg bg-orange-100 p-6 mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Results</h3>
              <p className="text-gray-600">Focused on achieving your goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;