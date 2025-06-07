import React, { useState } from 'react';
import { User, Store, Building2, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const [activeView, setActiveView] = useState('farmer');

  const views = {
    farmer: {
      title: 'Farmer Journey',
      icon: User,
      steps: [
        { title: 'Register & Geo-tag Farm', description: 'Create profile with farm location and details', icon: '📍' },
        { title: 'Input Crop Information', description: 'Add crop type, variety, and planting details via app', icon: '🌱' },
        { title: 'Monitor Growth', description: 'Track progress with IoT sensors and drone data', icon: '📊' },
        { title: 'Harvest & Quality Check', description: 'Auto-certify quality with blockchain verification', icon: '✅' },
        { title: 'Enter Supply Chain', description: 'List on marketplace or sell directly to buyers', icon: '🚚' },
        { title: 'Get Paid Instantly', description: 'Receive payments via smart contracts', icon: '💰' }
      ]
    },
    retailer: {
      title: 'Retailer/Buyer Journey',
      icon: Store,
      steps: [
        { title: 'Browse Marketplace', description: 'View available crops with quality certificates', icon: '🔍' },
        { title: 'Verify Traceability', description: 'Check complete farm-to-market journey', icon: '🔗' },
        { title: 'Place Orders', description: 'Bulk ordering with guaranteed quality', icon: '📦' },
        { title: 'Track Shipment', description: 'Real-time logistics and delivery tracking', icon: '🚛' },
        { title: 'Quality Assurance', description: 'Receive products with blockchain certificates', icon: '🏅' },
        { title: 'Make Payment', description: 'Secure payments through smart contracts', icon: '💳' }
      ]
    },
    enterprise: {
      title: 'Enterprise/Corporate Journey',
      icon: Building2,
      steps: [
        { title: 'ESG Compliance Setup', description: 'Configure sustainability and compliance requirements', icon: '🌍' },
        { title: 'Supplier Network', description: 'Connect with verified sustainable farmers', icon: '🤝' },
        { title: 'Bulk Procurement', description: 'Large-scale sourcing with quality guarantees', icon: '📈' },
        { title: 'Carbon Credit Tracking', description: 'Monitor and report environmental impact', icon: '🌿' },
        { title: 'Supply Chain Analytics', description: 'Detailed reporting and insights dashboard', icon: '📊' },
        { title: 'Brand Transparency', description: 'Share supply chain story with consumers', icon: '📢' }
      ]
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            How UTHAAN
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamless workflows designed for every stakeholder in the agricultural ecosystem
          </p>
        </div>

        {/* View Selector */}
        <div className="flex justify-center mb-16">
          <div className="glassmorphism p-2 rounded-2xl flex space-x-2">
            {Object.entries(views).map(([key, view]) => (
              <button
                key={key}
                onClick={() => setActiveView(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeView === key
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <view.icon className="w-5 h-5" />
                <span>{view.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-blue-500 rounded-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {views[activeView].steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-12 space-y-6 lg:space-y-0`}
              >
                {/* Step Card */}
                <div className="flex-1 lg:max-w-md">
                  <div className="glassmorphism-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{step.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10 hidden lg:block">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="flex-1 lg:max-w-md hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glassmorphism-highlight p-12 rounded-3xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your {activeView === 'farmer' ? 'Farm' : activeView === 'retailer' ? 'Business' : 'Enterprise'}?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of stakeholders already using UTHAAN to revolutionize agriculture
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl flex items-center space-x-2 mx-auto">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;