import React, { useState } from 'react';
import { ChevronLeft, Gamepad2 , BookOpen, Mic, Layers2, BadgeJapaneseYen } from 'lucide-react';
import HiraganaKatakanaPage from './components/HiraganaKatakanaPage';
import KanjiFlashcards from './components/KanjiFlashcards';
import KanjiOverview from './components/KanjiOverview';
import VocabularyQuiz from './components/VocabularyQuiz';
import PachinkoGame from './components/PachinkoGame';

// A simple placeholder component for the Kanji icon since Lucide does not have one
const Kanji = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l-6 10h12l-6 10" />
    <path d="M6 12l-4 4h16l-4-4" />
    <path d="M8 8l8 8" />
  </svg>
);

// A simple placeholder for a topic card, to maintain the application structure
const TopicCard = ({ title, description, icon, onClick, color, shadow }) => (
  <button
    className={`p-6 rounded-2xl border-2 ${color} ${shadow} flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-200 outline-none focus:ring-4 focus:ring-opacity-50`}
    onClick={onClick}
    aria-label={title}
  >
    {icon}
    <h3 className="text-xl font-bold mt-4 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
  </button>
);

const App = () => {
  // State to manage which page is currently displayed
  const [currentPage, setCurrentPage] = useState('home');

  const HomePage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-12 bg-gray-50">
      <div className="text-center mb-12 fade-in">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-800 mb-4">
          日本語を学びましょう!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Choose a topic to begin your learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
        <TopicCard
          title="Hiragana & Katakana"
          description="View and learn the two Japanese syllabaries."
          icon={<Mic className="w-12 h-12" />}
          onClick={() => setCurrentPage('hiragana-katakana')}
          color="bg-gray-100 border-gray-200 hover:bg-gray-200"
          shadow="shadow-gray-200"
        />
		<TopicCard
          title="Kanji Overview"
          description="Learn the readings and meanings of basic Kanji characters."
          icon={<BadgeJapaneseYen className="w-12 h-12" />}
          onClick={() => setCurrentPage('KanjiOverview')}
          color="bg-gray-100 border-gray-200 hover:bg-gray-200"
          shadow="shadow-gray-200"
        />
        <TopicCard
          title="Kanji Flashcards"
          description="practice Kanji characters."
          icon={<Layers2 className="w-12 h-12" />}
          onClick={() => setCurrentPage('KanjiFlashcards')}
          color="bg-gray-100 border-gray-200 hover:bg-gray-200"
          shadow="shadow-gray-200"
        />
        <TopicCard
          title="Vocabulary Quiz"
          description="Expand your vocabulary with common Japanese words."
          icon={<BookOpen className="w-12 h-12" />}
          onClick={() => setCurrentPage('vocabulary')}
          color="bg-gray-100 border-gray-200 hover:bg-gray-200"
          shadow="shadow-gray-200"
        />
        <TopicCard
          title="Pachinko Game"
          description="Relax and play a fun pachinko-style game."
          icon={<Gamepad2 className="w-12 h-12" />}
          onClick={() => setCurrentPage('pachinko')}
          color="bg-gray-100 border-gray-200 hover:bg-gray-200"
          shadow="shadow-gray-200"
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
	  case 'KanjiOverview':
        return <KanjiOverview onGoBack={() => setCurrentPage('home')} />;
      case 'KanjiFlashcards':
        return <KanjiFlashcards onGoBack={() => setCurrentPage('home')} />;
      case 'vocabulary':
        return <VocabularyQuiz onGoBack={() => setCurrentPage('home')} />;
      case 'pachinko':
        return <PachinkoGame onGoBack={() => setCurrentPage('home')} />;
      default:
        return <HomePage />;
    }
  };

  return <div className="app">{renderPage()}</div>;
};

export default App;
