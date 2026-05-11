import React from 'react';
import { ShieldCheck, GraduationCap, PlaneTakeoff } from 'lucide-react';

function WhyChooseUs() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Dream Doctor Global?</h2>
          <p className="mt-4 text-lg text-gray-600">We don't just get you admission; we stand by you until you graduate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Transparency</h3>
            <p className="text-gray-600 leading-relaxed">No hidden charges, no fake promises. We provide clear fee structures directly from the universities.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Admissions</h3>
            <p className="text-gray-600 leading-relaxed">We are official representatives of top NMC & WHO recognized government medical universities in Russia.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <PlaneTakeoff size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Post-Arrival Support</h3>
            <p className="text-gray-600 leading-relaxed">From visa assistance and flight booking to hostel setup and local registration, we handle it all.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;