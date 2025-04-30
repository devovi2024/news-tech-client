import React from 'react';

const PopularPosts = () => {
  const posts = [
    {
      number: 1,
      thumbnail: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'Cheap smartphone sensor could help you old.',
      category: 'TECHNOLOGY',
    },



    {
      number: 2,
      thumbnail: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'Harbour amid a Slowen the down in singer city',
      category: 'TECHNOLOGY',
    },
    {
      number: 3,
      thumbnail: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'The secret to moving this from sphinx screening',
      category: 'TECHNOLOGY',
    },
    {
      number: 4,
      thumbnail: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'Harbour amid a Slowen the down in singer city',
      category: 'TECHNOLOGY',
    },
    {
      number: 5,
      thumbnail: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      headline: 'The property complete with a 30 seat screen room.',
      category: 'TECHNOLOGY',
    },
  ];

  return (
    <div className="p-5 bg-white rounded shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-800 tracking-wide">Popular Posts</h2>
        <div className="flex space-x-2">
          <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.number} className="flex items-center gap-4">
            {/* Number */}
            <div className="w-8 h-8 bg-red-500 text-white font-bold text-sm flex items-center justify-center rounded-full shadow">
              {post.number}
            </div>

            {/* Image */}
            <img src={post.thumbnail} alt={`Post ${post.number}`} className="w-24 h-14 rounded object-cover shadow-sm" />

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800 leading-snug">
                {post.headline}
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                {post.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
