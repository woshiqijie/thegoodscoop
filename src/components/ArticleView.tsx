import React from 'react';
import { X, Calendar, User, Tag, Edit } from 'lucide-react';
import { Article } from '../types';
import Button from './Button';

interface ArticleViewProps {
  article: Article;
  onClose: () => void;
  onEdit: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onClose,
  onEdit
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white border-4 border-black shadow-brutal-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b-4 border-black p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 text-sm font-bold border-2 border-black ${
              article.status === 'published' ? 'bg-brutal-lime' : 'bg-brutal-yellow'
            }`}>
              {article.status.toUpperCase()}
            </span>
            <span className="text-lg font-bold text-gray-600">
              {article.category}
            </span>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={onEdit} variant="primary" size="sm">
              <Edit size={16} className="mr-1" />
              Edit
            </Button>
            <Button onClick={onClose} variant="danger" size="sm">
              <X size={20} />
            </Button>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <User size={20} />
              <span className="font-bold text-lg">{article.author}</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar size={20} />
              <span className="font-medium">
                Created: {formatDate(article.createdAt)}
              </span>
              {article.updatedAt.getTime() !== article.createdAt.getTime() && (
                <span className="font-medium">
                  • Updated: {formatDate(article.updatedAt)}
                </span>
              )}
            </div>

            {article.tags.length > 0 && (
              <div className="flex items-center gap-3">
                <Tag size={20} className="text-gray-600" />
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-brutal-cyan border-2 border-black text-sm font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {article.featuredImage && (
            <div className="mb-8 border-4 border-black">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Excerpt</h2>
            <p className="text-lg leading-relaxed bg-gray-50 border-4 border-black p-4 font-medium">
              {article.excerpt}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Content</h2>
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-lg leading-relaxed">
                {article.content}
              </div>
            </div>
          </div>

          {article.images.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-700">
                Additional Images ({article.images.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {article.images.map((image, index) => (
                  <div key={index} className="border-4 border-black">
                    <img
                      src={image}
                      alt={`Article image ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
