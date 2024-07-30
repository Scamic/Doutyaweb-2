import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate a search action or integrate with actual search functionality
    alert(`Searching for: ${searchQuery}`);
    // Add your search logic here
  };

  return (
    <nav className="bg-slate-950 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="src/assets/images-removebg-preview.png" alt="Logo" className="h-14 w-14" />
          <span className="text-white text-xl font-bold">Doutya Tech</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-20">
          <a href="#option1" className="text-gray-300 hover:text-white">Option 1</a>
          <a href="#option2" className="text-gray-300 hover:text-white">Option 2</a>
          <a href="#option3" className="text-gray-300 hover:text-white">Option 3</a>
          <a href="#option4" className="text-gray-300 hover:text-white">Option 4</a>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center mr-20">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-white"
          />
          <button type="submit" className="ml-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
