"use client";
import Link from "next/link";
import FadeUp from "./FadeUp";
import {
  MapPin,
  Briefcase,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const jobs = [
  {
    title: "Registered Nurse",
    country: "Japan",
    flag: "🇯🇵",
    salary: "¥220,000/month",
    type: "Full-Time",
    urgent: true,
  },
  {
    title: "Factory Worker",
    country: "Taiwan",
    flag: "🇹🇼",
    salary: "NT$35,000/month",
    type: "Full-Time",
    urgent: false,
  },
  {
    title: "Hotel Staff",
    country: "UAE",
    flag: "🇦🇪",
    salary: "AED 3,500/month",
    type: "Full-Time",
    urgent: true,
  },
  {
    title: "Construction Worker",
    country: "Qatar",
    flag: "🇶🇦",
    salary: "QAR 2,800/month",
    type: "Project-Based",
    urgent: false,
  },
  {
    title: "Caregiver",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    salary: "SAR 4,000/month",
    type: "Full-Time",
    urgent: true,
  },
  {
    title: "Agricultural Worker",
    country: "Australia",
    flag: "🇦🇺",
    salary: "AUD 4,200/month",
    type: "Seasonal",
    urgent: false,
  },
];

export default function JobOpportunities() {
  return (
    <FadeUp>
      <section className="relative py-32 px-6 lg:px-8 bg-white overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none opacity-20">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E4E8C]/10 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center mb-20">

            <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-4">
              Global Careers
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-[#0B1F3A] mb-6">
              Featured Job Opportunities
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Explore international career opportunities offered by
              Strategic International Manpower Services Inc.
              across multiple industries worldwide.
            </p>

          </div>

          {/* JOB GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {jobs.map((job, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  border
                  border-gray-100
                  rounded-3xl
                  p-8
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  hover:border-[#D4A017]/30
                "
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#D4A017]/10 via-transparent to-transparent" />

                {/* TOP GOLD LINE */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A017] via-[#f3d36a] to-[#D4A017]" />

                {/* URGENT BADGE */}
                {job.urgent && (
                  <div className="absolute top-6 right-6 bg-[#D4A017] text-white text-xs uppercase tracking-[2px] px-3 py-1 rounded-full shadow-lg">
                    Urgent Hiring
                  </div>
                )}

                <div className="relative z-10">

                  {/* FLAG */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-all duration-500">
                    {job.flag}
                  </div>

                  {/* JOB TITLE */}
                  <h3 className="text-3xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                    {job.title}
                  </h3>

                  {/* DETAILS */}
                  <div className="space-y-4 mb-8">

                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin size={20} className="text-[#D4A017]" />

                      <span>{job.country}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <Briefcase size={20} className="text-[#D4A017]" />

                      <span>{job.salary}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock3 size={20} className="text-[#D4A017]" />

                      <span>{job.type}</span>
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
    gap-2
    bg-[#0B1F3A]
    hover:bg-[#1E4E8C]
    text-white
    py-4
    rounded-xl
    font-semibold
    uppercase
    tracking-[2px]
    transition-all
    duration-300
    hover:scale-[1.02]
    shadow-[0_10px_30px_rgba(11,31,58,0.2)]
  "
>
  Apply Now

  <ArrowUpRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeUp>
  );
}