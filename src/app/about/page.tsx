import { LampDemo } from "@/components/ui/lamp";
import { Timeline } from "@/components/ui/timeline";
import { WavyBackground } from "@/components/ui/footer";
import { ContactUs } from "@/components/ui/contact-us";

export default function AboutPage() {
  return (
    <div className="w-[100vw] px-6 py-12">
        <LampDemo/>
        <Timeline/>
        <ContactUs/>
        <div className="relative bottom-0 w-[100vw] h-[50vh]">
            <WavyBackground />
        </div>
        
    </div>
    

  );
}
