"use client";

import FadeUp from "./FadeUp";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  BadgeCheck,
  Plane,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description:
      "Applicants submit their resumes and required documents for evaluation.",
  },
  {
    icon: Users,
    title: "Screening & Interview",
    description:
      "Our recruitment specialists assess qualifications and conduct interviews.",
  },
  {
    icon: Briefcase,
    title: "Employer Evaluation",
    description:
      "Qualified applicants are endorsed to trusted international employers.",
  },
  {
    icon: BadgeCheck,
    title: "Documentation & Training",
    description:
      "Selected applicants complete processing, orientation, and documentation.",
  },
  {
    icon: Plane,
    title: "Deployment Overseas",
    description:
      "Successful applicants begin their international career opportunities.",
  },
];

export default function RecruitmentProcess() {
  return (
    <FadeUp>
      <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] overflow-hidden">

        {/* GRID TEXTURE */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            pointer-events-none
            bg-[linear-gradient(to_right,#0B1F3A_1px,transparent_1px),linear-gradient(to_bottom,#0B1F3A_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* GLOW */}
        <div className="absolute inset-0 pointer-events-none opacity-30">

          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1E4E8C]/10 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center mb-24">

            <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-4">
              Application Process
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-[#0B1F3A] mb-6">
              Your Journey Starts Here
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Strategic International Manpower Services Inc.
              provides a professional and guided recruitment process
              for Filipino professionals seeking global opportunities.
            </p>

          </div>

          {/* TIMELINE */}
          <div className="relative">

            {/* CENTER LINE */}
            <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D4A017] via-[#0B1F3A] to-[#D4A017] rounded-full opacity-80" />

            <div className="space-y-20">

              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    className={`
                      relative
                      flex
                      flex-col
                      lg:flex-row
                      items-center
                      ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                    `}
                  >

                    {/* CONTENT */}
                    <div className="w-full lg:w-1/2 px-0 lg:px-12">

                      <div
                        className="
                          group
                          relative
                          overflow-hidden
                          bg-white/80
                          backdrop-blur-2xl
                          rounded-3xl
                          p-10
                          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                          border
                          border-white/40
                          transition-all
                          duration-500
                          hover:-translate-y-4
                          hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                          hover:border-[#D4A017]/30
                        "
                      >

                        {/* TOP GOLD LINE */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A017] via-[#f3d36a] to-[#D4A017]" />

                        {/* HOVER GLOW */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#D4A017]/10 via-transparent to-transparent" />

                        <div className="relative z-10">

                          <div className="w-20 h-20 rounded-2xl bg-[#0B1F3A]/10 flex items-center justify-center mb-8 group-hover:bg-[#0B1F3A] transition-all duration-500 shadow-lg">

                            <Icon
                              size={36}
                              className="text-[#0B1F3A] group-hover:text-white transition-all duration-500"
                            />

                          </div>

                          <p className="text-[#D4A017] font-semibold uppercase tracking-[3px] text-sm mb-4">
                            Step {index + 1}
                          </p>

                          <h3 className="text-3xl font-bold text-[#0B1F3A] mb-6">
                            {step.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed text-lg">
                            {step.description}
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* TIMELINE DOT */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                      <div className="relative flex items-center justify-center">

                        <div className="absolute w-16 h-16 bg-[#D4A017]/20 rounded-full animate-pulse" />

                        <div className="absolute w-10 h-10 bg-[#D4A017]/30 rounded-full" />

                        <div className="relative w-8 h-8 rounded-full bg-[#D4A017] border-4 border-white shadow-[0_0_25px_rgba(212,160,23,0.5)]" />

                      </div>

                    </div>

                    {/* EMPTY SIDE */}
                    <div className="hidden lg:block w-1/2" />

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