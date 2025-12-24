import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Camera, FileText } from 'lucide-react';
import { BLOG_POSTS } from '../constants.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const BlogList: React.FC = () => {
  const { language, t, tTag } = useLanguage();
  // Create a reversed copy to show the newest added items first
  const displayPosts = [...BLOG_POSTS].reverse();

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">{t('blog.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400">{t('blog.subtitle')}</p>
        </div>

        <div className="space-y-12">
          {displayPosts.map((post) => {
            const title = (language === 'zh' && post.title_zh) ? post.title_zh : post.title;
            const excerpt = (language === 'zh' && post.excerpt_zh) ? post.excerpt_zh : post.excerpt;

            return (
            <article key={post.id} className="group relative flex flex-col items-start p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none">
              
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 w-full justify-between sm:justify-start">
                <div className="flex gap-4">
                    <time dateTime={post.date} className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                    </time>
                    <span className="flex items-center gap-1">
                    <Clock size={14} /> {post.readTime}
                    </span>
                </div>
                {/* Type Badge */}
                <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    post.type === 'plog' 
                    ? 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300' 
                    : 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300'
                }`}>
                    {post.type === 'plog' ? <Camera size={12} /> : <FileText size={12} />}
                    {post.type === 'plog' ? 'Plog' : 'Article'}
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-gray-100 group-hover:text-primary transition-colors mb-3">
                <Link to={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {title}
                </Link>
              </h2>
              
              {/* Content Preview */}
              {post.type === 'plog' && post.images && post.images.length > 0 ? (
                  <div className="flex gap-2 mb-4 h-32 overflow-hidden rounded-lg opacity-90 group-hover:opacity-100 transition-opacity">
                      {post.images.slice(0, 3).map((img, idx) => (
                          <img 
                            key={idx} 
                            src={img} 
                            alt="preview" 
                            className="h-full w-auto object-cover rounded-md" 
                          />
                      ))}
                  </div>
              ) : (
                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {excerpt}
                  </p>
              )}
             
              
              <div className="flex items-center gap-2 mt-auto">
                {post.tags.map(tag => (
                  <span key={tag} className="z-10 px-2 py-1 text-xs rounded bg-slate-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-transparent dark:border-white/5">
                    #{tTag(tag)}
                  </span>
                ))}
              </div>
              
              <Link 
                to={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-2 font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200 z-10"
              >
                {post.type === 'plog' ? t('blog.viewGallery') : t('blog.readArticle')} <ArrowRight size={16} />
              </Link>
            </article>
          )})}
        </div>
      </div>
    </div>
  );
};

export default BlogList;