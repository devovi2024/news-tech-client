// import PostCard from "../components/PostCard";

// const TrendingPost = ({ posts }) => {
//   if (!posts || posts.length === 0) return null;

//   const trendingPosts = [...posts]
//     .sort((a, b) => b.views - a.views)
//     .slice(0, 4);

//   return (
//     <div className="trending-news mt-10">
//       <h2 className="text-xl font-bold mb-4">🔥 Trending</h2>
//       <div className="trending-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//         {trendingPosts.map((post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrendingPost;




import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const trendingData = [
  {
    id: 1,
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg', // Replace with real images
    category: 'TECHNOLOGY',
    date: 'March 26, 2020',
    title: 'There may be no consoles in the future ea exec says',
    description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    id: 2,
        image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg', // Replace with real images
    category: 'TECHNOLOGY',
    date: 'March 26, 2020',
    title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
    description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
];

const TrendingPost = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Trending News</h2>
        <div className="flex space-x-2">
          <button className="border p-2 rounded hover:bg-gray-100">
            <FaChevronLeft />
          </button>
          <button className="border p-2 rounded hover:bg-gray-100">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trendingData.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="absolute top-4 left-4 w-4 h-4 bg-red-500 rounded-full" />
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-600 font-semibold">
                <span className="text-blue-600">{item.category}</span> <span className="mx-1">/</span> {item.date}
              </div>
              <h3 className="mt-2 text-lg font-bold leading-tight text-gray-900 hover:text-blue-600 transition">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPost;
