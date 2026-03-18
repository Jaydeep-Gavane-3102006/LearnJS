import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Projects from './pages/Projects';
import Reference from './pages/Reference';
import Resources from './pages/Resources';
import Quiz from './pages/Quiz';
import Terms from './pages/Terms';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Navigate to="/lesson/what-is-js" replace />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/terms" element={<Terms />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
