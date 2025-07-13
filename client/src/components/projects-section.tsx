import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "EpiAI – Epilepsy Detection System",
    description: "AI-based system for epilepsy detection using EEG data with Bi-directional CNN-LSTM model and hospital dashboard for patient management.",
    period: "Oct 2024 – Present",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    categories: ["ai", "ml"],
    tags: ["Deep Learning", "EEG Analysis", "Medical AI"],
  },
  {
    id: 2,
    title: "Bright Brain – AI Educational Platform",
    description: "Interactive educational platform for children aged 2-10 with AI-generated stories, learning games, and text-to-speech narration.",
    period: "May 2025 – Present",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    categories: ["ai"],
    tags: ["React", "GPT Integration", "EdTech"],
  },
  {
    id: 3,
    title: "Self-Driving Car System",
    description: "Complete autonomous driving solution with YOLOv7 object detection for 46 types of road signs and real-time street prediction.",
    period: "Mar 2022 – Nov 2022",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    categories: ["cv", "ai"],
    tags: ["YOLO", "Computer Vision", "Real-time AI"],
  },
  {
    id: 4,
    title: "COVID-19 Detection System",
    description: "Transfer learning model achieving 99.6% accuracy in detecting COVID-19 from CT scan images using state-of-the-art pre-trained models.",
    period: "Mar 2022 – June 2022",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    categories: ["ml", "cv"],
    tags: ["Transfer Learning", "Medical AI", "99.6% Accuracy"],
  },
  {
    id: 5,
    title: "Crime Rate Prediction Model",
    description: "LSTM model for predicting crime rates and types in Chicago using time series analysis of historical crime data.",
    period: "May 2023 – June 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    categories: ["ml"],
    tags: ["LSTM", "Time Series", "Predictive Analytics"],
  },
  {
    id: 6,
    title: "Horse Detection & Tracking",
    description: "YOLOv7-based system for detecting and tracking horses during races with real-time performance analysis.",
    period: "July 2023 – Dec 2023",
    image: "https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    categories: ["cv"],
    tags: ["YOLOv7", "Object Tracking", "Sports Analytics"],
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI Development" },
  { id: "ml", label: "Machine Learning" },
  { id: "cv", label: "Computer Vision" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(project =>
    activeFilter === "all" || project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing innovative AI solutions that push the boundaries of technology and create real-world impact.
          </p>
        </motion.div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "gradient-bg text-white"
                  : "bg-white text-slate-600 hover:bg-blue-50"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{project.period}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2 group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
