import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Heart } from 'lucide-react';
import { BLOG_POSTS } from '../constants.ts';

// Simple Markdown-like renderer for the static content
const SimpleMarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');
  return (
    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      {lines.map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">{line.replace('# ', '')}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-slate-900 dark:text-white mt-6 mb-3">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 list-disc text-gray-700 dark:text-gray-300">{line.replace('- ', '')}</li>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        if (line.includes('`')) {
             const parts = line.split('`');
             return (
                 <p key={index}>
                    {parts.map((part, i) => 
                        i % 2 === 1 
                        ? <code key={i} className="bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-primary font-mono text-sm">{part}</code>
                        : part
                    )}
                 </p>
             )
        }
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
};

// Component for Plog Gallery
const PlogGallery: React.FC<{ images: string[], description: string }> = ({ images, description }) => {
    return (
        <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-4 border-primary/50 pl-4">
                {description}
            </p>
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
                {images.map((img, idx) => (
                    <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden group">
                         <img 
                            src={img} 
                            alt={`Gallery item ${idx + 1}`} 
                            className="w-full h-auto hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                         />
                    </div>
                ))}
            </div>
        </div>
    );
};

// Like Button Component
const LikeButton: React.FC<{ id: string }> = ({ id }) => {
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        // Mock retrieving likes from "server" (random start number for demo feel)
        const initialLikes = Math.floor(Math.random() * 50) + 10; 
        
        // Check local storage for user state
        const storedLike = localStorage.getItem(`blog_like_${id}`);
        
        setLikes(initialLikes + (storedLike ? 1 : 0));
        setHasLiked(!!storedLike);
    }, [id]);

    const handleLike = () => {
        if (hasLiked) {
             setLikes(prev => prev - 1);
             setHasLiked(false);
             localStorage.removeItem(`blog_like_${id}`);
        } else {
            setLikes(prev => prev + 1);
            setHasLiked(true);
            setAnimating(true);
            localStorage.setItem(`blog_like_${id}`, 'true');
            setTimeout(() => setAnimating(false), 1000);
        }
    };

    return (
        <button 
            onClick={handleLike}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border ${
                hasLiked 
                ? 'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 text-red-500' 
                : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 hover:border-red-200 hover:text-red-400'
            }`}
        >
            <div className="relative">
                <Heart 
                    size={20} 
                    className={`transition-transform duration-300 ${hasLiked ? 'fill-current scale-110' : ''} ${animating ? 'animate-blob' : ''}`} 
                />
            </div>
            <span className="font-semibold tabular-nums">{likes} Likes</span>
        </button>
    );
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        <article className="animate-fade-in">
          <header className="mb-10">
            <div className="flex gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">{post.title}</h1>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20">
                  <Tag size={12} /> {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
             {post.type === 'plog' ? (
                 <PlogGallery images={post.images || []} description={post.content} />
             ) : (
                 <SimpleMarkdownRenderer content={post.content} />
             )}
          </div>
        </article>

        {/* Like Section */}
        <div className="mt-12 flex justify-center">
            <LikeButton id={post.id} />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
             <p className="text-center text-gray-500 italic">
                 Thanks for reading! Feel free to check out my <Link to="/publications" className="text-primary hover:underline">publications</Link>.
             </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;