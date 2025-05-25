import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "LangLearn",
    description:
      "An AI-powered language learning platform combining LLaMA model integration, interactive exercises, and real-time translation services. Features include AI language tutoring, YouTube content integration, and adaptive learning paths.",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    category: "Full Stack AI",
    technologies: ["React", "TypeScript", "Python", "Flask", "LLaMA", "Groq"],
    github:
      "https://github.com/Dinesh210805/Language-Translation-and-Learning-Tool---mark-2",
    live: "https://github.com/Dinesh210805/Language-Translation-and-Learning-Tool---mark-2",
    features: [
      "AI Language Tutor",
      "Real-time Translation",
      "YouTube Integration",
      "Interactive Exercises",
      "Speech Recognition",
      "Progress Analytics",
    ],
  },
  {
    title: "GravitycARgo",
    description:
      "An AI-driven system that boosts container space utilization to 85%, cutting costs, reducing product damage, and lowering CO2 emissions. It revolutionizes logistics with smarter, greener packing strategies.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    category: "AI & Logistics",
    technologies: ["Python", "Nueral Networks", "LLMs", "React"],
    github: "https://github.com/Dinesh210805/GravitycARgo",
    live: "https://github.com/Dinesh210805/GravitycARgo",
  },
  {
    title: "The Light",
    description:
      "An innovative mobile application designed to empower visually impaired users with seamless navigation and secure online transactions, utilizing SSFD (Multi-Factor Authentication) for a unique touch-based PIN interface.",
    image:
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=800&q=80",
    category: "AI & ML",
    technologies: ["Python", "TensorFlow", "Yolo", "Flutter", "flask"],
    github: "https://github.com/Dinesh210805/waste_to_wealth_ai",
    live: "//github.com/Dinesh210805/waste_to_wealth_ai",
  },
  {
    title: "EcoBot",
    description:
      "An intelligent waste classification and recycling system that harnesses the power of LLaMA models for precision categorization, utilizing Retrieval-Augmented Generation (RAG) with LangChain, ChromaDB, and Ollama to optimize decision-making in waste management.",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80",
    category: "GenAI",
    technologies: ["Python", "Rag", "Langchain", "ChromaDB", "Ollama", "llm"],
    github: "https://github.com/Dinesh210805/waste_to_wealth_ai",
    live: "https://github.com/Dinesh210805/waste_to_wealth_ai",
  },
  {
    title: "EyeQ",
    description:
      "Intelligent document processing system with OCR and natural language understanding",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    category: "Document AI",
    technologies: ["PyTorch", "NLP", "OCR", "FastAPI"],
    github:
      "https://github.com/Dinesh210805/AUTOMATED-DOCUMENT-MANAGEMENT-SYSTEM-uip-y15",
    live: "https://github.com/Dinesh210805/AUTOMATED-DOCUMENT-MANAGEMENT-SYSTEM-uip-y15",
  },
  {
    title: "Accessible E-Commerce",
    description:
      "Fully accessible e-commerce platform with voice navigation and screen reader optimization",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    technologies: ["React", "Next.js", "Accessibility", "Stripe"],
    github: "https://github.com/username/project4",
    live: "https://project4.demo",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.2 },
      }}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="h-full bg-[#1c1c1c] rounded-xl overflow-hidden border border-white/5
                   backdrop-blur-sm relative"
        animate={{
          y: isHovered ? -8 : 0,
          boxShadow: isHovered
            ? "0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)"
            : "0 0 0 1px rgba(255,255,255,0.05)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"
            animate={{ opacity: isHovered ? 1 : 0.6 }}
          />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <span
              className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm 
                           border border-white/10 rounded-full"
            >
              {project.category}
            </span>
            <div className="flex gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/50 backdrop-blur-sm border border-white/10 
                         rounded-full opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={14} />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/50 backdrop-blur-sm border border-white/10 
                         rounded-full opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-white/5 rounded-md text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs bg-white/5 rounded-md text-gray-300">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.section
      id="projects"
      className="py-24 bg-gradient-to-b from-black/30 via-purple-900/5 to-black/30"
      style={{ y }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            A curated selection of projects showcasing my expertise in AI,
            machine learning, and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
