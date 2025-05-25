import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Diploma in Full Stack Development",
    issuer: "I Shine Info Tech",
    date: "2023",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "Comprehensive training in modern web development stack with hands-on projects",
    link: "https://drive.google.com/file/d/1qrIg6CE9CADRlQ58rG0f6GQkcKFhToZw/view?usp=sharing",
  },
  {
    title: "Database Management Systems",
    issuer: "NPTEL",
    date: "2023",
    skills: ["SQL", "Database Design", "Normalization", "Query Optimization"],
    description: "Advanced concepts in database management and system design",
    link: "https://drive.google.com/file/d/1oeYc41j95ufyLGjufpDb9rp585uhoxgb/view?usp=sharing",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2024",
    skills: [
      "OOP",
      "Collections",
      "Multithreading",
      "Exception Handling",
      "JDBC",
    ],
    description:
      "Comprehensive course covering core Java concepts, object-oriented programming, and advanced Java features",
    link: "https://drive.google.com/file/d/13DtTDlZQNWFqcaCyCkucnsdh_4QkIbsJ/view?usp=sharing",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "2024",
    skills: ["LLMs", "Prompt Engineering", "AI Ethics", "Model Fine-tuning"],
    description:
      "Gained proficiency in generative AI concepts, tools, and ethical considerations",
    link: "#",
  },
];

const CertificationCard = ({ cert, index }: { cert: any; index: number }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      whileHover={{
        y: -5,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 
                hover:border-purple-500/50 transition-all duration-700"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full">
          <Award className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{cert.title}</h3>
          <p className="text-purple-400">{cert.issuer}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{cert.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {cert.skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/5 rounded-full text-sm text-blue-400
                     hover:bg-white/10 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{cert.date}</span>
        </div>
        <motion.a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white/10 rounded-full hover:bg-white/20 
                   transition-colors duration-300"
        >
          <ExternalLink size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const { scrollYProgress } = useScroll();

  const springConfig = {
    stiffness: 50,
    damping: 15,
    mass: 0.8,
  };

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, -50]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.5, 1]),
    springConfig
  );

  return (
    <motion.section
      id="certifications"
      className="py-20 bg-gradient-to-b from-black/30 to-transparent"
      style={{ opacity }}
    >
      <motion.div style={{ y }} className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Professional Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and skill development through recognized
            certifications and courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
