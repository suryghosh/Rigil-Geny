import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/footer";
import { ContactUs } from "@/components/ui/contact-us";

const words = `Join us in shaping a smarter, greener energy sector. Whether you’re looking to collaborate, distribute, or represent Rigil Geny, we’d love to hear from you.`;

export default function bao() {
  return (
    <div className="w-[100vw] px-6 py-12 flex flex-col">
      {/* Hero Section */}
      <HeroHighlight>
        <h1 className="text-6xl text-white font-bold mb-10">
          Let’s <Highlight>Build the Future Together</Highlight>
        </h1>
        <h4 className="text-white">
          <TextGenerateEffect words={words} duration={1} />
        </h4>

        {/* Partner Logos Section */}
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
  { name: "Partner 1", logo: "/logos/partner1.png" },
  { name: "Partner 2", logo: "/logos/partner2.png" },
  { name: "Partner 3", logo: "/logos/partner3.png" },
  { name: "Partner 4", logo: "/logos/partner4.png" },
  { name: "Partner 5", logo: "/logos/partner5.png" },
];
