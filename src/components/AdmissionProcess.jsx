import React from 'react';

function AdmissionProcess() {
  const steps = [
    { num: "01", title: "Free Counseling", desc: "Speak with our experts to choose the best university based on your NEET score and budget." },
    { num: "02", title: "Application & Offer", desc: "Submit your documents. We secure your guaranteed admission letter from the university." },
    { num: "03", title: "Visa Processing", desc: "We handle the complete documentation and processing for your Russian student visa." },
    { num: "04", title: "Travel & Setup", desc: "Fly with our group. We assist with hostel allocation, medical checkups, and university registration." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Your Journey to Becoming a Doctor</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 border border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
              <span className="text-5xl font-extrabold text-gray-100 absolute top-4 right-4 z-0">{step.num}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionProcess;