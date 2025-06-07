import React, { useState } from 'react';
import { Shield, Cpu, BarChart3, Users, CreditCard, Smartphone } from 'lucide-react';

const SolutionSection = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      icon: Shield,
      title: 'Blockchain-Powered Crop Traceability',
      description: 'Every crop journey tracked from seed to shelf with immutable records',
      features: ['QR Code Scanning', 'Farm-to-Fork Journey', 'Quality Certificates', 'Authenticity Verification'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: 'IoT & AI for Smart Farming',
      description: 'Real-time monitoring and predictive analytics for optimal crop management',
      features: ['Soil Monitoring', 'Weather Analytics', 'Pest Detection', 'Yield Prediction'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Marketplace & Pricing',
      description: 'Dynamic pricing based on demand, quality, and market conditions',
      features: ['Live Price Updates', 'Demand Forecasting', 'Quality-based Pricing', 'Market Analytics'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Users,
      title: 'Farmer-Consumer Direct Bridge',
      description: 'Eliminate middlemen and connect farmers directly with consumers',
      features: ['Direct Sales Channel', 'Consumer App', 'Bulk Orders', 'Community Building'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: CreditCard,
      title: 'Decentralized Credit & Microloans',
      description: 'Access to financing based on farming data and blockchain reputation',
      features: ['Instant Loans', 'Crop Insurance', 'Credit Scoring', 'Payment Gateway'],
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Smartphone,
      title: 'Farmer App in Local Languages',
      description: 'User-friendly mobile application with vernacular support and voice commands',
      features: ['Voice Commands', 'Local Language Support', 'Offline Mode', 'Training Videos'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Complete
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform that addresses every challenge in modern agriculture
          </p>
        </div>

        {/* Interactive Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Solution Cards */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`glassmorphism-card p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeSolution === index 
                    ? 'scale-105 shadow-2xl border-2 border-green-300' 
                    : 'hover:scale-102'
                }`}
                onClick={() => setActiveSolution(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Solution Details */}
          <div className="glassmorphism-highlight p-8 rounded-3xl">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solutions[activeSolution].color} flex items-center justify-center mb-6`}>
              {React.createElement(solutions[activeSolution].icon, { className: "w-10 h-10 text-white" })}
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {solutions[activeSolution].title}
            </h3>
            
            <p className="text-lg text-gray-700 mb-8">
              {solutions[activeSolution].description}
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
              {solutions[activeSolution].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solutions[activeSolution].color}`}></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`mt-8 bg-gradient-to-r ${solutions[activeSolution].color} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;