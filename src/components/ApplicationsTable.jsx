import React from 'react';

function ApplicationsTable({ applications, isLoading }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Recent Applications (Paid)</h2>
      
      {isLoading ? (
        <div className="text-center py-10 text-gray-500 animate-pulse">Loading applications...</div>
      ) : applications.length === 0 ? (
        <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-xl">No applications found yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                <th className="p-4 rounded-tl-lg">Date</th>
                <th className="p-4">Student Name</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">College Preference</th>
                <th className="p-4">Payment ID</th>
                <th className="p-4 rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm divide-y divide-gray-100">
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-blue-50 transition">
                  <td className="p-4 whitespace-nowrap">{new Date(app.createdAt).toLocaleDateString()}</td>
                  <td className="p-4 font-bold text-gray-800">{app.name}</td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <span><i className="fas fa-envelope text-gray-400 w-4"></i> {app.email}</span>
                      <span><i className="fas fa-phone text-gray-400 w-4"></i> {app.phone}</span>
                    </div>
                  </td>
                  <td className="p-4">{app.preferenceCollege || 'Not specified'}</td>
                  <td className="p-4 font-mono text-xs">{app.paymentId}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-xs flex items-center w-max">
                      <i className="fas fa-check-circle mr-1"></i> {app.status || 'Paid'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ApplicationsTable;