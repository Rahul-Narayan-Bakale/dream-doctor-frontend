import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Helper function to scroll to top when a footer link is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <h2 className="text-2xl font-bold tracking-wide">
                Dream<span className="font-light">Doctor</span>Global
              </h2>
            </Link>
            <p className="text-sm leading-relaxed text-white/80 pr-4">
              Your trusted partner in global medical education. We guide aspiring doctors to the best NMC & WHO recognized universities in Russia with 100% transparency.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/dreamdoctorglobal?igsh=YzZhYTFjOHF5bHpv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors duration-300"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a 
                href="https://youtube.com/@dreamdoctorglobal?si=Trru0i8pBZpdS99n" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors duration-300"
              >
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li><Link to="/" onClick={scrollToTop} className="hover:underline hover:text-white transition-colors">Home</Link></li>
              <li><a href="/#about" onClick={scrollToTop} className="hover:underline hover:text-white transition-colors">About DDG</a></li>
              <li><Link to="/universities" onClick={scrollToTop} className="hover:underline hover:text-white transition-colors">All Universities</Link></li>
              <li><Link to="/free-consultancy" onClick={scrollToTop} className="hover:underline hover:text-white transition-colors">Free Consultancy</Link></li>
              <li><Link to="/apply" onClick={scrollToTop} className="hover:underline hover:text-white transition-colors">Apply Online</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li><a href="#" className="hover:underline hover:text-white transition-colors">MBBS in Russia</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Career Counseling</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Visa Assistance</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Admission Support</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Post-Arrival Guidance</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-white/70"></i>
                <span>22nd Floor, Unit 2240, Tower-A, <br/>Bhutani Alphathum, Sector 90, <br/>Uttar Pradesh, India 201305</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-white/70 transition rotate-90"></i>
                <a href="tel:+916206295017" className="hover:underline">+91 6206295017</a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-3 text-lg text-white/70"></i>
                <a href="https://wa.me/79091350119" className="hover:underline">+7 (909) 135-01-19</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-white/70"></i>
                <a href="mailto:dreamdoctorglobal@gmail.com" className="hover:underline">dreamdoctorglobal@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-blue-950 py-6 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
          <p>&copy; {currentYear} Dream Doctor Global Consultancy. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;