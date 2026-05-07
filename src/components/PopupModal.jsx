import React, { useState, useEffect } from 'react';

function PopupModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  
  // NEW: State for form inputs and loading status
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('popupClosed')) {
      const displayTimer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimatingIn(true), 50);
      }, 2000);
      return () => clearTimeout(displayTimer);
    }
  }, []);

  const closeModal = () => {
    setIsAnimatingIn(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
    sessionStorage.setItem('popupClosed', 'true');
  };

  // NEW: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // NEW: Handle form submission to the Popup API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const mappedData = {
        fullName: formData.name,
        phone: formData.phone,
        email: formData.email
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/popup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mappedData),
      });

      if (response.ok) {
        alert('Success! We will contact you shortly.');
        closeModal(); // Automatically close the popup on success!
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className={`relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[95vh] flex flex-col md:flex-row transform transition-all duration-500 ${isAnimatingIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <button onClick={closeModal} className="absolute top-4 right-4 z-20 bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transition-colors text-sm">
          <i className="fas fa-times"></i>
        </button>

        <div className="md:w-5/12 bg-gradient-to-br from-[#24AE6A] to-[#187547] p-8 md:p-10 text-white flex flex-col justify-center items-center text-center relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]"></div>
          <div className="relative z-10">
            <i className="fas fa-graduation-cap text-6xl mb-6"></i>
            <h2 className="text-2xl font-bold mb-4">Start Your MBBS Journey</h2>
            <p className="text-teal-50 text-sm mb-8 leading-relaxed">Join thousands of students who have successfully secured admissions to top medical universities abroad.</p>
            <ul className="space-y-4 text-left w-full text-sm font-semibold">
              <li className="flex items-center"><i className="fas fa-certificate text-yellow-400 mr-3 text-lg"></i> 100% Transparent Process</li>
              <li className="flex items-center"><i className="fas fa-user-md text-yellow-400 mr-3 text-lg"></i> Expert Counselling</li>
              <li className="flex items-center"><i className="fas fa-award text-yellow-400 mr-3 text-lg"></i> NMC Approved Universities</li>
            </ul>
          </div>
        </div>

        <div className="md:w-7/12 p-8 md:p-10 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Free Counselling</h2>
          <p className="text-gray-500 text-sm mb-6 border-b pb-4">Fill below details to get a call from expert career counsellor</p>
          
          {/* NEW: Attached onSubmit handler to the form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1"><span className="text-red-500">*</span> Name</label>
              {/* NEW: Bound input to state */}
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#24AE6A] outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1"><span className="text-red-500">*</span> Phone</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 select-none">🇮🇳 +91</span>
                {/* NEW: Bound input to state */}
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full pl-16 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#24AE6A] outline-none transition-all" placeholder="00000 00000" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1"><span className="text-red-500">*</span> Email Address</label>
              {/* NEW: Bound input to state */}
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#24AE6A] outline-none transition-all" />
            </div>
            <div className="pt-2">
              <button type="submit" disabled={isSubmitting} className={`w-full md:w-auto bg-[#312e81] hover:bg-[#1e1b4b] text-white font-bold py-3 px-8 rounded-md transition-colors text-sm shadow-md ${isSubmitting ? 'opacity-70' : ''}`}>
                {isSubmitting ? 'SUBMITTING...' : 'BOOK FREE COUNSELLING'}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default PopupModal;