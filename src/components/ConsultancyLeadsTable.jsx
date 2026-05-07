import React, { useEffect, useState } from 'react';

function ConsultancyLeadsTable() {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeads = async () => {
      const token = localStorage.getItem('adminToken');
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/consultancy`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setLeads(data);
        } else {
          setError('Failed to fetch leads. Are you logged in as an admin?');
        }
      } catch (err) {
        setError('Network error while fetching leads.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (isLoading) return <div className="text-center p-10 text-gray-500">Loading leads...</div>;
  if (error) return <div className="text-center p-10 text-red-500 font-bold">{error}</div>;

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Free Consultancy Leads</h2>
      
      {leads.length === 0 ? (
        <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-xl">No leads have been submitted yet.</div>
      ) : (
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
              <th className="p-4 rounded-tl-lg">Date</th>
              <th className="p-4">Student Info</th>
              <th className="p-4">Guardian Info</th>
              <th className="p-4">Academics</th>
              <th className="p-4 rounded-tr-lg">Location</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y divide-gray-100 text-sm">
            {leads.map((lead) => (
              <tr key={lead._id} className="hover:bg-blue-50 transition">
                <td className="p-4 whitespace-nowrap">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <div className="font-bold text-[#001529]">{lead.fullName}</div>
                  <div><i className="fas fa-envelope mr-1"></i>{lead.email}</div>
                  <div><i className="fas fa-phone mr-1"></i>{lead.phone}</div>
                </td>
                <td className="p-4">
                  <div className="font-semibold">{lead.guardianName}</div>
                  <div className="text-gray-500">{lead.guardianOccupation}</div>
                </td>
                <td className="p-4">
                  <div>12th PCB: <span className="font-bold">{lead.pcbPercentage || 'N/A'}</span></div>
                  <div>NEET: <span className="font-bold">{lead.neetMarks || 'N/A'}</span></div>
                </td>
                <td className="p-4">
                  {lead.city}, {lead.state} <br/> ({lead.country})
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ConsultancyLeadsTable;