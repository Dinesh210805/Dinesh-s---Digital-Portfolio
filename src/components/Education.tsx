import { motion } from "framer-motion";
import { Calendar, MapPin, Award, GraduationCap } from "lucide-react";

const education = [
  {
    school: "Sri Manakula Vinayagar Engineering College",
    logo: "/images/smvec logo.png",
    degree: "Bachelor of Technology in Information Technology",
    period: "2022 – 2026",
    semester: "Semester 6",
    location: "Puducherry, India",
    grade: "CGPA: 8.87",
  },
  {
    school: "Amalorpavam Higher Secondary School",
    logo: "/images/amalorpavamlogo.png",
    degree: "Higher Secondary Education",
    period: "2021 – 2022",
    location: "Puducherry, India",
    grade: "Percentage: 91.83%",
  },
  {
    school: "Amalorpavam Higher Secondary School",
    logo: "/images/amalorpavamlogo.png",
    degree: "High School",
    period: "2019 – 2020",
    location: "Puducherry, India",
    grade: "Percentage: 86.2%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-black/30 via-purple-500/5 to-black/30"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Educational Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-purple-500 to-transparent" />

          {education.map((edu, index) => (
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
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/5 p-2 flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {edu.school}
                      </h3>
                      <p className="text-purple-400">{edu.degree}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        {edu.semester && (
                          <span className="flex items-center gap-1 text-blue-400">
                            <GraduationCap className="w-4 h-4" />
                            {edu.semester}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span className="text-emerald-400">{edu.grade}</span>
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

export default Education;
