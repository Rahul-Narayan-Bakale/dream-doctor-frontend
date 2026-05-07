import React from 'react';
import { Link } from 'react-router-dom';

function UniversityCard({ uni }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col w-full">
      
      <div className="relative h-52 bg-gray-200 flex-shrink-0">
        <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
        {uni.badge && (
          <span className={`absolute top-4 left-4 ${uni.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}>
            {uni.badge}
          </span>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#001529] mb-2">{uni.name}</h3>
          <p className="text-sm text-gray-500 mb-4 flex items-center">
            <i className="fas fa-map-marker-alt mr-2 text-red-500"></i> {uni.location}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="bg-blue-50 p-2 rounded-lg">
              <span className="block text-gray-500 text-xs">Tuition Fee</span>
              <span className="font-bold text-blue-800">{uni.fee}</span>
            </div>
            <div className="bg-blue-50 p-2 rounded-lg">
              <span className="block text-gray-500 text-xs">Duration</span>
              <span className="font-bold text-blue-800">{uni.duration || "6 Years"}</span>
            </div>
          </div>
          
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li><i className="fas fa-check text-green-500 mr-2"></i> English Medium</li>
            <li><i className="fas fa-check text-green-500 mr-2"></i> Excellent Facilities</li>
          </ul>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-50">
          <Link to={`/university/${uni._id}`} className="block text-center border-2 border-[#001529] text-[#001529] font-bold py-2 rounded-xl hover:bg-[#001529] hover:text-white transition w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UniversityCard;