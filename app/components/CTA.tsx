"use client";

import Link from "next/link";
import FadeUp from "./FadeUp";

export default function CTA() {
  return (
    <FadeUp>
      <section className="relative py-28 px-6 lg:px-8 overflow-hidden bg-[#0B1F3A]">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">

          <div className="absolute w-125 h-125 bg-[#D4A017] rounded-full blur-3xl -top-25 -left-25" />

          <div className="absolute w-125 h-125 bg-[#1E4E8C] rounded-full blur-3xl -bottom-25 -right-25" />

          <div className="absolute w-75 h-75 bg-white/10 rounded-full blur-3xl top-[30%] left-[40%]" />

        </div>

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* GLASS CONTAINER */}
          <div
            className="
              group
              relative
              overflow-hidden
              backdrop-blur-xl
              bg-white/5
              border
              border-white/10
              rounded-[40px]
              px-8
              md:px-16
              py-16
              shadow-2xl
              transition-all
              duration-500
              hover:border-[#D4A017]/30
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            "
          >

            {/* HOVER LIGHT */}
            <div className="absolute inset-0 bg-linear-to-br from-[#D4A017]/10 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* GOLD TOP LINE */}
            <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-[#D4A017] via-[#f3d36a] to-[#D4A017]" />

            <div className="relative z-10 text-center">

              {/* SMALL LABEL */}
              <p className="text-[#D4A017] uppercase tracking-[4px] text-sm font-semibold mb-5">
                Start Your Journey
              </p>

              {/* HEADING */}
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                Build Your International Career With Strategic
              </h2>

              {/* GOLD LINE */}
              <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

              {/* SUBTEXT */}
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                Strategic International Manpower Services Inc. is committed
                to helping Filipino professionals connect with trusted
                international employers and global opportunities.
              </p>

            {/* BUTTONS */}
<div className="flex flex-col sm:flex-row justify-center gap-5">

  <Link
    href="/apply"
    className="
      inline-flex
      items-center
      justify-center
      bg-[#D4A017]
      hover:bg-[#b88a12]
      text-white
      px-10
      py-5
      rounded-2xl
      font-semibold
      text-lg
      tracking-wide
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_15px_40px_rgba(212,160,23,0.35)]
    "
  >
    Apply Now
  </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    border
                    border-white/20
                    backdrop-blur-md
                    bg-white/5
                    hover:bg-white/10
                    hover:border-[#D4A017]
                    hover:text-[#D4A017]
                    text-white
                    px-10
                    py-5
                    rounded-2xl
                    font-semibold
                    text-lg
                    tracking-wide
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}