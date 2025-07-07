import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Article, Category } from '../types';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import TagInput from './TagInput';
import ImageUpload from './ImageUpload';
import Button from './Button';

interface ArticleFormProps {
  article?: Article;
  categories: Category[];
  onSave: (article: Article) => void;
  onCancel: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({
  article,
  categories,
  onSave,
  onCancel
}) => {
  const [formData, setFormData] = useState<Partial<Article>>({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    tags: [],
    category: '',
    featuredImage: '',
    images: [],
    status: 'draft'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (article) {
      setFormData(article);
    }
  }, [article]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title?.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.content?.trim()) {
      newErrors.content = 'Content is required';
    }

    if (!formData.excerpt?.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    }

    if (!formData.author?.trim()) {
      newErrors.author = 'Author is required';
    }

    if (!formData.category?.trim()) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (status: 'draft' | 'published') => {
    const updatedFormData = { ...formData, status };
    setFormData(updatedFormData);

    if (!validateForm()) {
      return;
    }

    const now = new Date();
    const articleData: Article = {
      id: article?.id || uuidv4(),
      title: updatedFormData.title!,
      content: updatedFormData.content!,
      excerpt: updatedFormData.excerpt!,
      author: updatedFormData.author!,
      tags: updatedFormData.tags || [],
      category: updatedFormData.category!,
      featuredImage: updatedFormData.featuredImage || '',
      images: updatedFormData.images || [],
      status,
      createdAt: article?.createdAt || now,
      updatedAt: now
    };

    onSave(articleData);
  };

  const categoryOptions = categories.map(cat => ({
    value: cat.name,
    label: cat.name
  }));

  return (
    <div className="max-w-4xl mx-auto bg-white border-4 border-black shadow-brutal-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          {article ? 'Edit Article' : 'Create New Article'}
        </h2>
        <div className="w-20 h-2 bg-brutal-yellow border-2 border-black"></div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <Input
          label="Title"
          value={formData.title || ''}
          onChange={(value) => setFormData({ ...formData, title: value })}
          placeholder="Enter article title..."
          required
          error={errors.title}
        />

        <Textarea
          label="Excerpt"
          value={formData.excerpt || ''}
          onChange={(value) => setFormData({ ...formData, excerpt: value })}
          placeholder="Brief description of the article..."
          rows={3}
          required
          error={errors.excerpt}
        />

        <Textarea
          label="Content"
          value={formData.content || ''}
          onChange={(value) => setFormData({ ...formData, content: value })}
          placeholder="Write your article content here..."
          rows={12}
          required
          error={errors.content}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Author"
            value={formData.author || ''}
            onChange={(value) => setFormData({ ...formData, author: value })}
            placeholder="Author name..."
            required
            error={errors.author}
          />

          <Select
            label="Category"
            value={formData.category || ''}
            onChange={(value) => setFormData({ ...formData, category: value })}
            options={categoryOptions}
            required
            error={errors.category}
          />
        </div>

        <TagInput
          label="Tags"
          tags={formData.tags || []}
          onChange={(tags) => setFormData({ ...formData, tags })}
          placeholder="Add tags..."
        />

        <ImageUpload
          label="Images"
          images={formData.images || []}
          onChange={(images) => setFormData({ ...formData, images })}
          featuredImage={formData.featuredImage}
          onFeaturedImageChange={(featuredImage) => setFormData({ ...formData, featuredImage })}
          maxImages={10}
        />

        <div className="flex gap-4 pt-6 border-t-4 border-black">
          <Button
            onClick={() => handleSubmit('draft')}
            variant="secondary"
            size="lg"
          >
            Save as Draft
          </Button>
          
          <Button
            onClick={() => handleSubmit('published')}
            variant="success"
            size="lg"
          >
            Publish Article
          </Button>
          
          <Button
            onClick={onCancel}
            variant="danger"
            size="lg"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
