// import React from 'react';

// const Product = ({ src, alt, heading, para }) => {
//   return (
//     <div className="card w-80 glass">
//       <figure>
//         <img 
//         src={src} 
//         alt={alt} 
//         className="object-cover w-full h-40 md:h-48 lg:h-56 xl:h-64" 
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{heading}</h2>
//         <p>{para}</p>
//         {/* <Link to={`/product-details/${heading.toLowerCase()}`}>Details</Link> */}
//         <div className="card-actions flex justify-end">
//           <button className="btn bg-rose-300 hover:bg-rose-400 text-white border-rose-300">Buy now!</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Products = ({ products, searchTerm }) => {
//   console.log('Search Term inside Products component:', searchTerm);
//   console.log('Search term:', searchTerm);
//   const filteredProducts = products.filter((product) =>
//   product.category.includes(searchTerm) || product.para.includes(searchTerm)
// );

//   console.log('Filtered products:', filteredProducts);

//   return (
//     <div className="flex flex-wrap justify-center gap-4">
//       {filteredProducts.map((product, index) => (
//         <Product key={index} {...product} />
//       ))}
//     </div>
//   );
// };


// export default Products;


import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ src, alt, heading, para, detail, price }) => {
  const productHeading = heading || 'Default Heading';

  return (
    <div className="card w-80 glass">
      <figure>
        <img src={src} alt={alt} className="object-cover w-full h-40 md:h-48 lg:h-56 xl:h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productHeading}</h2>
        <p>{para}</p>
        <Link to={`/product-details/${productHeading.toLowerCase()}`}>Details</Link>
      </div>
    </div>
  );
};

export default Product;