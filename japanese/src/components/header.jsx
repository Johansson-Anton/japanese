import React from 'react';
import { ChevronLeft } from 'lucide-react';

// Reusable header component for sub-pages
const Header = ({ title, onGoBack }) => (
    <div className="flex items-center justify-between p-4 sm:p-6 bg-white border-b-2 border-gray-200 drop-shadow-sm sticky top-0 z-50">
        <button
            onClick={onGoBack}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Go back to homepage"
        >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 font-['Inter']">{title}</h2>
        <div className="w-8 h-8"></div> {/* Spacer for alignment */}
    </div>
);

export default Header;
