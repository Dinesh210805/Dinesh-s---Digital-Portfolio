import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "GravitycARgo",
      description:
        "An AI-driven system that boosts container space utilization to 85%, cutting costs, reducing product damage, and lowering CO2 emissions. It revolutionizes logistics with smarter, greener packing strategies.",
      technologies: ["Python", "TensorFlow", "OpenCV", "React"],
      github: "https://github.com/yourusername/gravitycargo",
    },
    // Add more projects...
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing some of my best work in AI and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
