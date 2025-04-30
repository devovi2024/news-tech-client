import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const News = () => {
  const [activeTab, setActiveTab] = useState('LATEST'); // State to track active tab

  const articles = [
    {
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Copa America: Luis Suarez from devastated US',
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    },
    {
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Nancy Zhang a Chinese busy woman and Dhaka',
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    },
    {
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'U.S. Response subash says he will label regions by risk of...',
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    },
    {
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Venezuela elan govt and opposit the property collect',
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    },
    {
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'Cheap smartphone sensor could help you old food safe',
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    },
  ];

  // Handle tab click to update active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4 font-ubuntu">
      {/* Tabs */}
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 rounded-t-lg font-bold tracking-wide transition duration-200 ${activeTab === 'LATEST' ? 'bg-[#a34d2d] text-white' : 'text-[#5b341b] hover:text-[#a34d2d]'} `}
          onClick={() => handleTabClick('LATEST')}
        >
          LATEST
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold tracking-wide transition duration-200 ${activeTab === 'RELATED' ? 'bg-[#a34d2d] text-white' : 'text-[#5b341b] hover:text-[#a34d2d]'} `}
          onClick={() => handleTabClick('RELATED')}
        >
          RELATED
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold tracking-wide transition duration-200 ${activeTab === 'POPULAR' ? 'bg-[#a34d2d] text-white' : 'text-[#5b341b] hover:text-[#a34d2d]'} `}
          onClick={() => handleTabClick('POPULAR')}
        >
          POPULAR
        </button>
      </div>

      {/* News Articles */}
      {articles.map((article, index) => (
        <div
          key={index}
          className="flex items-center border-b border-[#d4c4b0] border-dashed py-4 last:border-b-0"
        >
          <img
            src={article.image}
            alt={article.headline}
            className="w-20 h-20 object-cover rounded-md shadow-sm mr-4"
          />
          <div className="flex-1">
            <div className="flex items-center text-sm text-[#5b341b] mb-1">
              <span className="uppercase font-semibold tracking-widest">{article.category}</span>
              <span className="mx-2">/</span>
              <FaCalendarAlt className="mr-1 text-[#a34d2d]" />
              <span>{article.date}</span>
            </div>
            <h3 className="text-base font-bold text-[#2f1c11] hover:text-[#a34d2d] cursor-pointer">
              {article.headline}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
