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
      <p className="text-base text-[#433A21]">
        {description}
      </p>
    </div>
  );
};

const ConceptSection = () => {
  return (
    <div className="py-16">
      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#433A21] text-center mb-8">
          Das Konzept
        </h2>
        <p className="text-base text-[#433A21] text-center mb-12 max-w-4xl mx-auto">
          Die Idee ist einfach: Lade dir unsere App herunter und schließe ein Abo ab, das zu dir passt. Durch das Abo erhältst du jeden Monat Coffee Credits, die du gegen Heißgetränke deiner Wahl in teilnehmenden Cafés einlösen kannst.
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
            title="Ein Abo für alle Cafés in deiner Umgebung"
            description="Die Credits, die du in deinem Abo jeden Monat erhälst, kannst du in jedem teilnehmenden Café einlösen."
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
            title="Spare bares Geld mit jedem Kaffee"
            description="Durch das Abo-Modell zahlst du für jeden Kaffee beachtlich weniger, als wenn du ihn einzeln kaufen würdest."
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
            title="Trägt zur lokalen Café- und Kaffeekultur bei"
            description="Durch deinen Beitrag erlangen lokale Cafés mehr Stabilität und können weiter fantastische Produkte anbieten."
          />
        </div>
      </div>
    </div>
  );
};

export default ConceptSection;