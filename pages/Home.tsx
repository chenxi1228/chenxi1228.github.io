import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Layers, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, PUBLICATIONS } from '../constants.ts';

const TypingEffect = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplay(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{display}<span className="animate-pulse">|</span></span>;
};

const Home: React.FC = () => {
  // Create a reversed copy of publications to show newest first
  const recentPublications = [...PUBLICATIONS].reverse().slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center z-10 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono backdrop-blur-sm">
            Available for collaboration
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-400">
            {PERSONAL_INFO.name}
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto h-8">
            <TypingEffect text={PERSONAL_INFO.role} />
          </div>
           <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
             {PERSONAL_INFO.bio}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/publications" className="px-8 py-3 rounded-full bg-primary text-white dark:text-slate-900 font-bold hover:bg-sky-600 dark:hover:bg-white transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-primary/25">
              View Publications <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="px-8 py-3 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 text-slate-900 dark:text-white transition-colors duration-300 backdrop-blur-sm">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link to="/blog" className="block">
                    <div className="h-full p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 shadow-sm dark:shadow-none cursor-pointer">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">My Intrests</h3>
                        <p className="text-gray-600 dark:text-gray-400">My interests including photography, traveling, and LEGO building.</p>
                    </div>
                </Link>

                <Link to="/publications" className="block">
                    <div className="h-full p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-all duration-300 group hover:-translate-y-2 shadow-sm dark:shadow-none cursor-pointer">
                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">My Researches</h3>
                        <p className="text-gray-600 dark:text-gray-400"> I'm interested in Data Analytics and Computer Vision. Now I'm focusing on Dynamic Graph Learning.</p>
                    </div>
                </Link>

                <Link to="/demos" className="block">
                    <div className="h-full p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/5 hover:border-green-500/30 transition-all duration-300 group hover:-translate-y-2 shadow-sm dark:shadow-none cursor-pointer">
                        <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform">
                            <Layers size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-green-500 transition-colors">My Demos</h3>
                        <p className="text-gray-600 dark:text-gray-400">I build some demos with LLMs ^_^.</p>
                    </div>
                </Link>
            </div>
        </div>
      </section>

      {/* Featured Publications Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Recent Work</h2>
                    <p className="text-gray-600 dark:text-gray-400">Selected publications and projects.</p>
                </div>
                <Link to="/publications" className="text-primary hover:text-sky-600 dark:hover:text-white flex items-center gap-1 transition-colors">
                    All Publications <ArrowRight size={16} />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPublications.map((pub) => (
                    <div key={pub.id} className="group rounded-2xl overflow-hidden bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm dark:shadow-none">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10 opacity-60"></div>
                            <img src={pub.image} alt={pub.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">{pub.venue} {pub.year}</span>
                            </div>
                            {/* Prioritize Link over PDF */}
                            {pub.link || pub.pdf ? (
                                <a 
                                    href={pub.link || pub.pdf} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors hover:underline decoration-primary/50 underline-offset-4">{pub.title}</h3>
                                </a>
                            ) : (
                                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{pub.title}</h3>
                            )}
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{pub.abstract}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;