import React from 'react';

const Trusted = () => {
  const brands = [
    "URBAN BREW CAFE",
    "LUMIERE STUDIOS",
    "APEX CONSULTING",
    "DRIFTWOOD APPAREL",
    "NOVA TECH",
    "ELEVATE FITNESS"
  ];

  return (
    <section className="relative py-10 w-full overflow-hidden flex flex-col items-center justify-center mt-12 z-10">
      
      <p className="text-[#dc2626] text-[10px] tracking-[0.4em] font-mono uppercase mb-10 drop-shadow-[0_0_5px_#dc2626] text-center px-4">
        // Trusted By Visionaries
      </p>

      {/* Fade Effects (മൊബൈലിൽ ഇത് ചെറുതാക്കി) */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none"></div>

      {/* 🔥 w-max ഉം shrink-0 ഉം കൊടുത്തത് കാരണം ഇനി ഇത് പരസ്പരം ഇടിക്കില്ല 🔥 */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        
        {/* First Set of Brands */}
        <div className="flex shrink-0 gap-10 md:gap-16 px-5 md:px-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="text-gray-500 font-black tracking-[0.2em] uppercase text-xs md:text-base hover:text-[#dc2626] transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_10px_#dc2626] whitespace-nowrap">
              {brand}
            </div>
          ))}
        </div>

        {/* Second Set of Brands */}
        <div className="flex shrink-0 gap-10 md:gap-16 px-5 md:px-8 items-center">
          {brands.map((brand, index) => (
            <div key={index + 6} className="text-gray-500 font-black tracking-[0.2em] uppercase text-xs md:text-base hover:text-[#dc2626] transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_10px_#dc2626] whitespace-nowrap">
              {brand}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trusted;