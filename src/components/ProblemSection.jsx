import React from 'react';
import { TrendingDown, Users, AlertTriangle, DollarSign } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Fragmented Supply Chains',
      description: 'Complex, inefficient routes from farm to consumer',
      stat: '40% Price Volatility',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Middlemen Exploitation',
      description: 'Multiple intermediaries reduce farmer profits',
      stat: '70% Profit Loss',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: AlertTriangle,
      title: 'Lack of Traceability',
      description: 'No transparency in food origin and quality',
      stat: '₹92,651 Cr Lost',
      color: 'from-yellow-500 to-red-500'
    },
    {
      icon: DollarSign,
      title: 'Poor Market Access',
      description: 'Limited financing and market opportunities',
      stat: '60% Underfinanced',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            The Problems We're
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Solving</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indian agriculture faces critical challenges that affect millions of farmers and consumers daily
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group glassmorphism-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {problem.description}
              </p>
              
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${problem.color} text-white font-semibold text-sm`}>
                {problem.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="glassmorphism-highlight p-12 rounded-3xl text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              "India loses <span className="text-red-500">₹92,651 crore</span> worth of produce annually due to supply inefficiencies."
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              UTHAAN is revolutionizing agriculture to eliminate these losses and empower every stakeholder in the value chain.
            </p>
            <div className="flex justify-center space-x-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">40M+</div>
                <div className="text-gray-600">Affected Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">25%</div>
                <div className="text-gray-600">Food Wastage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">70%</div>
                <div className="text-gray-600">Profit Leakage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;