import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajinder Singh',
      role: 'Wheat Farmer',
      location: 'Punjab',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Thanks to UTHAAN, I now sell directly to cities and earn 2x more! The blockchain system gives me confidence that my hard work is properly valued.',
      impact: '2x Income Increase',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Organic Farmer',
      location: 'Karnataka',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The organic certification process is now so simple. UTHAAN tracks everything automatically and buyers trust our products completely.',
      impact: 'Instant Certification',
      rating: 5
    },
    {
      name: 'Fresh Foods Ltd',
      role: 'Retail Chain',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'UTHAAN transformed our supply chain. We can trace every product back to its source, and our customers love the transparency.',
      impact: '100% Traceability',
      rating: 5
    },
    {
      name: 'Green Earth Cooperative',
      role: 'FPO',
      location: 'Uttar Pradesh',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Managing 500+ farmers was challenging until UTHAAN. Now everything is automated - from quality checks to payments.',
      impact: '500+ Farmers Connected',
      rating: 5
    },
    {
      name: 'TechCorp Sustainability',
      role: 'Corporate Buyer',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'UTHAAN helps us meet our ESG goals with verified sustainable sourcing. The carbon credit tracking is a game-changer.',
      impact: 'ESG Compliance',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Success
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real impact stories from farmers, businesses, and partners across India
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="glassmorphism-highlight p-12 rounded-3xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-32 h-32 rounded-full object-cover shadow-xl"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 flex items-center justify-center md:justify-start space-x-2">
                    <span>{testimonials[currentTestimonial].role}</span>
                    <MapPin className="w-4 h-4" />
                    <span>{testimonials[currentTestimonial].location}</span>
                  </p>
                </div>

                {/* Impact Badge */}
                <div className="mt-6">
                  <span className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold">
                    {testimonials[currentTestimonial].impact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glassmorphism w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glassmorphism w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="glassmorphism-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">10K+</div>
            <div className="text-gray-600">Happy Farmers</div>
          </div>
          <div className="glassmorphism-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
            <div className="text-gray-600">Business Partners</div>
          </div>
          <div className="glassmorphism-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">₹50Cr+</div>
            <div className="text-gray-600">Transactions Processed</div>
          </div>
          <div className="glassmorphism-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;