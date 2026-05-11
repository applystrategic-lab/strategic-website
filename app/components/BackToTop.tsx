"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>

      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.35 }}
          className="
            fixed
            bottom-8
            right-8
            z-50
            group
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-[#D4A017]
              blur-xl
              opacity-30
              group-hover:opacity-60
              transition-all
              duration-500
            "
          />

          {/* BUTTON */}
          <div
            className="
              relative
              w-14
              h-14
              rounded-2xl
              backdrop-blur-xl
              bg-[#071426]/80
              border
              border-white/10
              shadow-2xl
              flex
              items-center
              justify-center
              overflow-hidden
              transition-all
              duration-500
              group-hover:-translate-y-1
              group-hover:border-[#D4A017]/40
              group-hover:bg-[#D4A017]
            "
          >

            {/* SHINE EFFECT */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
                bg-linear-to-tr
                from-transparent
                via-white/20
                to-transparent
                translate-x-[-120%]
                group-hover:translate-x-[120%]
              "
            />

            <ChevronUp
              size={28}
              className="
                relative
                z-10
                text-white
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />

          </div>

        </motion.button>
      )}

    </AnimatePresence>
  );
}