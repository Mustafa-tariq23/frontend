// import React from 'react'



// const navbar = () => {


//   return (
//     <>
//       <div>
//         <section className="relative mx-auto">
//           <nav className="flex justify-between bg-rose-200 text-white w-screen">
//             <div className="px-5 xl:px-12 py-6 flex w-full items-center">
//               <a className="text-3xl font-bold font-heading" href="/">
//                 <img className="inline-block h-16 w-16  rounded-full ring-2 ring-white" src = {logo} alt="LOGO IMAGE" />
//               </a>
//               <div className='searchSec hidden md:flex px-4 w-10/12 justify-center mx-auto font-semibold font-heading space-x-12'>
//                 <form>
//                   <div className="flex">
//                     <div className="relative w-96">
//                       <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />
//                       <button type="submit" className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-pink-700 rounded-e-lg border border-white-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-rose-200 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                       </svg></button>
//                     </div>
//                   </div>
//                 </form>

//               </div>
//               <div className="hidden xl:flex space-x-5 items-center">
//                 <a className="hover:text-gray-200" href="/">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </a>
//                 <a className="flex items-center hover:text-gray-200" href="/">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   <span className="flex absolute -mt-5 ml-4">
//                     <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
//                     </span>
//                   </span>
//                 </a>
//                 <a className="flex items-center hover:text-gray-200" href="/">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <a className="xl:hidden flex mr-6 items-center" href="/">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//               <span className="flex absolute -mt-5 ml-4">
//                 <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
//                 </span>
//               </span>
//             </a>
//             <a className="navbar-burger self-center mr-12 xl:hidden" href="/">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </a>
//           </nav>

//         </section>
//       </div>

//       <section className='w-full py-5 px-14 bg-white'>
//         <ul className='flex text-black'>
//           <li className='py-2 px-5 hover:bg-gray-100 ml-5'><a href="">Home</a></li>
//           <li className='py-2 px-5 hover:bg-gray-100 ml-5'><a href="">Women</a></li>
//           <li className='py-2 px-5 hover:bg-gray-100 ml-5'><a href="">Men</a></li>
//           <li className='py-2 px-5 hover:bg-gray-100 ml-5'><a href="">Contact</a></li>
//           <li className='py-2 px-5 hover:bg-gray-100 ml-5'><a href="">Blog</a></li>
//           <li className='py-2 px-5 hover:bg-gray-100 ml-5'><a href="">About US</a></li>
//         </ul>
//       </section>





//     </>
//   )
// }

// export default navbar





import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white shadow  h-auto">
      <div className="container px-1 py-4 mx-auto sm:px-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center h-12">
              <a href="/">
                <img className="w-16 inline-block h-16 sm:w-16 sm:h-16 rounded-full ring-2 ring-white" src= "images/logo.jpg" alt="Logo image" />
              </a>
              

              {/* Search input on desktop screen */}

            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                <svg style={{ display: !isOpen ? 'block' : 'none' }} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
                <svg style={{ display: isOpen ? 'block' : 'none' }} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap flex content-center gap-8 justify-center scroll-hidden">

            <a className="m-0 text-sm leading-5 text-black transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="/">Home</a>

            <a className="m-0 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="/">Blog</a>
            <a className="m-0 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="/">Components</a>
            <a className="m-0 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="/">Courses</a>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className={`absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
            <div className="flex flex-col md:flex-row md:mx-1 gap-2">
              <div className="hidden mx-10 md:block">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>

                  <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                </div>
                
              </div>
              <div className='flex gap-8 pl-16 items-center justify-center'>
                <a className="hover:text-gray-200" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                  </span>
                </a>
               
              </div>


            </div>

            {/* Search input on mobile screen */}
            <div className="my-4 md:hidden">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>

                <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
