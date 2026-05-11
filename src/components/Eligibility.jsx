import React from 'react';
import { ClipboardList, GraduationCap, Calendar } from 'lucide-react';

function Eligibility() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Basic Eligibility Criteria</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Calendar size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Age Requirement</h3>
            <p className="text-gray-600">The student must be at least 17 years old by December 31st of the admission year.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Academic Score</h3>
            <p className="text-gray-600">Must have passed 10+2 with Physics, Chemistry, and Biology with a minimum of 50% aggregate.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <ClipboardList size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">NEET Qualification</h3>
            <p className="text-gray-600">The student must have a valid qualifying NEET score. (Valid for 3 years for abroad admissions).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eligibility;