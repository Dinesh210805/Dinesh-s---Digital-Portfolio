import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Layout,
  Wrench,
  MessagesSquare,
  Workflow,
} from "lucide-react";

const skills = {
  "Programming Languages": {
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "JavaScript", "Java", "C", "SQL", "HTML/CSS", "PHP"],
  },
  "Machine Learning & AI": {
    icon: <Brain className="w-6 h-6" />,
    skills: [
      "Convolutional Neural Networks",
      "YOLO Object Detection",
      "TensorFlow",
      "OpenCV",
      "Natural Language Processing",
      "Computer Vision",
    ],
  },
  "Frameworks & Libraries": {
    icon: <Layout className="w-6 h-6" />,
    skills: ["Flask", "Flutter", "Bootstrap", "Node.js"],
  },
  "Development Tools": {
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git & GitHub", "VS Code", "Android Studio", "Jupyter Notebook"],
  },
  "Soft Skills": {
    icon: <MessagesSquare className="w-6 h-6" />,
    skills: [
      "Problem Solving",
      "Team Leadership",
      "Communication",
      "Project Management",
      "Time Management",
      "Adaptability",
    ],
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and
            methodologies I've mastered throughout my journey in software
            development and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, { icon, skills }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">{icon}</div>
                <h3 className="text-xl font-bold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
