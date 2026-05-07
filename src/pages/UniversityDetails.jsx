import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
// Assuming you have a generic footer, if not, you can omit this line
import Footer from '../components/Footer'; 
import EnquireNow from '../components/EnquireNow';

function UniversityDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const [university, setUniversity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the specific university data
    const fetchUniversity = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/universities/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUniversity(data);
        }
      } catch (error) {
        console.error("Failed to fetch university details", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUniversity();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center text-xl font-bold">Loading...</div>;
  if (!university) return <div className="min-h-screen flex items-center justify-center text-xl font-bold text-red-500">University not found.</div>;

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />

      {/* 1. HERO BANNER */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-900">
        {/* Background Image with Overlay */}
        <img 
          src={university.image || '/images/default-uni.jpg'} 
          alt={university.name} 
          className="w-full h-full object-cover opacity-50"
        />
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/universities" className="text-white mb-6 hover:text-blue-300 transition flex items-center w-max">
            <i className="fas fa-arrow-left mr-2"></i> Back to Universities
          </Link>
          
          {university.badge && (
            <span className={`px-4 py-1 text-xs font-bold text-white uppercase rounded-full mb-4 w-max ${university.badgeColor || 'bg-red-500'}`}>
              {university.badge}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 shadow-sm">{university.name}</h1>
          <p className="text-xl text-gray-200 flex items-center">
            <i className="fas fa-map-marker-alt text-red-500 mr-2"></i> {university.location}
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT COLUMN: Detailed Info */}
          <div className="lg:w-8/12 space-y-10">
            
            {/* Overview Section */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#001529] mb-4 border-b pb-2">Overview</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {university.overview || `${university.name} is a premier medical institution located in ${university.location}. It offers world-class education for international students.`}
              </p>
            </section>

            {/* Eligibility Section */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#001529] mb-4 border-b pb-2">Eligibility Criteria</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {university.eligibility || "• 50% marks in PCB in 12th standard.\n• NEET Qualification is mandatory for Indian students.\n• Must be 17 years of age."}
              </p>
            </section>

            {/* Fee & Hostel Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#001529] mb-3"><i className="fas fa-money-bill-wave text-green-500 mr-2"></i> Fee Structure</h2>
                <p className="text-gray-600 text-sm whitespace-pre-line">
                  {university.feeDetails || `Tuition Fee starts from ${university.fee}. Please contact us for a detailed breakdown including hostel and medical insurance.`}
                </p>
              </section>

              <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#001529] mb-3"><i className="fas fa-bed text-blue-500 mr-2"></i> Hostel Facilities</h2>
                <p className="text-gray-600 text-sm whitespace-pre-line">
                  {university.hostelFacilities || "Safe, secure, and comfortable hostel facilities are available for international students with access to Indian mess facilities."}
                </p>
              </section>
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar (Sticky) */}
          <div className="lg:w-4/12 relative">
            <div className="sticky top-28 space-y-6">
              
              {/* Quick Summary Card */}
              <div className="bg-gradient-to-br from-[#001529] to-[#1A36B4] rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4 border-b border-blue-800 pb-2">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-200 text-sm uppercase tracking-wide">Tuition Fee</p>
                    <p className="text-2xl font-bold text-yellow-400">{university.fee}</p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm uppercase tracking-wide">Course Duration</p>
                    <p className="text-xl font-semibold">{university.duration}</p>
                  </div>
                  <ul className="pt-2 space-y-2">
                    {university.highlights && university.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <i className="fas fa-check-circle text-green-400 mr-2"></i> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The Enquire Now Form Component! */}
              <EnquireNow />
              
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UniversityDetails;