import React from 'react'
import { Leaf, Cpu, GraduationCap, Heart, Users, Lightbulb } from 'lucide-react'

const categories = [
  {
    name: "Environment",
    icon: Leaf,
    color: "bg-green-400",
    count: 24,
    description: "Climate action & sustainability"
  },
  {
    name: "Technology",
    icon: Cpu,
    color: "bg-blue-400",
    count: 18,
    description: "Innovation for good"
  },
  {
    name: "Education",
    icon: GraduationCap,
    color: "bg-yellow-400",
    count: 31,
    description: "Learning & empowerment"
  },
  {
    name: "Healthcare",
    icon: Heart,
    color: "bg-red-400",
    count: 15,
    description: "Health & wellness initiatives"
  },
  {
    name: "Community",
    icon: Users,
    color: "bg-purple-400",
    count: 27,
    description: "Social impact & unity"
  },
  {
    name: "Innovation",
    icon: Lightbulb,
    color: "bg-pink-400",
    count: 12,
    description: "Creative solutions"
  }
]

const Categories = () => {
  return (
    <section className="bg-gray-100 py-20 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-white border-4 border-black p-3 inline-block transform rotate-1 mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-black">EXPLORE BY IMPACT</h2>
          </div>
          <p className="text-xl text-gray-700 font-bold max-w-3xl mx-auto">
            Every story falls into a category of change. Find the impact that resonates with you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div 
                key={category.name}
                className={`${category.color} border-4 border-black p-6 transform ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } hover:rotate-0 transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group`}
              >
                <div className="text-center">
                  <div className="bg-white border-2 border-black p-3 inline-block mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-black text-black mb-2">
                    {category.name.toUpperCase()}
                  </h3>
                  
                  <p className="text-black font-bold text-sm mb-3">
                    {category.description}
                  </p>
                  
                  <div className="bg-black text-white border-2 border-black px-3 py-1 inline-block">
                    <span className="font-black text-sm">{category.count} STORIES</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white border-4 border-black p-6 inline-block transform -rotate-1">
            <p className="text-black font-black text-lg mb-4">
              CAN'T FIND WHAT YOU'RE LOOKING FOR?
            </p>
            <button className="bg-black text-white border-2 border-black px-6 py-3 font-bold hover:bg-gray-800 transition-colors">
              SUGGEST A CATEGORY
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
