"use client";

import FadeUp from "./FadeUp";
import { motion } from "framer-motion";

import {
  Stethoscope,
  HardHat,
  Factory,
  Briefcase,
  UtensilsCrossed,
  Wheat,
  Cpu,
  Building2,
} from "lucide-react";

const industries = [
  {
    icon: HardHat,
    title: "Engineering",
    countries: "Japan • Qatar • UAE",
    positions: "Mechanical • Electrical • Civil Engineers",
    summary:
      "Professional engineering workforce deployment for international infrastructure projects.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    countries: "Japan • Germany • Saudi Arabia",
    positions: "Nurses • Caregivers • Medical Staff",
    summary:
      "Providing qualified healthcare professionals for global medical institutions.",
  },
  {
    icon: Building2,
    title: "Construction",
    countries: "Qatar • UAE • Saudi Arabia",
    positions: "Welders • Foremen • Skilled Laborers",
    summary:
      "Supporting global construction projects with reliable manpower solutions.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    countries: "Taiwan • Japan • Malaysia",
    positions: "Factory Workers • Operators • Assemblers",
    summary:
      "Delivering skilled manufacturing workforce for international production facilities.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality",
    countries: "UAE • Qatar • Singapore",
    positions: "Hotel Staff • Restaurant Crew • Housekeeping",
    summary:
      "Professional hospitality staffing for global service industries.",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    countries: "Japan • Australia • New Zealand",
    positions: "Farm Workers • Agricultural Technicians",
    summary:
      "Supporting international agricultural and farming operations.",
  },
  {
    icon: Cpu,
    title: "Technical",
    countries: "Japan • Saudi Arabia • Taiwan",
    positions: "Technicians • Machine Specialists",
    summary:
      "Reliable technical manpower solutions for industrial and mechanical sectors.",
  },
  {
    icon: Briefcase,
    title: "Office Professionals",
    countries: "Singapore • UAE • Japan",
    positions: "Admin Staff • Account Specialists • Support Staff",
    summary:
      "Providing qualified office professionals for international business operations.",
  },
];

export default function Industries() {
  return (
    <>
      <section className="relative py-32 px-6 lg:px-8 bg-white overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1E4E8C]/10 rounded-full blur-3xl" />

          <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-[#D4A017]/5 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* SECTION HEADER */}
          <div className="text-center mb-20">

            <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-4">
              Our Expertise
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-[#0B1F3A] mb-6">
              Industries We Serve
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Strategic International Manpower Services Inc. provides
              world-class recruitment and staffing solutions across
              multiple industries worldwide.
            </p>

          </div>

          {/* INDUSTRY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="group [perspective:1000px] h-[400px] cursor-pointer"
                >

                  <div
                    className="
                      relative
                      h-full
                      w-full
                      transition-all
                      duration-700
                      [transform-style:preserve-3d]
                      group-hover:[transform:rotateY(180deg)]
                    "
                  >

                    {/* FRONT SIDE */}
                    <div
                      className="
                        absolute
                        inset-0
                        overflow-hidden
                        backdrop-blur-xl
                        bg-white/80
                        border
                        border-gray-200
                        rounded-3xl
                        p-10
                        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                        transition-all
                        duration-500
                        group-hover:border-[#D4A017]/40
                        [backface-visibility:hidden]
                      "
                    >

                      {/* CARD GLOW */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#D4A017]/10 via-transparent to-transparent" />

                      <div className="relative z-10">

                        {/* ICON */}
                        <div className="w-20 h-20 rounded-3xl bg-[#0B1F3A]/5 flex items-center justify-center mb-8 group-hover:bg-[#0B1F3A] transition-all duration-500 shadow-lg">

                          <Icon
                            size={38}
                            className="text-[#0B1F3A] group-hover:text-white transition-all duration-500"
                          />

                        </div>

                        {/* TITLE */}
                        <h3 className="text-3xl font-bold text-[#0B1F3A] mb-5">
                          {industry.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 leading-relaxed text-lg">
                          Professional staffing and recruitment solutions for
                          global workforce requirements.
                        </p>

                      </div>

                    </div>

                    {/* BACK SIDE */}
                    <div
                      className="
                        absolute
                        inset-0
                        overflow-hidden
                        rounded-3xl
                        p-8
                        bg-[#071426]
                        text-white
                        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                        [transform:rotateY(180deg)]
                        [backface-visibility:hidden]
                        flex
                        flex-col
                        justify-between
                        border
                        border-white/10
                      "
                    >

                      {/* BACK GLOW */}
                      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#D4A017]/20 via-transparent to-transparent" />

                      <div className="relative z-10">

                        <div className="w-16 h-16 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center mb-8">

                          <Icon
                            size={32}
                            className="text-[#D4A017]"
                          />

                        </div>

                        <p className="text-[#D4A017] uppercase tracking-[3px] text-xs mb-4">
                          Deployment Countries
                        </p>

                        <h3 className="text-2xl font-bold mb-5 leading-relaxed">
                          {industry.countries}
                        </h3>

                        <p className="text-[#D4A017] uppercase tracking-[3px] text-xs mt-6 mb-4">
                          Key Positions
                        </p>

                        <p className="text-gray-300 leading-relaxed mb-6">
                          {industry.positions}
                        </p>

                        <p className="text-gray-400 text-sm leading-relaxed">
                          {industry.summary}
                        </p>

                      </div>

                      <button
                        className="
                          relative
                          z-10
                          mt-8
                          text-[#D4A017]
                          font-semibold
                          tracking-[2px]
                          uppercase
                          text-sm
                          transition-all
                          duration-300
                          hover:translate-x-2
                        "
                      >
                        Explore Opportunities →
                      </button>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>
    </>
  );
}