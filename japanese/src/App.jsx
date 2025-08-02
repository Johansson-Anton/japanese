import React, { useState } from 'react';
import { ChevronLeft, GraduationCap, BookOpen, Mic } from 'lucide-react';
import HiraganaKatakanaPage from './components/HiraganaKatakanaPage';
import KanjiFlashcards from './components/KanjiFlashcards';
import VocabularyQuiz from './components/VocabularyQuiz';
import PachinkoGame from './components/PachinkoGame';

// Custom Kanji icon as an inline SVG
const Kanji = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 17H2L12 2L22 17Z" />
    <path d="M12 22L12 2" />
  </svg>
);

const TopicCard = ({ title, description, icon, onClick, color, shadow }) => (
    <div
      className={`p-6 bg-white rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${color} ${shadow} flex flex-col justify-between`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center mb-4">
        <div className={`p-4 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center font-['Inter']">{title}</h3>
      <p className="text-gray-600 text-center text-sm font-['Inter']">{description}</p>
    </div>
);

// Main component for the Japanese learning website
const App = () => {
  // State to manage which page is currently displayed
  const [currentPage, setCurrentPage] = useState('home');

  const HomePage = () => (
    <div className="flex flex-col items-center justify-center p-6 sm:p-12 h-full">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-900 mb-8 sm:mb-12 text-center drop-shadow-md font-['Inter']">
        日本語を学びましょう!
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-10 text-center max-w-2xl font-['Inter']">
        Choose a topic to begin your learning journey.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <TopicCard
          title="Hiragana & Katakana"
          description="View and learn the two Japanese syllabaries."
          icon={<Mic className="w-12 h-12" />}
          onClick={() => setCurrentPage('hiragana-katakana')}
          color="bg-purple-100 border-purple-500 hover:bg-purple-200"
          shadow="shadow-purple-200"
        />
        <TopicCard
          title="Kanji Flashcards"
          description="Learn the readings and meanings of basic Kanji characters."
          icon={<Kanji className="w-12 h-12" />}
          onClick={() => setCurrentPage('kanji')}
          color="bg-emerald-100 border-emerald-500 hover:bg-emerald-200"
          shadow="shadow-emerald-200"
        />
        <TopicCard
          title="Vocabulary Quiz"
          description="Expand your vocabulary with common Japanese words."
          icon={<BookOpen className="w-12 h-12" />}
          onClick={() => setCurrentPage('vocabulary')}
          color="bg-amber-100 border-amber-500 hover:bg-amber-200"
          shadow="shadow-amber-200"
        />
        <TopicCard
          title="Pachinko Game"
          description="Relax and play a fun pachinko-style game."
          icon={<GraduationCap className="w-12 h-12" />}
          onClick={() => setCurrentPage('pachinko')}
          color="bg-indigo-100 border-indigo-500 hover:bg-indigo-200"
          shadow="shadow-indigo-200"
        />
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'hiragana-katakana':
        return <HiraganaKatakanaPage onGoBack={() => setCurrentPage('home')} />;
      case 'kanji':
        return <KanjiFlashcards onGoBack={() => setCurrentPage('home')} />;
      case 'vocabulary':
        return <VocabularyQuiz onGoBack={() => setCurrentPage('home')} />;
      case 'pachinko':
        return <PachinkoGame onGoBack={() => setCurrentPage('home')} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-['Inter']">
      {renderPage()}
    </div>
  );
};

export default App;
