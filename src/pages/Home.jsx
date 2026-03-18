import { Link } from 'react-router-dom';
import { roadmap } from '../data/concepts';
import { ArrowRight, BookOpen, Code, Layers, GraduationCap, Zap, Globe, Cpu } from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Home() {
  const getIcon = (id) => {
    switch(id) {
      case 'beginner': return <BookOpen className="text-blue-500" size={24} />;
      case 'intermediate': return <Layers className="text-purple-500" size={24} />;
      case 'advanced': return <GraduationCap className="text-orange-500" size={24} />;
      default: return <BookOpen size={24} />;
    }
  };

  return (
    <Layout showSidebar={false}>
      <div className="py-12 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-bold border border-yellow-500/20 mb-8"
          >
            <Zap size={14} strokeWidth={3} />
            The Ultimate JS Learning Experience
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight"
          >
            Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">JavaScript</span> <br className="hidden md:block" />
            from Zero to Hero
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Master the most popular programming language in the world. From basics to advanced concepts, projects, and real-world tools.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/lesson/what-is-js"
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105 transition-all"
            >
              Start Learning Now
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/projects"
              className="px-8 py-4 bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-full font-bold text-lg text-white flex items-center justify-center gap-2 transition-all"
            >
              Explore Projects
              <Code size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Learning Roadmap Overview */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">A Comprehensive Roadmap</h2>
            <p className="text-gray-400">Everything you need to become a pro JS developer.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmap.map((section, index) => (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-gray-800 rounded-3xl border border-gray-700 shadow-xl hover:shadow-2xl hover:border-yellow-500/30 transition-all"
              >
                <div className="mb-6 p-3 bg-gray-900 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {getIcon(section.id)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">{section.description}</p>
                <ul className="space-y-3 mb-8">
                  {section.lessons.slice(0, 3).map((lesson) => (
                    <li key={lesson.id} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      {lesson.title}
                    </li>
                  ))}
                  {section.lessons.length > 3 && (
                    <li className="text-xs text-yellow-500 font-bold">+ {section.lessons.length - 3} more lessons</li>
                  )}
                </ul>
                <Link 
                  to={`/lesson/${section.lessons[0].id}`}
                  className="w-full py-3 px-6 bg-gray-900 hover:bg-yellow-500 text-gray-300 hover:text-black rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  Explore Section
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 tracking-tight">Why Master JavaScript?</h2>
            <div className="space-y-8">
              {[
                { icon: <Globe />, title: "The Web's Language", desc: "98% of all websites use JavaScript. It's the undisputed king of web development." },
                { icon: <Cpu />, title: "Infinite Possibilities", desc: "Build web apps, mobile apps, server-side tools, and even desktop software." },
                { icon: <Zap />, title: "High Demand", desc: "JS developers are consistently among the most sought-after in the industry." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 p-4 bg-yellow-500/10 rounded-2xl text-yellow-500">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl opacity-10 blur-3xl absolute inset-0 -rotate-6" />
            <div className="relative bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
               <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
               </div>
               <div className="space-y-4 font-mono text-sm">
                  <p className="text-blue-500">const <span className="text-yellow-600">future</span> = <span className="text-purple-500">new</span> <span className="text-green-600">Career</span>();</p>
                  <p className="text-gray-400">future.<span className="text-blue-400">addSkill</span>(<span className="text-orange-400">'JavaScript'</span>);</p>
                  <p className="text-gray-400">future.<span className="text-blue-400">isHirable</span>() <span className="text-gray-500">// true</span></p>
                  <p className="text-gray-400">future.<span className="text-blue-400">success</span>() <span className="text-gray-500">// 100%</span></p>
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-800 rounded-[3rem] p-12 lg:p-24 text-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 tracking-tight">Ready to start your journey?</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">Join thousands of students and start mastering JavaScript today. No experience required.</p>
            <Link 
              to="/learn"
              className="inline-flex items-center gap-2 px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full font-bold text-xl transition-all shadow-xl shadow-yellow-500/10 hover:scale-105"
            >
              Get Started for Free
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
