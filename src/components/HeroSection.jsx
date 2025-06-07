import React, { useState, useEffect } from 'react';
import { Play, ChevronDown, ArrowRight, Smartphone, Network } from 'lucide-react';

const HeroSection = () => {
  const texts = ['Traceability', 'Smart Farming', 'Micro-financing', 'Supply Chain'];
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentText];
      if (!isDeleting) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(fullText.slice(0, displayText.length - 1));
        if (!displayText) {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4 sm:mb-6">
            <Network className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-xs sm:text-sm font-medium text-white">Blockchain-Powered Agriculture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug">
            Empowering Agriculture Through{' '}
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blockchain
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
            UTHAAN bridges farmers, agribusinesses, and innovators with trustless, transparent,
            data-driven solutions for a new farm-to-future ecosystem.
          </p>

          {/* Typewriter */}
          <div className="mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-white/80 mb-2">Transforming:</p>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-lg sm:text-xl font-semibold text-white">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center">
            <button className="flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transform hover:scale-105 transition duration-300">
              Join the UTHAAN Ecosystem
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-sm sm:text-base border border-white/30 hover:bg-white/30 transition duration-300">
              <Play className="mr-2 w-5 h-5" />
              Learn More
            </button>
          </div>

          {/* Scroll */}

        </div>

        {/* Right: hide on md */}
        <div className="hidden md:flex justify-center lg:justify-end">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-md">
                  <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <span className="text-base sm:text-lg font-medium text-white">Smart Farming</span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-auto"></div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                  <Network className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <span className="text-base sm:text-lg font-medium text-white">Blockchain Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
