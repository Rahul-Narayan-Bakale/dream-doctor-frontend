import React from 'react';

function Hero() {
  return (
    <section 
      id="home" 
      // Kept your custom 32% center position!
      className="bg-cover bg-[37%_center] bg-no-repeat py-10 md:py-16 px-4 md:px-10 relative overflow-hidden"
      style={{ backgroundImage: "url('/images/dream.jpg')" }}
    >    
      <div className="max-w-7xl mx-auto flex flex-col items-start relative z-10">
        <div className="bg-[#1c2128] border border-gray-600 text-blue-400 text-xs md:text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
          Admissions Open 2026-27
        </div>
        
        <h1 
          className="text-white transition-colors duration-700 text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg" 
          style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
        >
          Your Medical Career <br />
          <span>Starts Here</span>
        </h1>
        
        <p 
          className="text-white transition-colors duration-700 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed drop-shadow-md" 
          style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
        >
          Transparent, Affordable, & Direct Admissions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all text-center">
            Free Consultation
          </a>
          <a href="#universities" className="bg-[#21262d] hover:bg-[#30363d] border border-gray-600 text-gray-200 font-bold py-4 px-8 rounded-lg transition-all text-center flex items-center justify-center">
            See Our Universities
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;