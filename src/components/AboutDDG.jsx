import React, { useState } from 'react';

function AboutDDG() {
  const [activeIndex, setActiveIndex] = useState(0); 

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Expanded Content highlighting Dream Doctor Global's full value proposition
  const aboutData = [
    {
      title: "Welcome to Dream Doctor Global",
      icon: "fa-building",
      content: (
       <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#1A36B4] mt-2">
            <p className="font-semibold text-[#001529]">
          The Most Recognised Consultancy Platform in India.
            </p>
        </div>
  <p>
    At <strong>Dream Doctor Global (DDG)</strong>, we are dedicated to transforming the dreams of medical aspirants into reality. We specialize in guiding Indian students to world-class, affordable medical education abroad.
  </p>
  
  <p>
    Navigating the highly competitive landscape of medical admissions can be overwhelming. We serve as your trusted bridge to top destinations like Russia, ensuring you get access to education systems approved by the National Medical Commission (NMC) and the World Health Organisation (WHO)[cite: 1].
  </p>
  
  <p>
    Our commitment goes far beyond simply securing an admission letter. We deeply understand the anxieties parents face when sending their children abroad, which is why we prioritize student safety, 100% transparency, and continuous mentorship throughout the 6-year program[cite: 1].
  </p>

  {/* Highlighted Call-out Box for your core promise */}
  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#1A36B4] mt-2">
    <p className="font-semibold text-[#001529]">
      From choosing the perfect university and handling complex paperwork, to providing complete on-ground support, DDG is with you at every single step of your MBBS journey.
    </p>
  </div>
</div>
      )
    },
    {
      title: "Why Choose DDG?",
      icon: "fa-handshake",
      content: (
        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
          <ul className="space-y-4 text-[#001529] text-sm md:text-base font-medium">
            <li className="flex items-start">
              <i className="fas fa-certificate text-yellow-500 mt-1 mr-3 text-lg"></i> 
              <div>
                <strong>100% Transparent Process</strong>
                <p className="text-gray-600 text-sm font-normal mt-1">No hidden fees, no donation requirements, and absolutely no surprises. We believe in complete honesty with our students and parents.</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-user-md text-yellow-500 mt-1 mr-3 text-lg"></i> 
              <div>
                <strong>Expert Career Counselling</strong>
                <p className="text-gray-600 text-sm font-normal mt-1">Our seasoned counselors help you choose the right NMC-approved university based on your budget, NEET score, and career goals.</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-award text-yellow-500 mt-1 mr-3 text-lg"></i> 
              <div>
                <strong>Top University Partnerships</strong>
                <p className="text-gray-600 text-sm font-normal mt-1">We are officially affiliated with prestigious institutions like Siberian State, Ural State, Kirov State, and Volgograd State Medical Universities.</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Our End-to-End Services",
      icon: "fa-briefcase-medical",
      content: (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-gray-600 text-sm md:text-base">
          <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Personalized University Selection</li>
          <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Application & Documentation Handling</li>
          <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> MEA Document Legalization Support</li>
          <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Guaranteed Student Visa Assistance</li>
          <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Education Loan Guidance</li>
          <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i> Flight Booking & Travel Arrangements</li>
        </ul>
      )
    },
    {
      title: "The DDG Admission Journey",
      icon: "fa-route",
      content: (
        <div className="space-y-4 text-gray-600 text-sm md:text-base relative border-l-2 border-blue-200 ml-3 pl-5">
          <div className="relative"><span className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span><strong>Step 1: Counselling</strong> – Connect with a DDG expert to map out your goals.</div>
          <div className="relative"><span className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span><strong>Step 2: Documentation</strong> – Hand over your basic documents (10th/12th marks, NEET score); we handle the application.</div>
          <div className="relative"><span className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span><strong>Step 3: Invitation Letter</strong> – We secure your official admission letter from the university.</div>
          <div className="relative"><span className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span><strong>Step 4: Visa & Finance</strong> – We guide you through the visa process and help secure education loans.</div>
          <div className="relative"><span className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span><strong>Step 5: Departure</strong> – Pack your bags! We arrange your flight and ensure a smooth transition to your new campus.</div>
        </div>
      )
    },
    {
      title: "Student Life, Safety & On-Ground Support",
      icon: "fa-shield-alt",
      content: (
        <div className="space-y-3 text-gray-600 leading-relaxed text-sm md:text-base">
          <p>We know that sending a child abroad is a big decision for parents. That is why DDG's responsibility doesn't end once the student boards the flight.</p>
          <ul className="mt-3 space-y-2 pl-2">
            <li className="flex items-start"><i className="fas fa-arrow-right text-blue-500 mt-1 mr-2 text-xs"></i> <strong>Safe Hostels:</strong> We ensure students are placed in secure, CCTV-monitored university hostels.</li>
            <li className="flex items-start"><i className="fas fa-arrow-right text-blue-500 mt-1 mr-2 text-xs"></i> <strong>Indian Mess Facilities:</strong> Access to nutritious Indian food to make students feel right at home.</li>
            <li className="flex items-start"><i className="fas fa-arrow-right text-blue-500 mt-1 mr-2 text-xs"></i> <strong>Local Coordinators:</strong> Our dedicated on-ground representatives in Russia are available 24/7 for medical or administrative emergencies.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Post-MBBS & Career Support",
      icon: "fa-stethoscope",
      content: (
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 text-gray-600 text-sm md:text-base">
          <p className="mb-4">Earning your degree is just the beginning. DDG prepares you for global medical practice from day one.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
              <h5 className="font-bold text-[#001529] mb-1"><i className="fas fa-book-medical text-blue-600 mr-2"></i> FMGE / NEXT Coaching</h5>
              <p className="text-xs text-gray-500">We partner with universities that integrate Indian licensing exam preparation right into their curriculum.</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
              <h5 className="font-bold text-[#001529] mb-1"><i className="fas fa-globe text-blue-600 mr-2"></i> Global Opportunities</h5>
              <p className="text-xs text-gray-500">Guidance for students wishing to pursue USMLE (USA) or PLAB (UK) pathways after graduation.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">
            Who We Are
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001529] mb-4">
            About Dream Doctor Global
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Your trusted partner in securing world-class medical education abroad. We make your journey to becoming a doctor transparent, seamless, and successful.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {aboutData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-200 shadow-md bg-white' : 'border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-sm'}`}
              >
                {/* Clickable Header */}
                <div 
                  className="p-5 md:p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#1A36B4] text-white' : 'bg-blue-100 text-blue-800'}`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <h4 className={`font-bold text-lg transition-colors ${isOpen ? 'text-[#1A36B4]' : 'text-[#001529]'}`}>
                      {item.title}
                    </h4>
                  </div>
                  
                  <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1A36B4]' : ''}`}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>

                {/* Expanding Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 md:px-6 pb-6 pt-2 border-t border-gray-50">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default AboutDDG;