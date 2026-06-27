"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import GoldPlane from "./GoldPlane";
import OrbitRing from "./OrbitRing";
import AirplaneOrbit from "./AirplaneOrbit";

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
    }, 5200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#071A33] flex items-center justify-center"
        >
          {/* ==========================================
              BACKGROUND
          ========================================== */}

          <div className="absolute inset-0 overflow-hidden">

            {/* Main Glow */}

            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#D4A017]/10 blur-[160px]" />

            {/* Left Glow */}

            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                -left-40
                top-0
                w-[500px]
                h-[500px]
                rounded-full
                bg-[#D4A017]/15
                blur-[120px]
              "
            />

            {/* Right Glow */}

            <motion.div
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="
                absolute
                -right-40
                bottom-0
                w-[500px]
                h-[500px]
                rounded-full
                bg-blue-500/15
                blur-[140px]
              "
            />

            {/* Premium Gold Particles */}

{[
  { left: "8%", top: "18%", size: 4, delay: 0 },
  { left: "18%", top: "72%", size: 3, delay: 0.3 },
  { left: "28%", top: "40%", size: 5, delay: 0.6 },
  { left: "38%", top: "20%", size: 4, delay: 1 },
  { left: "48%", top: "82%", size: 3, delay: 1.4 },
  { left: "58%", top: "30%", size: 5, delay: 1.8 },
  { left: "68%", top: "70%", size: 4, delay: 2.2 },
  { left: "78%", top: "15%", size: 3, delay: 2.6 },
  { left: "88%", top: "55%", size: 5, delay: 3 },
].map((particle, index) => (

  <motion.div
    key={index}
    className="absolute rounded-full bg-[#FFD54A]"
    style={{
      left: particle.left,
      top: particle.top,
      width: particle.size,
      height: particle.size,
      boxShadow: "0 0 15px rgba(255,215,0,0.9)",
    }}
    animate={{
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.8, 1],
      y: [0, -15, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: particle.delay,
    }}
  />

))}

          </div>

          {/* ==========================================
                 CONTENT
          ========================================== */}

          <div className="relative z-20 flex flex-col items-center">

            {/* Logo Area */}

            <div className="relative w-56 h-56 flex items-center justify-center">

              <div className="absolute">

    <OrbitRing />

</div>

              {/* Orbit Glow */}

              <div
                className="
                  absolute
                  w-52
                  h-52
                  rounded-full
                  shadow-[0_0_40px_rgba(212,160,23,0.4)]
                "
              />

              {/* Airplane Orbit */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >

                <div className="absolute left-1/2 -translate-x-1/2 -top-3">

                  <GoldPlane />

                </div>

              </motion.div>

              {/* Logo Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  w-40
                  h-40
                  rounded-full
                  bg-[#D4A017]/20
                  blur-3xl
                "
              />

              {/* Logo */}

              <motion.div
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="relative w-36 h-36"
              >

                <Image
                  src="/images/logo.png"
                  alt="Strategic Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_35px_rgba(212,160,23,0.8)]"
                />

              </motion.div>
              {/* ==========================================
                    LENS FLARE
              ========================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.8, 0],
                }}
                transition={{
                  delay: 2.9,
                  duration: 0.8,
                }}
                className="
                  absolute
                  w-64
                  h-64
                  rounded-full
                  bg-[#FFD54A]/20
                  blur-3xl
                "
              />

            </div>

            {/* ==========================================
                  STRATEGIC TITLE
            ========================================== */}

            <motion.h1
              className="
                mt-10
                flex
                text-5xl
                md:text-7xl
                font-bold
                tracking-[8px]
                text-white
              "
            >

              {"STRATEGIC".split("").map((letter, index) => (

                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.9 + index * 0.09,
                    duration: 0.35,
                  }}
                >
                  {letter}
                </motion.span>

              ))}

            </motion.h1>

            {/* ==========================================
                    GOLD LINE
            ========================================== */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 220,
                opacity: 1,
              }}
              transition={{
                delay: 1.9,
                duration: 0.7,
              }}
              className="
                h-[2px]
                rounded-full
                mt-6
                bg-gradient-to-r
                from-transparent
                via-[#D4A017]
                to-transparent
                shadow-[0_0_18px_rgba(212,160,23,0.8)]
              "
            />

            {/* ==========================================
                    SUBTITLE
            ========================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.1,
                duration: 0.7,
              }}
              className="
                mt-7
                uppercase
                tracking-[6px]
                text-[#D4A017]
                text-sm
                md:text-base
              "
            >
              International Manpower Services Inc.
            </motion.p>

            {/* ==========================================
                    TAGLINE
            ========================================== */}

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
                delay: 2.7,
                duration: 0.8,
              }}
              className="
                mt-8
                text-gray-300
                text-lg
                tracking-wide
              "
            >
              Building Careers. Changing Lives.
            </motion.p>

            {/* ==========================================
                    LOADING BAR
            ========================================== */}

            <div
              className="
                mt-14
                w-80
                h-[5px]
                rounded-full
                overflow-hidden
                bg-white/10
              "
            >

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  delay: 3,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-[#B8860B]
                  via-[#FFD54A]
                  to-[#B8860B]
                  shadow-[0_0_20px_rgba(212,160,23,0.9)]
                "
              />

            </div>

            {/* ==========================================
                    LOADING TEXT
            ========================================== */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 3.1,
              }}
              className="
                mt-6
                text-xs
                uppercase
                tracking-[5px]
                text-white/50
              "
            >
              Preparing your journey...
            </motion.p>
                      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}