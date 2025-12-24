import React from 'react';
import { Github, GraduationCap, BookOpenText } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const name = language === 'zh' && PERSONAL_INFO.name_zh ? PERSONAL_INFO.name_zh : PERSONAL_INFO.name;

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
              © {new Date().getFullYear()} {name}. {t('footer.rights')}
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