import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'For Farmers', href: '#' },
        { name: 'For Enterprises', href: '#' },
        { name: 'For FPOs', href: '#' },
        { name: 'For Buyers', href: '#' },
        { name: 'API Documentation', href: '#' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Support', href: '#' },
        { name: 'Training Videos', href: '#' },
        { name: 'Community Forum', href: '#' },
        { name: 'System Status', href: '#' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Data Protection', href: '#' },
        { name: 'Compliance', href: '#' }
      ]
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              UTHAAN
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Revolutionizing agriculture through blockchain technology, IoT, and AI. 
              Empowering farmers, connecting markets, and ensuring transparency from farm to fork.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">hello@uthaan.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glassmorphism-dark rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-bold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 mt-16 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-white/80">
                Get the latest updates on agriculture technology, market insights, and UTHAAN news.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Globe className="w-5 h-5 text-white/60" />
              <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400">
                <option value="en" className="bg-gray-800">English</option>
                <option value="hi" className="bg-gray-800">हिंदी</option>
                <option value="kn" className="bg-gray-800">ಕನ್ನಡ</option>
                <option value="ta" className="bg-gray-800">தமிழ்</option>
                <option value="te" className="bg-gray-800">తెలుగు</option>
                <option value="mr" className="bg-gray-800">मराठी</option>
                <option value="gu" className="bg-gray-800">ગુજરાતી</option>
                <option value="pa" className="bg-gray-800">ਪੰਜਾਬੀ</option>
              </select>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © 2024 UTHAAN. All rights reserved. | Made with ❤️ for Indian Agriculture
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">10K+</div>
              <div className="text-white/60 text-sm">Active Farmers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-white/60 text-sm">Partner Organizations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">₹50Cr+</div>
              <div className="text-white/60 text-sm">Transactions Processed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-1">25</div>
              <div className="text-white/60 text-sm">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;