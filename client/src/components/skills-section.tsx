import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Brain, Database, Code, Server, Cpu, Zap } from "lucide-react";

const skills = [
  { name: "Python & Machine Learning", level: 90, color: "from-blue-600 to-violet-600" },
  { name: "Deep Learning (TensorFlow, Keras)", level: 90, color: "from-violet-600 to-cyan-600" },
  { name: "Computer Vision", level: 88, color: "from-cyan-600 to-blue-600" },
  { name: "Natural Language Processing", level: 80, color: "from-blue-600 to-violet-600" },
  { name: "Django & Web Development", level: 82, color: "from-violet-600 to-cyan-600" },
  { name: "SQL & Database Management", level: 80, color: "from-cyan-600 to-blue-600" },
];

const technologies = [
  { name: "TensorFlow", icon: Brain, color: "text-blue-600" },
  { name: "Keras", icon: Cpu, color: "text-violet-600" },
  { name: "Scikit-learn", icon: Zap, color: "text-cyan-600" },
  { name: "Python", icon: Code, color: "text-amber-600" },
  { name: "SQL", icon: Database, color: "text-green-600" },
  { name: "Django", icon: Server, color: "text-indigo-600" },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Spanish", level: "Beginner" },
  { name: "Turkish", level: "Beginner" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across the AI and data science technology stack.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Core Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <span className="text-slate-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Technology Stack</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className={`w-8 h-8 ${tech.color} mx-auto mb-2`} />
                    <div className="text-sm font-medium text-slate-700">{tech.name}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Languages</h4>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-slate-700">{language.name}</span>
                    <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {language.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
