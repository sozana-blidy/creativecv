import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">
            Sozana Blidy
          </div>
          <p className="text-slate-400 mb-6">AI Developer & Data Scientist</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-slate-500">
            <p>&copy; 2025 Sozana Blidy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
