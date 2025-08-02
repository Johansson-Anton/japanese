import React, { useState } from 'react';
import Header from './Header';

const VocabularyQuiz = ({ onGoBack }) => {
    const [vocabScore, setVocabScore] = useState(0);
    const [vocabIndex, setVocabIndex] = useState(0);
    const [selectedVocabAnswer, setSelectedVocabAnswer] = useState(null);
    const [isVocabCorrect, setIsVocabCorrect] = useState(false);
    const [isVocabIncorrect, setIsVocabIncorrect] = useState(false);
    const vocabularyData = [
        { japanese: 'ありがとう', english: 'Thank you' },
        { japanese: 'はい', english: 'Yes' },
        { japanese: 'いいえ', english: 'No' },
        { japanese: 'おはよう', english: 'Good morning' },
        { japanese: 'こんにちは', english: 'Hello' },
        { japanese: 'おやすみ', english: 'Good night' },
    ];
    const currentVocab = vocabularyData[vocabIndex];

    const generateOptions = () => {
        const allVocab = [...vocabularyData];
        const correctOption = currentVocab.english;
        const otherOptions = allVocab
            .filter(v => v.english !== correctOption)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(v => v.english);
        const allOptions = [...otherOptions, correctOption].sort(() => 0.5 - Math.random());
        return allOptions;
    };

    const [options, setOptions] = useState(generateOptions());

    const checkAnswer = (answer) => {
        setSelectedVocabAnswer(answer);
        if (answer === currentVocab.english) {
            setIsVocabCorrect(true);
            setVocabScore(vocabScore + 1);
        } else {
            setIsVocabIncorrect(true);
        }
    };

    const nextVocab = () => {
        setIsVocabCorrect(false);
        setIsVocabIncorrect(false);
        setSelectedVocabAnswer(null);
        setVocabIndex((vocabIndex + 1) % vocabularyData.length);
        setOptions(generateOptions());
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 h-full font-['Inter']">
            <Header title="Vocabulary Quiz" onGoBack={onGoBack} />
            <div className="flex-grow flex flex-col items-center justify-center text-center w-full max-w-2xl">
                <div className="text-5xl sm:text-7xl font-bold text-blue-800 mb-8">
                    {currentVocab.japanese}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => checkAnswer(option)}
                            disabled={isVocabCorrect || isVocabIncorrect}
                            className={`p-4 rounded-xl border-2 text-lg sm:text-xl font-medium transition-all duration-300 transform hover:scale-105
                            ${selectedVocabAnswer === option && isVocabCorrect ? 'bg-green-500 text-white border-green-500' : ''}
                            ${selectedVocabAnswer === option && isVocabIncorrect ? 'bg-red-500 text-white border-red-500' : ''}
                            ${!selectedVocabAnswer ? 'bg-gray-100 border-gray-300 hover:bg-gray-200' : ''}
                            `}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {(isVocabCorrect || isVocabIncorrect) && (
                    <button
                        onClick={nextVocab}
                        className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                    >
                        Next Word
                    </button>
                )}
            </div>
        </div>
    );
};

export default VocabularyQuiz;
