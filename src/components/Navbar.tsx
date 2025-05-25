import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Code,
  Brain,
  GraduationCap,
  Award,
  Image,
  Mail,
  User,
  Trophy,
} from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);  const navItems = [
    { label: "Home", href: "#home", icon: <Home size={20} /> },
    { label: "About Me", href: "#about", icon: <User size={20} /> },
    {
      label: "Achievements",
      href: "#achievements",
      icon: <Trophy size={20} />,
    },
    { label: "Skills", href: "#skills", icon: <Brain size={20} /> },
    { label: "Featured Projects", href: "#gallery", icon: <Image size={20} /> },
    { label: "Metrics", href: "#metrics", icon: <Code size={20} /> },
    { label: "Experience", href: "#experience", icon: <Briefcase size={20} /> },
    {
      label: "Education",
      href: "#education",
      icon: <GraduationCap size={20} />,
    },
    {
      label: "Certifications",
      href: "#certifications",
      icon: <Award size={20} />,
    },
    { label: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle home section specially since it's at the top
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 200; // Increased offset for better detection
        const sectionId = section.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Bottom Navbar */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed left-0 right-0 bottom-6 z-[9999] hidden md:block"
      >
        <div className="max-w-fit mx-auto">
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-3 border border-white/10 shadow-lg">
            <div className="flex items-center justify-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group relative px-3 py-2"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    className={`relative z-[9999] p-2 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "bg-white/20 text-white scale-110"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.icon}
                    <span
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 
                                   rounded-lg text-sm scale-0 group-hover:scale-100 transition-all duration-300 whitespace-nowrap"
                    >
                      {item.label}
                    </span>
                  </div>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden fixed top-4 right-4 z-[9999] p-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </motion.button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-[9998]"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 text-xl p-3 rounded-xl hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
