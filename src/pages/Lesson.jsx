import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { roadmap } from '../data/concepts';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb,
  BookOpen,
  Code,
  Zap,
  Sparkles
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [output, setOutput] = useState('');
  const [quizState, setQuizState] = useState({ selected: null, submitted: false, isCorrect: false });
  const [allLessons, setAllLessons] = useState([]);

  useEffect(() => {
    const flatLessons = roadmap.flatMap(r => r.lessons);
    setAllLessons(flatLessons);
    const current = flatLessons.find(l => l.id === lessonId);
    if (current) {
      setLesson(current);
      setOutput('');
      setQuizState({ selected: null, submitted: false, isCorrect: false });
    }
  }, [lessonId]);

  if (!lesson) return <div>Loading...</div>;

  const currentIdx = allLessons.findIndex(l => l.id === lessonId);
  const prevLesson = allLessons[currentIdx - 1];
  const nextLesson = allLessons[currentIdx + 1];

  const runCode = () => {
    setOutput('Running code...');
    setTimeout(() => {
      setOutput('Check your browser console (F12) to see the actual execution!');
      console.log('--- Executing Example: ' + lesson.title + ' ---');
      console.log(lesson.example);
      console.log('-------------------------');
    }, 500);
  };

  const handleQuizSubmit = () => {
    const isCorrect = quizState.selected === lesson.quiz.answer;
    setQuizState(prev => ({ ...prev, submitted: true, isCorrect }));
  };

  return (
    <Layout>
      <div className="py-6 sm:py-10 max-w-4xl mx-auto px-4">
        {/* Lesson Header */}
        <header className="mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase tracking-widest mb-4 bg-yellow-500/10 w-fit px-3 py-1 rounded-full border border-yellow-500/20"
          >
            Lesson {currentIdx + 1} of {allLessons.length}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            {lesson.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed space-y-6 mb-12"
          >
            {lesson.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>
        </header>

        {/* Industry Insights & Fun Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {lesson.expertInsight && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-indigo-500/5 border border-indigo-500/20 rounded-3xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors">
                <Zap size={80} />
              </div>
              <div className="flex items-center gap-3 mb-4 text-indigo-400 font-bold uppercase tracking-wider text-sm">
                <Zap size={18} fill="currentColor" />
                Industry Secret
              </div>
              <p className="text-gray-300 leading-relaxed italic relative z-10">
                "{lesson.expertInsight}"
              </p>
            </motion.div>
          )}

          {lesson.funFact && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-pink-500/5 border border-pink-500/20 rounded-3xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 text-pink-500/10 group-hover:text-pink-500/20 transition-colors">
                <Sparkles size={80} />
              </div>
              <div className="flex items-center gap-3 mb-4 text-pink-400 font-bold uppercase tracking-wider text-sm">
                <Sparkles size={18} fill="currentColor" />
                Fun Fact
              </div>
              <p className="text-gray-300 leading-relaxed italic relative z-10">
                "{lesson.funFact}"
              </p>
            </motion.div>
          )}
        </div>

        {/* Code Example & Playground */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4 text-gray-300 font-bold">
            <Code size={20} className="text-yellow-500" />
            Interactive Code Example
          </div>
          <div className="bg-[#1a1b26] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transition-all">
            <div className="flex items-center justify-between px-4 py-3 bg-[#13141c] border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-gray-500 tracking-wider uppercase">example.js</span>
                <button 
                  onClick={runCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500 hover:bg-yellow-400 text-black text-[11px] font-black rounded-lg transition-all shadow-sm active:scale-95"
                >
                  <Play size={12} fill="currentColor" />
                  RUN CODE
                </button>
              </div>
            </div>
            <div className="p-2 overflow-x-auto">
              <SyntaxHighlighter 
                language="javascript" 
                style={atomDark}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  fontSize: '0.95rem',
                  background: 'transparent',
                  lineHeight: '1.6',
                }}
              >
                {lesson.example}
              </SyntaxHighlighter>
            </div>
            <AnimatePresence>
              {output && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 py-4 bg-[#0d0e14] border-t border-gray-800 font-mono text-sm text-green-400 flex items-start gap-3"
                >
                  <span className="text-gray-600 font-bold">$</span> 
                  <div>
                    {output}
                    <button 
                      onClick={() => setOutput('')}
                      className="ml-4 text-gray-500 hover:text-white transition-colors"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Quick Quiz */}
        <div className="mb-16 p-8 bg-gray-800 rounded-3xl border border-gray-700 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Check your knowledge</h3>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 font-medium">{lesson.quiz.question}</p>
          
          <div className="space-y-3 mb-8">
            {lesson.quiz.options.map((option, idx) => (
              <button
                key={idx}
                disabled={quizState.submitted}
                onClick={() => setQuizState(prev => ({ ...prev, selected: idx }))}
                className={`
                  w-full text-left px-6 py-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group
                  ${quizState.selected === idx 
                    ? 'border-yellow-500 bg-yellow-500/5 text-yellow-500' 
                    : 'border-gray-700 hover:border-gray-600 text-gray-400'}
                  ${quizState.submitted && idx === lesson.quiz.answer ? 'border-green-500 bg-green-500/5 text-green-500' : ''}
                  ${quizState.submitted && quizState.selected === idx && idx !== lesson.quiz.answer ? 'border-red-500 bg-red-500/5 text-red-500' : ''}
                `}
              >
                <span className="font-semibold">{option}</span>
                {quizState.submitted && idx === lesson.quiz.answer && <CheckCircle2 size={20} className="text-green-500" />}
              </button>
            ))}
          </div>

          {!quizState.submitted ? (
            <button
              disabled={quizState.selected === null}
              onClick={handleQuizSubmit}
              className="w-full sm:w-auto px-8 py-4 bg-gray-700 text-white hover:bg-gray-600 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg active:scale-95"
            >
              Check Answer
            </button>
          ) : (
            <div className={`p-4 rounded-2xl font-bold text-center ${quizState.isCorrect ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
              {quizState.isCorrect ? 'Correct! Well done.' : 'Oops! Try reviewing the lesson again.'}
              <button onClick={() => setQuizState({ selected: null, submitted: false, isCorrect: false })} className="ml-4 underline text-sm">Reset Quiz</button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-800">
          <button
            onClick={() => prevLesson && navigate(`/lesson/${prevLesson.id}`)}
            disabled={!prevLesson}
            className="w-full sm:w-auto flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all text-gray-500 hover:text-white disabled:opacity-20 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest font-black text-gray-500 mb-0.5">Previous</p>
              <p className="text-sm">{prevLesson?.title || 'None'}</p>
            </div>
          </button>
          
          <button
            onClick={() => nextLesson && navigate(`/lesson/${nextLesson.id}`)}
            disabled={!nextLesson}
            className="w-full sm:w-auto flex items-center justify-end gap-3 px-6 py-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-2xl font-bold transition-all shadow-xl shadow-yellow-500/10 disabled:opacity-20 group"
          >
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest font-black text-black/40 mb-0.5">Next</p>
              <p className="text-sm">{nextLesson?.title || 'Finish Path'}</p>
            </div>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Layout>
  );
}
