"use client";

import {
  ShieldCheck,
  Users,
  Globe2,
  BadgeCheck,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold ethical recruitment practices with transparency, professionalism, and respect.",
  },
  {
    icon: Users,
    title: "Commitment",
    description:
      "We are dedicated to supporting both applicants and international employers with excellence.",
  },
  {
    icon: Globe2,
    title: "Global Standards",
    description:
      "We maintain high-quality recruitment and staffing standards for international workforce deployment.",
  },
  {
    icon: BadgeCheck,
    title: "Professionalism",
    description:
      "We continuously strive to deliver reliable and world-class manpower solutions.",
  },
];

export default function Values() {
  return (
    <section className="relative py-28 px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-20">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4A017]/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1E4E8C]/10 rounded-full blur-3xl" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-[#D4A017] uppercase tracking-[4px] text-sm font-semibold mb-4">
            Core Values
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
            The Principles That Guide Strategic
          </h2>

          {/* GOLD LINE */}
          <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Strategic International Manpower Services Inc.
            is committed to ethical recruitment, global
            excellence, and professional workforce solutions.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  backdrop-blur-xl
                  bg-white/70
                  rounded-3xl
                  p-10
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-3
                  transition-all
                  duration-500
                  border
                  border-white/60
                  hover:border-[#D4A017]/30
                "
              >

                {/* CARD GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#0B1F3A]/10
                      flex
                      items-center
                      justify-center
                      mb-8
                      group-hover:bg-[#0B1F3A]
                      transition-all
                      duration-500
                    "
                  >

                    <Icon
                      size={32}
                      className="text-[#0B1F3A] group-hover:text-white transition-all duration-500"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                    {value.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}