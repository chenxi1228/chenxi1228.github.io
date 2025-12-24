import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Heart, Loader2 } from 'lucide-react';
import { BLOG_POSTS } from '../constants.ts';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useLanguage } from '../contexts/LanguageContext.tsx';

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

// Real Like Button Component using counterapi.dev
const LikeButton: React.FC<{ id: string }> = ({ id }) => {
    const [likes, setLikes] = useState<number | null>(null);
    const [hasLiked, setHasLiked] = useState(false);
    const [animating, setAnimating] = useState(false);
    
    // Using a public namespace. In production, you might want to use your domain name.
    const NAMESPACE = 'chenxi1228.github.io-likes';
    const KEY = `post-${id}`;

    useEffect(() => {
        const fetchLikes = async () => {
            // Check local storage to see if user already liked this specific post
            const storedLike = localStorage.getItem(`blog_like_${id}`);
            setHasLiked(!!storedLike);

            try {
                // Fetch current count from API
                const response = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/`);
                if (response.ok) {
                    const data = await response.json();
                    setLikes(data.count);
                } else {
                    // If key doesn't exist yet (404), assume 0
                    setLikes(0);
                }
            } catch (error) {
                console.error("Error fetching likes:", error);
                setLikes(0);
            }
        };

        fetchLikes();
    }, [id, NAMESPACE, KEY]);

    const handleLike = async () => {
        if (hasLiked) return; // Prevent multiple likes from same browser

        setAnimating(true);
        setHasLiked(true);
        // Optimistic update: update UI immediately before API responds
        setLikes((prev) => (prev || 0) + 1);
        
        // Save to local storage
        localStorage.setItem(`blog_like_${id}`, 'true');

        try {
            // Send increment to API
            await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`);
        } catch (error) {
            console.error("Error updating likes:", error);
            // We keep the optimistic update even if API fails to avoid UI flickering
        }
        
        setTimeout(() => setAnimating(false), 1000);
    };

    return (
        <button 
            onClick={handleLike}
            disabled={hasLiked || likes === null}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border group ${
                hasLiked 
                ? 'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 text-red-500 cursor-default' 
                : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 hover:border-red-200 hover:text-red-400 hover:shadow-lg'
            }`}
        >
            <div className="relative">
                <Heart 
                    size={20} 
                    className={`transition-transform duration-300 ${hasLiked ? 'fill-current scale-110' : 'group-hover:scale-110'} ${animating ? 'animate-blob' : ''}`} 
                />
            </div>
            <span className="font-semibold tabular-nums min-w-[3ch] text-left">
                {likes === null ? (
                    <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin ml-1" />
                ) : (
                    likes
                )}
            </span>
            <span className="ml-1">{likes === 1 ? 'Like' : 'Likes'}</span>
        </button>
    );
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const { language, t, tTag, formatReadTime } = useLanguage();
  
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [basePath, setBasePath] = useState<string>("");

  useEffect(() => {
    if (!post) return;

    // Check if content is a file path (ends with .md)
    if (post.content.trim().toLowerCase().endsWith('.md')) {
      setLoading(true);
      
      // Determine base path for relative images (e.g., if md is in /assets/blog/post1.md, base is /assets/blog/)
      const lastSlashIndex = post.content.lastIndexOf('/');
      if (lastSlashIndex !== -1) {
          setBasePath(post.content.substring(0, lastSlashIndex + 1));
      }

      fetch(post.content)
        .then(response => {
          if (!response.ok) throw new Error('Failed to load markdown file');
          return response.text();
        })
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setError(true);
          setLoading(false);
        });
    } else {
      // It's inline content
      setContent(post.content);
      setLoading(false);
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const title = (language === 'zh' && post.title_zh) ? post.title_zh : post.title;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> {t('blog.back')}
        </Link>

        <article className="animate-fade-in">
          <header className="mb-10">
            <div className="flex gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={16} /> {formatReadTime(post.readTime)}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
               <ReactMarkdown 
                 remarkPlugins={[remarkMath]} 
                 rehypePlugins={[rehypeKatex]}
                 components={{
                     p: ({node, ...props}) => <span {...props} /> // Unwrap title from P tags
                 }}
               >
                 {title}
               </ReactMarkdown>
            </h1>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20">
                  <Tag size={12} /> {tTag(tag)}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
             {loading ? (
               <div className="flex justify-center items-center h-40">
                  <Loader2 size={32} className="animate-spin text-primary" />
               </div>
             ) : error ? (
               <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                 Failed to load content. Please check your network connection or the file path.
               </div>
             ) : post.type === 'plog' ? (
                 <PlogGallery images={post.images || []} description={content} />
             ) : (
                 <ReactMarkdown 
                    remarkPlugins={[remarkMath]} 
                    rehypePlugins={[rehypeKatex]}
                    components={{
                        // Custom img component to handle relative paths
                        img: ({node, ...props}) => {
                            let src = (typeof props.src === 'string' ? props.src : '') || '';
                            // If src is relative (doesn't start with http, /, or data:), prepend basePath
                            if (src && !src.startsWith('http') && !src.startsWith('/') && !src.startsWith('data:')) {
                                src = basePath + src;
                            }
                            return (
                                <img 
                                    {...props} 
                                    src={src} 
                                    className="rounded-lg shadow-md my-6 max-w-full h-auto mx-auto border border-gray-100 dark:border-white/5" 
                                />
                            );
                        },
                        // Light mode: bg-white, text-black. Dark mode: bg-slate-900, text-white.
                        pre: ({ children }) => (
                            <pre className="p-4 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 border border-gray-200 dark:border-white/10 overflow-x-auto my-6 shadow-sm">
                                {children}
                            </pre>
                        ),
                        // Smart code component
                        code: ({node, className, children, ...props}: any) => {
                            const isBlock = /language-(\w+)/.exec(className || '');
                            
                            if (isBlock) {
                                return (
                                    <code className={`${className} bg-transparent text-inherit`} {...props}>
                                        {children}
                                    </code>
                                );
                            }

                            return (
                                <code className={`${className} bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-[0.9em] font-mono text-slate-900 dark:text-slate-50 before:content-none after:content-none`} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}
                 >
                     {content}
                 </ReactMarkdown>
             )}
          </div>
        </article>

        {/* Like Section */}
        <div className="mt-12 flex justify-center">
            <LikeButton id={post.id} />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
             <p className="text-center text-gray-500 italic">
                 {t('blog.thanks')} <Link to="/publications" className="text-primary hover:underline">{t('nav.publications')}</Link>.
             </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;