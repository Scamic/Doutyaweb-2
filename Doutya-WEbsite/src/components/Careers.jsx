import React from 'react';

const CareerSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 min-h-screen flex flex-col items-center px-8 py-12 relative overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-50 top-1/5 left-1/4 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-50 top-1/2 right-1/4 animate-pulse"></div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center ml-6 mb-16 p-6 z-10 relative">
        <h1 className="text-6xl font-extrabold text-white md:mb-0 relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-[#00FF00] after:transition-[width] after:duration-300 after:right-0 hover:after:w-full hover:after:left-0">
          Careers 
        </h1>
        <div className="mt-6 md:mt-0">
          <p className="text-2xl text-gray-300 md:max-w-3xl border border-gray-400 p-4 rounded-lg font-roboto">
            Join our dynamic team and contribute to groundbreaking innovations in the tech industry. We’re seeking passionate professionals who thrive on challenges and are eager to make an impact.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full mt-12 z-10 relative space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex flex-col items-center text-center bg-gray-800 bg-opacity-50 p-8 rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-white mb-4">Why Work With Us</h2>
          <p className="text-lg text-gray-300">
            We offer a collaborative environment where your ideas matter. Enjoy flexible work arrangements, professional growth opportunities, and a supportive community.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-gray-800 bg-opacity-50 p-8 rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Culture</h2>
          <p className="text-lg text-gray-300">
            Innovation, integrity, and inclusion are at the heart of everything we do. Be part of a team that values diverse perspectives and creative problem-solving.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-gray-800 bg-opacity-50 p-8 rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-white mb-4">Career Growth</h2>
          <p className="text-lg text-gray-300">
            Your career growth is our priority. We provide continuous learning opportunities and clear paths to advancement within the company.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default CareerSection;
