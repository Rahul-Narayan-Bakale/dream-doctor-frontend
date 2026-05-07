import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Tracks if the Courses dropdown is open
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  
  const location = useLocation();

  // Updated to close both the mobile menu AND the dropdowns when navigating
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsCoursesOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  // Helper function to toggle just the courses dropdown
  const toggleCourses = (e) => {
    e.preventDefault(); 
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-md">
      {/* Top Contact Bar */}
      <div className="bg-[#001529] text-white text-xs md:text-sm py-2 px-4 md:px-10 flex flex-wrap justify-between items-center gap-y-2">
        <div className="flex space-x-4 md:space-x-6 items-center">
          <a href="#contact" className="hover:text-yellow-400 flex items-center transition">
            <i className="fas fa-phone-alt text-yellow-400 mr-2 transform rotate-90"></i> Request a call back
          </a>
          <div className="h-4 w-[1px] bg-gray-500 hidden md:block"></div>
          <a href="#" className="hover:text-yellow-400 flex items-center transition">
            <i className="far fa-file-alt mr-2"></i> Apply Online
          </a>
        </div>

        <div className="flex space-x-4 md:space-x-6 items-center">
          <span className="hidden lg:inline text-gray-300 italic">Live Counselling</span>
          <a href="tel:+916206295017" className="font-bold hover:text-yellow-400 flex items-center transition">
            <i className="fas fa-phone mr-1 md:mr-2"></i> +91 6206295017
          </a>
          <a href="https://wa.me/79091350119" className="bg-[#25D366] text-white px-2 py-1 md:px-3 rounded-full flex items-center font-semibold hover:bg-green-600 transition">
            <i className="fab fa-whatsapp mr-1 md:mr-2 text-lg"></i> WhatsApp
          </a>
        </div>
      </div>

      {/* Main Nav Area */}
      <nav className="bg-white p-4">
        <div className="flex justify-between items-center px-2 md:px-6">
          
          <Link to="/" onClick={handleHomeClick} className="flex items-center">
            <img src="/images/logo1.jpeg" alt="DreamDoctorGlobal" className="h-12 md:h-18 w-auto object-contain" />
            <img src="/images/logo2.jpeg" alt="DreamDoctorGlobal" className="h-12 md:h-18 w-auto object-contain" />
          </Link>

          {/* Hamburger Menu Button */}
          <button 
            className="lg:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 font-semibold text-gray-700">
            <Link to="/" onClick={handleHomeClick} className="hover:text-blue-800">Home</Link>
            
            {/* --- FIX 1: Updated Desktop About Link --- */}
            <a href="/#about" className="hover:text-blue-800">About</a>
            
            <div className="relative group">
              <div 
                className="cursor-pointer hover:text-blue-800 flex items-center gap-1 transition-colors"
                onClick={toggleCourses}
              >
                <span>Courses</span> 
                <i className={`fas fa-chevron-${isCoursesOpen ? 'up' : 'down'} text-[10px] transition-transform`}></i>
              </div>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-3 z-50 animate-fade-in-down">
                  <div className="absolute -top-3 left-0 w-full h-3 transparent"></div>
                  
                  <a href="#" onClick={closeMenu} className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors">
                    MBBS
                  </a>
                </div>
              )} 
            </div>
            
            <Link to="/universities" className="group relative cursor-pointer hover:text-blue-800">
              <span>Universities</span>
            </Link>
            
            <a href="/#faq" className="hover:text-blue-800">FAQs</a>

            <Link 
              to="/free-consultancy" 
              className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition"
            >
              Free Consultancy
            </Link>
            
            <Link to="/apply" className="bg-gradient-to-r from-teal-300 to-teal-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:opacity-90 transition flex justify-center items-center">
                Application Form 2026-27 <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-4 font-semibold text-gray-700 animate-fade-in-down">
            <Link to="/" onClick={handleHomeClick} className="hover:text-blue-800 px-2">Home</Link>
            
            {/* --- FIX 2: Updated Mobile About Link --- */}
            <a href="/#about" onClick={closeMenu} className="hover:text-blue-800 px-2">About</a>
            
            <div className="flex flex-col px-2">
              <div 
                className="flex justify-between items-center cursor-pointer hover:text-blue-800"
                onClick={toggleCourses}
              >
                <span>Courses</span> 
                <i className={`fas fa-chevron-${isCoursesOpen ? 'up' : 'down'} text-xs transition-transform`}></i>
              </div>
              
              {isCoursesOpen && (
                <div className="flex flex-col mt-3 pl-4 space-y-3 border-l-2 border-blue-100">
                  <a href="#" onClick={closeMenu} className="text-sm text-gray-600 hover:text-blue-800">MBBS in Russia</a>
                </div>
              )}
            </div>
            
            <Link to="/universities" onClick={closeMenu} className="flex justify-between items-center cursor-pointer hover:text-blue-800 px-2">
              <span>Universities</span>
            </Link>

            <a href="/#faq" onClick={closeMenu} className="hover:text-blue-800 px-2">FAQs</a>
            
            <div className="flex flex-col gap-3 pt-2">
              <Link 
                to="/free-consultancy" 
                onClick={closeMenu}
                className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition flex justify-center items-center"
              >
                Free Consultancy
              </Link>
              <Link to="/apply" onClick={closeMenu} className="bg-gradient-to-r from-teal-300 to-teal-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:opacity-90 transition flex justify-center items-center">
                Application Form 2026-27 <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;