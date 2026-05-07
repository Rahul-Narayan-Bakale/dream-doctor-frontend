import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import ConsultancyForm from '../components/ConsultancyForm';

function FreeConsultancy() {

  // Automatically scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Navbar />

      {/* Main Content Area pushes the footer to the bottom */}
      <main className="flex-grow">
        
        {/* --- HERO BANNER --- */}
        <section className="bg-blue-900 text-white pt-20 pb-32 px-4 md:px-10 relative overflow-hidden">
          {/* Subtle background dot pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-800 text-teal-300 font-bold tracking-wider uppercase text-xs mb-6 border border-blue-700">
              Zero Cost • Zero Obligation
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Expert Guidance, Absolutely <span className="text-teal-400">Free.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Take the first step toward your medical career. Schedule a one-on-one session with our admission experts to find the perfect university for you.
            </p>
          </div>
        </section>

        {/* --- FORM SECTION (Overlapping the Hero) --- */}
        <section className="px-4 md:px-10 pb-20 -mt-16 relative z-20">
          <div className="max-w-4xl mx-auto">
            {/* White card wrapper for the form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
              <ConsultancyForm />
            </div>
          </div>
        </section>

        {/* --- VALUE PROPOSITION SECTION --- */}
        <section className="py-16 bg-white border-t border-gray-200 px-4 md:px-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12">What to expect in your session?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="fas fa-university"></i>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">University Matching</h3>
                <p className="text-gray-600 text-sm">We'll help you shortlist NMC & WHO approved universities based on your budget and academic profile.</p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Transparent Costs</h3>
                <p className="text-gray-600 text-sm">Get a clear, honest breakdown of tuition fees, hostel charges, and living expenses with zero hidden fees.</p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="fas fa-plane-departure"></i>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">End-to-End Roadmap</h3>
                <p className="text-gray-600 text-sm">Understand the exact timeline for applications, visa processing, and your flight to the campus.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default FreeConsultancy;