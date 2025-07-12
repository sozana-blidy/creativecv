import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full opacity-20 animate-float-delayed-2"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">
              AI Developer
            </span>
            <br />
            <span className="text-slate-800">& Data Scientist</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Innovative data scientist with 4+ years of experience in AI and machine learning. 
            Transforming data into intelligent solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="gradient-bg text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
