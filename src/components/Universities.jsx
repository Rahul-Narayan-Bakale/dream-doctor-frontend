import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UniversityCard from './UniversityCard'; 

function Universities() {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Fetch Data
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/universities`)
      .then((res) => res.json())
      .then((data) => {
        // NEW: Filter the data so ONLY universities with showOnHome = true are displayed!
        // We use !== false to ensure older database entries without the field still show up.
        const homeUniversities = data.filter(uni => uni.showOnHome !== false);
        setUniversities(homeUniversities);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
        setIsLoading(false);
      });
  }, []);

  // 2. Slider Logic States
  const tripleUnis = [...universities, ...universities, ...universities];
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const GAP_SIZE = 24; 
  
  const getSingleSetWidth = () => {
    if (!scrollRef.current || universities.length === 0) return 0;
    const firstCard = scrollRef.current.children[0];
    if (!firstCard) return 0;
    return universities.length * (firstCard.offsetWidth + GAP_SIZE);
  };

  // 3. Middle Trap (On Load)
  useEffect(() => {
    if (scrollRef.current && universities.length > 0) {
      setTimeout(() => { 
        if (!scrollRef.current) return;
        scrollRef.current.scrollLeft = getSingleSetWidth();   
      }, 200);
    }
  }, [universities]);

  // 4. Auto-Scroller
  useEffect(() => {
    let interval;
    if (!isPaused && universities.length > 0) {
      interval = setInterval(() => {
        if (scrollRef.current && scrollRef.current.children.length > 0) {
          const cardWidth = scrollRef.current.children[0].offsetWidth;
          scrollRef.current.scrollBy({ left: cardWidth + GAP_SIZE, behavior: 'smooth' }); 
        }
      }, 3000); 
    }
    return () => clearInterval(interval); 
  }, [isPaused, universities]);

  // 5. Seamless Infinite Loop Handler (MATH FIXED!)
  const handleScroll = () => {
    if (!scrollRef.current || universities.length === 0) return;
    const slider = scrollRef.current;
    const singleSetWidth = getSingleSetWidth();

    // FIXED: Instead of waiting to hit the wall, we jump seamlessly when we are halfway 
    // into the cloned zones. This makes it TRULY infinite in both left and right directions!
    if (slider.scrollLeft >= singleSetWidth * 1.5) {
      // Jumping back to the middle zone
      slider.scrollLeft -= singleSetWidth; 
    } else if (slider.scrollLeft <= singleSetWidth * 0.5) {
      // Jumping forward to the middle zone
      slider.scrollLeft += singleSetWidth; 
    }
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50 flex justify-center items-center h-96">
        <h2 className="text-2xl font-bold text-gray-500 animate-pulse">Loading Universities...</h2>
      </section>
    );
  }

  // If the admin unchecked everything, hide the section entirely
  if (universities.length === 0) return null;

  return (
    <section id="universities" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001529] mb-4">Top Russian Medical Universities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore NMC & WHO recognized universities with affordable fee structures. 
            <span className="font-bold text-blue-600 ml-2">Swipe to explore <i className="fas fa-arrow-right"></i></span>
          </p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll} 
        onMouseEnter={() => setIsPaused(true)}  
        onMouseLeave={() => setIsPaused(false)} 
        onTouchStart={() => setIsPaused(true)}  
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)} 
        className="grid grid-flow-col auto-cols-[85vw] md:auto-cols-[350px] gap-6 overflow-x-auto pb-4 px-4 md:px-10 no-scrollbar"
      >
        {tripleUnis.map((uni, index) => (
          <UniversityCard key={`${uni._id}-${index}`} uni={uni} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          to="/universities" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition shadow-lg text-lg"
        >
          View All <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </section>
  );
}

export default Universities;