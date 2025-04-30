import React, { useState } from 'react';
import { FaHeart, FaShare } from 'react-icons/fa'; // Icons for likes and shares

const MostSharedList = () => {
  const items = [
    { id: 1, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
    { id: 2, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
    { id: 3, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
    { id: 4, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
    { id: 5, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
    { id: 6, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
    { id: 7, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
    { id: 8, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
    { id: 9, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
    { id: 10, category: 'TECHNOLOGY', date: 'MARCH 26, 2020', title: 'Nancy Zhang: A Chinese Busy Woman in Dhaka', likes: '2.2K', shares: '2.2K' },
  ];

  // State to hold the current set of items to display
  const [currentItems, setCurrentItems] = useState(items.slice(0, 5));
  const [startIndex, setStartIndex] = useState(0);

  // Function to handle the click for the "Next" button (right arrow)
  const handleNext = () => {
    if (startIndex + 5 < items.length) {
      setStartIndex(startIndex + 5);
      setCurrentItems(items.slice(startIndex + 5, startIndex + 10));
    }
  };

  // Function to handle the click for the "Previous" button (left arrow)
  const handlePrev = () => {
    if (startIndex - 5 >= 0) {
      setStartIndex(startIndex - 5);
      setCurrentItems(items.slice(startIndex - 5, startIndex));
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Most Shared</h2>
        <div className="flex space-x-2">
          <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* List Items */}
      {currentItems.map((item) => (
        <div key={item.id} className="flex items-start mb-4 py-3 px-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          {/* Number Circle */}
          <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">
            {item.id}
          </div>
          {/* Content */}
          <div className="flex-1">
            <div className="text-sm text-blue-500 font-semibold">
              {item.category} <span className="text-gray-400">/ {item.date}</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mt-1">{item.title}</h3>
            <div className="flex items-center space-x-3 mt-2">
              <div className="flex items-center space-x-1 text-gray-600">
                <FaHeart className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{item.likes}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <FaShare className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{item.shares}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostSharedList;
