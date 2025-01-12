import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/footer";
import { ContactUs } from "@/components/ui/contact-us";
import Image from 'next/image'

const words = `Join us in shaping a smarter, greener energy sector. Whether you’re looking to collaborate, distribute, or represent Rigil Geny, we’d love to hear from you.`;

export default function bao() {
  return (
    <div className="w-[100vw] px-6 py-12 flex flex-col">
      {/* Hero Section */}
      <HeroHighlight>
        <h1 className="text-6xl text-white font-bold mb-10">
          Let’s <Highlight>Build the Future Together</Highlight>
        </h1>
        <h4 className="text-white mb-4">
          <TextGenerateEffect words={words} duration={1} />
        </h4>

        {/* Partner Logos Section */}
        <h4 className="text-white font-bold text-3xl text-start underline italic">Our Partners</h4>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="w-24 h-24 md:w-36 md:h-36 flex items-center justify-center bg-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img src={partner.logo} alt={partner.name} className="object-contain w-full h-full" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <ContactUs />
        </div>

        {/* Footer */}
        <div className="relative bottom-0 w-[100vw] h-[50vh]">
          <WavyBackground />
        </div>
      </HeroHighlight>
    </div>
  );
}

// Dummy Partner Logos Array
const partnerLogos = [
  { name: "Partner 1", logo: "/rigil1.jpg" },
  { name: "Partner 2", logo: "/rigil2.jpg" },
  { name: "Partner 3", logo: "/rigil3.jpg" },
  { name: "Partner 4", logo: "/rigil4.jpg" },
  { name: "Partner 5", logo: "/rigil5.jpg" },
];
