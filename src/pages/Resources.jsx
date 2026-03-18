import { resources } from '../data/concepts';
import Layout from '../components/Layout';
import { Book, Youtube, Rocket, ExternalLink, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resources() {
  return (
    <Layout showSidebar={false}>
      <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
        <header className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-black uppercase tracking-widest mb-6 border border-yellow-500/20"
          >
            <GraduationCap size={14} />
            Beyond the Roadmap
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight"
          >
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A curated list of the best books, channels, and platforms to help you master JavaScript and web development.
          </motion.p>
        </header>

        <div className="space-y-32">
          {/* Books Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500">
                <Book size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white">Recommended Books</h2>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-1">Foundational Reading</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.books.map((book, i) => (
                <ResourceCard key={i} title={book.title} sub={book.author} desc={book.desc} link={book.link} color="blue" />
              ))}
            </div>
          </section>

          {/* YouTube Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-red-500/10 rounded-2xl text-red-500">
                <Youtube size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white">YouTube Channels</h2>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-1">Video Learning</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.youtube.map((channel, i) => (
                <ResourceCard key={i} title={channel.name} sub="YouTube" desc={channel.desc} link={channel.link} color="red" />
              ))}
            </div>
          </section>

          {/* Practice Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-green-500/10 rounded-2xl text-green-500">
                <Rocket size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white">Practice Platforms</h2>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-1">Interactive Challenges</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.practice.map((site, i) => (
                <ResourceCard key={i} title={site.name} sub="Platform" desc={site.desc} link={site.link} color="green" />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

function ResourceCard({ title, sub, desc, link, color }) {
  const colorMap = {
    blue: 'hover:border-blue-500/30 text-blue-500',
    red: 'hover:border-red-500/30 text-red-500',
    green: 'hover:border-green-500/30 text-green-500',
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      className={`block p-8 bg-gray-800 rounded-[2.5rem] border border-gray-700 shadow-xl transition-all ${colorMap[color]}`}
    >
      <div className="flex justify-between items-start mb-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{sub}</p>
        <ExternalLink size={18} className="opacity-40" />
      </div>
      <h3 className="text-2xl font-black text-white mb-4 leading-tight">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed font-medium">
        {desc}
      </p>
    </motion.a>
  );
}
