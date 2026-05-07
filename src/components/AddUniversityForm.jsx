import React from 'react';

function AddUniversityForm({ 
  formData, status, onChange, onSubmit, 
  universities = [], editingId, onEdit, onDelete, onCancelEdit,onToggleHome
}) {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      
      {/* --- TOP SECTION: THE FORM --- */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="text-2xl font-bold text-gray-800">
            {editingId ? '✏️ Edit University' : '➕ Add New University'}
          </h2>
          {editingId && (
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
              Editing Mode
            </span>
          )}
        </div>
        
        {status.message && (
          <div className={`p-4 mb-6 rounded-lg font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6">
          
          {/* --- CARD BASIC DETAILS --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">University Name *</label>
              <input type="text" name="name" value={formData.name || ''} onChange={onChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g. Kazan Federal University" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Location *</label>
              <input type="text" name="location" value={formData.location || ''} onChange={onChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g. Kazan, Russia" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Tuition Fee *</label>
              <input type="text" name="fee" value={formData.fee || ''} onChange={onChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g. $4,000/Year" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Duration</label>
              <input type="text" name="duration" value={formData.duration || ''} onChange={onChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g. 6 Years" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Image Path or URL *</label>
            <input type="text" name="image" value={formData.image || ''} onChange={onChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g. https://..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Badge Text</label>
              <input type="text" name="badge" value={formData.badge || ''} onChange={onChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g. Top Rated" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Badge Color</label>
              <select name="badgeColor" value={formData.badgeColor || 'bg-red-500'} onChange={onChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option value="bg-red-500">Red</option>
                <option value="bg-blue-600">Blue</option>
                <option value="bg-green-500">Green</option>
                <option value="bg-orange-500">Orange</option>
              </select>
            </div>
          </div>

          {/* --- NEW SECTION: FULL PAGE CONTENT --- */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold text-[#001529] mb-4"><i className="fas fa-file-alt mr-2 text-blue-600"></i> Full Page Content</h3>
            <p className="text-sm text-gray-500 mb-6">This content will be displayed on the dedicated University Details page.</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Overview / About the University</label>
                <textarea name="overview" value={formData.overview || ''} onChange={onChange} rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Write a detailed introduction..."></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Eligibility Criteria</label>
                <textarea name="eligibility" value={formData.eligibility || ''} onChange={onChange} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="E.g. 50% in PCB, NEET qualified... (Use Enter for new lines)"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Hostel & Accommodation</label>
                  <textarea name="hostelFacilities" value={formData.hostelFacilities || ''} onChange={onChange} rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Describe hostel rooms, Indian mess, etc."></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Detailed Fee Structure</label>
                  <textarea name="feeDetails" value={formData.feeDetails || ''} onChange={onChange} rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Breakdown of tuition, hostel, medical insurance..."></textarea>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Key Highlights (Comma Separated)</label>
                <input type="text" name="highlights" value={formData.highlights || ''} onChange={onChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="e.g. NMC Recognized, 100% English Medium, Safe Campus" />
                <p className="text-xs text-gray-500 mt-1">Separate each highlight with a comma.</p>
              </div>
            </div>
          </div>

          {/* Dynamic Buttons */}
          <div className="flex gap-4 pt-6">
            <button type="submit" className={`flex-1 text-white font-bold py-4 rounded-xl transition shadow-lg text-lg ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#001529] hover:bg-blue-900'}`}>
              {editingId ? 'Save Changes' : 'Add University to Database'}
            </button>
            
            {editingId && (
              <button type="button" onClick={onCancelEdit} className="px-8 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/*--- BOTTOM SECTION: THE LIST --- */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Manage Existing Universities</h2>
        
        {universities.length === 0 ? (
          <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-xl">No universities in database yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                  <th className="p-4 rounded-tl-lg">University Name</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Fee</th>
                  <th className="p-4 text-center">Show on Home</th> 
                  <th className="p-4 rounded-tr-lg text-right">Actions</th>
                </tr>
              </thead>
              
              <tbody className="text-gray-600 divide-y divide-gray-100">
                {universities.map((uni) => (
                  <tr key={uni._id} className="hover:bg-blue-50 transition">
                    <td className="p-4 font-bold text-[#001529]">{uni.name}</td>
                    <td className="p-4 text-sm">{uni.location}</td>
                    <td className="p-4 font-mono text-sm text-blue-700 font-bold">{uni.fee}</td>
                    <td className="p-4 text-center">
                      <input 
                        type="checkbox" 
                        // If showOnHome is undefined (old data), assume it's true. Otherwise, use its value.
                        checked={uni.showOnHome !== false} 
                        onChange={() => onToggleHome(uni)} 
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer focus:ring-blue-500"
                        title="Toggle visibility on Home Page"
                      />
                    </td>
                    <td className="p-4 text-right space-x-3 whitespace-nowrap">
                      <button 
                        onClick={() => onEdit(uni)}
                        className="text-blue-500 hover:text-blue-700 transition"
                        title="Edit"
                      >
                        <i className="fas fa-edit text-lg"></i>
                      </button>
                      <button 
                        onClick={() => onDelete(uni._id)}
                        className="text-red-500 hover:text-red-700 transition"
                        title="Delete"
                      >
                        <i className="fas fa-trash-alt text-lg"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}

export default AddUniversityForm;