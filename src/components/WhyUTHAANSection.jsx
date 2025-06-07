import React from 'react';
import { Shield, Users, BarChart3, CreditCard, Award, TreePine } from 'lucide-react';

const WhyUTHAANSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Transparent Pricing',
      description: 'Real-time, fair pricing based on quality and market demand',
      traditional: 'Hidden pricing with multiple markups',
      uthaan: 'Transparent, blockchain-verified pricing'
    },
    {
      icon: Users,
      title: 'Data Ownership by Farmers',
      description: 'Farmers control and benefit from their agricultural data',
      traditional: 'Data controlled by intermediaries',
      uthaan: 'Farmer-owned data with monetization'
    },
    {
      icon: BarChart3,
      title: 'Blockchain Security',
      description: 'Immutable records ensuring trust and authenticity',
      traditional: 'Paper-based, easily manipulated records',
      uthaan: 'Tamper-proof blockchain verification'
    },
    {
      icon: CreditCard,
      title: 'Inclusive Financial Access',
      description: 'Credit and insurance based on farming performance',
      traditional: 'Limited access to formal credit',
      uthaan: 'AI-driven credit scoring and instant loans'
    },
    {
      icon: Award,
      title: 'Organic Certification',
      description: 'Automated certification process with continuous monitoring',
      traditional: 'Expensive, time-consuming certification',
      uthaan: 'Real-time organic certification tracking'
    },
    {
      icon: TreePine,
      title: 'ESG Reporting',
      description: 'Comprehensive sustainability metrics for enterprises',
      traditional: 'Manual, inconsistent reporting',
      uthaan: 'Automated ESG compliance and reporting'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> UTHAAN?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another platform - we're revolutionizing how agriculture works
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glassmorphism-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Comparison */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-500 line-through">{benefit.traditional}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-green-700 font-medium">{benefit.uthaan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Chart */}
        <div className="glassmorphism-highlight p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Traditional vs UTHAAN</h3>
            <p className="text-lg text-gray-700">See the difference we make in every aspect of agriculture</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional System */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-red-600 mb-6 text-center">Traditional System</h4>
              <div className="space-y-4">
                {[
                  'Multiple intermediaries reduce profits',
                  'Paper-based records prone to fraud',
                  'Limited market access for farmers',
                  'Opaque pricing mechanisms',
                  'Difficult quality verification',
                  'Manual, time-consuming processes'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UTHAAN System */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-green-600 mb-6 text-center">UTHAAN Platform</h4>
              <div className="space-y-4">
                {[
                  'Direct farmer-to-consumer connections',
                  'Blockchain-secured immutable records',
                  'Global marketplace access',
                  'AI-driven transparent pricing',
                  'Automated quality certification',
                  'Smart contracts for instant payments'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">3x</div>
              <div className="text-gray-600">Higher Farmer Income</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">50%</div>
              <div className="text-gray-600">Reduced Food Waste</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">90%</div>
              <div className="text-gray-600">Faster Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-600">Supply Chain Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUTHAANSection;