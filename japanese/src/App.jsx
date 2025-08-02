import React from 'react';

// Main App component using React hooks and Tailwind CSS
function App() {
  // Function to handle the click on the non-implemented game cards
  const handleNotImplemented = (gameName) => {
    // In a full application, you might use a toast or modal here
    console.log(`${gameName} game is not yet implemented.`);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6 sm:p-12 font-sans">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-400 mb-8 sm:mb-12 text-center drop-shadow-md">
          Play Japanese Games!
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-10 text-center max-w-2xl">
          Choose a game to start playing.
        </p>
        <div id="card-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Card for Katakana/Hiragana */}
          <div
            className="p-6 bg-gray-800 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-purple-800 border-purple-500 hover:bg-purple-700 shadow-purple-201 flex flex-col justify-between"
            onClick={() => handleNotImplemented('Katakana/Hiragana')}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Katakana/Hiragana</h3>
            <p className="text-gray-400 text-center text-sm">Practice your syllabaries.</p>
          </div>

          {/* Card for Kanji */}
          <div
            className="p-6 bg-gray-800 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-emerald-800 border-emerald-500 hover:bg-emerald-700 shadow-emerald-200 flex flex-col justify-between"
            onClick={() => handleNotImplemented('Kanji')}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-emerald-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Kanji</h3>
            <p className="text-gray-400 text-center text-sm">Test your knowledge of Kanji characters.</p>
          </div>

          {/* Card for Reading Excercise */}
          <div
            className="p-6 bg-gray-800 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-amber-800 border-amber-500 hover:bg-amber-700 shadow-amber-200 flex flex-col justify-between"
            onClick={() => handleNotImplemented('Reading Exercise')}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-amber-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Reading Excercise</h3>
            <p className="text-gray-400 text-center text-sm">Improve your reading comprehension.</p>
          </div>

          {/* Card for Pachinko */}
          {/* This card is a link to the separate pachinko.html file */}
          <a
            href="/pachinko.html"
            className="p-6 bg-gray-800 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-blue-800 border-blue-500 hover:bg-blue-700 shadow-blue-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.5"></path>
                  <path d="M19 16v6"></path>
                  <path d="M22 19h-6"></path>
                  <path d="M7 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Pachinko</h3>
            <p className="text-gray-400 text-center text-sm">A fun 3D physics-based game.</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
