import React, { useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import Button from './Button';

interface ImageUploadProps {
  label?: string;
  images: string[];
  onChange: (images: string[]) => void;
  maxImages?: number;
  featuredImage?: string;
  onFeaturedImageChange?: (image: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  label,
  images,
  onChange,
  maxImages = 10,
  featuredImage,
  onFeaturedImageChange
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageUrl = event.target?.result as string;
          if (images.length < maxImages) {
            onChange([...images, imageUrl]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (indexToRemove: number) => {
    const imageToRemove = images[indexToRemove];
    const newImages = images.filter((_, index) => index !== indexToRemove);
    onChange(newImages);
    
    // If the removed image was the featured image, clear it
    if (featuredImage === imageToRemove && onFeaturedImageChange) {
      onFeaturedImageChange('');
    }
  };

  const setFeaturedImage = (image: string) => {
    if (onFeaturedImageChange) {
      onFeaturedImageChange(image);
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-lg font-bold mb-2 text-black">
          {label}
        </label>
      )}
      
      <div className="border-4 border-black border-dashed p-6 bg-gray-50">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <div className="text-center">
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="secondary"
            disabled={images.length >= maxImages}
          >
            <Upload className="mr-2" size={20} />
            Upload Images ({images.length}/{maxImages})
          </Button>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            Click to upload images or drag and drop
          </p>
        </div>
      </div>

      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <div className={`border-4 ${featuredImage === image ? 'border-brutal-pink' : 'border-black'} bg-white p-2`}>
                <img
                  src={image}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute top-1 right-1 flex gap-1">
                  <button
                    onClick={() => removeImage(index)}
                    className="bg-brutal-pink border-2 border-black p-1 hover:bg-pink-400 transition-colors"
                  >
                    <X size={16} />
                  </button>
                  {onFeaturedImageChange && (
                    <button
                      onClick={() => setFeaturedImage(image)}
                      className={`border-2 border-black p-1 transition-colors ${
                        featuredImage === image 
                          ? 'bg-brutal-pink' 
                          : 'bg-brutal-yellow hover:bg-yellow-300'
                      }`}
                      title="Set as featured image"
                    >
                      <ImageIcon size={16} />
                    </button>
                  )}
                </div>
              </div>
              {featuredImage === image && (
                <p className="text-xs font-bold text-brutal-pink mt-1 text-center">
                  FEATURED
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
