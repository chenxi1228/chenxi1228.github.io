import React from 'react';
import { Github, GraduationCap, BookOpenText } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.ts';

const Footer: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github size={20} />;
      case 'google scholar': return <GraduationCap size={20} />;
      case 'semantic scholar': return <BookOpenText size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-white/50 dark:bg-slate-900/50 border-t border-gray-200 dark:border-white/5 py-8 mt-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Chenxi. Built with React.
            </p>
          </div>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label={link.platform}
              >
                {getIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;