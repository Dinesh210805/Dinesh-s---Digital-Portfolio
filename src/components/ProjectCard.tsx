import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

const ProjectCard = ({ title, description, technologies, github, live }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20
                 hover:border-purple-500/50 transition-all duration-300
                 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 
                      bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
