"use client";

import FadeUp from "./FadeUp";
import { motion } from "framer-motion";

import {
  CheckCircle2,
  Globe2,
  Users,
  ShieldCheck,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Ethical Recruitment",
    description:
      "Professional and transparent recruitment practices that prioritize integrity and worker protection.",
  },
  {
    icon: Globe2,
    title: "Global Partnerships",
    description:
      "Strong international employer partnerships across multiple industries worldwide.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description:
      "Access to highly qualified Filipino professionals and skilled workers.",
  },
  {
    icon: Briefcase,
    title: "Professional Screening",
    description:
      "Comprehensive applicant evaluation and recruitment standards.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Experience",
    description:
      "Decades of experience in international manpower deployment and staffing solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Applicant Support",
    description:
      "Dedicated support throughout recruitment, processing, and deployment.",
  },
];

export default function WhyChoose() {
  return (
    <FadeUp>
      <section className="relative overflow-hidden py-32 px-6 lg:px-8 bg-[#F8FAFC]">

        {/* BACKGROUND EFFECT */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">

          <div className="absolute w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl top-[-100px] left-[-100px]" />

          <div className="absolute w-[500px] h-[500px] bg-[#1E4E8C]/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

          <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-[#D4A017]/5 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* SECTION HEADER */}
          <div className="text-center mb-24">

            <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-4">
              Why Strategic
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-[#0B1F3A] mb-6 leading-tight">
              Why Choose Strategic
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Strategic International Manpower Services Inc. is committed
              to delivering world-class recruitment and staffing solutions
              with professionalism, integrity, and global standards.
            </p>

          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    relative
                    overflow-hidden
                    backdrop-blur-xl
                    bg-white/80
                    rounded-3xl
                    p-10
                    transition-all
                    duration-500
                    border
                    border-gray-200
                    hover:border-[#D4A017]/30
                    hover:-translate-y-4
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  "
                >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#D4A017]/10 via-transparent to-transparent" />

                  {/* TOP GOLD LINE */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A017] via-[#f3d36a] to-[#D4A017]" />

                  <div className="relative z-10">

                    {/* ICON */}
                    <div className="w-20 h-20 rounded-3xl bg-[#D4A017]/10 flex items-center justify-center mb-8 group-hover:bg-[#D4A017] transition-all duration-500">

                      <Icon
                        size={38}
                        className="text-[#D4A017] group-hover:text-white transition-all duration-500"
                      />

                    </div>

                    {/* TITLE */}
                    <h3 className="text-3xl font-bold text-[#0B1F3A] mb-5 leading-snug">
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* TRUST INDICATOR */}
          <div className="mt-24 flex justify-center">

            <div
              className="
                backdrop-blur-xl
                bg-white/70
                border
                border-gray-200
                rounded-3xl
                px-10
                py-6
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                flex
                flex-wrap
                items-center
                justify-center
                gap-6
              "
            >

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-[#D4A017]" />

                <p className="text-[#0B1F3A] font-semibold tracking-wide">
                  Trusted International Recruitment Agency
                </p>

              </div>

              <div className="hidden md:block w-px h-6 bg-gray-300" />

              <p className="text-gray-500 uppercase tracking-[3px] text-sm">
                Professional • Reliable • Global
              </p>

            </div>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}