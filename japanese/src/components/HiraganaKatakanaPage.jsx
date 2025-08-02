import React from 'react';
import Header from './Header';

// Hardcoded data for all Hiragana and Katakana characters
const hiraganaCharacters = [
    'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り',
    'る', 'れ', 'ろ', 'わ', 'を', 'ん', 'が', 'ぎ', 'ぐ', 'げ',
    'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で',
    'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ',
    'ぽ', 'ゃ', 'ゅ', 'ょ', 'っ'
];

const katakanaCharacters = [
    'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ',
    'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン', 'ガ', 'ギ', 'グ', 'ゲ',
    'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ',
    'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ',
    'ポ', 'ャ', 'ュ', 'ョ', 'ッ'
];

const HiraganaKatakanaPage = ({ onGoBack }) => (
    <div className="flex flex-col items-center p-6 min-h-screen">
        <Header title="Hiragana & Katakana" onGoBack={onGoBack} />
        <div className="container mx-auto mt-8 flex flex-col lg:flex-row gap-6">
            {/* Hiragana Section */}
            <div className="bg-white p-6 rounded-2xl border-2 border-purple-200 shadow-lg lg:w-1/2">
                <h3 className="text-3xl font-extrabold text-purple-600 text-center mb-6">Hiragana</h3>
                <div className="grid grid-cols-5 md:grid-cols-8 gap-4 text-center">
                    {hiraganaCharacters.map((char, index) => (
                        <div
                            key={index}
                            className="p-3 bg-purple-50 text-purple-800 font-bold text-2xl rounded-lg border border-purple-200 transition-transform transform hover:scale-110"
                        >
                            {char}
                        </div>
                    ))}
                </div>
            </div>

            {/* Katakana Section */}
            <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 shadow-lg lg:w-1/2">
                <h3 className="text-3xl font-extrabold text-emerald-600 text-center mb-6">Katakana</h3>
                <div className="grid grid-cols-5 md:grid-cols-8 gap-4 text-center">
                    {katakanaCharacters.map((char, index) => (
                        <div
                            key={index}
                            className="p-3 bg-emerald-50 text-emerald-800 font-bold text-2xl rounded-lg border border-emerald-200 transition-transform transform hover:scale-110"
                        >
                            {char}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default HiraganaKatakanaPage;
