import React from 'react';

const Navbar = () => {
  return (
    // md:pl-20 കൊടുത്തത് കൊണ്ട് ലാപ്ടോപ്പിൽ ലോഗോ സൈഡ് ബാർ കഴിഞ്ഞ് മാത്രമേ തുടങ്ങൂ
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:pl-20">
      
      {/* താഴെയുള്ള ആ ചുവന്ന വര */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#dc2626]/40 to-transparent"></div>

      {/* മുകളിലെ മെനു ബാർ */}
      <div className="max-w-[100rem] mx-auto px-6 md:px-10 py-4 md:py-5 flex justify-between items-center">
        
        {/* LEFT: Logo - ഇപ്പോൾ ഇത് സൈഡ് ബാറിന്റെ അടിയിൽ പോകില്ല */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
          <span className="text-[#dc2626] text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-occasional-glitch">⟁</span>
          <div className="flex flex-col">
            <span className="text-white font-black tracking-[0.2em] uppercase text-[11px] md:text-[12px] leading-none">Syndicate</span>
            <span className="text-gray-500 text-[7px] md:text-[8px] tracking-[0.4em] uppercase mt-1">Digital Agency</span>
          </div>
        </div>

        {/* RIGHT: Mobile Menu Icon */}
        <div className="flex md:hidden flex-col gap-1.5 items-end cursor-pointer group p-2">
          <span className="w-6 h-[1.5px] bg-white shadow-[0_0_5px_white]"></span>
          <span className="w-3 h-[1.5px] bg-gray-400 group-active:w-6 transition-all duration-300"></span>
        </div>

        {/* CENTER: Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {["Home", "Services", "Our Work", "About Us", "Insights"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "")}`} 
              className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#dc2626] transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#dc2626] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* INITIATE CONTACT Button (Desktop only) */}
        <div className="hidden md:block">
          <a href="#" className="border border-gray-700 px-6 py-2.5 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:border-[#dc2626] hover:text-[#dc2626] transition-all">
            Initiate Contact
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;