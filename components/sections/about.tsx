import React from 'react';
import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#433A21] text-center mb-8">
          Über Uns
        </h2>
        <p className="text-base text-[#433A21] text-center mb-12 max-w-4xl mx-auto">
          Wir sind Fouad und Mark – zwei Kaffeeliebhaber, die es sich zum Ziel gesetzt haben eine Plattform zu gründen, die es lokalen Cafés ermöglicht ihre einzigartige Kultur einer breiteren Masse zugänglich zu machen und eine langfristige Alternative zu großen Kaffee-Ketten zu bieten.
        </p>
        <div className='flex flex-center'>
          <Link className='mx-auto' href="/imprint">Impressum</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;