import { reference } from '../data/concepts';
import Layout from '../components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BookOpen, Search, Code, Layers, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Reference() {
  return (
    <Layout>
      <div className="py-12 max-w-5xl mx-auto">
        <header className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-black uppercase tracking-widest rounded-full mb-4 border border-yellow-500/20">
            <BookOpen size={14} />
            Quick Reference
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">JavaScript Reference</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Quickly find syntax snippets and method descriptions. Your pocket guide to the JS world.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Reference Content */}
          <div className="lg:col-span-2 space-y-16">
            <section id="syntax">
              <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
                <Code size={28} className="text-yellow-500" />
                Common Syntax
              </h2>
              <div className="space-y-6">
                {reference.syntax.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gray-800 rounded-3xl border border-gray-700 shadow-xl"
                  >
                    <h4 className="text-lg font-black text-white mb-4">{item.name}</h4>
                    <div className="rounded-xl overflow-hidden border border-gray-800">
                      <SyntaxHighlighter 
                        language="javascript" 
                        style={atomDark}
                        customStyle={{
                          margin: 0,
                          padding: '1.25rem',
                          fontSize: '0.85rem',
                        }}
                      >
                        {item.snippet}
                      </SyntaxHighlighter>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="array-methods">
              <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
                <Layers size={28} className="text-yellow-500" />
                Array Methods
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reference.arrayMethods.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gray-800 rounded-3xl border border-gray-700 shadow-lg hover:shadow-xl hover:border-yellow-500/30 transition-all"
                  >
                    <h4 className="text-lg font-black text-yellow-500 mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="string-methods">
              <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
                <BookOpen size={28} className="text-yellow-500" />
                String Methods
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reference.stringMethods.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gray-800 rounded-3xl border border-gray-700 shadow-lg hover:shadow-xl hover:border-yellow-500/30 transition-all"
                  >
                    <h4 className="text-lg font-black text-yellow-500 mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white overflow-hidden relative border border-gray-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full" />
                <h3 className="text-xl font-black mb-6 relative z-10 uppercase tracking-widest text-yellow-500">Jump to Section</h3>
                <nav className="space-y-4 relative z-10">
                  <a href="#syntax" className="flex items-center gap-3 text-sm font-black text-gray-400 hover:text-white transition-all group">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition-all" />
                    Common Syntax
                  </a>
                  <a href="#array-methods" className="flex items-center gap-3 text-sm font-black text-gray-400 hover:text-white transition-all group">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition-all" />
                    Array Methods
                  </a>
                  <a href="#string-methods" className="flex items-center gap-3 text-sm font-black text-gray-400 hover:text-white transition-all group">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition-all" />
                    String Methods
                  </a>
                </nav>
              </div>

              <div className="p-8 bg-gray-800 rounded-[2.5rem] border border-gray-700 shadow-xl">
                 <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest text-yellow-500">Pro Reference</h3>
                 <p className="text-sm text-gray-400 mb-8 leading-relaxed">Need the official documentation? Visit MDN Web Docs.</p>
                 <a 
                   href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
                   target="_blank"
                   className="w-full py-4 bg-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-black transition-all"
                 >
                   MDN Web Docs
                   <GraduationCap size={16} />
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
