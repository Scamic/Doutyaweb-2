import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, scroller } from 'react-scroll';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const sectionMap = {
      about: 'about-section',
      products: 'products-section',
      careers: 'careers-section',
      blog: 'blog-section',
    };

    const sectionId = sectionMap[searchQuery.toLowerCase()];
    if (sectionId) {
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
      });
    } else {
      alert(`No section found for: ${searchQuery}`); // Corrected syntax here
    }
  };

  return (
    <nav className={`p-4 ${scrolling ? 'bg-gray-800' : 'bg-black'} transition-colors duration-300`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4 ml-8"> {/* Adjusted ml-8 to move it further right */}
          <div className="relative group cursor-pointer">
            <img
              src="src/assets/images-removebg-preview.png"
              alt="Logo"
              className="h-24 w-24" /* Further increased size */
            />
            <span
              className="absolute left-28 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white text-xl font-bold transition-all duration-500"
            >
              Doutya Technologies
            </span>
          </div>
        </div>

        {/* Navigation Links with Increased Spacing */}
        <div className="relative">
          <div className="relative flex space-x-30 p-2 rounded-full border-2 border-white"> {/* Adjusted space-x-12 for more spacing */}
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white cursor-pointer font-bold px-3 py-1"
            >
              About Us
            </Link>
            <Link
              to="products-section"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white cursor-pointer font-bold px-3 py-1"
            >
              Products
            </Link>
            <Link
              to="careers-section"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white cursor-pointer font-bold px-3 py-1"
            >
              Careers
            </Link>
            <Link
              to="blog-section"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white cursor-pointer font-bold px-3 py-1"
            >
              Blogs
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full lg:w-auto flex items-center mt-4 lg:mt-0">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-white w-full lg:w-auto"
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
