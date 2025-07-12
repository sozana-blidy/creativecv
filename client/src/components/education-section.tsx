import { motion } from "framer-motion";
import { GraduationCap, Trophy, Users, FileText, Languages } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "AI Mentor - Ada Lovelace Hackathon",
    description: "Mentored teenagers in Teens in AI event, October 2021",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Skills and Career Center Volunteer",
    description: "IT team member, Mar 2020 – Sep 2022",
    color: "text-violet-600",
  },
  {
    icon: FileText,
    title: "Research Publications",
    description: "Establishing scientific research and publishing in international journals",
    color: "text-cyan-600",
  },
  {
    icon: Languages,
    title: "Translation & Design Services",
    description: "Freelance translation and PowerPoint presentation creation",
    color: "text-amber-600",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Education & Achievements</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strong academic foundation in technology and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Bachelor of Information Technology Engineering</h3>
                  <p className="text-slate-600">Tishreen University, Latakia, Syria</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-medium">Duration:</span>
                  <span className="text-slate-600">Oct 2017 – Sep 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-medium">GPA:</span>
                  <span className="text-slate-600">79%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-medium">Major:</span>
                  <span className="text-slate-600">Artificial Intelligence</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-medium">Thesis Grade:</span>
                  <span className="text-green-600 font-semibold">95%</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-xl">
                <h4 className="font-semibold text-slate-900 mb-2">Thesis Project</h4>
                <p className="text-slate-600">Convert text-to-image using generative adversarial networks (GANs)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900">Key Achievements</h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${achievement.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{achievement.title}</h4>
                      <p className="text-slate-600">{achievement.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
