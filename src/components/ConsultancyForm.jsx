import React, { useState } from 'react';
import ConsultancyFormInput from './ConsultancyFormInput'; 

function ConsultancyForm() {
  const [formData, setFormData] = useState({
    fullName: '', dob: '', email: '', phone: '', guardianName: '', 
    guardianOccupation: '', pcbPercentage: '', neetMarks: '', 
    state: '', city: '', country: 'India', address: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Clear any previous statuses before submitting
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/consultancy`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          fullName: '', dob: '', email: '', phone: '', guardianName: '', 
          guardianOccupation: '', pcbPercentage: '', neetMarks: '', 
          state: '', city: '', country: 'India', address: ''
        });
      } else {
        // This will now trigger our new error modal!
        setStatus({ type: 'error', message: data.message || 'Failed to submit request. Please check your details.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm relative">
        <h2 className="text-3xl font-bold text-[#001529] mb-8 border-b pb-4">Book Free Counselling</h2>

        {/* 
          NOTE: The old inline error div that used to be here has been removed!
          Errors are now exclusively handled by the modal below.
        */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <ConsultancyFormInput label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConsultancyFormInput label="Date Of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            <ConsultancyFormInput label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <ConsultancyFormInput label="Phone" required>
            <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-blue-500">
              <span className="bg-gray-50 px-3 py-2 border-r border-gray-300 text-gray-500 flex items-center">🇮🇳 +91</span>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="81234 56789" className="w-full px-4 py-2 focus:outline-none" />
            </div>
          </ConsultancyFormInput>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConsultancyFormInput label="Guardian Name" name="guardianName" value={formData.guardianName} onChange={handleChange} required />
            <ConsultancyFormInput label="Guardian Occupation" name="guardianOccupation" value={formData.guardianOccupation} onChange={handleChange} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConsultancyFormInput label="12th % (PCB) If available" name="pcbPercentage" value={formData.pcbPercentage} onChange={handleChange} />
            <ConsultancyFormInput label="NEET Marks ( if available )" name="neetMarks" value={formData.neetMarks} onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ConsultancyFormInput label="State" name="state" value={formData.state} onChange={handleChange} required />
            <ConsultancyFormInput label="City" name="city" value={formData.city} onChange={handleChange} required />
            
            <ConsultancyFormInput label="Country" required>
              <select name="country" value={formData.country} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                <option value="India">India</option>
                <option value="Other">Other</option>
              </select>
            </ConsultancyFormInput>
          </div>

          <ConsultancyFormInput label="Address">
            <textarea name="address" value={formData.address} onChange={handleChange} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
          </ConsultancyFormInput>

          <div className="pt-4">
            <button type="submit" disabled={isSubmitting} className={`bg-[#2B6CB0] text-white font-bold py-3 px-6 rounded hover:bg-blue-800 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
              {isSubmitting ? 'SUBMITTING...' : 'BOOK FREE COUNSELLING'}
            </button>
          </div>
        </form>
      </div>

      {/* --- PROFESSIONAL SUCCESS MODAL --- */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-down">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-sm w-full p-8 text-center transform transition-all">
            <div className="w-16 h-16 bg-[#E6F8F0] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-2xl text-[#00C853]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#001529] mb-3">Success!</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Your request has been submitted successfully! We will contact you soon.
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-[#001529] text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-900 transition-colors w-full shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* --- PROFESSIONAL ERROR MODAL --- */}
      {status.type === 'error' && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-down">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-sm w-full p-8 text-center transform transition-all">
            
            {/* Soft Red Warning Icon */}
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-exclamation-triangle text-2xl text-red-500"></i>
            </div>
            
            <h3 className="text-2xl font-bold text-[#001529] mb-3">Oops!</h3>
            
            {/* Dynamic Error Message display */}
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              {status.message}
            </p>
            
            <button
              // Clicking try again clears the status, which closes the modal
              onClick={() => setStatus({ type: '', message: '' })}
              className="bg-red-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-red-700 transition-colors w-full shadow-md"
            >
              Try Again
            </button>
            
          </div>
        </div>
      )}
    </>
  );
}

export default ConsultancyForm;