import Hero from '@/components/sections/hero'
import ConceptSection from '@/components/sections/concept';
import ContentHighlight from '@/components/sections/content-highlight';
import AboutSection from '@/components/sections/about';

import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]">
      <main>
        <Hero />
        <ConceptSection />
        <ContentHighlight
          title="Für Kaffee-Liebhaber:innen"
          description="Über unsere App kannst du neue Cafés entdecken, oder alte Lieblinge finden. Mit einem einfachen Tap auf das Café deiner Wahl siehst du alle verfügbaren Getränke und kannst sie mit einem tap einlösen. Zeige der Barista dann einfach die Bestätigung und dein Kaffee wird für dich nach deinen Wünschen zubereitet."
          imageUrl="/images/Customer-Image.png" // Replace with the actual image path
          imagePosition="left" // Or "right"
        />
        <Separator />
        <ContentHighlight
          title="Für Cafés"
          description="Als Cafébesitzer:in kannst du über unser einfaches Dashboard alle Getränke einstellen, die du unseren Kund:innen zur Verfügung stellen willst. Zusätzlich kannst du dein Café so beschreiben, dass es gefunden und geliebt wird."
          imageUrl="/images/Cafe-Image.png" // Replace with the actual image path
          imagePosition="right" // Or "right"
        />
        <AboutSection />
      </main>
    </div>
  );
}
