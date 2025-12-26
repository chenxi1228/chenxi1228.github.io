import React from 'react';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { PUBLICATIONS } from '../constants.ts';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const Publications: React.FC = () => {
  const { language, t, tTag } = useLanguage();
  // Create a reversed copy to show the newest added items first
  const displayPublications = [...PUBLICATIONS].reverse();

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">{t('pubs.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             {t('pubs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {displayPublications.map((pub) => {
            const title = (language === 'zh' && pub.title_zh) ? pub.title_zh : pub.title;
            const abstract = (language === 'zh' && pub.abstract_zh) ? pub.abstract_zh : pub.abstract;

            return (
            <div key={pub.id} className="flex flex-col sm:flex-row bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm dark:shadow-none">
              {/* Image Container */}
              <div className="sm:w-36 relative flex-shrink-0 hidden sm:block">
                 <img src={pub.image} alt={pub.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              
              {/* Content Container */}
              <div className="p-5 flex flex-col w-full">
                <div className="flex justify-between items-start gap-4 mb-1">
                    {/* Primary Link: Prioritize 'link', fallback to 'pdf' */}
                    <a 
                      href={pub.link || pub.pdf || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/title flex-grow"
                    >
                        <div className="text-lg font-bold text-slate-900 dark:text-white group-hover/title:text-primary transition-colors leading-tight hover:underline decoration-primary/50 underline-offset-4">
                            <ReactMarkdown 
                                remarkPlugins={[remarkMath]} 
                                rehypePlugins={[rehypeKatex]}
                                components={{
                                    p: ({node, ...props}) => <span {...props} /> // Prevent block-level P inside A tag
                                }}
                            >
                                {title}
                            </ReactMarkdown>
                        </div>
                    </a>

                    <div className="flex gap-3 flex-shrink-0 pt-1">
                        {pub.codeLink && (
                            <a href={pub.codeLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors" title={t('pubs.viewCode')}>
                                <Github size={18} />
                            </a>
                        )}
                        {/* If PDF exists, show File Icon, else link icon */}
                        {pub.pdf ? (
                           <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors" title={t('pubs.downloadPDF')}>
                                <FileText size={18} />
                           </a>
                        ) : pub.link ? (
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors" title={t('pubs.viewPage')}>
                                <ExternalLink size={18} />
                            </a>
                        ) : null}
                    </div>
                </div>

                <div className="mb-3">
                     <span className="text-xs font-bold text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">{pub.venue} {pub.year}</span>
                </div>

                <div className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    <ReactMarkdown 
                        remarkPlugins={[remarkMath]} 
                        rehypePlugins={[rehypeKatex]}
                        components={{
                            p: ({node, ...props}) => <span {...props} /> 
                        }}
                    >
                        {abstract}
                    </ReactMarkdown>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {pub.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-transparent dark:border-white/5">
                            {tTag(tag)}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default Publications;