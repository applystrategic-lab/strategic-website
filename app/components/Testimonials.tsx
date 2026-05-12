"use client";

import FadeUp from "./FadeUp";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Registered Nurse • Japan",
    image: "/images/testimonial1.jpg",
    quote:
      "Strategic International Manpower Services helped me achieve my dream career in Japan. The recruitment process was smooth, professional, and highly organized.",
  },
  {
    name: "John Ramirez",
    role: "Factory Worker • Taiwan",
    image: "/images/testimonial2.jpg",
    quote:
      "I am grateful to Strategic for giving me the opportunity to work abroad. Their team guided me throughout the entire application and deployment process.",
  },
  {
    name: "Angela Cruz",
    role: "Hotel Staff • UAE",
    image: "/images/testimonial3.jpg",
    quote:
      "The agency was very professional and supportive from start to finish. I highly recommend Strategic to aspiring overseas workers.",
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

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What Our Applicants Say
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-1 bg-[#D4A017] rounded-full mx-auto mb-8" />

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              Hear from Filipino professionals who successfully
              achieved international career opportunities through
              Strategic International Manpower Services Inc.
            </p>

          </div>

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

                  {/* USER */}
                  <div className="flex items-center gap-5 mb-8">

                    <div className="relative">

                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="
                          w-20
                          h-20
                          rounded-2xl
                          object-cover
                          border
                          border-white/10
                          shadow-xl
                        "
                      />

                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#22c55e] border-2 border-[#071426]" />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-white mb-1">
                        {testimonial.name}
                      </h3>

                      <p className="text-[#D4A017] tracking-wide text-sm uppercase">
                        {testimonial.role}
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