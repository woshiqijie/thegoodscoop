import React, { useState } from 'react';
import { Plus, Edit, Trash2, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../types';
import Button from './Button';
import Input from './Input';

interface CategoryManagerProps {
  categories: Category[];
  onSave: (categories: Category[]) => void;
  onClose: () => void;
}

const CategoryManager: React.FC<CategoryManagerProps> = ({
  categories,
  onSave,
  onClose
}) => {
  const [localCategories, setLocalCategories] = useState<Category[]>(categories);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('#FFFF00');

  const colors = [
    '#FFFF00', // Yellow
    '#FF69B4', // Pink
    '#00FFFF', // Cyan
    '#32FF32', // Lime
    '#FF4500', // Orange
    '#9932CC', // Purple
    '#FF1493', // Deep Pink
    '#00CED1', // Dark Turquoise
  ];

  const addCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory: Category = {
        id: uuidv4(),
        name: newCategoryName.trim(),
        color: newCategoryColor
      };
      setLocalCategories([...localCategories, newCategory]);
      setNewCategoryName('');
      setNewCategoryColor('#FFFF00');
    }
  };

  const updateCategory = (id: string, name: string, color: string) => {
    setLocalCategories(localCategories.map(cat => 
      cat.id === id ? { ...cat, name, color } : cat
    ));
    setEditingId(null);
  };

  const deleteCategory = (id: string) => {
    setLocalCategories(localCategories.filter(cat => cat.id !== id));
  };

  const handleSave = () => {
    onSave(localCategories);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white border-4 border-black shadow-brutal-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b-4 border-black p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Manage Categories</h2>
          <Button onClick={onClose} variant="danger" size="sm">
            <X size={20} />
          </Button>
        </div>

        <div className="p-6">
          {/* Add New Category */}
          <div className="mb-8 bg-gray-50 border-4 border-black p-4">
            <h3 className="text-lg font-bold mb-4">Add New Category</h3>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Input
                  label="Category Name"
                  value={newCategoryName}
                  onChange={setNewCategoryName}
                  placeholder="Enter category name..."
                />
              </div>
              <div>
                <label className="block text-lg font-bold mb-2 text-black">
                  Color
                </label>
                <div className="flex gap-2 mb-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setNewCategoryColor(color)}
                      className={`w-8 h-8 border-2 border-black ${
                        newCategoryColor === color ? 'ring-4 ring-black' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <Button onClick={addCategory} variant="success">
                <Plus size={16} className="mr-1" />
                Add
              </Button>
            </div>
          </div>

          {/* Categories List */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Existing Categories ({localCategories.length})</h3>
            {localCategories.length === 0 ? (
              <p className="text-gray-600 font-medium text-center py-8">
                No categories yet. Add your first category above!
              </p>
            ) : (
              localCategories.map((category) => (
                <CategoryItem
                  key={category.id}
                  category={category}
                  isEditing={editingId === category.id}
                  onEdit={() => setEditingId(category.id)}
                  onSave={(name, color) => updateCategory(category.id, name, color)}
                  onCancel={() => setEditingId(null)}
                  onDelete={() => deleteCategory(category.id)}
                  colors={colors}
                />
              ))
            )}
          </div>

          <div className="flex gap-4 pt-6 border-t-4 border-black mt-8">
            <Button onClick={handleSave} variant="success" size="lg">
              Save Changes
            </Button>
            <Button onClick={onClose} variant="secondary" size="lg">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CategoryItemProps {
  category: Category;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (name: string, color: string) => void;
  onCancel: () => void;
  onDelete: () => void;
  colors: string[];
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  colors
}) => {
  const [editName, setEditName] = useState(category.name);
  const [editColor, setEditColor] = useState(category.color);

  const handleSave = () => {
    if (editName.trim()) {
      onSave(editName.trim(), editColor);
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white border-4 border-black p-4">
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <Input
              value={editName}
              onChange={setEditName}
              placeholder="Category name..."
            />
          </div>
          <div>
            <div className="flex gap-2 mb-4">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setEditColor(color)}
                  className={`w-8 h-8 border-2 border-black ${
                    editColor === color ? 'ring-4 ring-black' : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSave} variant="success" size="sm">
              Save
            </Button>
            <Button onClick={onCancel} variant="secondary" size="sm">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-4 border-black p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div
          className="w-6 h-6 border-2 border-black"
          style={{ backgroundColor: category.color }}
        />
        <span className="text-lg font-bold">{category.name}</span>
      </div>
      <div className="flex gap-2">
        <Button onClick={onEdit} variant="primary" size="sm">
          <Edit size={16} />
        </Button>
        <Button onClick={onDelete} variant="danger" size="sm">
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CategoryManager;
