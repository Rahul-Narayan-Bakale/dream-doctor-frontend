import React from 'react';

function AdminHeader({ activeTab, setActiveTab, onLogout }) {
  return (
    <div className="bg-[#001529] px-8 py-6 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl font-bold flex items-center">
        <i className="fas fa-shield-alt mr-3 text-blue-400"></i> Admin Portal
      </h1>
      <div className="flex gap-4 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('applications')}
          className={`px-4 py-2 rounded-lg font-bold transition whitespace-nowrap ${activeTab === 'applications' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-300 hover:text-white hover:bg-white/10'}`}
        >
          <i className="fas fa-users mr-2"></i> Students
        </button>
        <button 
          onClick={() => setActiveTab('consultancy')}
          className={`px-4 py-2 font-bold rounded-lg transition ${
            activeTab === 'consultancy' 
              ? 'bg-[#001529] text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Consultancy Leads
        </button>
        <button 
          onClick={() => setActiveTab('enquiryPopup')}
          className={`px-4 py-2 font-bold rounded-lg transition ${
            activeTab === 'enquiryPopup' 
              ? 'bg-[#001529] text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Website Leads
        </button>
        <button 
          onClick={() => setActiveTab('universities')}
          className={`px-4 py-2 rounded-lg font-bold transition whitespace-nowrap ${activeTab === 'universities' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-300 hover:text-white hover:bg-white/10'}`}
        >
          <i className="fas fa-university mr-2"></i> Add College
        </button>
        <button onClick={onLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-bold transition ml-2 whitespace-nowrap">
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminHeader;