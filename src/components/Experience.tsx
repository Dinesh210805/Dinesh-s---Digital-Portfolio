import { motion } from "framer-motion";
import { BriefcaseIcon, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "Flaunch Emerging Tech Internship",
    position: "Generative AI Intern",
    period: "Sep 2024 – Present",
    location: "Remote, India",
    description: "Developing generative AI solutions using LLMs",
    color: "from-purple-500 to-pink-500",
    technologies: ["LLMs", "NLP", "Transformers", "BERT", "Langchain"],
  },
  {
    company: "Nuevera Infotech",
    position: "Associate AI Intern",
    period: "Jul 2024 – Oct 2024",
    location: "Remote, India",
    description: "Working on AI and web development projects",
    color: "from-blue-500 to-cyan-500",
    technologies: ["Python", "Computer Vision", "ML", "AI"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-black/30 via-purple-500/5 to-black/30"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Professional Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-purple-500 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full">
                  <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-25" />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 
                            hover:border-purple-500/50 transition-all duration-300
                            hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${exp.color} 
                                  bg-opacity-20 backdrop-blur-lg`}
                    >
                      <BriefcaseIcon className="w-8 h-8" />
                    </div>

                    <div className="space-y-3 flex-grow">
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-purple-400">{exp.company}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 my-3">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
