import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "AI Developer",
    company: "Al-joud Company",
    project: "Avocado Platform",
    period: "Feb 2025 – Present",
    description: "Developing Avocado Platform - an AI-powered e-learning platform with text-to-speech and avatar narration features for enhanced online education.",
    color: "blue",
  },
  {
    id: 2,
    title: "AI Developer",
    company: "Davinda Company",
    project: "CV Assessments",
    period: "Oct 2024 – Dec 2024",
    description: "Developed AI model for CV review and summarization with recommendation engine. Created virtual interview platform for job preparation.",
    color: "violet",
  },
  {
    id: 3,
    title: "AI Developer",
    company: "Al-Joud Company",
    project: "HR Consulting",
    period: "Mar 2024 – Sep 2024",
    description: "Built AI-powered HR consulting website with competency assessments, skill evaluations, and development plans using Django and SQL.",
    color: "cyan",
  },
  {
    id: 4,
    title: "Data Science Specialist",
    company: "Freelancing",
    project: "Multiple Projects",
    period: "Sept 2021 – Present",
    description: "Multiple projects including brain stroke detection, drug-target interaction analysis, food forecasting, and deepfake detection systems.",
    color: "amber",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A journey through innovative AI development roles and impactful projects.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-violet-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 pr-8 text-right">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                        <div className={`text-sm text-${experience.color}-600 font-semibold mb-1`}>
                          {experience.period}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{experience.title}</h3>
                        <div className="text-lg text-slate-700 mb-2">{experience.company}</div>
                        <p className="text-slate-600">{experience.description}</p>
                      </div>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${experience.color}-600 rounded-full border-4 border-white shadow-lg`}></div>
                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 pr-8"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${experience.color}-600 rounded-full border-4 border-white shadow-lg`}></div>
                    <div className="flex-1 pl-8">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                        <div className={`text-sm text-${experience.color}-600 font-semibold mb-1`}>
                          {experience.period}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{experience.title}</h3>
                        <div className="text-lg text-slate-700 mb-2">{experience.company}</div>
                        <p className="text-slate-600">{experience.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
