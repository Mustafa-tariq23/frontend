import React from 'react';

const Product = ({ src, alt, heading, para }) => {
  return (
    <div className="card w-80 glass">
      <figure>
        <img src={src} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p>{para}</p>
        <div className="card-actions flex justify-end">
          <button className="btn btn-primary">Buy now!</button>
        </div>
      </div>
    </div>
  );
};

const Products = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

export default Products;
