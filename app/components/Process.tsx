"use client";

import FadeUp from "./FadeUp";
import { motion } from "framer-motion";

import {
  FileText,
  SearchCheck,
  Users,
  FolderCheck,
  Plane,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Application",
    description:
      "Submit your application and required documents for evaluation.",
  },
  {
    icon: SearchCheck,
    title: "Screening",
    description:
      "Professional screening and assessment of qualifications.",
  },
  {
    icon: Users,
    title: "Interview",
    description:
      "Employer interviews and candidate selection process.",
  },
  {
    icon: FolderCheck,
    title: "Documentation",
    description:
      "Processing of employment requirements and documentation.",
  },
  {
    icon: BadgeCheck,
    title: "Visa Processing",
    description:
      "Preparation and processing of deployment requirements.",
  },
  {
    icon: Plane,
    title: "Deployment",
    description:
      "Successful deployment to your international workplace.",
  },
];

export default function Process() {
  return (
    <FadeUp>
      <section className="relative py-32 px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">

          <div className="absolute top-0 left-0 w-125 h-125 bg-[#D4A017]/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#1E4E8C]/10 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center mb-20">

            <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-4">
              Recruitment Process
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6 leading-tight">
              Your Journey Abroad
            </h2>

            {/* GOLD LINE */}
            <div className="w-20 h-1 bg-[#D4A017] rounded-full mx-auto mb-6" />

            <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
              Strategic International Manpower Services Inc. provides
              professional guidance throughout every stage of the
              recruitment and deployment process.
            </p>

          </div>

          {/* PROCESS GRID */}
          <div className="relative">

            {/* CONNECTOR LINE */}
            <div className="hidden xl:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-[#D4A017]/20 via-[#0B1F3A]/20 to-[#D4A017]/20" />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {steps.map((step, index) => {
                const Icon = step.icon;

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
                      rounded-2xl
                      p-6
                      shadow-lg
                      transition-all
                      duration-500
                      border
                      border-gray-200
                      hover:border-[#D4A017]/30
                      hover:-translate-y-2
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]
                    "
                  >

                    {/* TOP GOLD LINE */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#D4A017] via-[#f3d36a] to-[#D4A017]" />

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-br from-[#D4A017]/10 via-transparent to-transparent" />

                    {/* STEP NUMBER */}
                    <div className="absolute top-4 right-4">

                      <div
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-[#D4A017]
                          text-white
                          flex
                          items-center
                          justify-center
                          font-bold
                          text-sm
                          shadow-lg
                        "
                      >
                        {index + 1}
                      </div>

                    </div>

                    <div className="relative z-10">

                      {/* ICON */}
                      <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A]/10 flex items-center justify-center mb-5 group-hover:bg-[#0B1F3A] transition-all duration-500">

                        <Icon
                          size={28}
                          className="text-[#0B1F3A] group-hover:text-[#D4A017] transition-all duration-500"
                        />

                      </div>

                      {/* TITLE */}
                      <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                        {step.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {step.description}
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