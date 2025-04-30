import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated!</h2>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-6">
        Subscribe to our newsletter and get the latest news delivered to your inbox. Your email will never be shared.
      </p>

      {/* Email Input and Button */}
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-4 border border-gray-300 rounded-l-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold p-4 rounded-r-lg hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>

      {/* Disclaimer */}
      <p className="text-xs mt-4 text-gray-500 text-center">
        We value your privacy and will never send you spam.
      </p>
    </div>
  );
};

export default NewsLetter;
