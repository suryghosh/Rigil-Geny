import { HoverEffect } from "@/components/ui/card-hover-effect";
import { WavyBackground } from "@/components/ui/footer";
import { ContactUs } from "@/components/ui/contact-us";
import Image from 'next/image'


export default function ServicePage() {
  return (
    <div className="relative h-screen w-full px-6 py-12">
      {/* Image Section */}
      <div className="relative w-full h-[40vh] mb-24">
      <Image src="/igreen.jpeg" alt="" layout="fill" className="object-cover" />
        {/* Text Content Over Image */}
        <div className="absolute inset-0 flex items-center justify-start ml-2">
          <h1 className="text-3xl md:text-4xl font-bold px-4 py-2 rounded-md bg-gradient-to-r from-green-200 via-green-200 to-white bg-clip-text text-transparent">
            Discover the Power of Innovation
          </h1>
        </div>
      </div>

      {/* Additional Content */}
      <h3 className="text-left font-bold pl-3 text-xl bg-gradient-to-r from-green-500 via-green-200 to-white bg-clip-text text-transparent">
        Discover our comprehensive range of meter testing solutions designed to
        meet the highest global standards.
      </h3>
      <HoverEffect items={info} className="mb-6" />
      <ContactUs/>
      <div className="relative bottom-0 w-[100vw] h-[50vh]">
        <WavyBackground />
      </div>
    </div>
  );
}

const info = [
  {
    title: "Energy Meter Testing",
    description:
      " From single-phase systems to portable solutions, designed for unmatched accuracy.",
    link: "",
  },
  {
    title: "Gas Meter Testing",
    description:
      " Advanced systems for precise testing of thermal, ultrasonic, and turbine meters.",
    link: "",
  },
  {
    title: "Water Meter Testing",
    description:
      "High-precision test benches for efficient resource management.",
    link: "",
  },
  {
    title: "Substation Equipment",
    description:
      "High-performance analyzers, capacity testers, and more.",
    link: "",
  },
  {
    title: "Portable Equipment",
    description:
      "Compact, versatile solutions for on-the-go testing needs.",
    link: "",
  },
];
