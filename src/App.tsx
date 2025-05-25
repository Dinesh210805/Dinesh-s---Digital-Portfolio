import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/ProfileSection"; // renamed import
import Achievements from "./components/Achievements";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects"; // fixed import
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Use a debounced resize handler to help with smooth scrolling
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    // Optimize animation settings for better performance
    const sections = gsap.utils.toArray("section");

    sections.forEach((section: any, index) => {
      // Don't apply animation to hero section
      if (index === 0) return;

      // Use single animation per section rather than animating children individually
      gsap.fromTo(
        section,
        {
          y: 20, // Reduced for subtler animation
          opacity: 0.6,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4, // Shorter duration for smoother feeling
          ease: "power1.out", // Simpler easing function for better performance
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 10%",
            toggleActions: "play none none none", // Don't reverse animations
            markers: false,
          },
        }
      );
    });

    // Special treatment for the About-Achievements transition
    const aboutSection = document.getElementById("about");
    const achievementsSection = document.getElementById("achievements");

    if (aboutSection && achievementsSection) {
      // Create a small overlap in animations to avoid stuttering
      ScrollTrigger.create({
        trigger: aboutSection,
        start: "bottom 70%",
        onLeave: () => {
          // Gentle transition when leaving about section
          gsap.to(aboutSection, {
            opacity: 0.95,
            duration: 0.3,
            ease: "none",
          });
          gsap.to(achievementsSection, {
            opacity: 1,
            duration: 0.3,
            ease: "none",
          });
        },
        onEnterBack: () => {
          // Reverse when scrolling back up
          gsap.to(aboutSection, {
            opacity: 1,
            duration: 0.3,
            ease: "none",
          });
        },
        markers: false,
      });
    }

    return () => {
      // Proper cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Achievements />
        <Metrics />
        <Experience />
        <Education />
        <Skills />
        <Gallery />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
