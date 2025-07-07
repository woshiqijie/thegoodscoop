import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="bg-yellow-400 text-black p-3 border-2 border-white inline-block transform -rotate-2 mb-6">
              <h3 className="text-xl font-black">THE GOOD SCOOP</h3>
            </div>
            <p className="text-gray-300 font-bold mb-6">
              Amplifying stories of positive change across Southeast Asia. 
              Because every story has the power to inspire action.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white text-black p-2 border-2 border-white hover:bg-gray-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-black p-2 border-2 border-white hover:bg-gray-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-black p-2 border-2 border-white hover:bg-gray-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-black p-2 border-2 border-white hover:bg-gray-200 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <div className="bg-pink-400 text-black p-2 border-2 border-white inline-block mb-6">
              <h4 className="font-black">EXPLORE</h4>
            </div>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Latest Stories</a></li>
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Featured Impact</a></li>
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Archive</a></li>
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <div className="bg-green-400 text-black p-2 border-2 border-white inline-block mb-6">
              <h4 className="font-black">ABOUT</h4>
            </div>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">The Team</a></li>
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Submit a Story</a></li>
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Partner With Us</a></li>
              <li><a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <div className="bg-blue-400 text-black p-2 border-2 border-white inline-block mb-6">
              <h4 className="font-black">CONTACT</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3" />
                <span className="font-bold">hello@thegoodscoop.asia</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3" />
                <span className="font-bold">+65 1234 5678</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 mt-1" />
                <span className="font-bold">Singapore, Southeast Asia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-white mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 font-bold mb-4 md:mb-0">
              © 2024 The Good Scoop. All rights reserved. Built with ❤️ for positive change.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 font-bold hover:text-yellow-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
