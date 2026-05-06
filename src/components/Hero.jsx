import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 px-8 max-w-[100rem] mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[85vh]">
      
      {/* LEFT TEXT CONTENT */}
      <div className="max-w-4xl relative z-10 w-full text-center lg:text-left flex flex-col items-center lg:items-start mt-10 lg:mt-0">
        <p className="text-gray-500 text-[10px] tracking-[0.4em] font-mono mb-6 md:mb-8 flex items-center gap-4 uppercase justify-center lg:justify-start w-full">
          // We are Syndicate <span className="hidden md:block w-16 h-[1px] bg-gray-700"></span>
        </p>
        
        <h1 className="text-[3.5rem] leading-[0.9] sm:text-5xl md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter mb-8 w-full">
          We Don't <br className="hidden sm:block" /> Build Websites. <br/>
          <span className="text-[#dc2626] drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">We Forge<br/>Empires.</span>
        </h1>
        
        <p className="text-gray-400 max-w-lg text-xs md:text-sm leading-relaxed mb-10 md:mb-12 uppercase tracking-wide px-4 lg:px-0 text-center lg:text-left">
          Syndicate is an elite digital agency for visionary brands and disruptive startups. We don't just write code, we architect the digital future.
        </p>
        
        <a href="#services" className="inline-block relative bg-transparent border border-gray-700 hover:border-[#dc2626] text-white px-8 md:px-10 py-4 md:py-5 uppercase font-bold text-[10px] md:text-xs tracking-[0.2em] transition-all duration-300 group cursor-pointer">
          <span className="text-[#dc2626] mr-3 group-hover:drop-shadow-[0_0_8px_#dc2626]">⟁</span> View Our Work
        </a>
      </div>

      {/* RIGHT CORE GRAPHIC AREA (System Status Removed) */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-24 lg:mt-0 px-8">
        <div className="relative w-[280px] h-[280px] md:w-[480px] md:h-[480px] flex items-center justify-center animate-subtle-pulse">
            
            <div className="absolute inset-0 rounded-full border border-[#dc2626]/20 animate-[spin_40s_linear_infinite] border-dashed shadow-[0_0_30px_rgba(220,38,38,0.1)]"></div>
            <div className="absolute inset-8 rounded-full border border-[#dc2626]/30 animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="absolute inset-16 rounded-full border-[0.5px] border-[#dc2626]/10 animate-[spin_50s_linear_infinite]"></div>

            <div className="relative z-10 flex flex-col items-center justify-center translate-y-[-10px]">
                <span className="text-[8rem] md:text-[11rem] font-black leading-none animate-occasional-glitch">⟁</span>
                <span className="text-xl md:text-2xl font-black tracking-[0.5em] uppercase mt-2 animate-occasional-glitch">Syndicate</span>
            </div>

            <div className="absolute inset-0 z-0 animate-energy-flow">
              <div className="w-1 h-1 bg-[#dc2626] rounded-full absolute top-[10%] left-[20%] shadow-[0_0_10px_#dc2626]"></div>
              <div className="w-1.5 h-1.5 bg-[#dc2626] rounded-full absolute bottom-[30%] left-[60%] shadow-[0_0_10px_#dc2626]"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;