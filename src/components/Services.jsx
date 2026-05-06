import React from 'react';

const Services = () => {
  // ഓരോ സർവീസിനുമുള്ള വിവരങ്ങൾ
  const servicesData = [
    {
      id: "01",
      title: "WEB DESIGNING & DEVELOPMENT",
      description: "Code that conquers. Design that dominates. We forge custom, high-converting digital fortresses.",
      // 🔥 GRAPHIC AREA 01: WEB (Simulation UI) 🔥
      // നീ റെഡിയാക്കുമ്പോൾ ഈ താഴെ കാണുന്ന <div> മൊത്തമായി മാറ്റിയിട്ട് നിന്റെ 
      // വെബ്സൈറ്റ് Mockup അല്ലെങ്കിൽ പ്രൊജക്റ്റ് ലിങ്ക് ഇവിടെ വെക്കുക.
      graphic: (
        <div className="w-full h-full p-4 border border-[#dc2626]/10 rounded-xl bg-black/30 group-hover:bg-[#0b0b0b]/60 transition-colors flex flex-col gap-2">
          {/* Simulated Browser Bar (Just UI Simulation) */}
          <div className="w-full h-5 border-b border-[#dc2626]/10 flex items-center gap-1.5 px-2">
            <span className="w-2 h-2 rounded-full bg-[#dc2626]/50"></span>
            <span className="w-2 h-2 rounded-full bg-gray-700"></span>
            <span className="w-2 h-2 rounded-full bg-gray-700"></span>
            <div className="flex-grow h-3 border border-[#dc2626]/10 rounded-sm bg-black/20 mx-3"></div>
          </div>
          {/* Simulated content wireframe (Just UI Simulation) */}
          <div className="flex-grow grid grid-cols-3 gap-2 p-1">
             <div className="col-span-1 h-8 bg-[#dc2626]/5 rounded border border-[#dc2626]/10 relative overflow-hidden">
                <div className="absolute inset-x-2 inset-y-2 border-2 border-dashed border-[#dc2626]/20"></div>
             </div>
             <div className="col-span-2 h-8 bg-gray-800 rounded"></div>
             <div className="col-span-3 flex-grow border-t border-[#dc2626]/10 mt-1 relative">
                <span className="text-gray-800 font-mono text-[8px] absolute top-1 right-1 opacity-20">WEB UI MOCKUP HERE</span>
             </div>
          </div>
        </div>
      )
    },
    {
      id: "02",
      title: "VIDEO EDITING & MOTION GRAPHICS",
      description: "Cinematic assault that holds attention. We create motion pictures that rule the algorithm.",
      // 🔥 GRAPHIC AREA 02: VIDEO (Player Simulation UI) 🔥
      // നീ റെഡിയാക്കുമ്പോൾ ഈ താഴെ കാണുന്ന <div> മൊത്തമായി മാറ്റിയിട്ട് നിന്റെ 
      // actual <video> tag അല്ലെങ്കിൽ വീഡിയോ ലിങ്ക് ഇവിടെ വെക്കുക.
      graphic: (
        <div className="w-full h-full p-4 border border-[#dc2626]/10 rounded-xl bg-black/30 group-hover:bg-[#0b0b0b]/60 transition-colors relative flex items-center justify-center">
            {/* Background wireframe noise Simulation (Just UI Simulation) */}
            <div className="absolute inset-0 opacity-10 font-mono text-[6px] text-gray-700">... video stream placeholder ... mp4 ... mov ... syndicate ...</div>
            {/* Central Play Button structure (Just UI Simulation) */}
            <div className="w-20 h-20 border border-[#dc2626]/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.3)] cursor-pointer">
                <div className="w-0 h-0 border-l-[40px] border-l-[#dc2626]/90 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent ml-2 animate-pulse"></div>
            </div>
            {/* Control Bar wireframe at bottom (Just UI Simulation) */}
            <div className="absolute bottom-2 inset-x-4 h-6 bg-black/50 rounded border border-[#dc2626]/10 flex items-center gap-2 px-3">
              <span className="text-[#dc2626] font-mono text-xs">▷</span>
              <div className="flex-grow h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
                  <div className="absolute inset-y-0 left-0 w-2/3 bg-[#dc2626] shadow-[0_0_10px_#dc2626]"></div>
              </div>
               <span className="text-gray-500 font-mono text-[8px]">00:34 / 01:22</span>
            </div>
             <span className="text-gray-800 font-mono text-[8px] absolute top-1 right-1 opacity-20">DROP VIDEO HERE</span>
        </div>
      )
    },
    {
      id: "03",
      title: "PHOTO EDITING & MANIPULATION",
      description: "High-end visual manipulation. We refine reality until it serves your brand's vision.",
      // 🔥 GRAPHIC AREA 03: PHOTO (Before/After Slider UI) 🔥
      // നീ റെഡിയാക്കുമ്പോൾ ഈ താഴെ കാണുന്ന <div> മൊത്തമായി മാറ്റിയിട്ട് നിന്റെ 
      // Before/After ഫോട്ടോയോ അല്ലെങ്കിൽ ഫോട്ടോകൾ ഇവിടെ വെക്കുക.
      graphic: (
        <div className="w-full h-full p-4 border border-[#dc2626]/10 rounded-xl bg-black/30 group-hover:bg-[#0b0b0b]/60 transition-colors flex flex-col gap-2 relative">
            {/* simulated editor tools bar (Just UI Simulation) */}
            <div className="absolute top-2 right-2 flex flex-col gap-1">
               <span className="w-4 h-4 text-xs text-gray-600 border border-gray-800 flex items-center justify-center rounded">⊕</span>
               <span className="w-4 h-4 text-xs text-gray-600 border border-gray-800 flex items-center justify-center rounded">✂</span>
               <span className="w-4 h-4 text-xs text-[#dc2626] border border-[#dc2626]/30 flex items-center justify-center rounded">✎</span>
            </div>
            {/* Comparison view Simulation (Just UI Simulation) */}
            <div className="flex-grow flex gap-1 relative overflow-hidden">
                <div className="w-1/2 h-full bg-[#0b0b0b] border border-[#dc2626]/5 rounded-sm relative flex items-center justify-center">
                    <span className="text-gray-800 font-mono text-[6px]">BEFORE (Wireframe)</span>
                </div>
                 <div className="w-1/2 h-full bg-[#111111] border border-[#dc2626]/20 rounded-sm relative flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.1)]">
                    <span className="text-[#dc2626] font-mono text-[6px]">AFTER (Redefined)</span>
                    {/* Glowing selection handle wireframe (Just UI Simulation) */}
                    <div className="absolute -left-1.5 inset-y-0 w-[3px] bg-[#dc2626] shadow-[0_0_10px_#dc2626]"></div>
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 border-2 border-[#dc2626] rounded-full flex items-center justify-center bg-black cursor-col-resize">
                        <span className="text-[#dc2626] text-xs font-black">⇔</span>
                    </div>
                </div>
            </div>
             <span className="text-gray-800 font-mono text-[8px] absolute top-1 left-1 opacity-20">DROP PHOTOS HERE</span>
        </div>
      )
    }
  ];

  return (
    // സെക്ഷൻ മൊത്തത്തിൽ ട്രാൻസ്പരന്റ് ആക്കുന്നു
    <section className="bg-transparent text-white py-16 px-6 md:px-12 font-sans overflow-hidden">
      
      {/* (1) 'Trusted By Visionaries' Marquee കളഞ്ഞു ketta */}
      
      {/* മൂന്ന് ബോക്സുകൾ */}
      <div className="max-w-[100rem] mx-auto">
        {/* ചെറിയ ഹെഡിങ് */}
        <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.5em] text-[#dc2626] mb-12 flex items-center gap-3">
          <span className="hidden md:block w-12 h-[1px] bg-gray-800"></span> // Core Capabilities
        </h2>

        {/* ബോക്സുകൾ നിരത്തുന്നു */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            // (2) ബോക്സിന്റെ ബാക്ക്ഗ്രൗണ്ട് 'bg-transparent' ആക്കി മാറ്റിയെഴുതി
            <div key={service.id} className="relative bg-transparent border border-gray-800/30 p-8 rounded-2xl group overflow-hidden transition-all duration-300 hover:border-[#dc2626]/50 hover:shadow-[0_10px_40px_rgba(220,38,38,0.1)] hover:-translate-y-2 flex flex-col">
              
              {/* Subtle Red Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#dc2626]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Unique Simulated Graphic Area */}
              <div className="w-full h-56 flex items-center justify-center mb-8 relative z-10">
                {service.graphic}
              </div>

              {/* Service Info */}
              <div className="mt-auto relative z-10">
                {/* ID & Comment (Comment porath vekkal athile okeey) */}
                <div className="flex justify-between items-center mb-5">
                   <p className="text-gray-600 text-sm font-mono tracking-widest">// Syndicate Capabilities</p>
                   <p className="text-[#dc2626] text-3xl font-black font-mono drop-shadow-[0_0_10px_#dc2626] opacity-30">{service.id}</p>
                </div>

                {/* ഹെഡിങ് & ഡിസ്ക്രിപ്ഷൻ */}
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 uppercase tracking-wide">
                  {service.description}
                </p>

                {/* View Details ലിങ്ക് */}
                <a href="#" className="inline-flex items-center gap-3 text-[#dc2626] text-xs font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
                  <span>View Details</span> <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;