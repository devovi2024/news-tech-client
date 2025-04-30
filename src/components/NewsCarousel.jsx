import React from 'react';

const NewsCarousel = () => {
  const newsItems = [
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Success is not a good food failure makes you humble',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Success is not a good food failure makes you humble',
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Carousel Container */}
      <div className="flex space-x-4">
        {newsItems.map((item, index) => (
          <div key={index} className="relative w-1/2 bg-white shadow-sm rounded-lg overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.headline}
                className="w-full h-40 object-cover"
              />
              {/* Navigation Arrows */}
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              {/* Icons */}
              <div className="absolute top-2 right-2 flex space-x-2">
                {/* Play Button */}
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7L8 5z"></path>
                  </svg>
                </div>
                {/* Lightning Bolt */}
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-4">
              <div className="text-sm text-blue-500 font-semibold">
                {item.category} <span className="text-gray-400">/ {item.date}</span>
              </div>
              <h3 className="text-base font-bold text-gray-800 mt-1">{item.headline}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;