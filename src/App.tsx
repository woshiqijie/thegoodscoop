import React, { useState } from 'react';
import { Plus, Settings, FileText, Eye, Filter } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Article, Category } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Button from './components/Button';
import ArticleCard from './components/ArticleCard';
import ArticleForm from './components/ArticleForm';
import ArticleView from './components/ArticleView';
import CategoryManager from './components/CategoryManager';
import Select from './components/Select';

const defaultCategories: Category[] = [
  { id: uuidv4(), name: 'News', color: '#FFFF00' },
  { id: uuidv4(), name: 'Opinion', color: '#FF69B4' },
  { id: uuidv4(), name: 'Features', color: '#00FFFF' },
  { id: uuidv4(), name: 'Sports', color: '#32FF32' },
  { id: uuidv4(), name: 'Technology', color: '#FF4500' },
];

const sampleArticles: Article[] = [
  {
    id: uuidv4(),
    title: 'The Future of Sustainable Energy',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    excerpt: 'Exploring the latest developments in renewable energy and their impact on our planet\'s future.',
    author: 'Sarah Johnson',
    tags: ['sustainability', 'energy', 'environment', 'future'],
    category: 'Technology',
    featuredImage: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'published',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: uuidv4(),
    title: 'Local Community Garden Initiative',
    content: 'Our neighborhood has come together to create something beautiful and sustainable. The new community garden project has transformed an empty lot into a thriving space where families can grow their own vegetables and connect with nature.\n\nThe initiative started six months ago when local resident Maria Rodriguez proposed the idea at a town hall meeting. Since then, over 50 families have joined the project, contributing both time and resources to make it a reality.\n\nThe garden features raised beds, a composting system, and a small greenhouse for starting seedlings. Children from the local elementary school visit regularly as part of their science curriculum, learning about plant biology and sustainable agriculture.',
    excerpt: 'How our neighborhood transformed an empty lot into a thriving community space.',
    author: 'Michael Chen',
    tags: ['community', 'gardening', 'sustainability', 'local'],
    category: 'News',
    featuredImage: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'published',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: uuidv4(),
    title: 'The Art of Modern Storytelling',
    content: 'In today\'s digital age, the way we tell stories has evolved dramatically. From traditional print media to interactive digital experiences, storytellers now have more tools than ever to engage their audiences.\n\nThis evolution hasn\'t just changed the medium—it\'s transformed the very nature of narrative itself. Modern stories are more collaborative, more immediate, and more personal than ever before.',
    excerpt: 'Examining how digital media has transformed the art of narrative.',
    author: 'Emma Thompson',
    tags: ['storytelling', 'media', 'digital', 'culture'],
    category: 'Features',
    featuredImage: '',
    images: [],
    status: 'draft',
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  }
];

