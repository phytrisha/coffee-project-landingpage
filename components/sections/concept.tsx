import React, { ReactNode } from 'react';
import Image from 'next/image'

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
      <h3 className="text-xl md:text-3xl font-serif font-semibold text-[#D03900] mb-2">
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
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#58412f] text-center mb-8">
          The Concept
        </h2>
        <p className="text-lg text-[#58412f] text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo
          quis magna facilisis, et eleifend elit rhoncus. Vestibulum vel velit lorem. Quisque
          vulputate, lorem eu tempor tincidunt, augue ante sagittis quam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          {<Feature
            icon={
              <Image
                src="/icons/feature-icon-heart@2x.png"
                width={64}
                height={64}
                alt="Two Hearts"
              />
            }
            title="One subscription for all cafés in your area"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo quis magna facilisis, et eleifend elit rhoncus."
          />}

          {/* Feature 2 */}
          <Feature
            icon={
              <Image
                src="/icons/feature-icon-money@2x.png"
                width={64}
                height={64}
                alt="Two Hearts"
              />
            }
            title="Saves you money with every coffee"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo quis magna facilisis, et eleifend elit rhoncus."
          />

          {/* Feature 3 */}
          <Feature
            icon={
              <Image
                src="/icons/feature-icon-coffee@2x.png"
                width={64}
                height={64}
                alt="Two Hearts"
              />
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