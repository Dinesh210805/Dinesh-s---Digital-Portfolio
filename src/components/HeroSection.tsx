import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ParticleField from "./ParticleField";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Gen AI Developer",
        "Full Stack Engineer",
        "Machine Learning Dev",
        "Problem Solver",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleExploreClick = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="h-screen w-full relative overflow-hidden">
      <Canvas className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleField />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <div className="space-y-3" style={{ marginBottom: "1.618rem" }}>
            <h2 className="text-xl text-white/90 font-light tracking-wide">
              Hey there! I'm
            </h2>
            <h1 className="text-6xl font-bold text-white">Dinesh Kumar C</h1>
            <p
              className="text-sm tracking-[0.2em] text-white/70 font-light inline-block"
              style={{
                width: "min(100%, 38.2vw)", // Golden ratio relative to viewport
                margin: "0.618rem auto",
              }}
            >
              Fuelled by Bugs, Driven by Passion
            </p>
          </div>

          <div
            className="text-2xl h-12 text-white"
            style={{
              marginTop: "1.618rem",
              marginBottom: "2.618rem",
            }}
          >
            <span ref={typedRef}></span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-6 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              onClick={() => handleExploreClick()}
            >
              Explore My Work
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white/20 rounded-full font-semibold 
                       hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-white/20 rounded-full p-1"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto" />
        </motion.div>
      </div>
    </div>
  );
};
export default HeroSection;
