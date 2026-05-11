"use client";

import FadeUp from "./FadeUp";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock3,
  Sparkles,
} from "lucide-react";

const jobs = [
  {
    title: "Caregiver",
    country: "Japan",
    salary: "¥180,000 - ¥250,000",
    type: "Full-Time",
    featured: true,
  },
  {
    title: "Welder",
    country: "Saudi Arabia",
    salary: "$1,200 - $1,800",
    type: "Full-Time",
    featured: false,
  },
  {
    title: "Factory Worker",
    country: "Taiwan",
    salary: "$900 - $1,400",
    type: "Full-Time",
    featured: true,
  },
  {
    title: "Hotel Staff",
    country: "UAE",
    salary: "$1,000 - $1,500",
    type: "Full-Time",
    featured: false,
  },
];

export default function FeaturedJobs() {
  return (
    <FadeUp>
      <section className="relative py-32 px-6 lg:px-8 bg-white overflow-hidden">

        {/* BACKGROUND EFFECT */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">

          <div className="absolute top-0 right-0 w-125 h-125 bg-[#D4A017]/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#1E4E8C]/10 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* SECTION HEADER */}
          <div className="text-center mb-20">

            <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-4">
              Career Opportunities
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-[#0B1F3A] mb-6">
              Featured Job Openings
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Explore exciting overseas employment opportunities with
              trusted international employers across multiple industries.
            </p>

          </div>

          {/* JOB GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {jobs.map((job, index) => (
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
                  p-8
                  shadow-lg
                  transition-all
                  duration-500
                  border
                  border-gray-200
                  hover:border-[#D4A017]/30
                  hover:-translate-y-4
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                "
              >

                {/* TOP GOLD LINE */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#D4A017] via-[#f3d36a] to-[#D4A017]" />

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-linear-to-br from-[#D4A017]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* FEATURED BADGE */}
                {job.featured && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 bg-[#D4A017] text-white px-4 py-2 rounded-full text-xs uppercase tracking-[2px] font-semibold shadow-lg">

                    <Sparkles size={14} />

                    Featured

                  </div>
                )}

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* TOP */}
                  <div className="mb-10">

                    <div className="flex items-center gap-3 mb-5">

                      <div className="w-14 h-14 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center group-hover:bg-[#D4A017] transition-all duration-500">

                        <Briefcase
                          size={28}
                          className="text-[#D4A017] group-hover:text-white transition-all duration-500"
                        />

                      </div>

                      <div>

                        <h3 className="text-3xl font-bold text-[#0B1F3A] transition-colors duration-300 group-hover:text-[#D4A017]">
                          {job.title}
                        </h3>

                        <div className="flex items-center gap-2 text-gray-500 mt-2">

                          <MapPin
                            size={18}
                            className="text-[#D4A017]"
                          />

                          <span>{job.country}</span>

                        </div>

                      </div>

                    </div>

                    {/* TYPE BADGE */}
                    <div className="inline-flex bg-[#0B1F3A]/10 text-[#0B1F3A] px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 group-hover:bg-[#D4A017] group-hover:text-white">
                      {job.type}
                    </div>

                  </div>

                  {/* DETAILS */}
                  <div className="space-y-5 mb-10">

                    <div className="flex items-center gap-4 text-gray-700">

                      <div className="w-11 h-11 rounded-xl bg-[#D4A017]/10 flex items-center justify-center">

                        <DollarSign
                          size={20}
                          className="text-[#D4A017]"
                        />

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">
                          Salary Range
                        </p>

                        <p className="font-semibold text-[#0B1F3A]">
                          {job.salary}
                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-4 text-gray-700">

                      <div className="w-11 h-11 rounded-xl bg-[#D4A017]/10 flex items-center justify-center">

                        <Clock3
                          size={20}
                          className="text-[#D4A017]"
                        />

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">
                          Employment Type
                        </p>

                        <p className="font-semibold text-[#0B1F3A]">
                          {job.type}
                        </p>

                      </div>

                    </div>

                  </div>

                 {/* BUTTON */}
<Link
  href="/apply"
  className="
    w-full
    flex
    items-center
    justify-center
    bg-[#0B1F3A]
    hover:bg-[#1E4E8C]
    text-white
    py-4
    rounded-2xl
    font-semibold
    uppercase
    tracking-[2px]
    transition-all
    duration-300
    hover:scale-[1.02]
    shadow-[0_10px_30px_rgba(11,31,58,0.25)]
  "
>
  Apply Now
</Link>

                </div>

              </motion.div>
            ))}

          </div>

          {/* VIEW ALL BUTTON */}
          <div className="flex justify-center mt-16">

            <button
              className="
                bg-[#D4A017]
                hover:bg-[#b88a12]
                text-white
                px-10
                py-4
                rounded-2xl
                font-semibold
                uppercase
                tracking-[2px]
                transition-all
                duration-300
                hover:scale-105
                shadow-[0_10px_35px_rgba(212,160,23,0.35)]
              "
            >
              View All Jobs
            </button>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}