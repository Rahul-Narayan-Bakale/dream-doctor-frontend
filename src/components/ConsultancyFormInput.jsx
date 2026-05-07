import React from 'react';

function FormInput({ label, name, value, onChange, type = "text", required = false, placeholder = "", children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#4B5563] mb-1">
        {required && <span className="text-red-500 mr-1">*</span>}
        {label}
      </label>
      
      {/* If we pass custom children (like a select dropdown or custom phone input), render them. Otherwise, render a standard input. */}
      {children ? (
        children
      ) : (
        <input 
          type={type} 
          name={name} 
          value={value} 
          onChange={onChange} 
          required={required} 
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
        />
      )}
    </div>
  );
}

export default FormInput;