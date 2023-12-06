import React from 'react';

const Products = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="card w-80 glass">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions flex justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;