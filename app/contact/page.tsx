"use client";

import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function ContactPage() {

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
      body: JSON.stringify(formData),
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

            {/* CONTACT CARDS */}
            <div className="space-y-6">

              {/* ADDRESS */}
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

              {/* PHONE */}
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

              {/* EMAIL */}
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
                    <br>
                    japanjobsstrategic@gmail.com
                    </br>
                  </p>
                </div>

              </motion.div>

              {/* HOURS */}
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
                    8:00 AM - 5:00 PM
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