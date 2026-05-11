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

  const [countryCode, setCountryCode] = useState("+63");
  const [phoneNumber, setPhoneNumber] = useState("");

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
                    <br />
                    japanjobsstrategic@gmail.com
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
  <option value="+93" className="text-black">🇦🇫 Afghanistan (+93)</option>
  <option value="+355" className="text-black">🇦🇱 Albania (+355)</option>
  <option value="+213" className="text-black">🇩🇿 Algeria (+213)</option>
  <option value="+376" className="text-black">🇦🇩 Andorra (+376)</option>
  <option value="+244" className="text-black">🇦🇴 Angola (+244)</option>
  <option value="+54" className="text-black">🇦🇷 Argentina (+54)</option>
  <option value="+374" className="text-black">🇦🇲 Armenia (+374)</option>
  <option value="+61" className="text-black">🇦🇺 Australia (+61)</option>
  <option value="+43" className="text-black">🇦🇹 Austria (+43)</option>
  <option value="+994" className="text-black">🇦🇿 Azerbaijan (+994)</option>
  <option value="+973" className="text-black">🇧🇭 Bahrain (+973)</option>
  <option value="+880" className="text-black">🇧🇩 Bangladesh (+880)</option>
  <option value="+375" className="text-black">🇧🇾 Belarus (+375)</option>
  <option value="+32" className="text-black">🇧🇪 Belgium (+32)</option>
  <option value="+55" className="text-black">🇧🇷 Brazil (+55)</option>
  <option value="+359" className="text-black">🇧🇬 Bulgaria (+359)</option>
  <option value="+855" className="text-black">🇰🇭 Cambodia (+855)</option>
  <option value="+1" className="text-black">🇨🇦 Canada (+1)</option>
  <option value="+86" className="text-black">🇨🇳 China (+86)</option>
  <option value="+57" className="text-black">🇨🇴 Colombia (+57)</option>
  <option value="+420" className="text-black">🇨🇿 Czech Republic (+420)</option>
  <option value="+45" className="text-black">🇩🇰 Denmark (+45)</option>
  <option value="+20" className="text-black">🇪🇬 Egypt (+20)</option>
  <option value="+372" className="text-black">🇪🇪 Estonia (+372)</option>
  <option value="+358" className="text-black">🇫🇮 Finland (+358)</option>
  <option value="+33" className="text-black">🇫🇷 France (+33)</option>
  <option value="+49" className="text-black">🇩🇪 Germany (+49)</option>
  <option value="+30" className="text-black">🇬🇷 Greece (+30)</option>
  <option value="+852" className="text-black">🇭🇰 Hong Kong (+852)</option>
  <option value="+36" className="text-black">🇭🇺 Hungary (+36)</option>
  <option value="+91" className="text-black">🇮🇳 India (+91)</option>
  <option value="+62" className="text-black">🇮🇩 Indonesia (+62)</option>
  <option value="+98" className="text-black">🇮🇷 Iran (+98)</option>
  <option value="+964" className="text-black">🇮🇶 Iraq (+964)</option>
  <option value="+353" className="text-black">🇮🇪 Ireland (+353)</option>
  <option value="+972" className="text-black">🇮🇱 Israel (+972)</option>
  <option value="+39" className="text-black">🇮🇹 Italy (+39)</option>
  <option value="+81" className="text-black">🇯🇵 Japan (+81)</option>
  <option value="+962" className="text-black">🇯🇴 Jordan (+962)</option>
  <option value="+7" className="text-black">🇰🇿 Kazakhstan (+7)</option>
  <option value="+82" className="text-black">🇰🇷 Korea (+82)</option>
  <option value="+965" className="text-black">🇰🇼 Kuwait (+965)</option>
  <option value="+856" className="text-black">🇱🇦 Laos (+856)</option>
  <option value="+961" className="text-black">🇱🇧 Lebanon (+961)</option>
  <option value="+60" className="text-black">🇲🇾 Malaysia (+60)</option>
  <option value="+52" className="text-black">🇲🇽 Mexico (+52)</option>
  <option value="+95" className="text-black">🇲🇲 Myanmar (+95)</option>
  <option value="+977" className="text-black">🇳🇵 Nepal (+977)</option>
  <option value="+31" className="text-black">🇳🇱 Netherlands (+31)</option>
  <option value="+64" className="text-black">🇳🇿 New Zealand (+64)</option>
  <option value="+47" className="text-black">🇳🇴 Norway (+47)</option>
  <option value="+92" className="text-black">🇵🇰 Pakistan (+92)</option>
  <option value="+63" className="text-black">🇵🇭 Philippines (+63)</option>
  <option value="+48" className="text-black">🇵🇱 Poland (+48)</option>
  <option value="+351" className="text-black">🇵🇹 Portugal (+351)</option>
  <option value="+974" className="text-black">🇶🇦 Qatar (+974)</option>
  <option value="+40" className="text-black">🇷🇴 Romania (+40)</option>
  <option value="+7" className="text-black">🇷🇺 Russia (+7)</option>
  <option value="+966" className="text-black">🇸🇦 Saudi Arabia (+966)</option>
  <option value="+65" className="text-black">🇸🇬 Singapore (+65)</option>
  <option value="+27" className="text-black">🇿🇦 South Africa (+27)</option>
  <option value="+34" className="text-black">🇪🇸 Spain (+34)</option>
  <option value="+94" className="text-black">🇱🇰 Sri Lanka (+94)</option>
  <option value="+46" className="text-black">🇸🇪 Sweden (+46)</option>
  <option value="+41" className="text-black">🇨🇭 Switzerland (+41)</option>
  <option value="+886" className="text-black">🇹🇼 Taiwan (+886)</option>
  <option value="+66" className="text-black">🇹🇭 Thailand (+66)</option>
  <option value="+90" className="text-black">🇹🇷 Turkey (+90)</option>
  <option value="+971" className="text-black">🇦🇪 UAE (+971)</option>
  <option value="+44" className="text-black">🇬🇧 United Kingdom (+44)</option>
  <option value="+1" className="text-black">🇺🇸 USA (+1)</option>
  <option value="+84" className="text-black">🇻🇳 Vietnam (+84)</option>
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
                    onChange={(e) =>
                      setPhoneNumber(
                        e.target.value.replace(/[^0-9]/g, "")
                      )
                    }
                    placeholder="9123456789"
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