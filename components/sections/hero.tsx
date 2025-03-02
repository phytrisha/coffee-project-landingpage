import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section className="py-20 px-10 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between max-w-8xl mx-auto">
      <div className="text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-4 font-serif">
          The Coffee Project
        </h1>
        <p className="text-lg md:text-xl text-[#433A21] mb-6">
          Strengthening local coffee culture around you.<br />One sip at a time.
        </p>
        <Button>Sign up</Button>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/illustrations/hero-illustration.svg"
          alt="Two people drinking coffee"
          width={682}
          height={682}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default Hero;