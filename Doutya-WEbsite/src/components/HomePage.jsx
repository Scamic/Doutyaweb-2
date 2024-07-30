// src/pages/HomePage.jsx

import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      
      <div className="container mx-auto flex items-center justify-between py-20">
        {/* Left Section with Heading */}
        <div className="w-1/2">
          <h1 className="text-white text-5xl font-bold">
            Welcome to Our Website
          </h1>
          <p className="text-gray-400 mt-4">
           cvxdfbdsggbsdshfgbsgbhbfggfbsfgbdth
          </p>
        </div>

        {/* Right Section with Image */}
        <div className="w-1/2">
          <img src="src/assets/pic2.jpg" alt="Sample" className="rounded-md h-80 w-76" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
