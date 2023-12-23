// App.jsx
import React, { useState } from 'react';
import CategoryFilters from './components/CategoryFilters';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Header from './components/Header';
import products from './components/products-info';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      {!searchTerm && (
        <>
          <CategoryFilters onSelectCategory={handleCategorySelect} />
          <Products products={products} searchTerm={selectedCategory === 'ALL' ? '' : selectedCategory} />
          <Testimonial />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
