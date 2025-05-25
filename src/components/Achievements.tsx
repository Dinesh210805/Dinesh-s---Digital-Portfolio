import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      title: "Aventus Hackathon Winner",
      description:
        "Led a talented team to victory in the Aventus Hackathon, delivering an innovative solution that stood out among fierce competition.",
      imageUrl: "/images/aventus1.jpg",
      date: "2023",
    },
    {
      title: "0x Day - First prize",
      description:
        "Secured first place in the 0xDay coding competition by developing a cutting-edge AI solution that impressed judges with its technical sophistication.",
      imageUrl: "/images/0xday1.JPG",
      date: "2022",
    },
    {
      title: "1M1B Hackathon Finalist",
      description:
        "Advanced to the finals of the prestigious 1M1B Hackathon, showcasing a project that addressed significant real-world challenges using AI.",
      imageUrl: "/images/1m1b.png",
      date: "2022",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 relative bg-gradient-to-b from-black/30 via-purple-500/5 to-black/30"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                ease: "easeOut",
              }}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/20 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white/90">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 mb-4">{achievement.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-medium">
                    {achievement.date}
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                    Certificate
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
