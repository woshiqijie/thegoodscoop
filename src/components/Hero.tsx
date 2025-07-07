import React from 'react'
import { ArrowRight, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-400 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white border-4 border-black p-2 inline-block transform -rotate-1 mb-6">
              <span className="text-black font-black text-sm">IMPACT JOURNALISM</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-black leading-tight mb-6">
              STORIES THAT
              <span className="bg-white border-4 border-black px-4 py-2 inline-block transform rotate-1 mx-2">
                CHANGE
              </span>
              THE WORLD
            </h1>
            
            <p className="text-xl text-black font-bold mb-8 bg-white border-2 border-black p-4 transform -rotate-1">
              Uncovering the heroes, innovators, and changemakers driving positive impact across Southeast Asia. 
              Real stories. Real change. Real hope.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white border-4 border-black px-8 py-4 font-black text-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                READ LATEST STORIES
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button className="bg-white text-black border-4 border-black px-8 py-4 font-black text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Zap className="mr-2 h-5 w-5" />
                SUBMIT A STORY
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white border-4 border-black p-4 transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop" 
                alt="Community impact in Southeast Asia"
                className="w-full h-80 object-cover border-2 border-black"
              />
              <div className="bg-yellow-400 border-2 border-black p-3 mt-4 transform -rotate-1">
                <p className="font-black text-black text-sm">
                  "Every story we tell has the power to inspire action and create lasting change."
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-pink-400 border-2 border-black p-2 transform rotate-12">
              <span className="font-black text-xs">NEW!</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-green-400 border-2 border-black p-2 transform -rotate-12">
              <span className="font-black text-xs">IMPACT!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
