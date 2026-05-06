import React from 'react';
import Navbar from './components/Navbar';
import SideRail from './components/SideRail';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-[#dc2626] selection:text-white overflow-hidden">
      
      {/* Custom Background Image */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center md:bg-right"></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-black/60"></div>

      {/* Left Vertical Side Rail */}
      <SideRail />

      {/* Main Content Area - ഇവിടെ md:pl-20 എന്ന് കൊടുത്തതുകൊണ്ട് കണ്ടന്റ് വലത്തോട്ട് മാറി നിൽക്കും */}
      <div className="relative z-10 md:pl-20 h-screen overflow-y-auto overflow-x-hidden scroll-smooth w-full">
        <Navbar />
        <main className="w-full">
          <Hero />
          <Trusted />
          <Services />
        </main>
      </div>
    </div>
  );
}

export default App;