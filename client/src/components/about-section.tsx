import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate about leveraging artificial intelligence to solve complex problems and create meaningful impact.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900">Innovation Through Intelligence</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              As an innovative and dedicated data scientist with over 4 years of experience in AI and machine learning, 
              I specialize in dataset preprocessing, model evaluation, and deployment. My fast learning ability 
              combined with strong problem-solving and analytical thinking skills allows me to tackle complex challenges 
              in artificial intelligence.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              From developing AI-powered e-learning platforms to creating medical diagnostic systems, 
              I'm committed to using technology to make a positive difference in people's lives.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">4+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-violet-50 to-cyan-50 rounded-xl">
                <div className="text-2xl font-bold text-violet-600">15+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-cyan-600">3</div>
                <div className="text-sm text-slate-600">Languages</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="text-2xl font-bold text-amber-600">BS</div>
                <div className="text-sm text-slate-600">IT Engineering</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional workspace with modern technology setup"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-violet-600/20 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
