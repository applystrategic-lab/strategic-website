import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Countries from "./components/Countries";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import RecruitmentProcess from "./components/RecruitmentProcess";
import StatsSection from "./components/StatsSection";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="relative bg-[#F8FAFC] overflow-hidden">

      {/* GLOBAL BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute top-[5%] left-50 w-125 h-125 bg-[#D4A017]/10 rounded-full blur-3xl" />

        <div className="absolute top-[35%] right-62.5 w-150 h-150 bg-[#1E4E8C]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-[20%] w-125 h-125 bg-[#D4A017]/5 rounded-full blur-3xl" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        <Navbar />

        <Hero />

        <Stats />

        <AboutSection />

        <RecruitmentProcess />

        <StatsSection />

        <Testimonials />

        <Countries />

        <WhyChoose />

        <Process />

        <CTA />

        <Footer />

        <BackToTop />

      </div>

    </main>
  );
}