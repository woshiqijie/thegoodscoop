import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedStories from './components/FeaturedStories'
import Categories from './components/Categories'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedStories />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
