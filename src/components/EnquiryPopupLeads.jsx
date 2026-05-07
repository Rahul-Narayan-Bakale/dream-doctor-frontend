import React, { useState, useEffect } from 'react';

function EnquiryPopupLeads() {
  const [enquiryLeads, setEnquiryLeads] = useState([]);
  const [popupLeads, setPopupLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllLeads = async () => {
      try {
        // Fetch both APIs simultaneously for better performance
        const [enquiryRes, popupRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`),
          fetch(`${import.meta.env.VITE_API_URL}/api/popup`)
        ]);

        if (!enquiryRes.ok || !popupRes.ok) {
          throw new Error('Failed to fetch data from the server.');
        }
        
        const enquiryData = await enquiryRes.json();
        const popupData = await popupRes.json();

        setEnquiryLeads(enquiryData);
        setPopupLeads(popupData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllLeads();
  }, []);

  // Reusable mini-component for the tables to keep code clean
  const LeadsTable = ({ title, data, bgColor }) => (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex-1">
      <div className={`${bgColor} text-white px-6 py-4`}>
        <h2 className="text-xl font-bold">{title} ({data.length})</h2>
      </div>
      
      <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 sticky top-0 shadow-sm">
            <tr>
              <th className="p-4 font-semibold text-gray-700 border-b">Name</th>
              <th className="p-4 font-semibold text-gray-700 border-b">Contact Info</th>
              <th className="p-4 font-semibold text-gray-700 border-b">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan="3" className="p-8 text-center text-gray-500 italic">No leads found yet.</td>
              </tr>
            ) : (
              data.map((lead) => (
                <tr key={lead._id} className="hover:bg-blue-50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-gray-800">{lead.fullName}</p>
                    {lead.neetMarks && <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full mt-1 inline-block">NEET: {lead.neetMarks}</span>}
                  </td>
                  <td className="p-4 text-sm">
                    <p className="text-gray-600"><i className="fas fa-envelope mr-2 text-gray-400"></i>{lead.email}</p>
                    <p className="text-gray-600 mt-1"><i className="fas fa-phone mr-2 text-gray-400"></i>{lead.phone}</p>
                  </td>
                  <td className="p-4 text-sm text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (isLoading) return <div className="text-center py-20 text-xl font-bold text-gray-500 animate-pulse">Loading Leads...</div>;
  if (error) return <div className="text-center py-20 text-red-500 font-bold">Error: {error}</div>;

  return (
    <div className="animate-fade-in-down">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#001529]">Website Leads</h2>
        <p className="text-gray-500 text-sm mt-1">Leads collected from the "Enquire Now" section and the Pop-up Modal.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LeadsTable title="Enquiry Leads" data={enquiryLeads} bgColor="bg-[#1A36B4]" />
        <LeadsTable title="Popup Leads" data={popupLeads} bgColor="bg-[#2B9B5A]" />
      </div>
    </div>
  );
}

export default EnquiryPopupLeads;