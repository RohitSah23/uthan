import React, { useState } from 'react';
import { Smartphone, Mic, Globe, Download, Star, Play } from 'lucide-react';

const MobileAppSection = () => {
  const [activeApp, setActiveApp] = useState('farmer');

  const apps = {
    farmer: {
      title: 'Farmer App',
      subtitle: 'Complete farming companion in your pocket',
      features: [
        'Voice commands in local languages',
        'Crop management and tracking',
        'Market prices and weather updates',
        'Direct buyer connections',
        'Offline mode functionality',
        'Training videos and tips'
      ],
      screenshots: [
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop',
        'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop',
        'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop'
      ],
      color: 'from-green-500 to-emerald-500',
      downloads: '50K+',
      rating: 4.8
    },
    buyer: {
      title: 'Buyer/Trader App',
      subtitle: 'Source quality produce directly from farmers',
      features: [
        'Browse certified produce',
        'Quality verification tools',
        'Bulk ordering system',
        'Logistics coordination',
        'Payment gateway integration',
        'Supplier relationship management'
      ],
      screenshots: [
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop',
        'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop',
        'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop'
      ],
      color: 'from-blue-500 to-cyan-500',
      downloads: '25K+',
      rating: 4.7
    },
    enterprise: {
      title: 'Enterprise Dashboard',
      subtitle: 'Comprehensive supply chain management',
      features: [
        'Real-time analytics dashboard',
        'Supply chain visualization',
        'ESG compliance reporting',
        'Bulk procurement management',
        'Quality assurance workflows',
        'Carbon footprint tracking'
      ],
      screenshots: [
        'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop',
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop',
        'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop'
      ],
      color: 'from-purple-500 to-violet-500',
      downloads: '10K+',
      rating: 4.9
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            UTHAAN Mobile
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful mobile applications designed for every stakeholder in the agricultural ecosystem
          </p>
        </div>

        {/* App Selection */}
        <div className="flex justify-center mb-16">
          <div className="glassmorphism p-2 rounded-2xl flex space-x-2">
            {Object.entries(apps).map(([key, app]) => (
              <button
                key={key}
                onClick={() => setActiveApp(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeApp === key
                    ? `bg-gradient-to-r ${app.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {app.title}
              </button>
            ))}
          </div>
        </div>

        {/* App Showcase */}
        <div className="glassmorphism-highlight p-12 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* App Info */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${apps[activeApp].color} flex items-center justify-center`}>
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{apps[activeApp].title}</h3>
                  <p className="text-lg text-gray-600">{apps[activeApp].subtitle}</p>
                </div>
              </div>

              {/* App Stats */}
              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 font-semibold">{apps[activeApp].downloads} Downloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-700 font-semibold">{apps[activeApp].rating}/5.0</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-gray-900">Key Features:</h4>
                {apps[activeApp].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${apps[activeApp].color} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Special Features Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="glassmorphism px-4 py-2 rounded-full flex items-center space-x-2">
                  <Mic className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">Voice Support</span>
                </div>
                <div className="glassmorphism px-4 py-2 rounded-full flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Multi-language</span>
                </div>
                <div className="glassmorphism px-4 py-2 rounded-full flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium text-gray-700">Offline Mode</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${apps[activeApp].color} text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2`}>
                  <Download className="w-5 h-5" />
                  <span>Download App</span>
                </button>
                <button className="glassmorphism text-gray-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Phone Mockups */}
            <div className="relative">
              <div className="flex justify-center space-x-4">
                {apps[activeApp].screenshots.map((screenshot, index) => (
                  <div key={index} className={`relative ${index === 1 ? 'scale-110 z-10' : 'scale-90'} transition-all duration-500`}>
                    {/* Phone Frame */}
                    <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                        {/* Status Bar */}
                        <div className="h-8 bg-gray-100 flex items-center justify-between px-6">
                          <div className="flex space-x-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          </div>
                          <div className="text-xs text-gray-600">9:41</div>
                          <div className="flex space-x-1">
                            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          </div>
                        </div>
                        {/* App Content */}
                        <img 
                          src={screenshot} 
                          alt={`${apps[activeApp].title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* App Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce animation-delay-1000 opacity-60"></div>
            </div>
          </div>
        </div>

        {/* App Comparison */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {Object.entries(apps).map(([key, app]) => (
            <div 
              key={key}
              className={`glassmorphism-card p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeApp === key ? 'ring-2 ring-green-300 scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveApp(key)}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-6`}>
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{app.subtitle}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{app.rating}</span>
                </div>
                <div className="text-sm font-medium text-gray-500">{app.downloads}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;