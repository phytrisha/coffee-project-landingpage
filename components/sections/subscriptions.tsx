import React from 'react';
import SubscriptionCard from '../subscription-card';

const SubscriptionSection = () => {

    const espressoFeatures = ['5 Kaffees pro Monat', 'Bei allen teilnehmenden Cafés einlösbar', 'Bis zu 3 Kaffees auf den nächsten Monat übertragbar']
    const cortadoFeatures = ['10 Kaffees pro Monat', 'Bei allen teilnehmenden Cafés einlösbar', 'Bis zu 5 Kaffees auf den nächsten Monat übertragbar']
    const cappuccinoFeatures = ['1 Kaffee pro Tag', 'Bei allen teilnehmenden Cafés einlösbar', 'Bis zu 10 Kaffees auf den nächsten Monat übertragbar']

  return (
    <div className='py-16'>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#433A21] text-center mb-4">
          Unsere Abo-Modelle
        </h2>
        <p className="text-base text-[#433A21] text-center mb-4 max-w-4xl mx-auto">
          Drei Abo-Modelle stehen dir zur Auswahl. Bei jedem erhältst du eine unterschiedliche Anzahl an Kaffees pro Monat.
        </p>
        <div className="py-8 px-4 justify-stretch gap-y-8 md:gap-x-8 flex flex-col md:flex-row">
            <SubscriptionCard
                title="Klein"
                price="15 Euro / Monat"
                features={espressoFeatures}
            />
            <SubscriptionCard
                title="Mittel"
                price="30 Euro / Monat"
                features={cortadoFeatures}
            />
            <SubscriptionCard
                title="Groß"
                price="60 Euro / Monat"
                features={cappuccinoFeatures}
            />
        </div>
    </div>
  );
};

export default SubscriptionSection;