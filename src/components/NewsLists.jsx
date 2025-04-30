import React from 'react';

const NewsLists = () => {
  const newsItems = [
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Nancy Zhang a Chinese busy woman and Dhaka',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'U.S. Response subash says he will label regions by risk of..',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Venezuela elan govt and opposition the property collect',
    },
    {
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Nancy Zhang a Chinese busy woman and Dhaka',
    },
    {
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'U.S. Response subash says he will label regions by risk of..',
    },
    {
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Venezuela elan govt and opposition the property collect',
    },
  ];

  return (
    <div className="mt-8 px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 border-b border-gray-300 py-4 bg-white shadow-md rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: '#f9f9f9',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: '8px',
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")',
            }}
          >
            {/* Badge */}
            <div className="relative">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* Thumbnail */}
            <img
              src={item.image}
              alt={item.headline}
              className="w-24 h-24 object-cover rounded-lg"
            />

            {/* Text Content */}
            <div className="flex-1">
              {/* Category and Date */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-semibold text-blue-700 uppercase">{item.category}</span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>

              {/* Headline */}
              <h3 className="text-sm font-medium text-gray-800 leading-snug hover:text-blue-600 transition duration-300">
                {item.headline}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsLists;
