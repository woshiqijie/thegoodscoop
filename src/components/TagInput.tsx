import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import Button from './Button';

interface TagInputProps {
  label?: string;
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

const TagInput: React.FC<TagInputProps> = ({
  label,
  tags,
  onChange,
  placeholder = "Add a tag..."
}) => {
  const [inputValue, setInputValue] = useState('');

  const addTag = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !tags.includes(trimmedValue)) {
      onChange([...tags, trimmedValue]);
      setInputValue('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-lg font-bold mb-2 text-black">
          {label}
        </label>
      )}
      
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 text-lg font-medium border-4 border-black bg-white focus:bg-brutal-yellow focus:outline-none transition-colors duration-200"
        />
        <Button onClick={addTag} size="md" variant="secondary">
          <Plus size={20} />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-2 px-3 py-2 bg-brutal-lime border-2 border-black font-bold text-sm"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="hover:text-brutal-pink transition-colors"
            >
              <X size={16} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
