"use client";

import FadeUp from "./FadeUp";
import { motion } from "framer-motion";

const countries = [
  {
    name: "Japan",
    flag: "🇯🇵",
    thanks: "ありがとうございます",
    romanized: "Arigatou Gozaimasu",
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    thanks: "شكراً",
    romanized: "Shukran",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    thanks: "Thank You!",
    romanized: "English",
  },
  {
    name: "U.S.A",
    flag: "🇺🇸",
    thanks: "Thank You!",
    romanized: "English",
  },
  {
    name: "U.A.E",
    flag: "🇦🇪",
    thanks: "شكراً",
    romanized: "Shukran",
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    thanks: "Terima Kasih",
    romanized: "Terima Kasih",
  },
  {
    name: "Vietnam",
    flag: "🇻🇳",
    thanks: "Cảm ơn",
    romanized: "Cam On",
  },
  {
    name: "Jordan",
    flag: "🇯🇴",
    thanks: "شكراً",
    romanized: "Shukran",
  },
  {
    name: "Qatar",
    flag: "🇶🇦",
    thanks: "شكراً",
    romanized: "Shukran",
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    thanks: "ขอบคุณ",
    romanized: "Khob Khun",
  },
  {
    name: "Bahrain",
    flag: "🇧🇭",
    thanks: "شكراً",
    romanized: "Shukran",
  },
];

export default function Countries() {
  return (
    <FadeUp>
      <section className="relative py-32 px-6 lg:px-8 bg-white overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1E4E8C]/10 rounded-full blur-3xl" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* SECTION HEADER */}
          <div className="text-center mb-20">

            <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-4">
              Global Opportunities
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-[#0B1F3A] mb-6">
              Countries We Deploy To
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Strategic International Manpower Services Inc. connects
              skilled Filipino professionals with trusted employers
              across multiple countries worldwide.
            </p>

          </div>

          {/* COUNTRY GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group [perspective:1000px] h-[290px] cursor-pointer"
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
                      rounded-3xl
                      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                      border
                      border-gray-200
                      flex
                      flex-col
                      items-center
                      justify-center
                      p-8
                      transition-all
                      duration-500
                      group-hover:border-[#D4A017]/40
                      [backface-visibility:hidden]
                    "
                  >

                    {/* CARD GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#D4A017]/10 via-transparent to-transparent" />

                    <div className="relative z-10 flex flex-col items-center">

                      {/* FLAG */}
                      <div className="text-7xl mb-8 group-hover:scale-110 transition-all duration-500">

                        {country.flag}

                      </div>

                      {/* COUNTRY NAME */}
                      <h3 className="text-3xl font-bold text-[#0B1F3A] text-center mb-3">
                        {country.name}
                      </h3>

                      <p className="text-sm uppercase tracking-[3px] text-gray-500">
                        Global Deployment
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
                      bg-[#071426]
                      text-white
                      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                      flex
                      flex-col
                      items-center
                      justify-center
                      p-8
                      text-center
                      border
                      border-white/10
                      [transform:rotateY(180deg)]
                      [backface-visibility:hidden]
                    "
                  >

                    {/* BACK GLOW */}
                    <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#D4A017]/20 via-transparent to-transparent" />

                    <div className="relative z-10">

                      <p className="text-[#D4A017] uppercase tracking-[3px] text-xs mb-5">
                        Thank You
                      </p>

                      <h3 className="text-3xl font-bold mb-5 leading-relaxed">
                        {country.thanks}
                      </h3>

                      <p className="text-gray-300 text-sm tracking-[2px] uppercase">
                        {country.romanized}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-16">

            <button
              className="
                bg-[#0B1F3A]
                hover:bg-[#1E4E8C]
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
                shadow-[0_10px_30px_rgba(11,31,58,0.2)]
              "
            >
              View All Countries
            </button>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}