import { useState } from 'react';
import { projects } from '../data/concepts';
import Layout from '../components/Layout';
import { ExternalLink, Code, Layers, CheckCircle2, Trophy, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Layout>
      <div className="py-12 max-w-5xl mx-auto">
        <header className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-black uppercase tracking-widest rounded-full mb-4 border border-yellow-500/20">
            <Trophy size={14} />
            Build Real Stuff
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">Real-world Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Put your skills to the test with these practical projects. Each project comes with a step-by-step guide and source code.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-800 rounded-[2.5rem] border border-gray-700 shadow-xl overflow-hidden hover:shadow-2xl hover:border-yellow-500/30 transition-all"
            >
              <div className="p-8 lg:p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                    project.difficulty === 'Beginner' 
                      ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' 
                      : 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                  }`}>
                    {project.difficulty}
                  </div>
                  <div className="p-3 bg-gray-900 rounded-2xl text-yellow-500 group-hover:scale-110 transition-transform">
                    {project.id === 'todo-app' ? <Layers size={24} /> : <Code size={24} />}
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="space-y-3 mb-10">
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest">Key Features</p>
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-4 bg-gray-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-600 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    View Guide & Code
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-8 border-b border-gray-800 flex justify-between items-center bg-gray-800/50">
                  <div>
                    <h2 className="text-3xl font-black text-white tracking-tight">{selectedProject.title}</h2>
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">{selectedProject.difficulty} Project</p>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-3 bg-gray-800 rounded-2xl text-gray-400 hover:text-white shadow-sm border border-gray-700 transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-12">
                  {/* Guide Section */}
                  <section>
                    <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                      <Layers size={24} className="text-yellow-500" />
                      Step-by-Step Guide
                    </h3>
                    <div className="text-gray-400 leading-relaxed space-y-4 whitespace-pre-wrap font-medium bg-gray-800/50 p-8 rounded-3xl border border-gray-800">
                      {selectedProject.guide}
                    </div>
                  </section>

                  {/* Code Section */}
                  <section>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-black text-white flex items-center gap-3">
                        <Code size={24} className="text-yellow-500" />
                        Source Code
                      </h3>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                      <div className="bg-[#13141c] px-6 py-3 border-b border-gray-800 flex justify-between items-center">
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">script.js</span>
                        <Play size={12} className="text-gray-600" />
                      </div>
                      <SyntaxHighlighter 
                        language="javascript" 
                        style={atomDark}
                        customStyle={{
                          margin: 0,
                          padding: '2rem',
                          fontSize: '0.9rem',
                          lineHeight: '1.7',
                        }}
                      >
                        {selectedProject.code}
                      </SyntaxHighlighter>
                    </div>
                  </section>
                </div>

                {/* Modal Footer */}
                <div className="p-8 border-t border-gray-800 bg-gray-800/50 text-center">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-10 py-4 bg-gray-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-600 transition-all shadow-lg active:scale-95"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}

function ArrowRight({ size, className }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
