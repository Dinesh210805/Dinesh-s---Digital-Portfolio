import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mail, Linkedin, Github, Send, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 50, damping: 15, mass: 0.8 };
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, -50]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.5, 1]),
    springConfig
  );

  const contactCardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formState.name}`;
    const body = `${formState.message}\n\nFrom: ${formState.email}`;
    window.location.href = `mailto:dinesh210805@gmail.com?subject=${subject}&body=${body}`;
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{ opacity }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20" />

      <motion.div
        style={{ y }}
        className="max-w-6xl mx-auto px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out through any of the channels below or fill out the contact form.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6 text-blue-400" />,
                title: "Email",
                content: "dinesh210805@gmail.com",
                href: "mailto:dinesh210805@gmail.com",
                bgColor: "blue",
              },
              {
                icon: <Phone className="w-6 h-6 text-green-400" />,
                title: "Phone",
                content: "+91 9943125323",
                href: "tel:+919943125323",
                bgColor: "green",
              },
              {
                icon: <MapPin className="w-6 h-6 text-purple-400" />,
                title: "Location",
                content: "Puducherry, India",
                bgColor: "purple",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                variants={contactCardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 bg-white/5 rounded-lg 
                           hover:bg-white/10 transition-all duration-300 block`}
              >
                <div className={`p-3 bg-${item.bgColor}-500/20 rounded-full`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.content}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              variants={contactCardVariants}
              initial="hidden"
              whileInView="visible"
              className="pt-6"
            >
              <h3 className="text-xl font-semibold mb-4">Social Profiles</h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Github size={24} />,
                    href: "https://github.com/Dinesh210805",
                  },
                  {
                    icon: <Linkedin size={24} />,
                    href: "https://linkedin.com/in/dinesh-kumar-c-93a38129b",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            variants={contactCardVariants}
            initial="hidden"
            whileInView="visible"
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10
                     hover:border-purple-500/50 transition-all duration-500"
          >
            {[
              {
                label: "Name",
                type: "text",
                value: formState.name,
                key: "name",
              },
              {
                label: "Email",
                type: "email",
                value: formState.email,
                key: "email",
              },
            ].map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <label className="block text-sm font-medium mb-2">
                  {field.label}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type={field.type}
                  value={field.value}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      [field.key]: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                           transition-all duration-300"
                  required
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                value={formState.message}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, message: e.target.value }))
                }
                rows={4}
                className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                         transition-all duration-300"
                required
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                       rounded-lg font-semibold flex items-center justify-center gap-2 
                       hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Send Message
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
