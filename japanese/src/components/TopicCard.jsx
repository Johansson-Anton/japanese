import React from 'react';

// Reusable component for the topic cards on the homepage
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

export default TopicCard;
