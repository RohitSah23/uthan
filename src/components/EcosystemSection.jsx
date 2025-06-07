import React, { useState } from 'react';
import { Users, FlaskConical, Store, Building, Truck, ShoppingCart, Landmark, Database, Leaf } from 'lucide-react';

const EcosystemSection = () => {
  const [activeNode, setActiveNode] = useState(null);

  const ecosystemNodes = [
    {
      id: 'farmers',
      icon: Users,
      title: 'Farmers',
      description: 'Individual farmers and farmer groups who grow and harvest crops',
      details: 'Connect directly with buyers, access financing, get real-time pricing, and maintain crop records on blockchain',
      position: 'top-20 left-20',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'labs',
      icon: FlaskConical,
      title: 'Agri Labs',
      description: 'Research institutions and testing laboratories',
      details: 'Provide quality testing, certification services, and research data to ensure crop standards',
      position: 'top-20 right-20',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mandis',
      icon: Store,
      title: 'Local Mandis',
      description: 'Traditional wholesale markets and trading centers',
      details: 'Digital transformation of local markets with transparent pricing and quality verification',
      position: 'top-1/2 left-10',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'fpos',
      icon: Building,
      title: 'FPOs & Cooperatives',
      description: 'Farmer Producer Organizations and agricultural cooperatives',
      details: 'Collective bargaining power, bulk operations, and shared resources for member farmers',
      position: 'top-1/2 right-10',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Logistics',
      description: 'Transportation and supply chain management',
      details: 'Cold chain management, GPS tracking, and efficient delivery systems',
      position: 'bottom-32 left-1/4',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'retail',
      icon: ShoppingCart,
      title: 'Retail Chains',
      description: 'Supermarkets, restaurants, and food processors',
      details: 'Direct sourcing from farmers, quality assurance, and consumer-ready products',
      position: 'bottom-32 right-1/4',
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'govt',
      icon: Landmark,
      title: 'Govt & NGOs',
      description: 'Government agencies and non-profit organizations',
      details: 'Policy implementation, subsidies distribution, and social impact programs',
      position: 'bottom-20 left-32',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'data',
      icon: Database,
      title: 'Data & AI Providers',
      description: 'Technology companies providing analytics and insights',
      details: 'Weather data, market analytics, IoT sensors, and predictive modeling services',
      position: 'bottom-20 right-32',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'carbon',
      icon: Leaf,
      title: 'Carbon Credits Market',
      description: 'Environmental sustainability and carbon offset programs',
      details: 'Track carbon sequestration, sustainable farming practices, and environmental impact',
      position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      color: 'from-green-400 to-emerald-400'
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            The UTHAAN
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive network connecting every stakeholder in the agricultural value chain
          </p>
        </div>

        {/* Interactive Ecosystem Map */}
        <div className="relative">
          <div className="glassmorphism-card p-12 rounded-3xl">
            <div className="relative h-96 md:h-[600px]">
              {/* Connection Lines - SVG Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Example connection lines - you can add more based on relationships */}
                <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                <line x1="10%" y1="50%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                <line x1="90%" y1="50%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              </svg>

              {/* Ecosystem Nodes */}
              {ecosystemNodes.map((node) => (
                <div
                  key={node.id}
                  className={`absolute ${node.position} transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                  onMouseEnter={() => setActiveNode(node)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${node.color} 
                    flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300
                    ${activeNode?.id === node.id ? 'scale-125 shadow-2xl' : ''}`}
                  >
                    <node.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  
                  {/* Node Label */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2">
                    <div className="glassmorphism px-3 py-1 rounded-lg text-sm font-semibold text-gray-700 whitespace-nowrap">
                      {node.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Node Details */}
          {activeNode && (
            <div className="mt-8 glassmorphism-highlight p-8 rounded-2xl transition-all duration-500">
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeNode.color} flex items-center justify-center flex-shrink-0`}>
                  <activeNode.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activeNode.title}</h3>
                  <p className="text-gray-600 mb-4 text-lg">{activeNode.description}</p>
                  <p className="text-gray-700 leading-relaxed">{activeNode.details}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Ecosystem Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glassmorphism-card p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-green-500 mb-4">9+</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Stakeholder Types</h3>
            <p className="text-gray-600">Complete ecosystem coverage</p>
          </div>
          <div className="glassmorphism-card p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">100%</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
            <p className="text-gray-600">Every transaction tracked</p>
          </div>
          <div className="glassmorphism-card p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-purple-500 mb-4">24/7</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Data</h3>
            <p className="text-gray-600">Always-on ecosystem monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;