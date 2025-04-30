import React from 'react';

const NewsList = () => {
  const newsItems = [
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'The billionaire Philanthropist ready to learn',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Nancy Zhang: A Chinese Businesswoman in Dhaka',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'The billionaire Philanthropist ready to learn',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Cheap smartphone sensor could help you',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Ratiffe to be Director of National Talent Trump',
    },
  ];

  return (
    <div className="bg-off-white p-6">
      {/* Navigation Arrows */}
      <div className="flex justify-end mb-4">
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 mr-2">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* News Items */}
      {newsItems.map((item, index) => (
        <div key={index} className="flex items-start mb-4 bg-white p-4 shadow-lg rounded-lg">
          {/* Image with Red Circle and Lightning Bolt */}
          <div className="relative flex-shrink-0">
            <img
              src={item.image}
              alt={item.headline}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="absolute top-0 left-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
          </div>
          {/* Content */}
          <div className="ml-4 flex-1">
            <div className="text-sm text-blue-600 font-serif">
              {item.category} <span className="text-gray-400">/ {item.date}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-1 font-serif">{item.headline}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
