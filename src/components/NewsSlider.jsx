import React from 'react';
import '../assets/styles.css';

const NewsSlider = () => {
  const newsItems = [
    {
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'The home decorations document: photograph of an',
      label: 'People have been infected',
    },
    {
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'U.S. Response subash says he will label regions by risk...',
      label: 'People have been infected',
    },
    {
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'Stimulus package will transform the government fundamentally...',
      label: 'People have been infected',
    },
    {
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'Another stimulus package is coming soon...',
      label: 'People have been infected',
    },
    {
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'Government policies are changing for better...',
      label: 'People have been infected',
    },
  ];

  return (
    <div className="bg-white border-t border-b border-gray-300 py-4 px-4 font-serif">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Latest News</h2>
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-snap-x snap-mandatory">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-72 sm:w-80 md:w-96 flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.headline}
              className="w-32 h-32 object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
            />
            {/* Text Content */}
            <div className="pl-4 pr-2 py-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-2">
                {item.headline}
              </h3>
              <p className="text-xs text-red-700 italic tracking-wide">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;
