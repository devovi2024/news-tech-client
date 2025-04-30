import React from 'react';

const EntertainmentNews = () => {
  const newsItems = [
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'There may be no consoles in the future ea exec says',
      description:
        'The property, complete with 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy shower...',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'There may be no consoles in the future ea exec says',
      description:
        'The property, complete with 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy shower...',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'There may be no consoles in the future ea exec says',
      description:
        'The property, complete with 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy shower...',
    },
    {
      image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
      category: 'TECHNOLOGY',
      date: 'March 26, 2020',
      headline: 'There may be no consoles in the future ea exec says',
      description:
        'The property, complete with 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy shower...',
    },
  ];

  return (
    <div className="px-6 py-8 bg-[#f5f5f5]"> {/* Light newspaper paper color */}
      <h2 className="text-3xl font-serif font-bold text-[#2c2c2c] border-b-2 border-gray-300 pb-2 mb-6">
        Entertainment News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt={item.headline}
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <div className="text-sm text-[#6b6b6b] font-serif mb-1">
                <span className="text-xs text-[#0056b3] uppercase mr-2">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400">| {item.date}</span>
              </div>

              <h3 className="text-2xl font-serif font-extrabold text-[#1a1a1a] leading-tight mb-2 hover:text-[#0056b3] cursor-pointer">
                {item.headline}
              </h3>

              <p className="text-lg text-[#4a4a4a] font-serif leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntertainmentNews;
