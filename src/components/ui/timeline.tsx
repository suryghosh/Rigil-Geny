"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const timelineData: TimelineEntry[] = [
    {
      title: "Global Headquarters in Noida, India",
      content: (
        <p>
          From our base in Noida, we serve industries worldwide with
          state-of-the-art testing solutions, enabling optimized resource
          management and promoting sustainability across diverse sectors.
        </p>
      ),
    },
    {
      title: "Cutting-Edge Testing Solutions",
      content: (
        <p>
          Our advanced technologies are engineered to meet global standards,
          ensuring unmatched precision and reliability in resource utilization
          and performance optimization.
        </p>
      ),
    },
    {
      title: "Strategic Global Partnerships",
      content: (
        <p>
          We strengthen our capabilities through collaborations with renowned
          global leaders: <br />
          - <strong>EP Ehrler Prüftechnik Engineering GmbH</strong>: Innovators
          of the SMF® - SonicMasterFlow® system, delivering high-precision flow
          measurement using sonic nozzles. Recognized as pioneers in the German
          SME segment, they offer superior accuracy for diverse industrial
          applications. <br />
          - <strong>Guangzhou Geny</strong>: Specialists in advanced test and
          measurement devices, including the YC99T-5C—a versatile portable
          three-phase meter testing device tailored for lab and field
          operations.
        </p>
      ),
    },
    {
      title: "Expertise Backed by Decades of Experience",
      content: (
        <p>
          With decades of industry knowledge, Rigil Geny provides trusted
          solutions to meet the evolving needs of global industries, ensuring
          efficiency and accuracy at every step.
        </p>
      ),
    },
    {
      title: "NABL-Certified Calibration Laboratory",
      content: (
        <p>
          Our NABL-certified lab guarantees precise calibration services that
          uphold the highest standards of accuracy, giving clients confidence in
          their measurement systems.
        </p>
      ),
    },
    {
      title: "Driving a Smarter, Greener Future",
      content: (
        <p>
          Through innovation, precision engineering, and a focus on
          sustainability, we are committed to creating a better tomorrow, one
          solution at a time.
        </p>
      ),
    },
  ];

  return (
    <div
      className="w-full bg-white dark:bg-neutral-900 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl mb-6 font-extrabold text-black dark:text-white max-w-4xl"
        >
          Changelog from our journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-semibold max-w-md"
        >
          Explore how Rigil Geny has evolved over the years through our key
          milestones and accomplishments.
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 md:text-6xl font-extrabold text-neutral-900 dark:text-neutral-50">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-3xl mb-4 text-left font-extrabold text-neutral-900 dark:text-neutral-50">
                {item.title}
              </h3>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg border-2 border-green-500 ml-28">
                <div className="text-xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                  {item.content}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-green-500 via-green-700 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
