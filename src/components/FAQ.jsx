import React, { useState } from 'react';

function FAQ() {
  // 1. State to track which FAQ is currently open. 
  // 'null' means all are closed by default.
  const [activeIndex, setActiveIndex] = useState(null);

  // 2. The Data Array containing your questions and answers.
  // You can easily add more objects to this array later!
  const faqs = [
    {
      question: "Is NEET required to study MBBS in Russia?",
      answer: "Yes, qualifying NEET is mandatory for Indian students if they wish to practice later in India. It is a requirement by the National Medical Commission (NMC)."
    },
    {
      question: "Is the degree valid in India?",
      answer: "Yes, the degree is fully valid in India. Graduates must pass the FMGE (Foreign Medical Graduates Examination) or the upcoming NEXT exam to practice medicine in India."
    },
    {
      question: "Is it safe for Indian students?",
      answer: "Absolutely. The universities provide highly secure, often guarded hostel facilities for international students, with 24/7 CCTV surveillance and supportive international student departments."
    },
    {
      question: "What is the medium of instruction?",
      answer: "The entire medical course curriculum for international students is taught completely in the English language."
    }
  ];

  // 3. Function to handle clicking on a question
  const toggleFAQ = (index) => {
    // If the clicked FAQ is already open, close it (set to null).
    // Otherwise, set the activeIndex to the clicked FAQ's index.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Headers */}
        <h3 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">
          Common Queries
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#001529] mb-10 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion Container */}
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200"
              >
                {/* Question Header (Clickable) */}
                <div 
                  className="p-6 cursor-pointer flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="text-[#001529] font-bold text-lg pr-4">
                    {faq.question}
                  </h4>
                  
                  {/* Dynamic Chevron Icon: Flips based on 'isOpen' state */}
                  <div className="text-blue-600 flex-shrink-0">
                    <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform duration-300`}></i>
                  </div>
                </div>

                {/* Answer Body (Conditionally Rendered) */}
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-500 text-md leading-relaxed animate-fade-in-down">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;