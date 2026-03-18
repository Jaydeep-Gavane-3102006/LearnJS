import { useState, useEffect } from 'react';
import { quizzes } from '../data/quizzes';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  BrainCircuit, 
  Flame, 
  GraduationCap, 
  Zap,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Start a quiz in a specific category
  const startQuiz = (category) => {
    setSelectedCategory(category);
    // Shuffle and pick 10-15 questions or take all if fewer
    const questions = [...category.questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(questions);
    setCurrentQuestionIdx(0);
    setScore(0);
    setIsFinished(false);
    setUserAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswer = (idx) => {
    if (userAnswer !== null) return;
    
    setUserAnswer(idx);
    const isCorrect = idx === shuffledQuestions[currentQuestionIdx].answer;
    if (isCorrect) setScore(prev => prev + 1);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < shuffledQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setUserAnswer(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setShuffledQuestions([]);
  };

  // Category Selection View
  if (!selectedCategory) {
    return (
      <Layout>
        <div className="py-10 max-w-6xl mx-auto px-4">
          <header className="mb-12 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight"
            >
              Master JS <span className="text-yellow-500">Quizzes</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Challenge yourself with 300+ hand-crafted questions from basics to advanced patterns.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizzes.map((cat, idx) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => startQuiz(cat)}
                className="group relative bg-gray-800/50 border border-gray-700 p-8 rounded-[2rem] text-left hover:border-yellow-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  {cat.id === 'basic' && <BrainCircuit size={120} />}
                  {cat.id === 'intermediate' && <Zap size={120} />}
                  {cat.id === 'advanced' && <GraduationCap size={120} />}
                  {cat.id === 'tricky' && <Flame size={120} />}
                </div>
                
                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                    cat.id === 'basic' && "bg-blue-500/20 text-blue-400",
                    cat.id === 'intermediate' && "bg-yellow-500/20 text-yellow-400",
                    cat.id === 'advanced' && "bg-purple-500/20 text-purple-400",
                    cat.id === 'tricky' && "bg-red-500/20 text-red-400"
                  )}>
                    {cat.id === 'basic' && <BrainCircuit size={24} />}
                    {cat.id === 'intermediate' && <Zap size={24} />}
                    {cat.id === 'advanced' && <GraduationCap size={24} />}
                    {cat.id === 'tricky' && <Flame size={24} />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-gray-400 mb-6">{cat.description}</p>
                  <div className="flex items-center gap-2 text-sm font-bold text-yellow-500">
                    START QUIZ <ChevronRight size={16} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  // Quiz Finished View
  if (isFinished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    return (
      <Layout>
        <div className="py-20 max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 border border-gray-700 rounded-[3rem] p-12 shadow-2xl"
          >
            <div className="w-24 h-24 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Trophy size={48} />
            </div>
            <h2 className="text-4xl font-black text-white mb-2">Quiz Completed!</h2>
            <p className="text-gray-400 mb-10">You've mastered the {selectedCategory.title} section.</p>
            
            <div className="flex justify-center gap-12 mb-12">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Score</p>
                <p className="text-5xl font-black text-white">{score}/{shuffledQuestions.length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Percentage</p>
                <p className="text-5xl font-black text-yellow-500">{percentage}%</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => startQuiz(selectedCategory)}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-2xl font-black transition-all"
              >
                <RotateCcw size={20} /> RETRY QUIZ
              </button>
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-2xl font-black transition-all"
              >
                CHOOSE CATEGORY
              </button>
            </div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  // Active Quiz View
  const currentQ = shuffledQuestions[currentQuestionIdx];
  return (
    <Layout>
      <div className="py-10 max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={resetQuiz}
            className="flex items-center gap-2 text-gray-500 hover:text-white font-bold transition-colors"
          >
            <ArrowLeft size={18} /> EXIT
          </button>
          <div className="text-gray-500 font-bold tracking-widest text-xs uppercase bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
            Question {currentQuestionIdx + 1} of {shuffledQuestions.length}
          </div>
          <div className="text-yellow-500 font-bold">
            Score: {score}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-800 rounded-full mb-12 overflow-hidden border border-gray-700">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIdx + 1) / shuffledQuestions.length) * 100}%` }}
            className="h-full bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {currentQ.question}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {currentQ.options.map((option, idx) => {
                const isSelected = userAnswer === idx;
                const isCorrect = idx === currentQ.answer;
                const showCorrect = showExplanation && isCorrect;
                const showWrong = showExplanation && isSelected && !isCorrect;

                return (
                  <button
                    key={idx}
                    disabled={userAnswer !== null}
                    onClick={() => handleAnswer(idx)}
                    className={cn(
                      "group w-full text-left p-6 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden",
                      userAnswer === null 
                        ? "border-gray-800 bg-gray-800/30 hover:border-yellow-500/50 hover:bg-gray-800/50" 
                        : isCorrect 
                          ? "border-green-500/50 bg-green-500/5 text-green-400" 
                          : isSelected 
                            ? "border-red-500/50 bg-red-500/5 text-red-400"
                            : "border-gray-800 opacity-40"
                    )}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-lg font-bold">{option}</span>
                      {showCorrect && <CheckCircle2 size={24} className="text-green-500" />}
                      {showWrong && <XCircle size={24} className="text-red-500" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-500/5 border border-blue-500/20 p-8 rounded-3xl"
                >
                  <div className="flex items-center gap-3 text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">
                    <BrainCircuit size={16} /> Explanation
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">
                    {currentQ.explanation}
                  </p>
                  <button
                    onClick={nextQuestion}
                    className="mt-8 w-full sm:w-auto px-10 py-4 bg-white text-black rounded-2xl font-black hover:bg-yellow-500 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
                  >
                    {currentQuestionIdx === shuffledQuestions.length - 1 ? 'FINISH QUIZ' : 'NEXT QUESTION'}
                    <ChevronRight size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}

// Utility function for classes
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
