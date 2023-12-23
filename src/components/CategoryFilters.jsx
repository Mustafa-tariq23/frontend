// import React from 'react'

// const CategoryFilters = () => {
//     return (
//         <>
//             <div className="filterButtons justify-center gap-4 mb-8 flex flex-wrap">
//             <button className="btn btn-outline hover:border-rose-600 text-rose-600 hover:bg-rose-600 border-rose-600 uppercase">ALL</button>
//             <button className="btn btn-outline hover:border-rose-300 text-rose-300 hover:bg-rose-300 border-rose-300 uppercase">Floral Candles</button>
//             <button className="btn btn-outline hover:border-rose-300 text-rose-300 hover:bg-rose-300 border-rose-300 uppercase">Fall Candles</button>
//             </div>
//         </>
//     )
// }

// export default CategoryFilters


import React, { useState } from 'react';

const CategoryFilters = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category === 'ALL' ? '' : category);
  };

  return (
    <>
      <div className="filterButtons justify-center gap-4 mb-8 flex flex-wrap">
        <button
          className={`btn btn-outline hover:border-rose-600 text-rose-600 hover:bg-rose-600 border-rose-600  ${
            selectedCategory === 'ALL' ? 'bg-rose-600 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('ALL')}
        >
          ALL
        </button>
        <button
          className={`btn btn-outline hover:border-rose-300 text-rose-300 hover:bg-rose-300 border-rose-300  ${
            selectedCategory === 'Floral Candles' ? 'bg-rose-300 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('Floral Candles')}
        >
          Floral Candles
        </button>
        <button
          className={`btn btn-outline hover:border-rose-300 text-rose-300 hover:bg-rose-300 border-rose-300  ${
            selectedCategory === 'Fall Candles' ? 'bg-rose-300 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('Fall Candles')}
        >
          Fall Candles
        </button>
      </div>
    </>
  );
};

export default CategoryFilters;
