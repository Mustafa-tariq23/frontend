// import React, { useState } from 'react';
// import CategoryFilters from './components/CategoryFilters';
// import Products from './components/Products';
// import Testimonial from './components/Testimonial';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import products from './components/products-info';

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('ALL');

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <Header setSearchTerm={setSearchTerm} />
//       {!searchTerm && (
//         <>
//           <CategoryFilters onSelectCategory={handleCategorySelect} />
//           <Products products={products} searchTerm={selectedCategory === 'ALL' ? '' : selectedCategory} />
//           <Testimonial />
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryFilters from './components/CategoryFilters';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import OrderForm from './components/OrderForm';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Header from './components/Header';
import products from './components/products-info';

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <CategoryFilters />
            <Products products={products} />
            <Testimonial />
            <Footer />
          </>} />
          <Route path="/product-details/:productName" element={<ProductDetails />} />
          <Route path="/order-form" element={<OrderForm />} />
        </Routes>
      </div>
  );
}

export default App;
