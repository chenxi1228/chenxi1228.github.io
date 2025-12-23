export interface BlogPost {
  id: string;
  slug: string;
  type: 'article' | 'plog'; // Differentiate between text articles and photo logs
  title: string;
  excerpt: string;
  content: string; // Supports Markdown-like formatting (basic)
  images?: string[]; // Array of image URLs for Plogs
  date: string;
  tags: string[];
  readTime: string;
}

export interface Publication {
  id: string;
  title: string;
  abstract: string;
  venue: string;
  year: string;
  tags: string[];
  link?: string;
  pdf?: string; // Path to local PDF
  codeLink?: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  techStack: string[];
}

export interface Demo {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}