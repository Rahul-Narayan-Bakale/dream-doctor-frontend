import React from 'react';

function FormInput({ label, type = "text", name, value, onChange, required, placeholder, isTextarea }) {
  // We define the Tailwind classes once here!
  const baseClasses = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors";

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          className={`${baseClasses} min-h-[120px] resize-y`}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          className={baseClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default FormInput;