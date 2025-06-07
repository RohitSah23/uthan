import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyUTHAANSection from './components/WhyUTHAANSection';
import EcosystemSection from './components/EcosystemSection';
import TestimonialsSection from './components/TestimonialsSection';
import TechnologySection from './components/TechnologySection';
import DashboardSection from './components/DashboardSection';
import PartnerSection from './components/PartnerSection';
import MobileAppSection from './components/MobileAppSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <WhyUTHAANSection />
      <EcosystemSection />
      <TestimonialsSection />
      <TechnologySection />
      <DashboardSection />
      <PartnerSection />
      <MobileAppSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;