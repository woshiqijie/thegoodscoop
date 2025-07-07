import React from 'react';

interface TextareaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
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
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full px-4 py-3 text-lg font-medium border-4 border-black bg-white focus:bg-brutal-yellow focus:outline-none transition-colors duration-200 resize-vertical ${
          error ? 'border-brutal-pink bg-pink-50' : ''
        }`}
      />
      {error && (
        <p className="mt-2 text-brutal-pink font-bold text-sm">{error}</p>
      )}
    </div>
  );
};

export default Textarea;
