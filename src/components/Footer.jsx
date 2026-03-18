import { Link } from 'react-router-dom';
import { Github, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-500 p-1.5 rounded-lg">
                <Code size={20} className="text-black" strokeWidth={3} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">JS Master</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Master JavaScript from scratch with our professional learning path. Real-world projects, interactive exercises, and a modern community-driven platform.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/learn" className="hover:text-yellow-500 transition-colors">Learning Path</Link></li>
              <li><Link to="/projects" className="hover:text-yellow-500 transition-colors">Projects</Link></li>
              <li><Link to="/reference" className="hover:text-yellow-500 transition-colors">Reference</Link></li>
              <li><Link to="/playground" className="hover:text-yellow-500 transition-colors">Playground</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Jaydeep-Gavane-3102006" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-xl text-gray-400 hover:text-yellow-500 hover:bg-gray-700 transition-all group"
              >
                <Github size={20} />
                <span className="text-sm font-bold">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 JS Master. Built with passion for developers.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
