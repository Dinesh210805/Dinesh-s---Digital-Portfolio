import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code, Award, Brain, Briefcase, Trophy } from "lucide-react";

const metrics = [
  {
    icon: <Code className="w-6 h-6" />,
    value: 10,
    label: "Projects Completed",
    suffix: "",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: 4,
    label: "Certifications",
    suffix: "",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    value: 10,
    label: "Skills Mastered",
    suffix: "",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    value: 0,
    label: "Years Experience",
    suffix: "",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    value: 3,
    label: "Achievements",
    suffix: "",
    color: "from-red-500 to-rose-500",
  },
];

const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const end = value;
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * end);

      node.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [value, suffix]);

  return (
    <span ref={nodeRef} className="text-4xl font-bold">
      0{suffix}
    </span>
  );
};

const Metrics = () => {
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    springConfig
  );
  return (
    <section id="metrics" className="py-20 bg-black/30">
      <motion.div className="max-w-7xl mx-auto px-4" style={{ y, opacity }}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 },
              }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `linear-gradient(to right, var(--${metric.color}-from), var(--${metric.color}-to))`,
                }}
              />
              <div
                className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10
                            hover:border-white/20 transition-all duration-500"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} 
                              flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500`}
                >
                  {metric.icon}
                </div>
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                <p className="text-gray-400 mt-2">{metric.label}</p>

                {/* Particle Effects */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-gradient-to-r from-white to-transparent opacity-50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full bg-gradient-to-r from-white to-transparent opacity-50"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Metrics;
