import React from 'react';

function TermsDeclaration() {
  return (
    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mt-6 text-sm text-gray-600">
      <h4 className="font-bold text-gray-800 mb-3">Declaration T&C</h4>
      <label className="flex items-start cursor-pointer">
        <input type="checkbox" required className="mt-1 mr-3 flex-shrink-0" />
        <div className="space-y-2">
          <p>
            I hereby confirm that the information provided in this application form is true and accurate to the best of my knowledge. I understand that the registration fee I am paying is non refundable However a refund will only be considered under the following circumstances;
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>If the student does not qualify in the NEET exam.</li>
            <li>If the applicant secures a seat and admission in any medical college in India.</li>
            <li>The admission process will begin upon payment of the registration fee.</li>
            <li>After passing the entrance exam, students must pay the next installment of the processing visa within 3 working days late payment will lead to a pause or termination of the admission process.</li>
            <li>Upon receiving the visa, students need to pay the remaining Consultancy charges.</li>
          </ul>
          <p className="font-bold text-gray-800 mt-2">
            Note : If a student voluntarily terminates their admission process they will not be eligible for a refund. I acknowledge and accept these terms and conditions.
          </p>
        </div>
      </label>
    </div>
  );
}

export default TermsDeclaration;