import React, { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 py-20 border-b-4 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border-4 border-black p-8 transform -rotate-1">
          <div className="bg-black text-white border-2 border-black p-3 inline-block mb-6 transform rotate-2">
            <Mail className="h-8 w-8 mx-auto" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
            GET THE GOOD SCOOP DELIVERED
          </h2>
          
          <p className="text-xl text-black font-bold mb-8">
            Join 10,000+ changemakers who get our weekly dose of inspiration, 
            impact stories, and actionable insights straight to their inbox.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="flex-1 px-4 py-3 border-4 border-black font-bold text-black placeholder-gray-500 focus:outline-none focus:ring-0"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white border-4 border-black px-6 py-3 font-black hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  SUBSCRIBE
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-green-400 border-4 border-black p-6 max-w-md mx-auto">
              <CheckCircle className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-black text-black mb-2">
                WELCOME TO THE MOVEMENT!
              </h3>
              <p className="text-black font-bold">
                Check your inbox for a confirmation email and get ready for some serious inspiration!
              </p>
            </div>
          )}
          
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-yellow-400 border-2 border-black p-3">
              <div className="font-black text-2xl text-black">10K+</div>
              <div className="font-bold text-sm text-black">SUBSCRIBERS</div>
            </div>
            <div className="bg-pink-400 border-2 border-black p-3">
              <div className="font-black text-2xl text-black">WEEKLY</div>
              <div className="font-bold text-sm text-black">DELIVERY</div>
            </div>
            <div className="bg-blue-400 border-2 border-black p-3">
              <div className="font-black text-2xl text-black">100%</div>
              <div className="font-bold text-sm text-black">IMPACT</div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 font-bold mt-6">
            No spam, just pure inspiration. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
