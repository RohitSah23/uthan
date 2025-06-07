import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Check, Users, Building, ShoppingCart } from 'lucide-react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    role: 'farmer',
    name: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    { value: 'farmer', label: 'Farmer', icon: Users },
    { value: 'fpo', label: 'FPO/Cooperative', icon: Building },
    { value: 'buyer', label: 'Buyer/Trader', icon: ShoppingCart },
    { value: 'enterprise', label: 'Enterprise', icon: Building },
    { value: 'other', label: 'Other', icon: Users }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-20 w-40 h-40 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-400 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Agriculture?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of farmers, businesses, and partners who are already using UTHAAN 
            to revolutionize how agriculture works in India.
          </p>
        </div>

        {/* Main CTA Form */}
        <div className="glassmorphism-dark p-12 rounded-3xl max-w-4xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Get Early Access</h3>
                <p className="text-white/70">Be among the first to experience the future of agriculture</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label className="block text-white/80 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Role Selection */}
                <div>
                  <label className="block text-white/80 font-medium mb-2">Your Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  >
                    {roles.map((role) => (
                      <option key={role.value} value={role.value} className="bg-gray-800">
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-white/80 font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-white/80 font-medium mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl flex items-center space-x-3 mx-auto"
                >
                  <span>Join the Revolution</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <p className="text-white/60 text-sm mt-4">
                  Free to join • No credit card required • Instant access
                </p>
              </div>
            </form>
          ) : (
            // Success State
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Welcome to UTHAAN!</h3>
              <p className="text-xl text-white/80 mb-6">
                Thank you for joining us. We'll be in touch soon with your early access details.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="glassmorphism text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                  Download App
                </button>
                <button className="glassmorphism text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                  Join Community
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Alternative Actions */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="glassmorphism-dark p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4">Request Demo</h4>
            <p className="text-white/70 mb-6">See UTHAAN in action with a personalized demo</p>
            <button className="glassmorphism text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
              Book Demo
            </button>
          </div>

          <div className="glassmorphism-dark p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4">Schedule Call</h4>
            <p className="text-white/70 mb-6">Speak directly with our team about your needs</p>
            <button className="glassmorphism text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
              Book Call
            </button>
          </div>

          <div className="glassmorphism-dark p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-4">Enterprise Solution</h4>
            <p className="text-white/70 mb-6">Custom enterprise solutions for large organizations</p>
            <button className="glassmorphism text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-8">Trusted by leading organizations</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-white font-bold text-lg">ICAR</div>
            <div className="text-white font-bold text-lg">NABARD</div>
            <div className="text-white font-bold text-lg">FPO Network</div>
            <div className="text-white font-bold text-lg">AgTech India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;