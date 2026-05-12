"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen py-24 px-6 lg:px-8 bg-white overflow-hidden flex items-center">

      {/* PARTICLES BACKGROUND */}
      <ParticlesBackground />

      {/* EXTRA GLOW LAYERS */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">

        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#1E4E8C]/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute top-[30%] left-[45%] w-75 h-75 bg-white/10 rounded-full blur-3xl" />

      </div>

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#071426]/80" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

      {/* PREMIUM LIGHT EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,160,23,0.12),transparent_40%)]" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
          min-h-screen
          flex
          items-center
          w-full
        "
      >

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              uppercase
              tracking-[5px]
              text-[#D4A017]
              text-sm
              mb-6
            "
          >
            Philippine Recruitment Agency
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              xl:text-8xl
              leading-[1.05]
              font-bold
              text-white
              mb-8
            "
          >
            Connecting Filipino Talent

            <span className="block text-[#D4A017]">
              To Global Opportunities
            </span>

          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="
              text-gray-300
              text-base
              md:text-lg
              leading-relaxed
              max-w-2xl
              mb-10
            "
          >
            Strategic International Manpower Services Inc.
            provides world-class recruitment and staffing
            solutions for professionals, skilled workers,
            and international employers worldwide.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >

            <Link
              href="/jobs"
              className="
                group
                relative
                overflow-hidden
                bg-[#D4A017]
                hover:bg-[#b88a12]
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                uppercase
                tracking-[2px]
                transition-all
                duration-300
                hover:scale-105
                shadow-[0_10px_40px_rgba(212,160,23,0.35)]
                hover:shadow-[0_15px_50px_rgba(212,160,23,0.45)]
              "
            >
              <span className="relative z-10">
                Explore Jobs
              </span>

              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
            </Link>

            <Link
              href="/contact"
              className="
                border
                border-white/20
                backdrop-blur-md
                bg-white/5
                hover:bg-white/10
                hover:border-[#D4A017]/40
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                uppercase
                tracking-[2px]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Contact Us
            </Link>

          </motion.div>

        </motion.div>

        {/* FLOATING STATS */}
        <div className="hidden xl:flex absolute bottom-16 right-10 flex-col gap-6">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{
              y: -8,
            }}
            className="
              backdrop-blur-2xl
              bg-white/10
              border
              border-white/10
              rounded-3xl
              px-8
              py-7
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              w-72
              hover:border-[#D4A017]/40
              transition-all
              duration-500
            "
          >
            <h3 className="text-4xl font-bold text-[#D4A017] mb-2">
              35+
            </h3>

            <p className="text-white text-lg font-semibold">
              Years of Experience
            </p>

            <p className="text-gray-300 text-sm mt-2">
              Trusted recruitment solutions for Filipino professionals.
            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{
              y: -8,
            }}
            className="
              backdrop-blur-2xl
              bg-white/10
              border
              border-white/10
              rounded-3xl
              px-8
              py-7
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              w-72
              hover:border-[#D4A017]/40
              transition-all
              duration-500
            "
          >
            <h3 className="text-4xl font-bold text-[#D4A017] mb-2">
              Global
            </h3>

            <p className="text-white text-lg font-semibold">
              International Deployment
            </p>

            <p className="text-gray-300 text-sm mt-2">
              Connecting Filipino talent to opportunities worldwide.
            </p>

          </motion.div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-20
          hidden
          md:flex
          flex-col
          items-center
          gap-3
        "
      >

        <span className="text-white/60 text-xs uppercase tracking-[3px]">
          Scroll
        </span>

        <div
          className="
            w-0.5
            h-16
            bg-white/20
            relative
            overflow-hidden
            rounded-full
          "
        >

          <motion.div
            animate={{
              y: [0, 40, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
              absolute
              top-0
              left-0
              w-full
              h-6
              bg-[#D4A017]
              rounded-full
            "
          />

        </div>

      </motion.div>

    </section>
  );
}