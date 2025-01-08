"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { FaPhoneAlt } from 'react-icons/fa';

const menulinks = [
  { path: "/", label: "HOME " },
  { path: "/about", label: "ABOUT " },
  { path: "/services", label:"OFFERINGS" },
  { path: "/lab", label: "UPDATES & RESOURCES" },
  { path: "/contact", label: "CONTACT US  " },
  { path: "/bao", label: "PARTNER " },
];

const Menu = () => {
  const container = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!mounted) return;

    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: 0,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".menu-link",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: "-100%",
        ease: "power3.in",
      });
    }
  }, [isMenuOpen, mounted]);

  // Return null or loading state before client-side hydration
  if (!mounted) {
    return null; // Or a loading skeleton
  }

  return (
    <div ref={container} className="relative">
      <div className="sticky top-0 z-50 flex justify-between items-center  p-4 bg-black text-beige">
        <div className="text-lg font-bold">
          <Link href="/" className="hover:text-beige transition-colors duration-300">
            RIGIL GENY
          </Link>
        </div>
        <button
          className="cursor-pointer uppercase text-sm tracking-wider hover:text-beige transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mounted && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black text-beige z-50 flex flex-col transform -translate-x-full"
        >
          <div className="flex justify-between items-center p-4 border-b border-beige">
            <div className="text-lg">
              <p className="uppercase text-sm tracking-wider text-beige">RIGIL GENY</p>
            </div>
            <button
              className="cursor-pointer uppercase text-sm tracking-wider hover:text-beige transition-colors duration-300"
              onClick={toggleMenu}
            >
              Close &#10005;
            </button>
          </div>

          <nav className="flex-grow flex flex-col justify-center px-8 md:pl-40 lg:pl-96 space-y-2">
            {menulinks.map((link, index) => (
              <div key={index} className="menu-link group">
                <Link
                  href={link.path}
                  onClick={toggleMenu}
                  className="text-4xl md:text-7xl font-serif text-white bg-clip-text hover:bg-gradient-to-t hover:from-green-500 hover:via-green-600 hover:to-green-700 hover:text-transparent transition-all duration-500 ease-in-out"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-end md:items-center text-sm border-t border-beige">
            <div className="space-y-2 items-end mb-4 md:mb-0">
              <a
                href="#"
                className="block hover:text-beige transition-colors duration-300"
              >
                Clinic Reception ↗
              </a>


              <a
                href="#"
                className="block hover:text-beige transition-colors duration-300"
              >
                Instagram ↗
              </a>
              <a
                href="#"
                className="block hover:text-beige transition-colors duration-300"
              >
                Facebook ↗
              </a>
            </div>

            <div className="space-y-2 text-beige">
              <p className="hover:text-beige transition-colors duration-300">
                hwscc@gmail.com
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=6385751370&text=Hello%20this%20is%20a%20service%20enquiry!"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-beige transition-colors duration-300"
              >
                <FaPhoneAlt className="inline mr-2 text-green-500" />
                222 445 556
              </a>
            </div>

            <div className="hidden md:block">
              <Link
                href="/book-appointment"
                className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 uppercase text-sm tracking-wider font-medium"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}

      {mounted && (
        <>
          <div className="fixed bottom-5 right-6 bg-black text-beige w-12 h-12 rounded-full shadow-lg z-40 flex items-center justify-center">
            <a
              href="tel:+6385751370"
              className="text-beige font-semibold hover:text-white transition-colors duration-300"
            >
              <FaPhoneAlt className="text-2xl text-green-500" />
            </a>
          </div>



          {!isMenuOpen && (
            <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-black text-center border-t border-beige">
              <Link
                href="/book-appointment"
                className="bg-green-500 text-black py-3 px-8 rounded-full text-pretty text-left text-lg font-semibold uppercase shadow-lg hover:bg-green-600 transition-all duration-300 inline-block"
              >
                Book a Call
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Menu;
