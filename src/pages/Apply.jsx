import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormInput from '../components/FormInput';
import TermsDeclaration from '../components/TermsDeclaration';

function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    neetMarks: '',
    preferenceCollege: '',
  });

  // Automatically scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/payments/create-order`, { method: 'POST' });
      const order = await res.json();

      const options = {
        key: "rzp_test_SizHCnGw9Yguqi", // <-- Replace with your test key
        amount: order.amount,
        currency: order.currency,
        name: "Magendra Elite Healthcare",
        description: "Application Registration Fee",
        order_id: order.id,
        handler: async function (response) {
          const finalRes = await fetch(`${import.meta.env.VITE_API_URL}/api/payments/verify-and-save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...response, formData: formData })
          });
          const result = await finalRes.json();
          if(result.success) alert("Registration Successful! Welcome to Dream Doctor.");
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: { color: "#e83e8c" }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response){
          alert("Payment Failed: " + response.error.description);
      });
      rzp.open();

    } catch (error) {
      console.error("Error launching Razorpay:", error);
      alert("Could not connect to payment gateway.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Navbar />

      <main className="flex-grow">
        
        {/* --- HERO BANNER --- */}
        <section className="bg-[#001529] text-white pt-20 pb-32 px-4 md:px-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-900 text-teal-400 font-bold tracking-wider uppercase text-xs mb-6 border border-blue-800">
              Admissions Open 2026-27
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Official Application Portal
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Secure your seat at a top Russian Medical University. Fill out the form below to initiate your application process.
            </p>
          </div>
        </section>

        {/* --- FORM SECTION (Overlapping Hero) --- */}
        <section className="px-4 md:px-10 pb-16 -mt-16 relative z-20">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
            
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#001529]">Student Details</h2>
              <i className="fas fa-user-graduate text-3xl text-gray-200"></i>
            </div>
            
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="Full Name *" name="name" required onChange={handleChange} />
                <FormInput label="Email Address *" name="email" type="email" required onChange={handleChange} />
                <FormInput label="Phone Number *" name="phone" type="tel" required onChange={handleChange} placeholder="+91" />
                <FormInput label="NEET Marks (if available)" name="neetMarks" onChange={handleChange} />
              </div>

              <FormInput label="Full Address *" name="address" isTextarea required onChange={handleChange} />
              
              <FormInput label="Preference College" name="preferenceCollege" onChange={handleChange} placeholder="e.g. Kazan Federal University" />

              {/* Extracted T&C Component */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 my-6">
                <TermsDeclaration />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#e83e8c] text-white font-bold py-4 rounded-xl hover:bg-[#d82a7a] transition-colors shadow-lg text-lg mt-4 flex justify-center items-center gap-2"
              >
                <i className="fas fa-lock text-sm"></i> PAY REGISTRATION FEE (INR 6,000)
              </button>
              <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                <i className="fas fa-shield-alt"></i> Secured by Razorpay
              </p>
            </form>
          </div>
        </section>

        {/* --- WHAT HAPPENS NEXT SECTION --- */}
        <section className="py-16 bg-white border-t border-gray-200 px-4 md:px-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#001529] mb-12">What happens after you pay?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative p-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border-2 border-blue-100 shadow-sm">
                  1
                </div>
                <h3 className="font-bold text-lg text-[#001529] mb-2">Instant Confirmation</h3>
                <p className="text-gray-600 text-sm">You will receive an immediate payment receipt and application ID on your registered email.</p>
              </div>

              <div className="relative p-6">
                <div className="hidden md:block absolute top-14 -left-1/2 w-full h-[2px] bg-dashed border-t-2 border-dashed border-gray-200 -z-10"></div>
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border-2 border-blue-100 shadow-sm">
                  2
                </div>
                <h3 className="font-bold text-lg text-[#001529] mb-2">Document Verification</h3>
                <p className="text-gray-600 text-sm">Our admission team will contact you within 24 hours to collect and verify your academic documents.</p>
              </div>

              <div className="relative p-6">
                <div className="hidden md:block absolute top-14 -left-1/2 w-full h-[2px] bg-dashed border-t-2 border-dashed border-gray-200 -z-10"></div>
                <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border-2 border-teal-100 shadow-sm">
                  3
                </div>
                <h3 className="font-bold text-lg text-[#001529] mb-2">Admission Letter</h3>
                <p className="text-gray-600 text-sm">Once verified, we will process your application and secure your official admission letter from the university.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Apply;