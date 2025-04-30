import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Restaurant', image: 'https://via.placeholder.com/300x60' },
    { name: 'Entertainment', image: 'https://via.placeholder.com/300x60' },
    { name: 'Feature', image: 'https://via.placeholder.com/300x60' },
    { name: 'Business', image: 'https://via.placeholder.com/300x60' },
    { name: 'Trending', image: 'https://via.placeholder.com/300x60' },
    { name: 'Sports', image: 'https://via.placeholder.com/300x60' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900">Categories</h2>
        <a href="#" className="text-sm text-gray-600 uppercase font-medium hover:text-blue-600 hover:underline">
          SEE ALL
        </a>
      </div>

      {/* Categories List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden flex items-center justify-between p-4 transition transform hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Category Name */}
            <h3 className="relative text-xl font-bold text-white z-10">{category.name}</h3>

            {/* Right Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="relative w-6 h-6 text-white z-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
