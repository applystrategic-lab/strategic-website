"use client";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Values from "../components/Values";
import FadeUp from "../components/FadeUp";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-[#F8FAFC]">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] bg-[#0B1F3A] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">

  <div className="absolute w-125 h-125 bg-[#D4A017] rounded-full blur-3xl -top-25 -left-25 animate-pulse" />

  <div className="absolute w-125 h-125 bg-[#1E4E8C] rounded-full blur-3xl -bottom-25 -right-25 animate-pulse" />

  <div className="absolute w-75 h-75 bg-white/10 rounded-full blur-3xl top-[20%] left-[40%] animate-bounce" />

</div>

        <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-10 text-center px-6"
>

          <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-6">
            About Strategic
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Building Global Careers
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            We are a Philippine based international
            recruitment company with over 35 years 
            Experience.
          </p>

        </motion.div>
      </section>

      {/* COMPANY OVERVIEW */}
      <FadeUp>
      <section className="py-28 px-6 lg:px-8 bg-white">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="text-[#D4A017] uppercase tracking-[4px] text-sm font-semibold mb-4">
              Company Overview
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-8">
              Trusted International Recruitment Solutions
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">

              <p>
                An intrinsic advantage in tapping the Philippines manpower resources is the wide use of
                English language in the country (it being the world's third largest English speaking nation)
                and a hig literacy rate of over 88%.
              </p>

              <p>
                Our agency prides itself  in its capability to professionally provides
                staffing solutions for a diverse range of requirements ranging from Engineers,
                Technicians, Healthcare practitioners, Office professionals, Skilled and Non - Skilled
                workers, Technical Intern Trainees (TITP), Specified Skilled Workers (SSW), and Engineer/
                Specialist in Humanities and International services.
              </p>

              <p>
                Strategic is committed to professionalism,
                ethical recruitment, and global workforce
                excellence while helping applicants build
                successful international careers.
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="bg-[#0B1F3A] rounded-3xl p-10 shadow-2xl">

              <div className="space-y-8">

                <div>
                  <h3 className="text-[#D4A017] text-lg font-semibold mb-2">
                    Mission
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    Connecting the best AVAILABLE TALENT with the best available JOB OPPORTUNITY.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-[#D4A017] text-lg font-semibold mb-2">
                    Reputation
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    Built on providing WIN - WIN solutions for our clients and their prospective employees.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-[#D4A017] text-lg font-semibold mb-2">
                    Strength
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    Providing clients a competitive edge by swiftly acessing the finest talent pool available.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
         <Values/>
      </FadeUp>
      
      <CTA />
      <Footer />
    
    </main>
  );
}  