import React, { useState } from 'react';
import Header from './Header';
import { jlptKanjiData } from './kanjiData'; // assuming you save the data in a file named kanjiData.js

const KanjiOverview = ({ onGoBack }) => {
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedKanji, setSelectedKanji] = useState(null);

    // This component renders the initial view of JLPT levels
    const KanjiLevelOverview = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {Object.keys(jlptKanjiData).map(level => (
                <div 
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className="flex flex-col items-center justify-center p-8 bg-blue-100 rounded-2xl shadow-lg cursor-pointer hover:bg-blue-200 transition-colors"
                >
                    <h2 className="text-5xl font-bold text-blue-800">JLPT {level.toUpperCase()}</h2>
                    <p className="mt-2 text-xl text-blue-600">
                        {jlptKanjiData[level].length} Kanji
                    </p>
                </div>
            ))}
        </div>
    );

    // This component renders a grid of kanji for a specific level
    const KanjiGrid = ({ level }) => {
        const kanjiList = jlptKanjiData[level];
        
        return (
            <div className="flex flex-col items-center justify-center w-full p-6">
                <button 
                    onClick={() => { setSelectedLevel(null); setSelectedKanji(null); }} 
                    className="mb-4 text-blue-600 hover:text-blue-800 self-start"
                >
                    ← Back to Levels
                </button>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">JLPT {level.toUpperCase()} Kanji</h2>
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 w-full">
                    {kanjiList.map((kanji, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedKanji(kanji)}
                            className="flex items-center justify-center p-2 bg-blue-100 rounded-lg shadow-md cursor-pointer aspect-square hover:bg-blue-200 transition-colors"
                        >
                            <span className="text-4xl sm:text-5xl font-bold text-blue-900">
                                {kanji.kanji}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // This component displays detailed information about a single kanji
    const KanjiDetails = ({ kanji }) => {
        return (
            <div className="flex flex-col items-center justify-center w-full p-6 text-center">
                <button 
                    onClick={() => setSelectedKanji(null)} 
                    className="mb-4 text-blue-600 hover:text-blue-800 self-start"
                >
                    ← Back to Kanji Grid
                </button>
                <div className="bg-blue-100 p-8 rounded-2xl shadow-lg w-full max-w-lg">
                    <div className="text-9xl sm:text-[12rem] font-bold text-blue-900 drop-shadow-md">
                        {kanji.kanji}
                    </div>
                    <p className="mt-4 text-3xl sm:text-4xl font-bold text-blue-700">
                        Reading: {kanji.reading}
                    </p>
                    <p className="mt-2 text-xl sm:text-2xl text-blue-600">
                        Meaning: {kanji.meaning}
                    </p>
                    <div className="mt-6 text-left">
                        <h3 className="text-lg font-semibold text-blue-800">Example Words:</h3>
                        <ul className="list-disc list-inside mt-2 text-blue-600">
                            {kanji.exampleWords.map((word, index) => (
                                <li key={index}>{word}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

    // Render logic based on the state
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 font-['Inter']">
            <Header title="Kanji Guide" onGoBack={onGoBack} />
            <div className="flex-grow flex flex-col items-center justify-center w-full">
                {!selectedLevel && <KanjiLevelOverview />}
                {selectedLevel && !selectedKanji && <KanjiGrid level={selectedLevel} />}
                {selectedKanji && <KanjiDetails kanji={selectedKanji} />}
            </div>
        </div>
    );
};

export default KanjiOverview;