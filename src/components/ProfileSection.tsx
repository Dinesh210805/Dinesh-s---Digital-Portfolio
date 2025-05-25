import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import DownloadButton from "./DownloadButton";
import SocialLinks from "./SocialLinks";

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const ref = useRef<HTMLDivElement>(null);

  // Create motion values for animations
  const yRange = useTransform(scrollYProgress, [0, 1], [100, 0]);

  // 3D animation setup
  const calc = (x: number, y: number) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 400, friction: 40, precision: 0.001 },
  }));

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-b from-black/30 via-purple-500/5 to-black/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, margin: "-15%" }}
    >
      <div className="relative">
        {/* Add gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold mb-12 text-center"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div className="lg:w-1/2" style={{ y: yRange }}>
              <animated.div
                ref={ref}
                className="relative w-80 h-80 mx-auto"
                onMouseMove={({ clientX: x, clientY: y }) => {
                  if (!ref.current) return;
                  const rect = ref.current.getBoundingClientRect();
                  set({ xys: calc(x - rect.left, y - rect.top) });
                }}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                  transform: props.xys.to(trans),
                }}
              >
                <img
                  style={{ transform: "translate(10px, 10px)" }}
                  src="/images/profile_pic.png" // Updated path
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl relative z-10"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 mix-blend-overlay" />
              </animated.div>
            </motion.div>

            <motion.div className="lg:w-1/2" style={{ y: yRange }}>
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-gray-300"
                >
                  I am an aspiring Gen AI developer with hands-on experience in
                  CNN, KNN, and YOLO. Skilled in Python, TensorFlow, and
                  fine-tuning models like LLaMA and BERT, I am passionate about
                  solving real-world problems. I also have a solid foundation in
                  web development, including HTML, CSS, and Flask. Always eager
                  to contribute to innovative AI solutions, I am continuously
                  expanding my knowledge in AI technologies.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <DownloadButton />
                  <SocialLinks />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
