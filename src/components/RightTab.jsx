import React from 'react';

function RightTab() {
  return (
    // Removed "hidden md:block" so it stays visible on all screens
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 translate-x-2 md:translate-x-3 hover:translate-x-0 transition-transform duration-300 ease-in-out">
      <a 
        href="#contact" 
        // Made text slightly smaller (text-xs) and thinner (px-1) on mobile, reverting to normal size on md screens
        className="block bg-gradient-to-t from-blue-800 to-blue-500 hover:from-blue-900 hover:to-blue-600 text-white font-semibold text-xs md:text-sm py-3 md:py-4 px-1 md:px-1.5 rounded-l-lg shadow-2xl tracking-wider" 
        style={{ writingMode: "vertical-rl" }}
      >
        MBBS ADMISSIONS 26-27
      </a>
    </div>
  );
}

export default RightTab;