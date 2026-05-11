import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

function CostComparison() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Study in Russia?</h2>
          <p className="mt-4 text-gray-600">A transparent look at how Russian medical universities compare to private Indian colleges.</p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          {/* CHANGED: text-left is now text-center */}
          <table className="w-full text-center text-sm md:text-base">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-4 font-bold text-gray-900 border-b border-gray-200">Feature</th>
                <th className="p-4 font-bold text-blue-700 border-b border-gray-200 border-l">Top Russian Universities</th>
                <th className="p-4 font-bold text-gray-600 border-b border-gray-200 border-l">Private Indian Colleges</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="p-4 font-medium text-gray-900">Average Tuition Fee</td>
                <td className="p-4 text-gray-700 border-l">₹15 Lakhs - ₹25 Lakhs (Total 6 Years)</td>
                <td className="p-4 text-gray-700 border-l">₹60 Lakhs - ₹1 Crore+ (Total 5.5 Years)</td>
              </tr>
              
              <tr className="bg-gray-50">
                <td className="p-4 font-medium text-gray-900">Donation / Capitation Fee</td>
                <td className="p-4 border-l">
                  {/* CHANGED: Added justify-center so the icon and text are centered together */}
                  <div className="text-green-600 font-semibold flex items-center justify-center gap-2">
                    <CheckCircle2 size={18} /> Zero Donation
                  </div>
                </td>
                <td className="p-4 border-l">
                  {/* CHANGED: Added justify-center */}
                  <div className="text-red-500 font-semibold flex items-center justify-center gap-2">
                    <XCircle size={18} /> Very High
                  </div>
                </td>
              </tr>
              
              <tr className="bg-white">
                <td className="p-4 font-medium text-gray-900">Entrance Exam Required</td>
                <td className="p-4 text-gray-700 border-l">None (Only NEET qualification needed)</td>
                <td className="p-4 text-gray-700 border-l">High NEET cutoff required</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-medium text-gray-900">World Recognition</td>
                <td className="p-4 text-gray-700 border-l">WHO, NMC (India), ECFMG (USA) Approved</td>
                <td className="p-4 text-gray-700 border-l">NMC Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CostComparison;