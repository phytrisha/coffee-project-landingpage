import React from 'react';
import SubscriptionCard from '../subscription-card';

const SubscriptionSection = () => {

    const espressoFeatures = ['5 Credits pro Monat', 'Bei allen teilnehmenden Cafés einlösbar', 'Bis zu 3 Getränke auf den nächsten Monat übertragbar', 'Teile Credits mit Freunden']
    const cortadoFeatures = ['15 Credits pro Monat', 'Bei allen teilnehmenden Cafés einlösbar', 'Bis zu 5 Getränke auf den nächsten Monat übertragbar', 'Teile Credits mit Freunden', '5% Rabatt auf Snacks']
    const cappuccinoFeatures = ['30 Credits pro Monat', 'Bei allen teilnehmenden Cafés einlösbar', 'Bis zu 10 Getränke auf den nächsten Monat übertragbar', 'Teile Credits mit Freunden', '10% Rabatt auf Snacks', 'Aufladen von Credits im laufenden Monat']

  return (
    <div className='py-16'>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#433A21] text-center mb-8">
          Unsere Abo-Modelle
        </h2>
        <div className="py-8 justify-stretch gap-y-8 md:gap-x-8 flex flex-col md:flex-row">
            <SubscriptionCard
                title="Espresso"
                price="15 Euro / Monat"
                features={espressoFeatures}
            />
            <SubscriptionCard
                title="Cortado"
                price="30 Euro / Monat"
                features={cortadoFeatures}
            />
            <SubscriptionCard
                title="Cappuccino"
                price="60 Euro / Monat"
                features={cappuccinoFeatures}
            />
        </div>
    </div>
  );
};

export default SubscriptionSection;