"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DeploymentsPage() {

  const galleryImages = [
  "/gallery/deploy1.jpg",
  "/gallery/deploy2.jpg",
  "/gallery/deploy3.jpg",
  "/gallery/deploy4.jpg",
  "/gallery/deploy5.jpg",
  "/gallery/deploy6.jpg",
  "/gallery/deploy7.jpg",
  "/gallery/deploy8.jpg",
  "/gallery/deploy9.jpg",
  "/gallery/deploy10.jpg",
  "/gallery/deploy11.jpg",
  "/gallery/deploy12.jpg",
  "/gallery/deploy13.jpg",
  "/gallery/deploy14.jpg",
  "/gallery/deploy15.jpg",
  "/gallery/deploy16.jpg",
  "/gallery/deploy17.jpg",
  "/gallery/deploy18.jpg",
  "/gallery/deploy19.jpg",
];

  return (
    <main>

      <Navbar />

      {/* HERO SECTION */}

      <section className="pt-44 pb-24 bg-[#0B1F3A] text-center">

  <p className="text-[#D4A017] uppercase tracking-[5px] text-sm font-semibold mb-6">
    Our Commitment, Their Future
  </p>

  <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
    A Glimpse Into Our Successful Deployments
  </h1>

  <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed px-6">
    Moments that mark new beginnings and brighter futures
    for our deployed workers around the world.
  </p>

</section>

<section className="bg-[#0B1F3A] px-6 pb-12">

<div className="flex items-center justify-center mb-16">

  {/* LEFT LINE */}
  <div
    className="
      w-40 md:w-72
      h-[2px]
      bg-gradient-to-r
      from-transparent
      via-[#FFD700]
      to-[#FFD700]
      shadow-[0_0_15px_rgba(255,215,0,0.8)]
    "
  />

  {/* LEFT DOT */}
  <div className="mx-4 w-3 h-3 rounded-full bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,1)]" />

  {/* TITLE */}
  <div
    className="
      px-8
      py-3
      rounded-full
      border
      border-[#D4A017]
      bg-[#0B1F3A]
      text-[#D4A017]
      uppercase
      tracking-[6px]
      text-xs
      font-semibold
      shadow-[0_0_25px_rgba(212,160,23,0.5)]
    "
  >
    Our Success Stories
  </div>

  {/* RIGHT DOT */}
  <div className="mx-4 w-3 h-3 rounded-full bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,1)]" />

  {/* RIGHT LINE */}
  <div
    className="
      w-40 md:w-72
      h-[2px]
      bg-gradient-to-l
      from-transparent
      via-[#FFD700]
      to-[#FFD700]
      shadow-[0_0_15px_rgba(255,215,0,0.8)]
    "
  />

</div>

</section>

      {/* GALLERY */}
<section className="pt-0 pb-8 px-6 bg-[#0B1F3A]">

  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

      {galleryImages.map((image, index) => (

        <div
  key={index}
  className="
    relative
    p-[3px]
    rounded-3xl
    bg-gradient-to-r
    from-[#D4A017]
    via-[#FFD700]
    to-[#D4A017]
    shadow-[0_0_25px_rgba(212,160,23,0.7)]
    hover:shadow-[0_0_50px_rgba(255,215,0,0.9)]
    transition-all
    duration-500
  "
>

       <div className="overflow-hidden rounded-[22px]">
    <img
      src={image}
      alt={`Deployment ${index + 1}`}
      className="
        w-full
        h-80
        object-cover
        hover:scale-110
        transition-all
        duration-700
      "
    />
  </div>
</div>

      ))}

    </div>

  </div>

</section>

      {/* STATS */}
<section className="bg-[#0B1F3A] pt-4 pb-10">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-10 text-center">

      <div>
        <h3 className="text-5xl font-bold text-[#D4A017] mb-3">
          35+
        </h3>

        <p className="text-white text-lg">
          Years of Experience
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-[#D4A017] mb-3">
          5,000+
        </h3>

        <p className="text-white text-lg">
          Workers Deployed
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-[#D4A017] mb-3">
          Global
        </h3>

        <p className="text-white text-lg">
          International Opportunities
        </p>
      </div>

    </div>

  </div>

</section>

      {/* CTA */}
<section className="py-24 px-6 bg-[#F8FAFC]">

  <div className="max-w-5xl mx-auto text-center">

    <p className="text-[#D4A017] uppercase tracking-[5px] text-sm mb-4">
      Start Your Journey
    </p>

    <h2 className="text-5xl font-bold text-[#0B1F3A] mb-6">
      Ready To Build Your International Career?
    </h2>

    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
      Join thousands of Filipino professionals who have
      trusted Strategic International Manpower Services Inc.
      in achieving their dreams abroad.
    </p>

    <div className="flex flex-col sm:flex-row gap-5 justify-center">

      <a
        href="/apply"
        className="
          bg-[#D4A017]
          hover:bg-[#b88a12]
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          transition-all
        "
      >
        Apply Now
      </a>

      <a
        href="/contact"
        className="
          border
          border-[#0B1F3A]
          text-[#0B1F3A]
          px-8
          py-4
          rounded-xl
          font-semibold
          transition-all
          hover:bg-[#0B1F3A]
          hover:text-white
        "
      >
        Contact Us
      </a>

    </div>

  </div>

</section>

      <Footer />

    </main>
  );
}