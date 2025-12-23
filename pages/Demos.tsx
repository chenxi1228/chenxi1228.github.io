import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { DEMOS } from '../constants.ts';

const Demos: React.FC = () => {
  // Create a reversed copy to show the newest added items first
  const displayDemos = [...DEMOS].reverse();

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Demos</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             Live experiments and prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayDemos.map((demo) => (
            <a 
                key={demo.id} 
                href={demo.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none"
            >
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                 <img src={demo.image} alt={demo.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{demo.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm">{demo.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {demo.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-xs">
                            <Tag size={10} /> {tag}
                        </span>
                    ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demos;