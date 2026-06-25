"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ApplyPage() {

  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  country: "",
  position: "",
  experience: "",
  message: "",
  resume: null,
  passport: null,
});

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  const target = e.target as HTMLInputElement;

  setFormData({
    ...formData,
    [target.name]: target.files
      ? target.files[0]
      : target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  setLoading(true);

  try {

    const submitData = new FormData();

    submitData.append("fullName", formData.fullName);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("country", formData.country);
    submitData.append("position", formData.position);
    submitData.append("experience", formData.experience);
    submitData.append("message", formData.message);

if (formData.resume) {
  submitData.append("resume", formData.resume);
}

if (formData.passport) {
  submitData.append("passport", formData.passport);
}

    const res = await fetch("/api/apply", {
      method: "POST",
      body: submitData,
    });

    if (res.ok) {

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

   setFormData({
  fullName: "",
  email: "",
  phone: "",
  country: "",
  position: "",
  experience: "",
  message: "",
  resume: null,
  passport: null,
});

    } else {

      alert("Something went wrong.");

    }

  } catch (error) {

    console.log(error);

    alert("Failed to send application.");

  }

  setLoading(false);

};

  return (
    <main className="bg-[#F8FAFC] min-h-screen">

      <Navbar />

      {/* SUCCESS POPUP */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
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
          "
        >
          <h3 className="text-[#D4A017] font-bold text-lg mb-1">
            Application Sent
          </h3>

          <p className="text-gray-300 text-sm">
            Your application has been submitted successfully.
          </p>
        </motion.div>
      )}

      {/* HERO */}
      <section className="pt-44 pb-20 px-6 bg-[#0B1F3A] text-center">

        <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-6">
          International Careers
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Apply Now
        </h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          Begin your international career journey with Strategic
          International Manpower Services Inc.
        </p>

      </section>

      {/* FORM */}
      <section className="py-24 px-6">

        <div className="max-w-4xl mx-auto bg-[#0B1F3A] rounded-3xl p-10 shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 outline-none focus:border-[#D4A017]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 outline-none focus:border-[#D4A017]"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 outline-none focus:border-[#D4A017]"
            />

            <select
  name="country"
  value={formData.country}
  onChange={handleChange}
  required
  className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:border-[#D4A017]"
>
  <option value="" className="text-black">
    Select Desired Country
  </option>

  <option value="Japan" className="text-black">Japan</option>
  <option value="Saudi Arabia" className="text-black">Saudi Arabia</option>
  <option value="USA" className="text-black">USA</option>
  <option value="UAE" className="text-black">UAE</option>
  <option value="Malaysia" className="text-black">Malaysia</option>
  <option value="Vietnam" className="text-black">Vietnam</option>
  <option value="Jordan" className="text-black">Jordan</option>
  <option value="Qatar" className="text-black">Qatar</option>
  <option value="Thailand" className="text-black">Thailand</option>
  <option value="Bahrain" className="text-black">Bahrain</option>
</select>

            <input
  type="text"
  name="position"
  value={formData.position}
  onChange={handleChange}
  placeholder="Desired Position"
  required
  className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 outline-none focus:border-[#D4A017]"
/>

            <textarea
              rows={6}
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Work Experience"
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 outline-none focus:border-[#D4A017]"
            />

            <textarea
  rows={5}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Message to Recruitment Team"
  className="
    w-full
    p-4
    rounded-xl
    bg-white/10
    border
    border-white/10
    text-white
    placeholder-gray-300
    outline-none
    focus:border-[#D4A017]
  "
/>

           {/* RESUME UPLOAD */}
<div>
  <label className="block text-white font-medium mb-2">
    Upload Resume
  </label>

  <p className="text-sm text-gray-400 mb-3">
    Accepted file types: PDF, DOC, DOCX
  </p>

  <input
  type="file"
  name="resume"
  onChange={handleChange}
    accept=".pdf,.doc,.docx"
    required
    className="
      w-full
      p-4
      rounded-xl
      bg-white/10
      border
      border-white/10
      text-white
      file:mr-4
      file:py-2
      file:px-4
      file:rounded-lg
      file:border-0
      file:bg-[#D4A017]
      file:text-white
      hover:file:bg-[#b88a12]
      transition-all
      duration-300
    "
  />
</div>

{/* PASSPORT UPLOAD */}
<div>
  <label className="block text-white font-medium mb-2">
    Upload Passport Copy
  </label>

  <p className="text-sm text-gray-400 mb-3">
    Accepted file types: JPG, JPEG, PNG
  </p>

  <input
  type="file"
  name="passport"
  onChange={handleChange}
    accept=".jpg,.jpeg,.png"
    required
    className="
      w-full
      p-4
      rounded-xl
      bg-white/10
      border
      border-white/10
      text-white
      file:mr-4
      file:py-2
      file:px-4
      file:rounded-lg
      file:border-0
      file:bg-[#D4A017]
      file:text-white
      hover:file:bg-[#b88a12]
      transition-all
      duration-300
    "
  />
</div>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-[#D4A017]
                hover:bg-[#b88a12]
                text-white
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                disabled:opacity-50
              "
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

          </form>

        </div>

      </section>

      <Footer />

    </main>
  );
}