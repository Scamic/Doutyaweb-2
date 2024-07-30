import React from 'react';



const HomePage = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      
      <div className="mx-auto flex  justify-between py-20">
        {/* Left Section with Heading */}
        <div className='mb-72' >
          <h1 className="text-violet-800 text-7xl font-bold ml-12">
          Innovating the Future,  <br />One Byte at a Time.
          </h1>
          <p className="text-gray-400 mt-4 ml-14">
          Simplify Your Operations and Amplify Your Results. Our user-friendly solutions are built to streamline your <br /> processes and boost productivity.
          </p>
          
          <div className='pl-38 pt-18 h-30  w-84'>     
          <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full h-full">Join Us</button>
   
          </div>
        

        </div>

          

        {/* Right Section with Image */}
        <div className="w-2/5">
          <img src="src/assets/pic2.jpg" alt="Sample" className="rounded-md h-98 w-92" />
        </div>

      </div>
    </div>
  );
};

export default HomePage;
