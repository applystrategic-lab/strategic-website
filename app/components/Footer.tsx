"use client";

import Link from "next/link";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#071426] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-20">

        <div className="absolute top-0 left-0 w-125 h-125 bg-[#D4A017]/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#1E4E8C]/20 rounded-full blur-3xl" />

      </div>

      {/* TOP GRADIENT LINE */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#D4A017] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* COMPANY */}
          <div className="group">

            {/* LOGO + NAME */}
            <div className="flex items-center gap-4 mb-6">

              <img
                src="/images/logo.png"
                alt="Strategic Logo"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h2 className="text-3xl font-bold tracking-wide">
                  STRATEGIC
                </h2>

                <p className="text-[10px] uppercase tracking-[3px] text-gray-400 mt-1">
                  International Manpower
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-relaxed mb-8">
              Strategic International Manpower Services Inc.
              provides world-class recruitment and staffing
              solutions for Filipino professionals and
              international employers worldwide.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">

              <a
                href="https://www.facebook.com/StrategicInternationalManpowerServices"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4A017]
                  hover:scale-110
                  hover:shadow-[0_0_20px_rgba(212,160,23,0.5)]
                  transition-all
                  duration-300
                "
              >
                <span className="text-sm font-bold">f</span>
              </a>

              <a
                href="mailto:info@strategicims.com"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4A017]
                  hover:scale-110
                  hover:shadow-[0_0_20px_rgba(212,160,23,0.5)]
                  transition-all
                  duration-300
                "
              >
                <Mail size={20} />
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4A017]
                  hover:scale-110
                  hover:shadow-[0_0_20px_rgba(212,160,23,0.5)]
                  transition-all
                  duration-300
                "
              >
                <Globe size={20} />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="group">

            <h3 className="text-xl font-semibold mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link
                  href="/about"
                  className="hover:text-[#D4A017] transition-all duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-[#D4A017] transition-all duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#D4A017] transition-all duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div className="group">

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <a
                href="tel:+639123456789"
                className="flex gap-3 items-start hover:text-white transition-all duration-300"
              >
                <Phone size={20} className="text-[#D4A017] mt-1" />

                <span>+63 915 764 4053</span>
              </a>

              <a
                href="mailto:info@strategicims.com"
                className="flex gap-3 items-start hover:text-white transition-all duration-300"
              >
                <Mail size={20} className="text-[#D4A017] mt-1" />

                <span>applystrategic@gmail.com</span>
              </a>

              <div className="flex gap-3 items-start">

                <MapPin size={20} className="text-[#D4A017] mt-1" />

                <span>Manila, Philippines</span>

              </div>

            </div>

          </div>

          {/* ACCREDITATION */}
          <div className="group">

            <h3 className="text-xl font-semibold mb-6">
              Accreditation
            </h3>

            <div className="space-y-4">

              <div
                className="
                  bg-white/5
                  backdrop-blur-md
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-5
                  hover:border-[#D4A017]/30
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(212,160,23,0.08)]
                  transition-all
                  duration-300
                "
              >
                <p className="text-sm text-gray-400 mb-1">
                  DMW Licensed Agency
                </p>

                <p className="font-semibold text-white">
                  Valid Recruitment License
                </p>
              </div>

              <div
                className="
                  bg-white/5
                  backdrop-blur-md
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-5
                  hover:border-[#D4A017]/30
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(212,160,23,0.08)]
                  transition-all
                  duration-300
                "
              >
                <p className="text-sm text-gray-400 mb-1">
                  International Deployment
                </p>

                <p className="font-semibold text-white">
                  Global Workforce Solutions
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Strategic International Manpower Services Inc.
            All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm tracking-[2px] uppercase">
            Built For Global Opportunities
          </p>

        </div>

      </div>
    </footer>
  );
}