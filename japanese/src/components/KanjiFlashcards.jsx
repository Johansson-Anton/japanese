import React, { useState } from 'react';
import Header from './Header';

const KanjiFlashcards = ({ onGoBack }) => {
    const [kanjiIndex, setKanjiIndex] = useState(0);
    const [showKanjiAnswer, setShowKanjiAnswer] = useState(false);
    const kanjiData = [
        { kanji: '日', reading: 'に/にち', meaning: 'day/sun' },
        { kanji: '月', reading: 'つき', meaning: 'moon/month' },
        { kanji: '火', reading: 'ひ', meaning: 'fire' },
        { kanji: '水', reading: 'みず', meaning: 'water' },
        { kanji: '木', reading: 'き', meaning: 'tree/wood' },
        { kanji: '金', reading: 'かね', meaning: 'gold/money' },
        { kanji: '土', reading: 'つち', meaning: 'earth/soil' },
    ];
    const currentKanji = kanjiData[kanjiIndex];
    const toggleAnswer = () => setShowKanjiAnswer(!showKanjiAnswer);
    const nextKanji = () => {
        setShowKanjiAnswer(false);
        setKanjiIndex((kanjiIndex + 1) % kanjiData.length);
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 h-full font-['Inter']">
            <Header title="Kanji Flashcards" onGoBack={onGoBack} />
            <div className="flex-grow flex flex-col items-center justify-center text-center w-full max-w-2xl">
                <div className="relative w-full h-96 sm:h-[30rem] perspective-1000">
                    <div
                        onClick={toggleAnswer}
                        className={`absolute inset-0 w-full h-full transition-transform duration-700 rounded-3xl cursor-pointer shadow-xl
                        ${showKanjiAnswer ? 'rotate-y-180' : ''}`}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Front of the card */}
                        <div className="absolute inset-0 flex items-center justify-center bg-blue-100 rounded-3xl backface-hidden">
                            <div className="text-9xl sm:text-[12rem] font-bold text-blue-900 drop-shadow-md">
                                {currentKanji.kanji}
                            </div>
                        </div>
                        {/* Back of the card */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-500 text-white rounded-3xl rotate-y-180 backface-hidden">
                            <p className="text-3xl sm:text-5xl font-bold mb-4">{currentKanji.reading}</p>
                            <p className="text-xl sm:text-2xl">{currentKanji.meaning}</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={nextKanji}
                    className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    Next Kanji
                </button>
            </div>
        </div>
    );
};

export default KanjiFlashcards;
