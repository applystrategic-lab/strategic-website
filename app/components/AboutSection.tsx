"use client";

import FadeUp from "./FadeUp";
import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Users,
  Briefcase,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold professionalism, honesty, and ethical recruitment practices.",
  },
  {
    icon: Users,
    title: "Commitment",
    description:
      "Dedicated to connecting Filipino talent with global opportunities.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Providing international manpower solutions across multiple countries.",
  },
  {
    icon: Briefcase,
    title: "Excellence",
    description:
      "Delivering world-class staffing and workforce solutions.",
  },
];

export default function AboutSection() {
  return (
    <FadeUp>
      <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-b from-[#071426] via-[#0B1F3A] to-[#071426] overflow-hidden">

        {/* GRID TEXTURE */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            pointer-events-none
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none opacity-30">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4A017]/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1E4E8C]/20 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* TOP CONTENT */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-6">
                About Strategic
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
                Building Global Opportunities

                <span className="block text-[#D4A017]">
                  For Filipino Professionals
                </span>

              </h2>

              {/* GOLD LINE */}
              <div className="w-24 h-1 bg-[#D4A017] rounded-full mb-8" />

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Strategic International Manpower Services Inc.
                is a Philippine-based recruitment agency dedicated
                to providing world-class staffing and manpower
                solutions for international employers.
              </p>

              <p className="text-gray-400 leading-relaxed mb-10">
                With decades of experience in overseas recruitment,
                we continue to empower Filipino professionals by
                connecting them with trusted global opportunities
                across multiple industries worldwide.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-6">

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-white/5
                    backdrop-blur-2xl
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    transition-all
                    duration-500
                    hover:border-[#D4A017]/40
                    hover:-translate-y-3
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                  "
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#D4A017]/10 to-transparent" />

                  <div className="relative z-10">

                    <h3 className="text-4xl font-bold text-[#D4A017] mb-2">
                      20+
                    </h3>

                    <p className="text-gray-300">
                      Years Experience
                    </p>

                  </div>

                </div>

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-white/5
                    backdrop-blur-2xl
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    transition-all
                    duration-500
                    hover:border-[#D4A017]/40
                    hover:-translate-y-3
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                  "
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#D4A017]/10 to-transparent" />

                  <div className="relative z-10">

                    <h3 className="text-4xl font-bold text-[#D4A017] mb-2">
                      Global
                    </h3>

                    <p className="text-gray-300">
                      Deployment Network
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 gap-6">

              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    className="
                      group
                      relative
                      overflow-hidden
                      bg-white/5
                      backdrop-blur-xl
                      border
                      border-white/10
                      rounded-2xl
                      p-8
                      transition-all
                      duration-500
                      hover:-translate-y-3
                      hover:border-[#D4A017]/30
                      hover:shadow-2xl
                    "
                  >

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#D4A017]/10 to-transparent" />

                    <div className="relative z-10">

                      <div className="w-16 h-16 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4A017] transition-all duration-500">

                        <Icon
                          size={30}
                          className="text-[#D4A017] group-hover:text-white transition-all duration-500"
                        />

                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        {value.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {value.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}