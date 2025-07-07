import React, { useState } from 'react'
import { Menu, X, Search, User } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-yellow-400 p-2 border-2 border-black transform -rotate-2">
              <h1 className="text-xl font-black text-black">THE GOOD SCOOP</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-black font-bold hover:bg-yellow-400 hover:border-2 hover:border-black px-3 py-1 transition-all duration-200">
              STORIES
            </a>
            <a href="#" className="text-black font-bold hover:bg-pink-400 hover:border-2 hover:border-black px-3 py-1 transition-all duration-200">
              IMPACT
            </a>
            <a href="#" className="text-black font-bold hover:bg-green-400 hover:border-2 hover:border-black px-3 py-1 transition-all duration-200">
              ABOUT
            </a>
            <a href="#" className="text-black font-bold hover:bg-blue-400 hover:border-2 hover:border-black px-3 py-1 transition-all duration-200">
              CONTACT
            </a>
          </nav>

          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-white border-2 border-black p-2 hover:bg-gray-100 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="bg-black text-white border-2 border-black px-4 py-2 font-bold hover:bg-gray-800 transition-colors">
              SUBSCRIBE
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden bg-white border-2 border-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-black bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-black font-bold bg-yellow-400 border-2 border-black mb-2">
                STORIES
              </a>
              <a href="#" className="block px-3 py-2 text-black font-bold bg-pink-400 border-2 border-black mb-2">
                IMPACT
              </a>
              <a href="#" className="block px-3 py-2 text-black font-bold bg-green-400 border-2 border-black mb-2">
                ABOUT
              </a>
              <a href="#" className="block px-3 py-2 text-black font-bold bg-blue-400 border-2 border-black mb-2">
                CONTACT
              </a>
              <button className="w-full bg-black text-white border-2 border-black px-4 py-2 font-bold mt-4">
                SUBSCRIBE
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
