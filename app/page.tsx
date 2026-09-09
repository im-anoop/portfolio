import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Toolkit from "@/components/Toolkit";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroBanner
          title="Want the short version?"
          description="A one-page summary of the roles, systems, and stack above — useful for a quick screen or forwarding to your team."
          ctaLabel="Download résumé (PDF)"
          resumeUrl="/arjun-mehta-resume.pdf"
          resumeFileName="Arjun-Mehta-Resume.pdf"
          imageSrc="/hero-portrait.svg"
          imageAlt="Abstract portrait mark for Arjun Mehta"
        />
        <About />
        <Projects />
        <Toolkit />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