function App() {
  const [articles, setArticles] = useLocalStorage<Article[]>('good-scoop-articles', sampleArticles);
  const [categories, setCategories] = useLocalStorage<Category[]>('good-scoop-categories', defaultCategories);
  
  const [currentView, setCurrentView] = useState<'list' | 'form' | 'view'>('list');
  const [editingArticle, setEditingArticle] = useState<Article | undefined>();
  const [viewingArticle, setViewingArticle] = useState<Article | undefined>();
  const [showCategoryManager, setShowCategoryManager] = useState(false);
  
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('');

  const handleSaveArticle = (article: Article) => {
    if (editingArticle) {
      setArticles(articles.map(a => a.id === article.id ? article : a));
    } else {
      setArticles([article, ...articles]);
    }
    setCurrentView('list');
    setEditingArticle(undefined);
  };

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article);
    setCurrentView('form');
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  const handleViewArticle = (article: Article) => {
    setViewingArticle(article);
    setCurrentView('view');
  };

  const handleNewArticle = () => {
    setEditingArticle(undefined);
    setCurrentView('form');
  };

  const handleCancelForm = () => {
    setCurrentView('list');
    setEditingArticle(undefined);
  };

  const handleCloseView = () => {
    setCurrentView('list');
    setViewingArticle(undefined);
  };

  const handleEditFromView = () => {
    if (viewingArticle) {
      setEditingArticle(viewingArticle);
      setCurrentView('form');
      setViewingArticle(undefined);
    }
  };

  // Filter articles
  const filteredArticles = articles.filter(article => {
    if (filterStatus && article.status !== filterStatus) return false;
    if (filterCategory && article.category !== filterCategory) return false;
    return true;
  });

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Published' }
  ];

  const categoryOptions = [
    { value: '', label: 'All Categories' },
    ...categories.map(cat => ({ value: cat.name, label: cat.name }))
  ];

  if (currentView === 'form') {
    return (
      <div className="min-h-screen bg-brutal-yellow p-4">
        <ArticleForm
          article={editingArticle}
          categories={categories}
          onSave={handleSaveArticle}
          onCancel={handleCancelForm}
        />
      </div>
    );
  }

  if (currentView === 'view' && viewingArticle) {
    return (
      <>
        <div className="min-h-screen bg-brutal-yellow">
          {/* This div is just for background */}
        </div>
        <ArticleView
          article={viewingArticle}
          onClose={handleCloseView}
          onEdit={handleEditFromView}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-brutal-yellow">
      {/* Header */}
      <header className="bg-white border-b-8 border-black shadow-brutal p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">THE GOOD SCOOP</h1>
              <div className="w-32 h-3 bg-brutal-pink border-2 border-black"></div>
              <p className="text-lg font-medium mt-2 text-gray-700">Content Management System</p>
            </div>
            
            <div className="flex gap-4">
              <Button onClick={() => setShowCategoryManager(true)} variant="secondary">
                <Settings size={20} className="mr-2" />
                Manage Categories
              </Button>
              <Button onClick={handleNewArticle} variant="primary" size="lg">
                <Plus size={20} className="mr-2" />
                New Article
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-brutal-lime border-4 border-black p-4 text-center">
              <div className="text-2xl font-bold">{articles.length}</div>
              <div className="text-sm font-medium">Total Articles</div>
            </div>
            <div className="bg-brutal-cyan border-4 border-black p-4 text-center">
              <div className="text-2xl font-bold">
                {articles.filter(a => a.status === 'published').length}
              </div>
              <div className="text-sm font-medium">Published</div>
            </div>
            <div className="bg-brutal-yellow border-4 border-black p-4 text-center">
              <div className="text-2xl font-bold">
                {articles.filter(a => a.status === 'draft').length}
              </div>
              <div className="text-sm font-medium">Drafts</div>
            </div>
            <div className="bg-brutal-orange border-4 border-black p-4 text-center">
              <div className="text-2xl font-bold">{categories.length}</div>
              <div className="text-sm font-medium">Categories</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Filters */}
        <div className="mb-8 bg-white border-4 border-black shadow-brutal p-6">
          <div className="flex items-center gap-4 mb-4">
            <Filter size={24} />
            <h2 className="text-xl font-bold">Filter Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Status"
              value={filterStatus}
              onChange={setFilterStatus}
              options={statusOptions}
            />
            <Select
              label="Category"
              value={filterCategory}
              onChange={setFilterCategory}
              options={categoryOptions}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FileText size={28} />
            Articles ({filteredArticles.length})
          </h2>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="bg-white border-4 border-black shadow-brutal p-12 text-center">
            <Eye size={48} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-2">No Articles Found</h3>
            <p className="text-gray-600 mb-6">
              {articles.length === 0 
                ? "Get started by creating your first article!"
                : "Try adjusting your filters or create a new article."
              }
            </p>
            <Button onClick={handleNewArticle} variant="primary">
              <Plus size={20} className="mr-2" />
              Create Article
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onEdit={handleEditArticle}
                onDelete={handleDeleteArticle}
                onView={handleViewArticle}
              />
            ))}
          </div>
        )}
      </main>

      {/* Category Manager Modal */}
      {showCategoryManager && (
        <CategoryManager
          categories={categories}
          onSave={setCategories}
          onClose={() => setShowCategoryManager(false)}
        />
      )}
    </div>
  );
}

export default App;
