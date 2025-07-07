import React from 'react';

interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  required = false,
  error
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-lg font-bold mb-2 text-black">
          {label} {required && <span className="text-brutal-pink">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`w-full px-4 py-3 text-lg font-medium border-4 border-black bg-white focus:bg-brutal-yellow focus:outline-none transition-colors duration-200 ${
          error ? 'border-brutal-pink bg-pink-50' : ''
        }`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2 text-brutal-pink font-bold text-sm">{error}</p>
      )}
    </div>
  );
};

export default Select;
