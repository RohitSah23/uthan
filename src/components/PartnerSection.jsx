import React, { useState } from 'react';
import { Users, Building2, Landmark, BarChart3, Globe, ArrowRight } from 'lucide-react';

const PartnerSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('fpos');

  const partnerCategories = {
    fpos: {
      icon: Users,
      title: 'FPOs & Farmer Groups',
      description: 'Empower your farmer community with blockchain-powered tools',
      benefits: [
        'Collective bargaining for better prices',
        'Transparent record keeping for all members',
        'Access to bulk buyers and premium markets',
        'Automated quality certification processes',
        'Financial inclusion with group lending'
      ],
      cta: 'Join as FPO Partner',
      color: 'from-green-500 to-emerald-500'
    },
    corporates: {
      icon: Building2,
      title: 'Corporates/ESG Buyers',
      description: 'Meet your sustainability goals with verified supply chains',
      benefits: [
        'Complete supply chain transparency',
        'Carbon footprint tracking and reporting',
        'Verified sustainable sourcing certificates',
        'Direct farmer relationships for CSR',
        'Automated ESG compliance reporting'
      ],
      cta: 'Partner with Us',
      color: 'from-blue-500 to-cyan-500'
    },
    government: {
      icon: Landmark,
      title: 'Government Agencies',
      description: 'Digitize agriculture with transparent, efficient systems',
      benefits: [
        'Automated subsidy distribution',
        'Real-time crop production monitoring',
        'Fraud prevention with blockchain verification',
        'Policy impact measurement tools',
        'Farmer welfare program management'
      ],
      cta: 'Explore Government Solutions',
      color: 'from-purple-500 to-violet-500'
    },
    startups: {
      icon: BarChart3,
      title: 'Agri Startups',
      description: 'Integrate your solutions with our comprehensive platform',
      benefits: [
        'API access to blockchain infrastructure',
        'Shared customer base and distribution',
        'Joint go-to-market strategies',
        'Technology integration partnerships',
        'Startup incubation support'
      ],
      cta: 'Become Tech Partner',
      color: 'from-orange-500 to-red-500'
    },
    ngos: {
      icon: Globe,
      title: 'NGOs / Climate Projects',
      description: 'Scale your impact with technology-driven agriculture programs',
      benefits: [
        'Impact measurement and reporting tools',
        'Carbon credits verification system',
        'Farmer training program digitization',
        'Grant distribution transparency',
        'Community development tracking'
      ],
      cta: 'Join Our Mission',
      color: 'from-teal-500 to-green-500'
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Partner with
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> UTHAAN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our ecosystem of partners revolutionizing agriculture across India
          </p>
        </div>

        {/* Partner Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(partnerCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105`
                  : 'glassmorphism text-gray-700 hover:scale-102'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Details */}
        <div className="glassmorphism-highlight p-12 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Category Info */}
            <div>
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${partnerCategories[selectedCategory].color} flex items-center justify-center mb-8`}>
                {React.createElement(partnerCategories[selectedCategory].icon, { className: "w-10 h-10 text-white" })}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {partnerCategories[selectedCategory].title}
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {partnerCategories[selectedCategory].description}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-gray-900">Partnership Benefits:</h4>
                {partnerCategories[selectedCategory].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${partnerCategories[selectedCategory].color} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className={`bg-gradient-to-r ${partnerCategories[selectedCategory].color} text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2`}>
                <span>{partnerCategories[selectedCategory].cta}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Partnership Process */}
            <div className="glassmorphism-card p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">Partnership Process</h4>
              
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Initial Discussion', description: 'Share your goals and explore partnership opportunities' },
                  { step: 2, title: 'Proposal & Agreement', description: 'Customize partnership terms based on your needs' },
                  { step: 3, title: 'Integration & Setup', description: 'Technical integration and onboarding process' },
                  { step: 4, title: 'Launch & Support', description: 'Go live with dedicated support and monitoring' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${partnerCategories[selectedCategory].color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-semibold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-3">Current Partners</h5>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-500">150+</div>
                    <div className="text-sm text-gray-600">Active Partners</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-500">25</div>
                    <div className="text-sm text-gray-600">States Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glassmorphism-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Maharashtra FPO</h3>
            <p className="text-gray-600 mb-4">"Increased our collective income by 40% through direct market access"</p>
            <div className="text-green-500 font-semibold">2,500 farmers impacted</div>
          </div>
          
          <div className="glassmorphism-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">TechCorp Ltd</h3>
            <p className="text-gray-600 mb-4">"Achieved 100% supply chain transparency for our ESG reporting"</p>
            <div className="text-blue-500 font-semibold">500 ton CO₂ offset</div>
          </div>
          
          <div className="glassmorphism-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Green Future NGO</h3>
            <p className="text-gray-600 mb-4">"Scaled our impact programs to reach 10,000+ farmers efficiently"</p>
            <div className="text-purple-500 font-semibold">10x program reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;