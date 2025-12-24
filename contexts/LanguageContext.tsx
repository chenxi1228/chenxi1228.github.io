import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  tTag: (tag: string) => string;
  formatReadTime: (time: string) => string;
}

// Simple translation dictionary for UI elements
const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { en: 'Home', zh: '首页' },
  'nav.publications': { en: 'Publications', zh: '学术论文' },
  'nav.demos': { en: 'Demos', zh: '演示' },
  'nav.blog': { en: 'Blog', zh: '博客' },
  'nav.contact': { en: 'Contact', zh: '联系我' },
  
  // Home
  'home.available': { en: 'Available for collaboration', zh: '寻求合作机会' },
  'home.viewPubs': { en: 'View Publications', zh: '查看论文' },
  'home.contactMe': { en: 'Contact Me', zh: '联系我' },
  'home.recentWork': { en: 'Recent Work', zh: '近期工作' },
  'home.selectedPubs': { en: 'Selected publications and projects.', zh: '精选论文与项目' },
  'home.allPubs': { en: 'All Publications', zh: '所有论文' },
  
  // Focus Areas
  'focus.interest': { en: 'My Interests', zh: '我的兴趣' },
  'focus.interest.desc': { en: 'My interests including traveling, photography, and LEGO building.', zh: '我的个人兴趣包括旅行、摄影和收集乐高。' },
  'focus.research': { en: 'My Researches', zh: '我的研究' },
  'focus.research.desc': { en: 'My work are published on top-tier conferences like ICML, NeurIPS and CIKM.', zh: '我的多项研究工作发表在 ICML, NeurIPS, CIKM 等顶会。' },
  'focus.proto': { en: 'My Demos', zh: '我的演示' },
  'focus.proto.desc': { en: 'I build some demos with LLMs ^_^.', zh: '我使用 LLMs 构建了一些原型系统演示 ^_^。' },

  // Publications
  'pubs.title': { en: 'Publications', zh: '学术论文' },
  'pubs.subtitle': { en: 'Selected research papers and technical reports.', zh: '精选研究论文与技术报告' },
  'pubs.viewCode': { en: 'View Code', zh: '查看代码' },
  'pubs.viewPage': { en: 'View Page', zh: '项目主页' },
  'pubs.downloadPDF': { en: 'Download PDF', zh: '下载 PDF' },

  // Demos
  'demos.title': { en: 'Demos', zh: '演示' },
  'demos.subtitle': { en: 'Experiments and prototypes.', zh: '试验与原型展示' },

  // Blog
  'blog.title': { en: 'The Blog', zh: '博客' },
  'blog.subtitle': { en: 'Thoughts, tutorials, and visual diaries.', zh: '想法、教程与日常' },
  'blog.back': { en: 'Back to Blog', zh: '返回博客列表' },
  'blog.thanks': { en: 'Thanks for reading! Feel free to check out my', zh: '感谢阅读！欢迎继续查看我的' },
  'blog.readArticle': { en: 'Read Article', zh: '阅读文章' },
  'blog.viewGallery': { en: 'View Gallery', zh: '查看相册' },
  'blog.type.article': { en: 'Article', zh: '文章' },
  'blog.type.plog': { en: 'Plog', zh: '图志' },

  // Projects
  'projects.title': { en: 'My Projects', zh: '个人项目' },
  'projects.subtitle': { en: 'A collection of tools, experiments, and full-stack applications I\'ve built.', zh: '我构建的工具、实验和全栈应用集合。' },

  // Contact
  'contact.title1': { en: 'Let\'s', zh: '保持' },
  'contact.title2': { en: 'Connect', zh: '联系' },
  'contact.desc': { en: 'I\'m always open to discussing new research collaborations, opportunities, or just chatting about the latest in tech.', zh: '随时欢迎和我讨论新的研究合作、机会，或者仅仅是探讨最新的科技动态。' },
  'contact.about': { en: 'About Me', zh: '关于我' },
  'contact.social': { en: 'Academic & Social', zh: '学术与社交' },
  'contact.resume': { en: 'Resume', zh: '简历' },
  'contact.lastUpdated': { en: 'Last updated:', zh: '最后更新：' },

  // Footer
  'footer.rights': { en: 'Built with Gemini and React.', zh: '基于 Gemini 和 React 构建。' },


  // Read Time
  'readTime.visual': { en: 'Visual', zh: '视觉' },

  // Tags (Keywords)
  'tag.Generative AI': { en: 'Generative AI', zh: '生成式 AI' },
  'tag.Data Vis': { en: 'Data Vis', zh: '数据可视化' },
  'tag.Design': { en: 'Design', zh: '设计' },
  'tag.Tech': { en: 'Tech', zh: '技术' },
  'tag.Performance': { en: 'Performance', zh: '性能' },
  'tag.Travel': { en: 'Travel', zh: '旅行' },
  'tag.Photography': { en: 'Photography', zh: '摄影' },
  'tag.Japan': { en: 'Japan', zh: '日本' },
  'tag.Canada': { en: 'Canada', zh: '加拿大' },
  'tag.AI': { en: 'AI', zh: '人工智能' },
  'tag.Data': { en: 'Data', zh: '数据' },
  'tag.Dynamic Graph': { en: 'Dynamic Graph', zh: '动态图' },
  'tag.Computer Vision': { en: 'Computer Vision', zh: '计算机视觉' },
  'tag.3D Reconstruction': { en: '3D Reconstruction', zh: '3D重建' },
  'tag.Graph': { en: 'Graph', zh: '图数据' },
  'tag.DyG': { en: 'Dynamic Graph', zh: '动态图' },
  'tag.Event Sequence': { en: 'Event Sequence', zh: '事件序列' },
  'tag.Financial Risk Assessment': { en: 'Financial Risk Assessment', zh: '金融风险评估' },
  'tag.Time Series': { en: 'Time Series', zh: '时间序列' },
  'tag.Diffusion': { en: 'Diffusion', zh: '扩散模型' },
  'tag.Attention': { en: 'Attention', zh: '注意力机制' },
  'tag.Survey': { en: 'Survey', zh: '论文综述' },
  'tag.Position Encoding': { en: 'Position Encoding', zh: '位置编码' },
  'tag.DTDG': { en: 'DTDG', zh: '离散时间动态图' },
  'tag.CTDG/TIG': { en: 'CTDG', zh: '连续时间动态图/动态交互图' },
  'tag.Spatio-Temporal Graph': { en: 'Spatio-Temporal Graph', zh: '时空图' },
  'tag.Prompt Learning': { en: 'Prompt Learning', zh: '提示学习' },
  'tag.Layout Planning': { en: 'Layout Planning', zh: '布局规划' },
  'tag.Dataset': { en: 'Dataset', zh: '数据集' },
  'tag.Structure Learning': { en: 'Structure Learning', zh: '结构学习' },
  'tag.Graph Partition': { en: 'Graph Partition', zh: '图分割' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const tTag = (tag: string): string => {
    const key = `tag.${tag}`;
    return translations[key]?.[language] || tag;
  };

  const formatReadTime = (time: string): string => {
    if (time === 'Visual') {
      return translations['readTime.visual']?.[language] || time;
    }
    // Handle "X min read"
    if (time.endsWith(' min read') && language === 'zh') {
       const mins = time.replace(' min read', '');
       return `${mins} 分钟阅读时间`;
    }
    return time;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, tTag, formatReadTime }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};