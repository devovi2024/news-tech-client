import { useState } from "react";
import { FaBars, FaTwitter, FaFacebookF, FaYoutube, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = ["Technology", "Health", "Sports", "Business"];
  const profile = { name: "John Doe", avatar: "/assets/images/profile.jpg" };
  const date = "April 26, 2025";

  return (
    <header className="w-full">
      <div className="bg-yellow-500 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <span className="text-white font-semibold text-sm">Breaking: Welcome to InfoNest</span>
          <div className="hidden md:flex items-center space-x-4 text-white text-sm">
            <span>{date}</span>
            <div className="flex items-center space-x-3">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-green-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <img src="/assets/images/logo.png" alt="Logo" className="h-10" />
            <span className="text-white text-2xl font-bold">InfoNest</span>
          </div>

          <div className="hidden lg:flex flex-col items-center text-white">
            <h1 className="text-lg font-semibold">Explore InfoNest</h1>
            <p className="text-xs">Discover the latest updates</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-white hover:text-yellow-300 transition">Home</a>
              <a href="#" className="text-white hover:text-yellow-300 transition">Pages</a>
              <a href="#" className="text-white hover:text-yellow-300 transition">Posts</a>
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-white hover:text-yellow-300 transition">
                  Categories ▼
                </button>
                {dropdownOpen && (
                  <div className="absolute bg-white shadow-md rounded mt-2 py-2 w-40">
                    {categories.map((cat, i) => (
                      <a key={i} href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white">
                        {cat}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <img src={profile.avatar} alt="Profile" className="h-8 w-8 rounded-full object-cover" />
                <span className="text-white text-sm">{profile.name}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="text-white"><FaSearch /></button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-gray-900 text-white">
          <div className="px-6 py-4 space-y-4">
            <a href="#" className="block hover:text-yellow-300">Home</a>
            <a href="#" className="block hover:text-yellow-300">Pages</a>
            <a href="#" className="block hover:text-yellow-300">Posts</a>
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="block w-full text-left hover:text-yellow-300">
                Categories ▼
              </button>
              {dropdownOpen && (
                <div className="mt-2 bg-white rounded shadow-md">
                  {categories.map((cat, i) => (
                    <a key={i} href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white">
                      {cat}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-3 pt-4 border-t border-gray-700">
              <img src={profile.avatar} alt="Profile" className="h-8 w-8 rounded-full object-cover" />
              <span>{profile.name}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
