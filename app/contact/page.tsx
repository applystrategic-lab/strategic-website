"use client";

import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function ContactPage() {

  const countries = useMemo(() => [
    { name: "Afghanistan", code: "+93", format: "701234567" },
    { name: "Albania", code: "+355", format: "671234567" },
    { name: "Algeria", code: "+213", format: "551234567" },
    { name: "Argentina", code: "+54", format: "91123456789" },
    { name: "Australia", code: "+61", format: "412345678" },
    { name: "Austria", code: "+43", format: "664123456" },
    { name: "Bangladesh", code: "+880", format: "1712345678" },
    { name: "Belgium", code: "+32", format: "471234567" },
    { name: "Brazil", code: "+55", format: "11912345678" },
    { name: "Cambodia", code: "+855", format: "91234567" },
    { name: "Canada", code: "+1", format: "2015550123" },
    { name: "China", code: "+86", format: "13123456789" },
    { name: "Colombia", code: "+57", format: "3123456789" },
    { name: "Denmark", code: "+45", format: "20123456" },
    { name: "Egypt", code: "+20", format: "1012345678" },
    { name: "Finland", code: "+358", format: "401234567" },
    { name: "France", code: "+33", format: "612345678" },
    { name: "Germany", code: "+49", format: "15123456789" },
    { name: "Greece", code: "+30", format: "6912345678" },
    { name: "Hong Kong", code: "+852", format: "51234567" },
    { name: "India", code: "+91", format: "9123456789" },
    { name: "Indonesia", code: "+62", format: "81234567890" },
    { name: "Ireland", code: "+353", format: "851234567" },
    { name: "Israel", code: "+972", format: "501234567" },
    { name: "Italy", code: "+39", format: "3123456789" },
    { name: "Japan", code: "+81", format: "9012345678" },
    { name: "Jordan", code: "+962", format: "791234567" },
    { name: "Kazakhstan", code: "+7", format: "7011234567" },
    { name: "Korea", code: "+82", format: "1012345678" },
    { name: "Kuwait", code: "+965", format: "51234567" },
    { name: "Laos", code: "+856", format: "2091234567" },
    { name: "Malaysia", code: "+60", format: "123456789" },
    { name: "Mexico", code: "+52", format: "5512345678" },
    { name: "Myanmar", code: "+95", format: "912345678" },
    { name: "Nepal", code: "+977", format: "9812345678" },
    { name: "Netherlands", code: "+31", format: "612345678" },
    { name: "New Zealand", code: "+64", format: "211234567" },
    { name: "Nigeria", code: "+234", format: "8012345678" },
    { name: "Norway", code: "+47", format: "41234567" },
    { name: "Pakistan", code: "+92", format: "3012345678" },
    { name: "Philippines", code: "+63", format: "9123456789" },
    { name: "Poland", code: "+48", format: "512345678" },
    { name: "Portugal", code: "+351", format: "912345678" },
    { name: "Qatar", code: "+974", format: "33123456" },
    { name: "Romania", code: "+40", format: "712345678" },
    { name: "Russia", code: "+7", format: "9123456789" },
    { name: "Saudi Arabia", code: "+966", format: "512345678" },
    { name: "Singapore", code: "+65", format: "81234567" },
    { name: "South Africa", code: "+27", format: "821234567" },
    { name: "Spain", code: "+34", format: "612345678" },
    { name: "Sri Lanka", code: "+94", format: "712345678" },
    { name: "Sweden", code: "+46", format: "701234567" },
    { name: "Switzerland", code: "+41", format: "781234567" },
    { name: "Taiwan", code: "+886", format: "912345678" },
    { name: "Thailand", code: "+66", format: "812345678" },
    { name: "Turkey", code: "+90", format: "5012345678" },
    { name: "UAE", code: "+971", format: "501234567" },
    { name: "United Kingdom", code: "+44", format: "7123456789" },
    { name: "USA", code: "+1", format: "2015550123" },
    { name: "Vietnam", code: "+84", format: "912345678" },
  ], []);

  const [countryCode, setCountryCode] = useState("+63");
  const [phoneNumber, setPhoneNumber] = useState("");

  const selectedCountry =
    countries.find((c) => c.code === countryCode) || countries[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: `${countryCode} ${phoneNumber}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {

        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 3000);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setPhoneNumber("");

      } else {

        alert(data.error || "Something went wrong.");

      }

    } catch (error) {
      console.log(error);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <main className="bg-[#F8FAFC]">

      <Navbar />

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className="
            fixed
            top-28
            right-6
            z-50
            bg-[#0B1F3A]
            border
            border-[#D4A017]/30
            rounded-2xl
            px-6
            py-5
            shadow-2xl
            backdrop-blur-xl
          "
        >
          <h3 className="text-[#D4A017] font-bold text-lg mb-1">
            Success
          </h3>

          <p className="text-gray-300 text-sm">
            Your message has been sent successfully.
          </p>
        </motion.div>
      )}

      {/* HERO */}
      <section className="relative h-[55vh] bg-[#0B1F3A] flex items-center justify-center overflow-hidden">

        {/* GLOW */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">

          <div className="absolute w-125 h-125 bg-[#D4A017] rounded-full blur-3xl -top-25 -left-25 animate-pulse" />

          <div className="absolute w-125 h-125 bg-[#1E4E8C] rounded-full blur-3xl -bottom-25 -right-25 animate-pulse" />

          <div className="absolute w-125 h-75 bg-white/10 rounded-full blur-3xl top-[20%] left-[40%] animate-bounce" />

        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >

          <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-6">
            Contact Strategic
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Let’s Connect
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            Reach out to Strategic International Manpower
            Services Inc. for recruitment inquiries,
            applications, and staffing partnerships.
          </p>

        </motion.div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-28 px-6 lg:px-8 bg-white">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-[#D4A017] uppercase tracking-[4px] text-sm font-semibold mb-4">
              Contact Information
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-8 leading-tight">
              We’re Ready To Assist You
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Whether you are an applicant seeking overseas
              opportunities or an employer searching for
              qualified professionals, our team is ready
              to help.
            </p>

            <div className="space-y-6">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:border-[#D4A017]/30 transition-all duration-500"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A]/10 flex items-center justify-center group-hover:bg-[#0B1F3A] transition-all duration-500">
                  <MapPin className="text-[#0B1F3A] group-hover:text-white transition-all duration-500" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
                    Office Address
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Unit GF-01 Garden Plaza Hotel, #1370E Gen. Luna St., Paco, Manila.
                  </p>
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:border-[#D4A017]/30 transition-all duration-500"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A]/10 flex items-center justify-center group-hover:bg-[#0B1F3A] transition-all duration-500">
                  <Phone className="text-[#0B1F3A] group-hover:text-white transition-all duration-500" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
                    Contact Numbers
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    +63 915 764 4053
                  </p>
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:border-[#D4A017]/30 transition-all duration-500"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A]/10 flex items-center justify-center group-hover:bg-[#0B1F3A] transition-all duration-500">
                  <Mail className="text-[#0B1F3A] group-hover:text-white transition-all duration-500" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
                    Email Address
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    applystrategic@gmail.com
                  </p>
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:border-[#D4A017]/30 transition-all duration-500"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A]/10 flex items-center justify-center group-hover:bg-[#0B1F3A] transition-all duration-500">
                  <Clock3 className="text-[#0B1F3A] group-hover:text-white transition-all duration-500" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
                    Office Hours
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0B1F3A] rounded-3xl p-10 shadow-2xl"
          >

            <h3 className="text-3xl font-bold text-white mb-8">
              Send Us A Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 outline-none focus:border-[#D4A017] transition-all duration-300"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 outline-none focus:border-[#D4A017] transition-all duration-300"
              />

              {/* PHONE NUMBER FIELD */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/* COUNTRY SELECT */}
                <div className="sm:w-65">

                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="
                      w-full
                      p-4
                      rounded-xl
                      bg-white/10
                      border
                      border-white/10
                      text-white
                      outline-none
                      focus:border-[#D4A017]
                      transition-all
                      duration-300
                    "
                  >
                    {countries.map((country) => (
                      <option
                        key={`${country.name}-${country.code}`}
                        value={country.code}
                        className="text-black"
                      >
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </select>

                </div>

                {/* PHONE INPUT */}
                <div className="relative flex-1">

                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none">
                    {countryCode}
                  </div>

                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      const numbersOnly = e.target.value.replace(/\D/g, "");
                      setPhoneNumber(numbersOnly);
                    }}
                    placeholder={selectedCountry.format}
                    required
                    className="
                      w-full
                      p-4
                      pl-20
                      rounded-xl
                      bg-white/10
                      border
                      border-white/10
                      text-white
                      placeholder-gray-300
                      outline-none
                      focus:border-[#D4A017]
                      transition-all
                      duration-300
                    "
                  />

                </div>

              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 outline-none focus:border-[#D4A017] transition-all duration-300"
              />

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 outline-none focus:border-[#D4A017] transition-all duration-300"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#D4A017] hover:bg-[#b88a12] hover:scale-105 text-white py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </motion.div>

        </div>

      </section>

      <CTA />
      <Footer />

    </main>
  );
}