"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import {
  User,
  Mail,
  Phone,
  Globe,
  Briefcase,
  Upload,
  FileText,
} from "lucide-react";

export default function ApplyPage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-44 pb-24 px-6 lg:px-8 bg-[#0B1F3A] overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-20">

          <div className="absolute w-125 h-125 bg-[#D4A017] rounded-full blur-3xl -top-30 -left-30" />

          <div className="absolute w-125 h-125 bg-[#1E4E8C] rounded-full blur-3xl -bottom-30 -right-30" />

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >

          <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-6">
            Online Application
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Apply For Overseas Jobs
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            Complete your application form and submit your
            professional details to begin your international
            career journey with Strategic International
            Manpower Services Inc.
          </p>

        </motion.div>

      </section>

      {/* APPLICATION FORM */}
      <section className="py-24 px-6 lg:px-8">

        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              bg-white
              rounded-[40px]
              shadow-2xl
              border
              border-gray-100
              p-8
              md:p-14
            "
          >

            {/* TOP GLOW */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#D4A017] via-[#f5d97b] to-[#D4A017]" />

            {/* FORM HEADER */}
            <div className="mb-14">

              <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">
                Applicant Information
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Please provide accurate and complete information
                for your overseas job application.
              </p>

            </div>

            {/* FORM */}
            <form className="space-y-10">

              {/* GRID */}
              <div className="grid md:grid-cols-2 gap-8">

                {/* FULL NAME */}
                <div>

                  <label className="text-[#0B1F3A] font-semibold mb-3 block">
                    Full Name
                  </label>

                  <div className="relative">

                    <User
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4A017]"
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="
                        w-full
                        pl-14
                        pr-5
                        py-4
                        rounded-2xl
                        border
                        border-gray-200
                        focus:border-[#D4A017]
                        focus:outline-none
                        transition-all
                        duration-300
                      "
                    />

                  </div>

                </div>

                {/* EMAIL */}
                <div>

                  <label className="text-[#0B1F3A] font-semibold mb-3 block">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4A017]"
                    />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="
                        w-full
                        pl-14
                        pr-5
                        py-4
                        rounded-2xl
                        border
                        border-gray-200
                        focus:border-[#D4A017]
                        focus:outline-none
                        transition-all
                        duration-300
                      "
                    />

                  </div>

                </div>

                {/* PHONE */}
                <div>

                  <label className="text-[#0B1F3A] font-semibold mb-3 block">
                    Contact Number
                  </label>

                  <div className="relative">

                    <Phone
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4A017]"
                    />

                    <input
                      type="text"
                      placeholder="Enter your contact number"
                      className="
                        w-full
                        pl-14
                        pr-5
                        py-4
                        rounded-2xl
                        border
                        border-gray-200
                        focus:border-[#D4A017]
                        focus:outline-none
                        transition-all
                        duration-300
                      "
                    />

                  </div>

                </div>

                {/* COUNTRY */}
                <div>

                  <label className="text-[#0B1F3A] font-semibold mb-3 block">
                    Preferred Country
                  </label>

                  <div className="relative">

                    <Globe
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4A017]"
                    />

                    <select
                      className="
                        w-full
                        pl-14
                        pr-5
                        py-4
                        rounded-2xl
                        border
                        border-gray-200
                        focus:border-[#D4A017]
                        focus:outline-none
                        transition-all
                        duration-300
                        bg-white
                      "
                    >
                      <option>Japan</option>
                      <option>Saudi Arabia</option>
                      <option>Qatar</option>
                      <option>UAE</option>
                      <option>Taiwan</option>
                    </select>

                  </div>

                </div>

              </div>

              {/* POSITION */}
              <div>

                <label className="text-[#0B1F3A] font-semibold mb-3 block">
                  Position Applying For
                </label>

                <div className="relative">

                  <Briefcase
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4A017]"
                  />

                  <input
                    type="text"
                    placeholder="Enter desired position"
                    className="
                      w-full
                      pl-14
                      pr-5
                      py-4
                      rounded-2xl
                      border
                      border-gray-200
                      focus:border-[#D4A017]
                      focus:outline-none
                      transition-all
                      duration-300
                    "
                  />

                </div>

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-[#0B1F3A] font-semibold mb-3 block">
                  Additional Information
                </label>

                <div className="relative">

                  <FileText
                    size={20}
                    className="absolute left-5 top-6 text-[#D4A017]"
                  />

                  <textarea
                    rows={6}
                    placeholder="Tell us about your experience and qualifications..."
                    className="
                      w-full
                      pl-14
                      pr-5
                      py-5
                      rounded-2xl
                      border
                      border-gray-200
                      focus:border-[#D4A017]
                      focus:outline-none
                      transition-all
                      duration-300
                      resize-none
                    "
                  />

                </div>

              </div>

              {/* RESUME */}
              <div>

                <label className="text-[#0B1F3A] font-semibold mb-3 block">
                  Upload Resume
                </label>

                <label
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    border-2
                    border-dashed
                    border-gray-300
                    rounded-3xl
                    py-14
                    cursor-pointer
                    hover:border-[#D4A017]
                    transition-all
                    duration-300
                    bg-[#F8FAFC]
                  "
                >

                  <Upload
                    size={40}
                    className="text-[#D4A017] mb-5"
                  />

                  <p className="text-[#0B1F3A] font-semibold text-lg mb-2">
                    Upload Resume / CV
                  </p>

                  <p className="text-gray-500 text-sm">
                    PDF, DOC, DOCX up to 10MB
                  </p>

                  <input
                    type="file"
                    className="hidden"
                  />

                </label>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  bg-[#D4A017]
                  hover:bg-[#b88a12]
                  text-white
                  py-5
                  rounded-2xl
                  font-bold
                  text-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_15px_40px_rgba(212,160,23,0.35)]
                "
              >
                Submit Application
              </button>

            </form>

          </motion.div>

        </div>

      </section>

      <Footer />

    </main>
  );
}