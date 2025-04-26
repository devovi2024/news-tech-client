import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return <p>No categories available.</p>;
  }

  return (
    <div className="category-list mt-10">
      <h2 className="text-2xl font-bold mb-6">📚 Categories</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Link 
            key={i} 
            to={`/category/${cat.slug}`} 
            className="block p-4 bg-gray-100 hover:bg-green-500 hover:text-white rounded"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
