import React, { ReactNode } from 'react';

const AboutSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-[#58412f] text-center mb-8">
          About Us
        </h2>
        <p className="text-lg text-[#58412f] text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo
          quis magna facilisis, et eleifend elit rhoncus. Vestibulum vel velit lorem. Quisque
          vulputate, lorem eu tempor tincidunt, augue ante sagittis quam.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;