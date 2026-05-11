import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Industries from "./components/Industries";
import Countries from "./components/Countries";
import WhyChoose from "./components/WhyChoose";
import FeaturedJobs from "./components/FeaturedJobs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import RecruitmentProcess from "./components/RecruitmentProcess";
import JobOpportunities from "./components/JobOpportunities";
import StatsSection from "./components/StatsSection";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="relative bg-[#F8FAFC] overflow-hidden">

      {/* GLOBAL BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute top-[5%] left-[-200px] w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />

        <div className="absolute top-[35%] right-[-250px] w-[600px] h-[600px] bg-[#1E4E8C]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-[#D4A017]/5 rounded-full blur-3xl" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        <Navbar />

        <Hero />

        <Stats />

        <AboutSection />

        <RecruitmentProcess />

        <JobOpportunities />

        <StatsSection />

        <Testimonials />

        <Industries />

        <Countries />

        <WhyChoose />

        <FeaturedJobs />

        <Process />

        <CTA />

        <Footer />

        <BackToTop />

      </div>

    </main>
  );
}