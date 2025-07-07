export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  category: string;
  featuredImage?: string;
  images: string[];
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface Tag {
  id: string;
  name: string;
}
