import React, { useState, useEffect } from 'react';
import { Filter, TrendingUp, TrendingDown, Activity, Users, Droplets, Leaf } from 'lucide-react';

const DashboardSection = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock real-time data
  const [dashboardData, setDashboardData] = useState({
    cropPrices: {
      wheat: 2150,
      rice: 3200,
      corn: 1890,
      soybean: 4200
    },
    farmerRegistrations: 10847,
    carbonOffset: 25430,
    waterSaved: 1.2
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time data updates
      setDashboardData(prev => ({
        ...prev,
        cropPrices: {
          wheat: prev.cropPrices.wheat + (Math.random() - 0.5) * 20,
          rice: prev.cropPrices.rice + (Math.random() - 0.5) * 30,
          corn: prev.cropPrices.corn + (Math.random() - 0.5) * 15,
          soybean: prev.cropPrices.soybean + (Math.random() - 0.5) * 40
        },
        farmerRegistrations: prev.farmerRegistrations + Math.floor(Math.random() * 3),
        carbonOffset: prev.carbonOffset + Math.floor(Math.random() * 10),
        waterSaved: prev.waterSaved + (Math.random() * 0.01)
      }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const states = ['all', 'Punjab', 'Karnataka', 'Maharashtra', 'UP', 'Gujarat'];
  const crops = ['all', 'Wheat', 'Rice', 'Corn', 'Soybean', 'Cotton'];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Real-time
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Dashboard</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Live data streaming from farms across India - powered by UTHAAN's comprehensive monitoring system
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Activity className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">
              Live • Last updated: {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* Dashboard Filters */}
        <div className="glassmorphism-dark p-6 rounded-2xl mb-12">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="w-5 h-5 text-white/60" />
            <div className="flex items-center space-x-2">
              <span className="text-white/80 font-medium">State:</span>
              <select 
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="glassmorphism-dark-select px-4 py-2 rounded-lg text-white bg-white/10 border border-white/20"
              >
                {states.map(state => (
                  <option key={state} value={state} className="bg-gray-800">
                    {state === 'all' ? 'All States' : state}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white/80 font-medium">Crop:</span>
              <select 
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="glassmorphism-dark-select px-4 py-2 rounded-lg text-white bg-white/10 border border-white/20"
              >
                {crops.map(crop => (
                  <option key={crop} value={crop} className="bg-gray-800">
                    {crop === 'all' ? 'All Crops' : crop}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Crop Prices */}
          <div className="lg:col-span-2 glassmorphism-dark p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span>Live Crop Prices (₹/quintal)</span>
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(dashboardData.cropPrices).map(([crop, price]) => (
                <div key={crop} className="glassmorphism-card-dark p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white capitalize">{crop}</h4>
                      <p className="text-white/60 text-sm">Per Quintal</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">₹{price.toFixed(0)}</div>
                      <div className="flex items-center space-x-1 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-green-400">+2.3%</span>
                      </div>
                    </div>
                  </div>
                  {/* Mini price chart visualization */}
                  <div className="h-8 flex items-end space-x-1">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i}
                        className="flex-1 bg-gradient-to-t from-green-500/20 to-green-500/60 rounded-sm"
                        style={{ height: `${Math.random() * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-6">
            {/* Farmer Registrations */}
            <div className="glassmorphism-dark p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">Farmer Registrations</h4>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {dashboardData.farmerRegistrations.toLocaleString()}
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400">+15.2% this month</span>
              </div>
            </div>

            {/* Carbon Credits */}
            <div className="glassmorphism-dark p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Leaf className="w-6 h-6 text-green-400" />
                <h4 className="text-lg font-semibold text-white">Carbon Offsets</h4>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {dashboardData.carbonOffset.toLocaleString()} tons
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400">+8.7% this week</span>
              </div>
            </div>

            {/* Water Saved */}
            <div className="glassmorphism-dark p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Droplets className="w-6 h-6 text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">Water Saved</h4>
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {dashboardData.waterSaved.toFixed(1)}M liters
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400">+12.4% efficiency</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Analytics */}
        <div className="mt-12 glassmorphism-dark p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Market Analytics & Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">₹2.1Cr</div>
              <div className="text-white/80">Daily Transaction Volume</div>
              <div className="text-green-400 text-sm mt-1">+23% from yesterday</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">1,247</div>
              <div className="text-white/80">Active Markets</div>
              <div className="text-green-400 text-sm mt-1">+5 new markets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">94.7%</div>
              <div className="text-white/80">Quality Compliance Rate</div>
              <div className="text-green-400 text-sm mt-1">+1.2% improvement</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="glassmorphism text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 border border-white/20">
            Request Full Dashboard Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;