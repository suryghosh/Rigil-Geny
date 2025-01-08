import { HeroParallax } from "@/components/ui/hero-parallax";
import { WavyBackground } from "@/components/ui/footer";



export default function About() {
  // Extended products array for three rows
  const products = [
    { title: "HWSCC", link: "/product-1", thumbnail: "/images/1.jpeg" },
    { title: "HWSCC", link: "/product-2", thumbnail: "/images/2.jpeg" },
    { title: "HWSCC", link: "/product-3", thumbnail: "/images/3.jpeg" },
    { title: "HWSCC", link: "/product-4", thumbnail: "/images/4.jpeg" },
    { title: "HWSCC", link: "/product-5", thumbnail: "/images/5.jpeg" },
    { title: "HWSCC", link: "/product-6", thumbnail: "/images/6.jpeg" },
    { title: "HWSCC", link: "/product-7", thumbnail: "/images/7.jpeg" },
    { title: "HWSCC", link: "/product-8", thumbnail: "/images/8.jpeg" },
    { title: "HWSCC", link: "/product-9", thumbnail: "/images/9.jpeg" },
    { title: "HWSCC", link: "/product-10", thumbnail: "/images/10.jpeg" },
    { title: "HWSCC", link: "/product-11", thumbnail: "/images/11.jpeg" },
    { title: "HWSCC", link: "/product-12", thumbnail: "/images/3.jpeg" },
    { title: "HWSCC", link: "/product-13", thumbnail: "/images/1.jpeg" },
    { title: "HWSCC", link: "/product-14", thumbnail: "/images/2.jpeg" },

  
  ];

  return (
    <div className="relative">
  {/* Hero Section with Parallax Component */}
  <section className="min-h-screen bg-gradient-to-b from-[#003d1f] via-[#005f2a] to-[#1b7c46] animate-gradientBG relative">
    {/* Parallax Background */}
    <div className="absolute top-0 left-0 w-full h-full z-1">
      <HeroParallax products={products} />
    </div>
  </section>
  <section className="footer relative bottom-0">
    <div className="relative bottom-0 w-[100vh] h-[90vh]">
      <WavyBackground />
    </div>
  </section>
</div>

  
  );
}
