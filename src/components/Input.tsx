import React from 'react';

interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'url';
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
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
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 text-lg font-medium border-4 border-black bg-white focus:bg-brutal-yellow focus:outline-none transition-colors duration-200 ${
          error ? 'border-brutal-pink bg-pink-50' : ''
        }`}
      />
      {error && (
        <p className="mt-2 text-brutal-pink font-bold text-sm">{error}</p>
      )}
    </div>
  );
};

export default Input;
