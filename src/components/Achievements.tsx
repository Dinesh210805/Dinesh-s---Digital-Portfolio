import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Finalist — Aventus 2.0 Hackathon",
      description:
        "Developed The Light, Assistive app for the visually impaired with touch based secure authentication(SSFD).",
      images: [
        "/images/aventus1.jpg",
        "/images/aventus2.jpg",
        "/images/aventus3.png",
      ],
      date: "2023",
      category: "Hackathon",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Finalist — 0xday Hack$day Hackathon",
      description:
        "Built Gravitycargo, an AI system improving container space usage and reducing CO2.",
      images: ["/images/0xday1.JPG", "/images/0xday2.jpg"],
      date: "2024",
      category: "Hackathon",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Top 10 — Unisys Innovation Program Y16",
      description:
        "Recognized for GravitycARgo, an AR-enhanced sustainable logistics platform.",
      images: ["/images/uip.png"],
      date: "2024",
      category: "Innovation",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Top 100 — Google Solution Challenge 2025",
      description:
        "GravitycARgo selected from 64,000+ National entries for its AI+AR logistics innovation.",
      images: ["/images/googlesolchallenge.png"],
      date: "2025 (Ongoing)",
      category: "Competition",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Regional Prefinalist — Youth Talk 2024",
      description:
        "Participated in regional prefinals of ICT Academy Youth Talk Tamil Nadu.",
      images: ["/images/youthtalk.png"],
      date: "2024",
      category: "Competition",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const { scrollYProgress } = useScroll();
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      label: "Hackathons",
      value: "2+",
    },
    {
      label: "Recognition Programs",
      value: "3+",
    },
    {
      label: "Innovation Awards",
      value: "5+",
    },
  ];

  // Duplicate achievements for seamless infinite scroll
  const duplicatedAchievements = [
    ...achievements,
    ...achievements,
    ...achievements,
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-black to-gray-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Achievements & Recognition
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Celebrating innovation, competition victories, and recognition in
            the tech industry
          </p>
        </motion.div>

        {/* Horizontal Scrolling Marquee */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={marqueeRef}
            className="flex gap-8"
            animate={{
              x: isHovered ? "0%" : "-33.33%",
            }}
            transition={{
              duration: isHovered ? 0 : 60,
              ease: "linear",
              repeat: isHovered ? 0 : Infinity,
            }}
          >
            {duplicatedAchievements.map((achievement, index) => (
              <AchievementCard
                key={`${achievement.title}-${index}`}
                achievement={achievement}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex justify-center gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-800/50
                         hover:border-gray-700/70 transition-all duration-500 hover:bg-gray-900/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual Achievement Card Component
const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: any;
  index: number;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slideshow effect
  useEffect(() => {
    if (achievement.images.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prev) =>
          prev === achievement.images.length - 1 ? 0 : prev + 1
        );
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [achievement.images.length, isHovered]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === achievement.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? achievement.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: (index % 5) * 0.1,
          ease: "easeOut",
        },
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className="group flex-shrink-0 w-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-full bg-gray-900/20 backdrop-blur-xl rounded-2xl overflow-hidden 
                      border border-gray-800/30 hover:border-gray-700/50 transition-all duration-700
                      hover:shadow-2xl hover:shadow-black/50 relative"
      >
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-sm" />
        </div>

        {/* Image Container */}
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <motion.img
            key={currentImageIndex}
            src={achievement.images[currentImageIndex]}
            alt={`${achievement.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-700"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: 1,
              scale: isHovered ? 1.08 : 1,
              filter: isHovered
                ? "brightness(1.1) contrast(1.1)"
                : "brightness(1) contrast(1)",
            }}
            transition={{ duration: 0.7 }}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <motion.span
              className="px-4 py-2 bg-black/60 backdrop-blur-md text-xs font-semibold 
                           border border-gray-700/50 rounded-xl text-gray-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {achievement.category}
            </motion.span>
          </div>

          {/* Navigation Controls */}
          {achievement.images.length > 1 && (
            <>
              <motion.button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 backdrop-blur-md 
                         rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 
                         hover:bg-black/70 border border-gray-600/30 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={16} className="text-white" />
              </motion.button>
              <motion.button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 backdrop-blur-md 
                         rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 
                         hover:bg-black/70 border border-gray-600/30 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={16} className="text-white" />
              </motion.button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {achievement.images.map((_: string, imgIndex: number) => (
                  <motion.button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      imgIndex === currentImageIndex
                        ? "bg-white shadow-lg"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 relative">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="p-2.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Award className="w-5 h-5 text-purple-400" />
            </motion.div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{achievement.date}</span>
            </div>
          </div>

          <h3
            className="text-xl font-bold text-white leading-tight group-hover:text-gray-100 
                       transition-colors duration-300 tracking-tight"
          >
            {achievement.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            {achievement.description}
          </p>

          {/* Hover Effect Line */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
