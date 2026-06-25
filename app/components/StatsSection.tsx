"use client";

import FadeUp from "./FadeUp";
import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  BriefcaseBusiness,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5,000+",
    label: "Successful Deployments",
  },
  {
    icon: Globe2,
    number: "11",
    label: "Partner Countries",
  },
  {
    icon: BriefcaseBusiness,
    number: "500+",
    label: "Global Employers",
  },
  {
    icon: ShieldCheck,
    number: "35+",
    label: "Years Experience",
  },
];

export default function StatsSection() {
  return (
    <FadeUp>
      <section className="relative py-32 px-6 lg:px-8 bg-[#071426] overflow-hidden">

        {/* GRID TEXTURE */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            pointer-events-none
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-size[80px_80px]
          "
        />

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">

          <div className="absolute top-0 left-0 w-125 h-125 bg-[#D4A017]/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#1E4E8C]/20 rounded-full blur-3xl" />

          <div className="absolute top-[35%] left-[40%] w-75 h-75 bg-white/10 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center mb-20">

            <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-4">
              Trusted Worldwide
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building Global Success
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              Strategic International Manpower Services Inc.
              continues to connect skilled Filipino professionals
              with trusted employers across multiple countries worldwide.
            </p>

          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

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
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-white/5
                    backdrop-blur-2xl
                    border
                    border-white/10
                    rounded-3xl
                    p-10
                    text-center
                    transition-all
                    duration-500
                    hover:border-[#D4A017]/30
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  "
                >

                  {/* TOP GOLD LINE */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#D4A017] via-[#f3d36a] to-[#D4A017]" />

                  {/* CARD GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-br from-[#D4A017]/10 via-transparent to-transparent" />

                  <div className="relative z-10">

                    {/* ICON */}
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-[#D4A017]/10 flex items-center justify-center mb-8 group-hover:bg-[#D4A017] transition-all duration-500 shadow-lg">

                      <Icon
                        size={38}
                        className="text-[#D4A017] group-hover:text-white transition-all duration-500"
                      />

                    </div>

                    {/* NUMBER */}
                    <h3 className="text-5xl md:text-6xl font-bold text-[#D4A017] mb-4 tracking-tight">

                      {stat.number}

                    </h3>

                    {/* LABEL */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {stat.label}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>
    </FadeUp>
  );
}