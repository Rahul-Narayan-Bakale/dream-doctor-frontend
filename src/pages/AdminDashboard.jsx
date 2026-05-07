import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import ApplicationsTable from '../components/ApplicationsTable';
import AddUniversityForm from '../components/AddUniversityForm';
import ConsultancyLeadsTable from '../components/ConsultancyLeadsTable'; 
import EnquiryPopupLeads from '../components/EnquiryPopupLeads';

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('applications'); 
  
  // --- NEW: Added the detailed fields to our initial state! ---
  const initialFormState = { 
    name: '', location: '', fee: '', duration: '6 Years', badge: '', badgeColor: 'bg-red-500', image: '',
    overview: '', eligibility: '', hostelFacilities: '', feeDetails: '', highlights: '' 
  };

  // Data States
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [applications, setApplications] = useState([]);
  const [isLoadingApps, setIsLoadingApps] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initial Fetch based on active tab
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login');
    } else {
      if (activeTab === 'applications') fetchApplications(token);
      if (activeTab === 'universities') fetchUniversities(); 
    }
  }, [navigate, activeTab]);

  const fetchUniversities = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/universities`);
      const data = await res.json();
      setUniversities(data);
    } catch (err) {
      console.error("Failed to fetch universities");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  // Applications Data Fetcher
  const fetchApplications = async (token) => {
    setIsLoadingApps(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/payments/applications`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      }
    } catch (error) {
      console.error("Error fetching applications", error);
    } finally {
      setIsLoadingApps(false);
    }
  };

  // University Form Handlers
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUniversitySubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: editingId ? 'Updating...' : 'Adding...' });
    const token = localStorage.getItem('adminToken');

    const url = editingId 
      ? `${import.meta.env.VITE_API_URL}/api/universities/${editingId}` 
      : `${import.meta.env.VITE_API_URL}/api/universities`;
    
    const method = editingId ? 'PUT' : 'POST';

    // Before sending, if highlights is a string, let's keep it as a string. 
    // The backend array casting or splitting can happen naturally if needed.
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', message: editingId ? 'University updated!' : 'University added!' });
        
        // --- NEW: Reset the form using our complete initial state ---
        setFormData(initialFormState);
        setEditingId(null);
        fetchUniversities();
      } else {
        setStatus({ type: 'error', message: data.message || 'Action failed.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Server error.' });
    }
  };

  const handleEditClick = (uni) => {
    // Check if highlights is an array (from backend) and convert to string for the text input
    const formattedUni = {
      ...uni,
      highlights: Array.isArray(uni.highlights) ? uni.highlights.join(', ') : (uni.highlights || '')
    };
    setFormData(formattedUni); 
    setEditingId(uni._id); 
    setStatus({ type: '', message: '' }); 
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this university?")) return;
    
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/universities/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        fetchUniversities(); 
      }
    } catch (err) {
      console.error("Delete failed");
    }
  };

  const handleToggleHome = async (uni) => {
    const token = localStorage.getItem('adminToken');
    try {
      // 1. NEW LOGIC: Explicitly handle the 'undefined' state for older database entries.
      // If it is explicitly false, change it to true. If it is true OR undefined, change it to false.
      const newToggleState = uni.showOnHome === false ? true : false;

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/universities/${uni._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        // 2. Send the explicit new state instead of relying on the '!' operator
        body: JSON.stringify({ ...uni, showOnHome: newToggleState }),
      });
      
      if (response.ok) {
        fetchUniversities(); // Refresh the table instantly
      } else {
        // Optional: Helpful for debugging if the backend rejects the request
        console.error("Server rejected the toggle request.");
      }
    } catch (error) {
      console.error("Failed to toggle home visibility", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Extracted Header Component */}
        <AdminHeader 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onLogout={handleLogout} 
        />

        <div className="p-8">
          
          {/* TAB 1: Applications */}
          {activeTab === 'applications' && (
            <ApplicationsTable 
              applications={applications} 
              isLoading={isLoadingApps} 
            />
          )}

          {/* TAB 2: Universities */}
          {activeTab === 'universities' && (
            <AddUniversityForm 
              formData={formData} 
              status={status} 
              onChange={handleChange} 
              onSubmit={handleUniversitySubmit}
              universities={universities}
              editingId={editingId}
              onEdit={handleEditClick}
              onDelete={handleDelete}
              onToggleHome={handleToggleHome}
              onCancelEdit={() => {
                // --- NEW: Reset the form using our complete initial state ---
                setFormData(initialFormState);
                setEditingId(null);
              }}
            />
          )}

          {/* TAB 3: Consultancy Leads */}
          {activeTab === 'consultancy' && (
            <ConsultancyLeadsTable />
          )}
          
          {/* TAB 4: ENQUIRY & POPUP LEADS */}
          {activeTab === 'enquiryPopup' && (
            <EnquiryPopupLeads />
          )}

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;