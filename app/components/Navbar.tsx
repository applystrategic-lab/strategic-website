"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Jobs", href: "/jobs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6">

        <div
          className={`
            relative
            transition-all
            duration-500
            rounded-2xl
            lg:rounded-3xl
            px-5
            sm:px-6
            lg:px-10
            py-4
            lg:py-5
            flex
            items-center
            justify-between
            border
            overflow-hidden
            ${
              scrolled
                ? `
                  bg-[#071426]/95
                  backdrop-blur-2xl
                  border-white/10
                  shadow-[0_8px_40px_rgba(0,0,0,0.45)]
                `
                : `
                  bg-[#071426]/70
                  backdrop-blur-xl
                  border-white/5
                  shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                `
            }
          `}
        >

          {/* GLOW EFFECT */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">

            <div className="absolute top-0 left-0 w-40 h-40 bg-[#D4A017] blur-3xl rounded-full" />

            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#1E4E8C] blur-3xl rounded-full" />

          </div>

          {/* TOP LIGHT BORDER */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative z-10 flex items-center justify-between w-full">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 shrink-0"
            >

              <div className="relative w-12.5 h-12.5 sm:w-13.75 sm:h-13.75 transition-transform duration-300 hover:scale-110">

                <img
                  src="/images/logo.png"
                  alt="Strategic Logo"
                  className="
                    w-full
                    h-full
                    object-contain
                    drop-shadow-[0_4px_20px_rgba(212,160,23,0.4)]
                  "
                />

              </div>

              <div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide leading-none">
                  STRATEGIC
                </h1>

                <p className="hidden sm:block text-[8px] uppercase tracking-[4px] text-gray-300 mt-1">
                  International Manpower Services Inc.
                </p>

              </div>

            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 ml-auto pl-24">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    relative
                    text-gray-200
                    text-sm
                    uppercase
                    tracking-[2px]
                    transition-all
                    duration-300
                    hover:text-[#D4A017]
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-0.5
                    after:w-0
                    after:bg-[#D4A017]
                    after:rounded-full
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {link.name}
                </Link>
              ))}

            {/* CTA BUTTON */}
<Link
  href="/apply"
  className="
    relative
    overflow-hidden
    bg-[#D4A017]
    hover:bg-[#b88a12]
    text-white
    px-7
    py-3.5
    rounded-xl
    text-sm
    uppercase
    tracking-[2px]
    font-semibold
    transition-all
    duration-300
    hover:scale-105
    shadow-[0_8px_25px_rgba(212,160,23,0.35)]
    hover:shadow-[0_12px_40px_rgba(212,160,23,0.45)]
  "
>

  <span className="relative z-10">
    Apply Now
  </span>

  <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300" />

</Link>

            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="
                lg:hidden
                text-white
                transition-all
                duration-300
                hover:text-[#D4A017]
                hover:scale-110
              "
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="
                lg:hidden
                mt-3
                rounded-2xl
                overflow-hidden
                border
                border-white/10
                bg-[#071426]/95
                backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.45)]
              "
            >

              <div className="flex flex-col px-6 py-6 space-y-6">

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="
                      text-white
                      text-sm
                      uppercase
                      tracking-[2px]
                      hover:text-[#D4A017]
                      transition-all
                      duration-300
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/jobs"
                  onClick={() => setIsOpen(false)}
                  className="
                    relative
                    overflow-hidden
                    bg-[#D4A017]
                    hover:bg-[#b88a12]
                    text-white
                    px-6
                    py-3.5
                    rounded-xl
                    text-sm
                    uppercase
                    tracking-[2px]
                    font-semibold
                    transition-all
                    duration-300
                    shadow-[0_8px_25px_rgba(212,160,23,0.35)]
                    text-center
                  "
                >
                  Apply Now
                </Link>

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </motion.header>
  );
}