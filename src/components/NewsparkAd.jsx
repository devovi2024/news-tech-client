import React from 'react';

const NewsparkAd = () => {
  return (
    <section className="w-full px-6 py-12 md:py-16 bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-3xl shadow-lg max-w-4xl mx-auto">
      {/* Logo and Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className="bg-blue-600 p-4 rounded-full shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2-12H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z"
              />
            </svg>
          </div>
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-100 tracking-tight leading-tight">
            Newspark
          </h1>
        </div>
        {/* Ad Space Info */}
        <span className="text-sm text-gray-400 uppercase tracking-widest ml-1 sm:ml-auto mt-2 sm:mt-0">
          Ad Space - 390x312px
        </span>
      </div>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 sm:mb-12">
        <span className="text-white font-semibold">Newspark</span> is a responsive WordPress theme 
        designed specifically for newspapers, magazines, and content-rich websites. It adapts beautifully 
        on all devices, offering your readers a seamless experience.
      </p>

      {/* CTA Button */}
      <div className="text-center">
        <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <span className="mr-2">🚀</span> Purchase Now
        </button>
      </div>

      {/* Additional Icon Section */}
      <div className="mt-10 text-center">
        <div className="text-gray-200 text-sm sm:text-base mb-4">
          <span className="mr-2">📱</span> Responsive Design
          <span className="ml-8 mr-2">🌐</span> Mobile Friendly
        </div>
        <div className="text-gray-200 text-sm sm:text-base">
          <span className="mr-2">⚡</span> Fast Performance
          <span className="ml-8 mr-2">🔒</span> Secure & Reliable
        </div>
      </div>
    </section>
  );
};

export default NewsparkAd;
