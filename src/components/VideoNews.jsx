import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const VideoNews = () => {
  const newsItem = {
    image: "https://via.placeholder.com/600x400", // Replace with actual image URL
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Riots Report Shows London Needs To Main Police Numbers, Says Mayor",
  };

  return (
    <div className="p-4 bg-gray-900 text-white">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-4 uppercase">Video News</h2>

      {/* News Card */}
      <div className="bg-white text-black rounded-lg overflow-hidden shadow-md">
        {/* Image with Play Icon Overlay */}
        <div className="relative">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-red-600 p-4 rounded-lg">
              <PlayIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-4">
          <p className="text-sm text-blue-500 uppercase">
            {newsItem.category} / {newsItem.date}
          </p>
          <h3 className="text-lg font-semibold mt-2">{newsItem.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoNews;