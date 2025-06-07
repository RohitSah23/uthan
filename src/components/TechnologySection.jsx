import React, { useState } from 'react';
import { Link, Cpu, Brain, Shield, Repeat, ChevronDown } from 'lucide-react';

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState('blockchain');

  const technologies = {
    blockchain: {
      icon: Link,
      title: 'Lagom Blockchain Integration',
      description: 'Immutable ledger for crop traceability and smart contracts',
      features: [
        'Immutable crop records from seed to shelf',
        'Smart contracts for automated payments',
        'Decentralized identity for farmers',
        'Supply chain transparency',
        'Quality certification on-chain'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    iot: {
      icon: Cpu,
      title: 'IoT and Sensor Data Stream',
      description: 'Real-time monitoring of crops and environmental conditions',
      features: [
        'Soil moisture and pH monitoring',
        'Weather station integration',
        'Drone surveillance and imagery',
        'Automated irrigation systems',
        'Pest and disease detection sensors'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    ai: {
      icon: Brain,
      title: 'AI/ML for Prediction',
      description: 'Machine learning models for crop yield and market prediction',
      features: [
        'Yield prediction algorithms',
        'Market price forecasting',
        'Crop disease identification',
        'Optimal planting recommendations',
        'Resource optimization models'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    contracts: {
      icon: Shield,
      title: 'Smart Contract Logic',
      description: 'Automated, trustless execution of agreements',
      features: [
        'Automated payment processing',
        'Quality-based pricing contracts',
        'Insurance claim automation',
        'Supply chain milestone tracking',
        'Escrow and dispute resolution'
      ],
      color: 'from-orange-500 to-red-500'
    },
    integration: {
      icon: Repeat,
      title: 'Government API Integration',
      description: 'Seamless integration with eNAM, Agmark, and other government systems',
      features: [
        'eNAM marketplace integration',
        'Agmark quality standards compliance',
        'FPO registration and management',
        'Subsidy distribution automation',
        'Compliance reporting dashboard'
      ],
      color: 'from-teal-500 to-green-500'
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Technology Behind
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> UTHAAN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology stack powering the future of agriculture
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'glassmorphism text-gray-700 hover:scale-102'
              }`}
            >
              <tech.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{tech.title}</span>
            </button>
          ))}
        </div>

        {/* Active Technology Details */}
        <div className="glassmorphism-highlight p-12 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Technology Info */}
            <div>
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${technologies[activeTab].color} flex items-center justify-center mb-8`}>
                {React.createElement(technologies[activeTab].icon, { className: "w-10 h-10 text-white" })}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {technologies[activeTab].title}
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {technologies[activeTab].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[activeTab].color} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Representation */}
            <div className="glassmorphism-card p-8 rounded-2xl">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Technical Architecture</h4>
                
                {/* Mock Architecture Diagram */}
                <div className="space-y-4">
                  {[
                    { name: 'User Interface Layer', width: '100%', color: 'bg-blue-200' },
                    { name: 'API Gateway', width: '90%', color: 'bg-green-200' },
                    { name: 'Business Logic', width: '80%', color: 'bg-purple-200' },
                    { name: 'Blockchain Layer', width: '70%', color: 'bg-orange-200' },
                    { name: 'Data Storage', width: '60%', color: 'bg-red-200' }
                  ].map((layer, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{layer.name}</span>
                        <span className="text-xs text-gray-500">{layer.width}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`${layer.color} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: layer.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <h5 className="font-semibold text-gray-900 mb-3">Performance Metrics</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500">&lt;2s</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-500">10M+</div>
                      <div className="text-sm text-gray-600">Transactions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">256-bit</div>
                      <div className="text-sm text-gray-600">Encryption</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="glassmorphism-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
            <p className="text-gray-600">Bank-grade security with blockchain immutability and end-to-end encryption</p>
          </div>
          
          <div className="glassmorphism-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Infrastructure</h3>
            <p className="text-gray-600">Cloud-native architecture that scales from individual farmers to enterprise deployments</p>
          </div>
          
          <div className="glassmorphism-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Insights</h3>
            <p className="text-gray-600">Machine learning algorithms provide predictive analytics and intelligent recommendations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;