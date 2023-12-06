import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Corrosal from './components/Corrosal'
import CategoryFilters from './components/CategoryFilters'
import Products from './components/Products'
function App() {
  return (
    <>
      <Navbar />
      <Corrosal />
      <HeroSection />
      <CategoryFilters/>
      <Products/>
    </>
  )
}

export default App