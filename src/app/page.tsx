"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/footer";
import Link from "next/link";

const products = [
  "YC1891D",
  "YC1893D",
  "YC1893R",
  "YCS-101",
  "YCS-103",
  "SZ-03A-K8",
  "SZ-03A-K6",
  "SZ-01A-K3",
  "YCSS-101",
  "YC99T",
  "YC-9901",
  "YC98S1",
  "YC98M",
  "YC2000A",
  "YC2000C",
  "YCATS",
  "MSVT - Multi-Secondary Voltage Transformer",
  "ICT-Isolation Current Transformer",
  "Scanning Head YCG series for stationary products",
  "Scanning Head DF series for portable products",
  "Quick Connection Device",
  "YCTC-9901 Transformer capacity tester",
  "YCPQA-9901 power quality analyzer",
  "YCCI-9901 Phase and feeder identifier",
];

export default function HomePage() {
  return (
    <div className=" bg-black text-neutral-200 min-h-screen flex flex-col items-center w-full">
      {/* Header Section */}
      <header className="text-center p-8">
        
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-green-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          
        >
          Powering Precision, Driving Progress
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Innovative meter testing solutions for energy, gas, water, and substations, trusted in 40+ countries.
        </motion.p>
      </header>

      {/* Product Lattice */}
      <section className="p-6 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">Product Lattice</h2>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {products.map((product, index) => (
            <motion.li
              key={index}
              className="bg-neutral-800 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-neutral-700 transition-all text-center text-neutral-300 font-medium"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              {product}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Take the Next Step</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link legacyBehavior href='/services'>
            <motion.button
              className="bg-green-500 text-neutral-900 px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Offerings
            </motion.button>
          </Link>
          <Link legacyBehavior href='/bao'>
            <motion.button
              className="bg-green-500 text-neutral-900 px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.button>
          </Link>
          <Link legacyBehavior href='/contact'>
            <motion.button
              className="bg-green-500 text-neutral-900 px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </Link>
          
          
          
        </div>
        
      </section>

      {/* Footer */}
      <div className="relative bottom-0 w-[100vw] h-[50vh]">
            <WavyBackground />
        </div>
    </div>
    
  );
}
