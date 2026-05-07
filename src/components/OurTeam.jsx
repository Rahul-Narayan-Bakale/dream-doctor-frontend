import React from 'react';

function OurTeam() {
  const teamMembers = [
    {
      name: "Rishikesh Kumar",
      role: "Founder",
      image: "/images/rishikesh.jpeg", 
      bio: "With a profound vision to make global medical education accessible and 100% transparent, Rishikesh founded Dream Doctor Global. He brings years of expertise in international student counseling and is dedicated to mentoring students toward their dream medical careers.",
      social: {
        email: "mailto:dreamdoctorglobal@gmail.com"
      }
    },
    {
      name: "Utkarsh Kumar",
      role: "Managing Director",
      image: "/images/utkarsh.jpeg", 
      bio: "Utkarsh spearheads global operations and university partnerships at DDG. His meticulous dedication ensures that every student experiences a seamless, safe, and fully supported transition from their initial application to their very first day on campus in Russia.",
      social: {
        email: "mailto:utkarshdr002@gmail.com"
      }
    },
    {
      name: "Abhishek Kumar",
      role: "Administrative Head",
      image: "/images/abhishek.jpeg", 
      bio: "Abhishek manages the administrative functions of DDG, ensuring smooth operations and excellent student support throughout their journey.",
      social: {
        email: "mailto:dreamdoctorglobal@gmail.com"
      }
    }
  ];

  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">
      
      {/* Optional subtle background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[radial-gradient(#134e4a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 font-bold tracking-wider uppercase text-xs mb-4 border border-teal-100">
            The Faces Behind DDG
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-teal-900 mb-4 tracking-tight">
            Meet Our Leadership
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We are a team of dedicated professionals committed to guiding you safely and transparently through your medical education journey abroad.
          </p>
        </div>

        {/* Team Grid: Updated to lg:grid-cols-3 and increased max-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-2xl p-8 pt-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Top Gradient Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-900 to-teal-500"></div>

              {/* Image Container */}
              <div className="relative mb-6">
                {/* Expanding Halo Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-teal-50 rounded-full scale-110 transform transition-transform duration-500 group-hover:scale-125 opacity-70"></div>
                
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-md z-10 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Using teal-900 hex code (134e4a) for the fallback background
                    e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=134e4a&color=fff&size=150`;
                  }}
                />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-extrabold text-teal-900 mb-1">{member.name}</h3>
              <p className="text-teal-600 font-bold mb-4 uppercase tracking-wider text-xs">{member.role}</p>
              
              {/* Elegant Divider */}
              <div className="w-12 h-0.5 bg-gray-200 mb-5 transition-all duration-300 group-hover:w-20 group-hover:bg-teal-400"></div>
              
              <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base flex-grow px-2 md:px-4">
                {member.bio}
              </p>

              {/* Social Links (Hover effects updated to Teal) */}
              <div className="flex space-x-4 mt-auto">
                <a 
                  href={member.social.email} 
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-all duration-300 border border-gray-200 hover:border-transparent hover:shadow-md hover:-translate-y-1"
                  aria-label={`Email ${member.name}`}
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurTeam;