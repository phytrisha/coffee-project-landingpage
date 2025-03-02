import Hero from '@/components/sections/hero'
import ConceptSection from '@/components/sections/concept';
import ContentHighlight from '@/components/sections/content-highlight';
import AboutSection from '@/components/sections/about';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]">
      <main className='max-w-8xl mx-auto'>
        <Hero />
        <ConceptSection />
        <ContentHighlight
          title="For Coffee Lovers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo quis magna facilisis, et eleifend elit rhoncus. Vestibulum vel velit lorem. Quisque vulputate, lorem eu tempor tincidunt, augue ante sagittis quam."
          imageUrl="/images/Customer-Image.png" // Replace with the actual image path
          imagePosition="left" // Or "right"
        />
        <ContentHighlight
          title="For Cafés"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo quis magna facilisis, et eleifend elit rhoncus. Vestibulum vel velit lorem. Quisque vulputate, lorem eu tempor tincidunt, augue ante sagittis quam."
          imageUrl="/images/Cafe-Image.png" // Replace with the actual image path
          imagePosition="right" // Or "right"
        />
        <AboutSection />
      </main>
    </div>
  );
}
