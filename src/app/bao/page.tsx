import { HeroHighlight,Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/footer";
import { ContactUs } from "@/components/ui/contact-us";

const words = `Join us in shaping a smarter, greener energy sector. Whether you’re looking to collaborate, distribute, or represent Rigil Geny, we’d love to hear from you.`
export default function bao() {
  return (
    <div className="w-[100vw] px-6 py-12 flex flex-col">
      
        <HeroHighlight>
            <h1 className="text-6xl text-white font-bold mb-10">Let’s {" "}<Highlight>Build the Future Together</Highlight></h1>
            <h4 className="text-white"><TextGenerateEffect words={words} duration={1}/></h4>
            <ContactUs/>
            <div className="relative bottom-0 w-[100vw] h-[50vh]">
                <WavyBackground />
            </div>
        </HeroHighlight>
        
      </div>
      

    
  );
}
