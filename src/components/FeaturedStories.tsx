import React from 'react'
import { Calendar, User, ArrowRight, Heart, Share2 } from 'lucide-react'

const stories = [
  {
    id: 1,
    title: "The Solar Revolution: How One Village in Vietnam is Powering Change",
    excerpt: "Meet the community leaders who transformed their village into a renewable energy hub, inspiring dozens of neighboring communities to follow suit.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
    author: "Sarah Chen",
    date: "March 15, 2024",
    category: "Environment",
    readTime: "8 min read",
    impact: "12 villages now solar-powered"
  },
  {
    id: 2,
    title: "Breaking Barriers: The App Connecting Rural Farmers to Global Markets",
    excerpt: "A tech startup from Indonesia is revolutionizing agriculture by giving small-scale farmers direct access to international buyers.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
    author: "Marcus Tan",
    date: "March 12, 2024",
    category: "Technology",
    readTime: "6 min read",
    impact: "5,000+ farmers connected"
  },
  {
    id: 3,
    title: "Education Without Borders: Mobile Schools Reach Remote Communities",
    excerpt: "Discover how innovative mobile education units are bringing quality learning to children in the most remote areas of the Philippines.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    author: "Lisa Rodriguez",
    date: "March 10, 2024",
    category: "Education",
    readTime: "10 min read",
    impact: "2,500+ children reached"
  }
]

const FeaturedStories = () => {
  return (
    <section className="bg-white py-20 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-pink-400 border-4 border-black p-3 inline-block transform -rotate-1 mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-black">FEATURED STORIES</h2>
          </div>
          <p className="text-xl text-gray-700 font-bold max-w-3xl mx-auto">
            Dive deep into the stories that are reshaping Southeast Asia, one community at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article 
              key={story.id} 
              className={`bg-white border-4 border-black transform ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              } hover:rotate-0 transition-transform duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
            >
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover border-b-4 border-black"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 border-2 border-black font-black text-xs ${
                  story.category === 'Environment' ? 'bg-green-400' :
                  story.category === 'Technology' ? 'bg-blue-400' : 'bg-yellow-400'
                }`}>
                  {story.category.toUpperCase()}
                </div>
                <div className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1">
                  <span className="font-black text-xs">{story.readTime}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-black text-black mb-3 leading-tight">
                  {story.title}
                </h3>
                
                <p className="text-gray-700 font-medium mb-4 leading-relaxed">
                  {story.excerpt}
                </p>
                
                <div className="bg-gray-100 border-2 border-black p-3 mb-4">
                  <div className="flex items-center text-sm font-bold text-black">
                    <Heart className="h-4 w-4 mr-2 text-red-500" />
                    <span>IMPACT: {story.impact}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span className="font-bold">{story.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="font-bold">{story.date}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-black text-white border-2 border-black px-4 py-2 font-bold hover:bg-gray-800 transition-colors flex items-center justify-center">
                    READ MORE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="bg-white border-2 border-black p-2 hover:bg-gray-100 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-yellow-400 text-black border-4 border-black px-8 py-4 font-black text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105">
            VIEW ALL STORIES
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedStories
