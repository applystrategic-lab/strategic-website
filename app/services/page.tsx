"use client";

import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import {
  Briefcase,
  Users,
  Globe2,
  Building2,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "International Recruitment",
    description:
      "Professional recruitment solutions for overseas employers seeking skilled Filipino workers.",
  },
  {
    icon: Users,
    title: "Skilled Workforce Deployment",
    description:
      "Deployment of qualified professionals and skilled workers across multiple industries worldwide.",
  },
  {
    icon: Globe2,
    title: "Global Staffing Solutions",
    description:
      "Reliable staffing partnerships for international companies and organizations.",
  },
  {
    icon: Building2,
    title: "Corporate Manpower Support",
    description:
      "Customized manpower and staffing services tailored to employer requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Recruitment",
    description:
      "Transparent and professional recruitment processes aligned with global standards.",
  },
  {
    icon: GraduationCap,
    title: "Applicant Assistance",
    description:
      "Guidance and support throughout recruitment, documentation, and deployment.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F8FAFC]">

      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] bg-[#0B1F3A] flex items-center justify-center overflow-hidden">

        {/* GLOW */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">

          <div className="absolute w-[500px] h-[500px] bg-[#D4A017] rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />

          <div className="absolute w-[500px] h-[500px] bg-[#1E4E8C] rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />

          <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl top-[20%] left-[40%] animate-bounce" />

        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >

          <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-6">
            Our Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Professional Workforce Solutions
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            Strategic International Manpower Services Inc.
            delivers reliable recruitment and staffing
            solutions for global workforce requirements.
          </p>

        </motion.div>

      </section>

      {/* SERVICES GRID */}
      <section className="py-28 px-6 lg:px-8 bg-white">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">

            <p className="text-[#D4A017] uppercase tracking-[4px] text-sm font-semibold mb-4">
              Recruitment Expertise
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
              Comprehensive Recruitment Services
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Strategic provides international recruitment,
              staffing, and workforce deployment solutions
              for multiple industries worldwide.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="
                    group
                    bg-[#F8FAFC]
                    rounded-3xl
                    p-10
                    border
                    border-gray-100
                    hover:shadow-2xl
                    hover:-translate-y-3
                    hover:border-[#D4A017]/30
                    transition-all
                    duration-500
                  "
                >

                  {/* ICON */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A]/10 flex items-center justify-center mb-8 group-hover:bg-[#0B1F3A] transition-all duration-500">

                    <Icon
                      size={32}
                      className="text-[#0B1F3A] group-hover:text-white transition-all duration-500"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      <CTA />
      <Footer />

    </main>
  );
}