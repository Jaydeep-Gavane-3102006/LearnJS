import { Link, useLocation } from 'react-router-dom';
import { roadmap } from '../data/concepts';
import { BookOpen, Layers, GraduationCap, ChevronRight, CheckCircle2, BrainCircuit } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const getIcon = (id) => {
    switch(id) {
      case 'beginner': return <BookOpen size={16} />;
      case 'intermediate': return <Layers size={16} />;
      case 'advanced': return <GraduationCap size={16} />;
      case 'expert': return <BrainCircuit size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-full lg:z-0 pt-16 lg:pt-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="h-full flex flex-col p-4 overflow-y-auto">
        <nav className="space-y-8">
          <div className="space-y-1">
             <Link 
                to="/quiz"
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm font-bold rounded-lg transition-all",
                  currentPath === '/quiz' ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20" : "text-yellow-500 hover:bg-yellow-500/10"
                )}
              >
                <BrainCircuit size={18} />
                Master JS Quiz
              </Link>
          </div>

          {roadmap.map((section) => (
            <div key={section.id}>
              <h3 className="px-3 mb-3 text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                {getIcon(section.id)}
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.lessons.map((lesson) => {
                  const path = `/lesson/${lesson.id}`;
                  const isActive = currentPath === path;
                  
                  return (
                    <li key={lesson.id}>
                      <Link
                        to={path}
                        onClick={onClose}
                        className={cn(
                          "group w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                          isActive 
                            ? "bg-yellow-500/10 text-yellow-500 shadow-sm" 
                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight 
                            size={14} 
                            className={cn("transition-transform duration-200", isActive && "rotate-90")} 
                          />
                          {lesson.title}
                        </div>
                        {/* Placeholder for progress check */}
                        <CheckCircle2 size={14} className="text-gray-700 group-hover:text-gray-600" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          
          <div className="pt-8 border-t border-gray-800">
             <Link 
                to="/projects"
                className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-800 rounded-lg"
              >
                <Layers size={18} />
                Real-world Projects
              </Link>
              <Link 
                to="/reference"
                className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-800 rounded-lg"
              >
                <BookOpen size={18} />
                Quick Reference
              </Link>
              <Link 
                to="/resources"
                className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-800 rounded-lg"
              >
                <GraduationCap size={18} />
                Learning Resources
              </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
