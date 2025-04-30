import React from 'react';

const businessData = [
  {
    id: 1,
    image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    author: 'uiux.subash',
    date: 'March 26, 2020',
    title: 'Copa America: Luis Suarez from devastated US',
    description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    author: 'uiux.subash',
    date: 'March 26, 2020',
    title: 'Copa America: Luis Suarez from devastated US',
    description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    author: 'uiux.subash',
    date: 'March 26, 2020',
    title: 'Copa America: Luis Suarez from devastated US',
    description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…',
  },
];

const BusinessNews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-900">Business News</h2>
        <a href="#" className="text-sm font-semibold text-gray-600 hover:text-blue-600">
          SEE ALL
        </a>
      </div>

      <div className="space-y-12">
        {businessData.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row gap-8">
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-2/5 h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-sm text-gray-600 font-semibold mb-3">
                  <span className="text-blue-600">{item.author}</span> <span className="mx-1">/</span> {item.date}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-700 text-base">{item.description}</p>
              </div>
              <div className="mt-6">
                <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-full hover:bg-gray-300 transition text-sm font-medium">
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessNews;
