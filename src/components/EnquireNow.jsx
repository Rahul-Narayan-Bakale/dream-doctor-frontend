import React, { useState } from 'react';

function EnquireNow() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    neetScore: '',
    phoneNumber: ''
  });

  // NEW: State to manage loading behavior
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    
    try {
      // Map the frontend state to match your backend Enquiry schema
      const mappedData = {
        fullName: formData.studentName,
        email: formData.email,
        phone: formData.phoneNumber,
        neetMarks: formData.neetScore || ''
      };

      // Send to the ENQUIRY endpoint
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mappedData),
      });

      if (response.ok) {
        alert('Thank you! Your enquiry has been received.');
        // Clear the form
        setFormData({ studentName: '', email: '', neetScore: '', phoneNumber: '' });
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h3 className="text-2xl font-bold text-center mb-6">Enquire Now</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Student Name <span className="text-red-500">*</span>
            </label>
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your Full Name" required />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" required />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">NEET Score (if available)</label>
            <input type="number" name="neetScore" value={formData.neetScore} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 350" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="+91 00000 00000" required />
          </div>

          {/* Button disables while submitting */}
          <button type="submit" disabled={isSubmitting} className={`w-full bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition ${isSubmitting ? 'opacity-70' : ''}`}>
            {isSubmitting ? 'Submitting...' : 'Book My Consultation'}
          </button>
          
        </form>
      </div>
    </section>
  );
}

export default EnquireNow;