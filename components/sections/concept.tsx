import React, { ReactNode } from 'react';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

// Feature Subcomponent
const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#58412f] mb-2">
        {title}
      </h3>
      <p className="text-base text-[#58412f]">
        {description}
      </p>
    </div>
  );
};

const ConceptSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-[#58412f] text-center mb-8">
          The Concept
        </h2>
        <p className="text-lg text-[#58412f] text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo
          quis magna facilisis, et eleifend elit rhoncus. Vestibulum vel velit lorem. Quisque
          vulputate, lorem eu tempor tincidunt, augue ante sagittis quam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#d9534f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            }
            title="One subscription for all cafés in your area"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo quis magna facilisis, et eleifend elit rhoncus."
          />

          {/* Feature 2 */}
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#d9534f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.055 3.015.163a4 4 0 01-1.569 7.557M12 8v0m0-8a8 8 0 110 16A8 8 0 0112 0z"
                />
              </svg>
            }
            title="Saves you money with every coffee"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo quis magna facilisis, et eleifend elit rhoncus."
          />

          {/* Feature 3 */}
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#d9534f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H5a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            }
            title="Supports local cafés and coffee culture"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo quis magna facilisis, et eleifend elit rhoncus."
          />
        </div>
      </div>
    </div>
  );
};

export default ConceptSection;