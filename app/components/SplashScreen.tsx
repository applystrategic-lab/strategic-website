"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("strategic_intro");

    if (alreadyVisited) {
      setShow(false);
      return;
    }

    sessionStorage.setItem("strategic_intro", "true");

    const timer = setTimeout(() => {
      setShow(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] bg-[#0B1F3A] overflow-hidden flex items-center justify-center"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">

            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D4A017]/20 blur-3xl animate-pulse" />

            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Logo */}
            <motion.img
              src="/images/logo.png"
              alt="Strategic"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="w-36 mb-8 drop-shadow-[0_0_25px_rgba(212,160,23,0.8)]"
            />

            {/* STRATEGIC */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="text-white text-5xl md:text-7xl font-bold tracking-[10px]"
            >
              STRATEGIC
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.5,
                duration: 0.8,
              }}
              className="mt-5 uppercase tracking-[6px] text-[#D4A017] text-sm md:text-base"
            >
              International Manpower Services Inc.
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 2.3,
                duration: 1,
              }}
              className="mt-8 text-gray-300 text-lg"
            >
              Building Careers. Changing Lives.
            </motion.p>

            {/* Loading Bar */}
            <div className="mt-14 w-72 h-[3px] bg-white/10 rounded-full overflow-hidden">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  delay: 2.5,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="h-full bg-[#D4A017]"
              />

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}