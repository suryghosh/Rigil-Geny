"use client";
import { WavyBackground } from "@/components/ui/footer";
import { ContactUs } from "@/components/ui/contact-us";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/hooks/use-outside-click";
import Image from 'next/image'


export default function ServicePage() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
 
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
 
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
 
  useOutsideClick(ref, () => setActive(null));


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
      <h3 className="text-left font-bold pl-3 text-xl bg-gradient-to-r from-green-500 via-green-200 to-white bg-clip-text text-transparent mb-6">
        Discover our comprehensive range of meter testing solutions designed to
        meet the highest global standards.
      </h3>
      
      <div className="mb-6 mt-6">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              
 
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
 
                  
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 items-start ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col cursor-pointer hover:dark:bg-slate-800/[0.8] rounded-3xl"
          >
            <div className="flex gap-4 p-6 flex-col rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] hover:border-slate-700 relative z-20">
              
              <div className="flex justify-start flex-col gap-6">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-neutral-800 dark:text-neutral-200 text-left md:text-left text-xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-left md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>


      <ContactUs/>
      <div className="relative bottom-0 w-[100vw] h-[50vh]">
        <WavyBackground />
      </div>
    </div>
  );
}


export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};


const cards = [
  {
    title: "Energy Meter Testing",
    description:
      " From single-phase systems to portable solutions, designed for unmatched accuracy.",
    src: "",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Energy Meter Testing is the process of verifying the accuracy and reliability of energy meters used for measuring electrical consumption. It involves calibrating meters against standardized benchmarks to ensure precise readings. Testing includes examining functionality under varying load conditions, voltage, and frequency. It checks for compliance with industry standards like IEC or ANSI. Advanced tests evaluate tamper resistance and data communication capabilities in smart meters. The process ensures accurate billing and customer trust, minimizes energy losses, and promotes energy efficiency. Testing is performed in specialized labs or on-site using portable equipment. It’s crucial for utilities and manufacturers to maintain quality and regulatory adherence.
        </p>
      );
    },
  },
  {
    title: "Gas Meter Testing",
    description:
      " Advanced systems for precise testing of thermal, ultrasonic, and turbine meters.",
    src: "",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Gas meter testing is a vital procedure that ensures the accuracy and reliability of gas measurement in both residential and commercial settings. This process typically involves using a bell prover, which measures a known volume of air to compare against the gas meter's registration, allowing for an assessment of its accuracy. Key performance metrics, such as Percent Proof, Percent Accuracy, and Percent Error, are evaluated during testing; ideally, a gas meter should achieve 100% proof and accuracy with 0% error. Various tests are conducted, including open rate tests at high flow rates and check rate tests at lower flow rates, to comprehensively assess meter performance. Environmental factors like temperature and pressure must be controlled for accurate results. Additionally, leak testing is essential before reconnecting gas service after repairs or installations to ensure safety. As energy sources evolve, initiatives like NEWGASMET are adapting testing methods for meters used with renewable gases. Compliance with regulatory standards is crucial for consumer safety, and the results of these tests are carefully documented to maintain transparency in utility services. Utilities also respond to customer inquiries about billing discrepancies by conducting request tests, ensuring that any issues are promptly addressed. Overall, thorough gas meter testing is fundamental to maintaining accurate measurements and safe distribution systems.
        </p>
      );
    },
  },
 
  {
    title: "Water Meter Testing",
    description:
      "High-precision test benches for efficient resource management.",
    src: "",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Water Meter Testing ensures the accuracy and performance of water meters used for measuring water consumption. The process involves calibrating meters to verify their readings under varying flow rates, pressure, and temperature conditions. Testing ensures compliance with industry standards such as ISO or AWWA. Advanced tests evaluate the meter’s resistance to wear, tampering, and environmental factors. It also checks the performance of smart water meters, including data transmission and connectivity features. The process guarantees accurate billing, efficient water management, and customer trust. Testing can be conducted in specialized labs or on-site using portable testing kits. It is essential for utilities and manufacturers to maintain quality, reduce water losses, and meet regulatory requirements.
        </p>
      );
    },
  },
  {
    title: "Substation Equipment",
    description:
      "High-performance analyzers, capacity testers, and more.",
    src: "",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Substation equipment plays a crucial role in the generation, transmission, and distribution of electrical power, necessitating rigorous testing and commissioning to ensure safety and reliability. This process involves various tests, including acceptance and preventive tests, which are essential for maintaining the operational integrity of equipment such as transformers, circuit breakers, and protective relays. During testing, primary injection tests are conducted on current and voltage transformers to verify their accuracy and performance, while functional tests assess the operation of circuit breakers and control systems. Additionally, over-voltage tests, commonly known as hipoting, are performed to evaluate insulation quality under high voltage conditions. Regular maintenance checks are mandated, typically on an annual basis, to identify potential issues before they lead to failures. As substations increasingly incorporate advanced communication networks for monitoring and control, testing these infrastructures becomes vital to ensure seamless data flow and operational efficiency. 
        </p>
      );
    },
  },
  {
    title: "Portable Equipment",
    description:
      "Compact, versatile solutions for on-the-go testing needs.",
    src: "",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Portable Equipment Testing involves verifying the functionality, accuracy, and reliability of portable devices used in various industries. This includes testing for performance under different environmental conditions such as temperature, humidity, and vibration. The process ensures that portable equipment like testing tools, measurement instruments, and diagnostic devices operate effectively and safely. It verifies compliance with industry standards and regulations, including safety certifications. The testing process checks for durability, battery life, and the ability to withstand rough handling. This ensures that portable equipment delivers reliable results in field applications. Additionally, it evaluates user-friendliness, ease of calibration, and maintenance. Testing can be done on-site or in specialized labs, with portable testing kits for convenience. Proper testing prevents malfunctions, ensuring accurate measurements and safe operation. Regular testing is crucial for maintaining the reliability and longevity of portable devices.
        </p>
      );
    },
  },
];

