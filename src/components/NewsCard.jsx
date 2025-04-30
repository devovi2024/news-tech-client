import React, { useState } from 'react';

const NewsCard = () => {
  // State to track the active thumbnail
  const [activeIndex, setActiveIndex] = useState(null);

  const newsThumbnails = [
    "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg"
  ];



  // Handle thumbnail click to set active state
  const handleThumbnailClick = (index) => {
    setActiveIndex(index); 
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Main Image Section */}
      <div className="relative">
        <img
          src="https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg"
          alt="Main news"
          className="w-full h-72 object-cover"
        />
        <button className="absolute top-4 right-4 bg-burnt-orange text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Text Content */}
      <div className="p-4">
        <div className="flex items-center text-xs text-gray-600 mb-3">
          <span className="uppercase font-medium text-burnt-orange">TECHNOLOGY /</span>
          <span className="ml-2">March 26, 2020</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Japan’s virus success has puzzled the world. Is its luck running out?
        </h2>
        <p className="text-sm text-gray-700 md:text-base">
          The property, complete with a 30-seat screening room, a 100-seat amphitheater, and a swimming pool with sandy shower...
        </p>
      </div>

      {/* Carousel for Smaller Images */}
      <div className="flex overflow-x-auto space-x-3 p-4 md:px-6 scrollbar-hide smooth-scroll">
        {newsThumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-16 object-cover rounded-lg shadow-md transition-shadow duration-200 
              ${activeIndex === index ? 'ring-4 ring-burnt-orange' : 'hover:shadow-lg'}`}
            onClick={() => handleThumbnailClick(index)} // Set active on click
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
