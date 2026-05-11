"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    number: 20,
    suffix: "+",
    label: "Years Experience",
  },
  {
    number: 10000,
    suffix: "+",
    label: "Applicants Deployed",
  },
  {
    number: 15,
    suffix: "+",
    label: "Deployment Countries",
  },
  {
    number: 500,
    suffix: "+",
    label: "Global Partners",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-[#071426] overflow-hidden">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D4A017] rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1E4E8C] rounded-full blur-3xl"
        />

        <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />

      </div>

      {/* GRID PATTERN */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-[#D4A017] uppercase tracking-[4px] text-sm font-semibold mb-4">
            Strategic Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Trusted Global Workforce Solutions
          </h2>

          <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Strategic International Manpower Services Inc.
            continues to connect Filipino professionals with
            global opportunities through reliable international
            recruitment and staffing solutions.
          </p>

        </motion.div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group
                relative
                overflow-hidden
                text-center
                backdrop-blur-2xl
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                md:p-10
                hover:border-[#D4A017]/40
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                transition-all
                duration-500
              "
            >

              {/* TOP GOLD LINE */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A017] via-[#f3d36a] to-[#D4A017]" />

              {/* HOVER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#D4A017]/10
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* NUMBER GLOW */}
              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  w-32
                  h-32
                  bg-[#D4A017]/10
                  rounded-full
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              <div className="relative z-10">

                <h3 className="text-4xl md:text-6xl font-bold text-[#D4A017] mb-4 tracking-tight">

                  <CountUp
                    end={stat.number}
                    duration={3}
                  />

                  {stat.suffix}

                </h3>

                <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                  {stat.label}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}