"use client";

import FadeUp from "./FadeUp";
import {
  Star,
  Quote,
  CheckCircle2,
  Globe2,
  BriefcaseBusiness,
} from "lucide-react";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Successfully Deployed Applicant",
    role: "Registered Nurse",
    country: "Japan",
    countryCode: "JP",
    flag: "/flags/japan.png",
    deployed: "Successfully Deployed",
    quote:
      "Strategic International Manpower Services guided me throughout my Japan application process. From interview preparation to deployment, their team was very professional and supportive.",
  },

  {
    name: "Verified Applicant",
    role: "Factory Worker",
    country: "Taiwan",
    countryCode: "TW",
    flag: "/flags/taiwan.png",
    deployed: "Verified Applicant",
    quote:
      "The entire process was smooth and well organized. Strategic helped me secure stable overseas employment and assisted me with all my required documents.",
  },

  {
    name: "Returning Worker",
    role: "Hotel Staff",
    country: "UAE",
    countryCode: "AE",
    flag: "/flags/uae.png",
    deployed: "Returning Worker",
    quote:
      "I truly appreciate how accommodating and responsive the agency was during my application. They made the overseas deployment process less stressful and more professional.",
  },
];

export default function Testimonials() {
  return (
    <FadeUp>
      <section className="relative py-32 px-6 lg:px-8 bg-[#071426] overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">

          <div className="absolute top-0 left-0 w-125 h-125 bg-[#D4A017]/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#1E4E8C]/20 rounded-full blur-3xl" />

          <div className="absolute top-[30%] left-[45%] w-125 h-125 bg-white/10 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center mb-20">

            <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-4">
              Success Stories
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Global Workforce Experiences
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              Hear from Filipino professionals who successfully
              achieved international career opportunities through
              Strategic International Manpower Services Inc.
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl">
              <div className="flex justify-center mb-4">
                <Globe2 className="text-[#D4A017]" size={36} />
              </div>

              <h3 className="text-4xl font-bold text-white mb-2">
                11
              </h3>

              <p className="text-gray-400 uppercase tracking-[2px] text-sm">
                Countries
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl">
              <div className="flex justify-center mb-4">
                <BriefcaseBusiness className="text-[#D4A017]" size={36} />
              </div>

              <h3 className="text-4xl font-bold text-white mb-2">
                30+
              </h3>

              <p className="text-gray-400 uppercase tracking-[2px] text-sm">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="text-[#D4A017]" size={36} />
              </div>

              <h3 className="text-4xl font-bold text-white mb-2">
                5,000+
              </h3>

              <p className="text-gray-400 uppercase tracking-[2px] text-sm">
                Applicants Assisted
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl">
              <div className="flex justify-center mb-4">
                <Star className="text-[#D4A017]" size={36} />
              </div>

              <h3 className="text-4xl font-bold text-white mb-2">
                95%
              </h3>

              <p className="text-gray-400 uppercase tracking-[2px] text-sm">
                Deployment Success
              </p>
            </div>

          </div>

          {/* FEATURED STORY */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              bg-linear-to-br
              from-white/10
              to-white/5
              border
              border-[#D4A017]/20
              rounded-[40px]
              p-10
              lg:p-14
              mb-20
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            "
          >

            {/* FEATURED GLOW */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A017]/10 rounded-full blur-3xl" />

            <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-center relative z-10">

              {/* FLAG CARD */}
              <div className="relative">

                <div
                  className="
                    w-full
                    h-87.5
                    rounded-3xl
                    border
                    border-white/10
                    shadow-2xl
                    bg-linear-to-br
                    from-[#0b1d35]
                    to-[#071426]
                    flex
                    flex-col
                    items-center
                    justify-center
                    relative
                    overflow-hidden
                  "
                >

                  {/* FLAG */}
                  <div className="w-52 h-36 mb-6 flex items-center justify-center">
                    <img
                      src="/flags/japan.png"
                      alt="Japan Flag"
                      className="
                        max-w-full
                        max-h-full
                        object-contain
                        rounded-2xl
                        shadow-2xl
                        border
                        border-white/10
                      "
                    />
                  </div>

                  {/* COUNTRY */}
                  <h3 className="text-4xl font-bold text-white mb-3">
                    Japan
                  </h3>

                  <p className="text-[#D4A017] uppercase tracking-[4px] text-sm">
                    Overseas Deployment
                  </p>

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-[#D4A017]/5 pointer-events-none" />

                </div>

                <div className="
  absolute
  bottom-3
  left-1/2
  -translate-x-1/2
  bg-[#D4A017]
  text-[#071426]
  px-6
  py-2
  rounded-full
  text-sm
  font-bold
  tracking-wide
  shadow-xl
  whitespace-nowrap
">
  Successfully Deployed
</div>

              </div>

              {/* CONTENT */}
              <div>

                <div className="flex items-center gap-2 mb-5">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={22}
                      className="fill-[#D4A017] text-[#D4A017]"
                    />
                  ))}

                </div>

                <Quote
                  size={70}
                  className="text-[#D4A017]/20 mb-6"
                />

                <p className="text-2xl md:text-3xl leading-relaxed text-white font-light mb-10">
                  “Strategic International Manpower Services
                  helped me achieve my dream career in Japan.
                  Their team guided me from application,
                  interview preparation, documentation, and
                  deployment with professionalism and care.”
                </p>

                <div className="flex items-center gap-5">

                  <div>

                    <h3 className="text-3xl font-bold text-white mb-2">
                      Successfully Deployed Applicant
                    </h3>

                    <p className="text-[#D4A017] uppercase tracking-[3px] text-sm">
                      Registered Nurse • Japan Deployment
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* TESTIMONIAL GRID */}
          <div className="grid lg:grid-cols-3 gap-8">

            {testimonials.map((testimonial, index) => (
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
                  transition-all
                  duration-500
                  hover:border-[#D4A017]/30
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                "
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-br from-[#D4A017]/10 via-transparent to-transparent" />

                {/* QUOTE ICON */}
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-all duration-500">

                  <Quote
                    size={80}
                    className="text-[#D4A017]"
                  />

                </div>

                <div className="relative z-10">

                  {/* BADGE */}
                  <div className="inline-flex items-center gap-2 bg-[#D4A017]/15 border border-[#D4A017]/20 text-[#D4A017] px-4 py-2 rounded-full text-xs uppercase tracking-[2px] font-semibold mb-8">

                    <CheckCircle2 size={14} />

                    {testimonial.deployed}

                  </div>

                  {/* USER */}
<div className="flex items-start gap-5 mb-8">

  <div className="relative shrink-0">

    <div
      className="
        w-24
        h-16
        rounded-2xl
        overflow-hidden
        border
        border-white/10
        shadow-xl
        bg-white
        flex
        items-center
        justify-center
        p-1
      "
    >
      <img
        src={testimonial.flag}
        alt={testimonial.country}
        className="
          max-w-full
          max-h-full
          object-contain
        "
      />
    </div>

    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#22c55e] border-2 border-[#071426]" />

  </div>

  <div className="pt-1">

    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
      {testimonial.name}
    </h3>

    <p className="text-[#D4A017] tracking-wide text-sm uppercase">
      {testimonial.role}
    </p>

    <p className="text-gray-400 text-sm mt-1">
      {testimonial.country}
    </p>

  </div>

</div>

                  {/* STARS */}
                  <div className="flex gap-2 mb-6">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-[#D4A017] text-[#D4A017]"
                      />
                    ))}

                  </div>

                  {/* QUOTE */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    “{testimonial.quote}”
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </FadeUp>
  );
}