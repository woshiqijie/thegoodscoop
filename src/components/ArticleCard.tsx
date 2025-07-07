import React from 'react';
import { Edit, Trash2, Eye, Calendar, User, Tag } from 'lucide-react';
import { Article } from '../types';
import Button from './Button';

interface ArticleCardProps {
  article: Article;
  onEdit: (article: Article) => void;
  onDelete: (id: string) => void;
  onView: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onEdit,
  onDelete,
  onView
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white border-4 border-black shadow-brutal p-6 hover:shadow-brutal-sm transition-all duration-200">
      {article.featuredImage && (
        <div className="mb-4 border-2 border-black">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 text-sm font-bold border-2 border-black ${
            article.status === 'published' ? 'bg-brutal-lime' : 'bg-brutal-yellow'
          }`}>
            {article.status.toUpperCase()}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {article.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-700 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      <div className="mb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User size={16} />
          <span className="font-medium">{article.author}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{formatDate(article.createdAt)}</span>
        </div>

        {article.tags.length > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <Tag size={16} className="text-gray-600" />
            <div className="flex flex-wrap gap-1">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-brutal-cyan border border-black text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="text-xs text-gray-500 font-medium">
                  +{article.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <Button onClick={() => onView(article)} variant="secondary" size="sm">
          <Eye size={16} className="mr-1" />
          View
        </Button>
        <Button onClick={() => onEdit(article)} variant="primary" size="sm">
          <Edit size={16} className="mr-1" />
          Edit
        </Button>
        <Button onClick={() => onDelete(article.id)} variant="danger" size="sm">
          <Trash2 size={16} className="mr-1" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ArticleCard;
