import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Ensure this component exists!

function AllUniversities() {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch all universities from the backend
    fetch(`${import.meta.env.VITE_API_URL}/api/universities`)
      .then((res) => res.json())
      .then((data) => {
        setUniversities(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching all universities:", error);
        setIsLoading(false);
      });
      
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  // Filter logic for the search bar
  const filteredUniversities = universities.filter((uni) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      uni.name.toLowerCase().includes(searchLower) ||
      uni.location.toLowerCase().includes(searchLower)
    );
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-500 animate-pulse">Loading Universities...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        {/* --- PREMIUM HERO SECTION --- */}
        <section className="bg-gradient-to-br from-[#001529] to-[#1A36B4] py-20 px-4 md:px-10 relative overflow-hidden">
          {/* Subtle background pattern/overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Partner Universities
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Browse our complete list of NMC & WHO recognized medical universities. Find the perfect destination for your MBBS journey.
            </p>

            {/* Interactive Search Bar */}
            <div className="relative max-w-2xl mx-auto shadow-2xl rounded-full bg-white"> 
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                <i className="fas fa-search"></i>
              </span>
              <input 
                type="text" 
                placeholder="Search by university name, city, or country..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full text-gray-800 bg-transparent font-medium focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              />
            </div>
          </div>
        </section>

        {/* --- MAIN GRID SECTION --- */}
        <section className="max-w-7xl mx-auto py-16 px-4 md:px-10">
          
          {/* Results Counter */}
          <div className="mb-8 flex justify-between items-center border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {searchTerm ? 'Search Results' : 'All Universities'}
            </h2>
            <span className="bg-blue-100 text-blue-800 font-bold px-4 py-1 rounded-full text-sm">
              {filteredUniversities.length} {filteredUniversities.length === 1 ? 'Result' : 'Results'}
            </span>
          </div>

          {/* Fallback for empty search */}
          {filteredUniversities.length === 0 ? (
            <div className="text-center py-20">
              <i className="fas fa-search-minus text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-600">No universities found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search terms.</p>
              <button 
                onClick={() => setSearchTerm('')} 
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUniversities.map((uni) => (
                <div 
                  key={uni._id} 
                  className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group transform hover:-translate-y-1"
                >
                  <div className="relative h-56 bg-gray-200 flex-shrink-0 overflow-hidden">
                    {/* Zoom effect on hover */}
                    <img src={uni.image} alt={uni.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    
                    {/* Dark gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {uni.badge && (
                      <span className={`absolute top-4 left-4 ${uni.badgeColor || 'bg-red-500'} text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md`}>
                        {uni.badge}
                      </span>
                    )}
                    
                    {/* Location moved to the image overlay for a sleeker look */}
                    <p className="absolute bottom-4 left-4 text-white text-sm font-medium flex items-center">
                      <i className="fas fa-map-marker-alt text-red-400 mr-2"></i> {uni.location}
                    </p>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#001529] mb-6 line-clamp-2" title={uni.name}>
                        {uni.name}
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-center">
                          <span className="block text-gray-400 text-xs mb-1 uppercase tracking-wider font-semibold">Tuition Fee</span>
                          <span className="font-extrabold text-[#1A36B4] truncate" title={uni.fee}>{uni.fee}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-center">
                          <span className="block text-gray-400 text-xs mb-1 uppercase tracking-wider font-semibold">Duration</span>
                          <span className="font-extrabold text-gray-700">{uni.duration || "6 Years"}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-2">
                      <Link 
                        to={`/university/${uni._id}`} 
                        className="flex items-center justify-center gap-2 bg-[#001529] text-white font-bold py-3.5 rounded-xl hover:bg-[#1A36B4] transition-colors w-full shadow-md"
                      >
                        View Details <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AllUniversities;