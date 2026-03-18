import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, Code, X } from 'lucide-react';
import { roadmap } from '../data/concepts';

export default function Navbar({ onMenuClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const allLessons = roadmap.flatMap(r => r.lessons);
      const results = allLessons.filter(l => 
        l.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSelectResult = (id) => {
    setSearchQuery('');
    setSearchResults([]);
    navigate(`/lesson/${id}`);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button 
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-800"
            >
              <Menu size={20} />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-yellow-500 p-1.5 rounded-lg">
                <Code size={20} className="text-black" strokeWidth={3} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">JS Master</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search lessons..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden z-[60]">
                <div className="p-2">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleSelectResult(result.id)}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-gray-700/50 rounded-xl transition-colors flex flex-col gap-0.5"
                    >
                      <span className="font-bold text-white">{result.title}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Lesson</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link 
              to="/quiz"
              className="px-4 py-2 text-sm font-bold bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10 active:scale-95"
            >
              Take Quiz
            </Link>
            <Link 
              to="/resources"
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-yellow-500"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
