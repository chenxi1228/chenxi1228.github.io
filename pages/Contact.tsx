import React from 'react';
import { Mail, MapPin, Github, GraduationCap, BookOpenText, FileText, Download, Calendar } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, RESUME_INFO } from '../constants.ts';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="animate-fade-in space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
                Let's <span className="text-primary">Connect.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always open to discussing new research collaborations, engineering opportunities, or just chatting about the latest in tech.
              </p>
            </div>

            <div className="space-y-4">
               <div className="flex items-start gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    {PERSONAL_INFO.emails.map((email) => (
                       <a key={email} href={`mailto:${email}`} className="hover:text-primary transition-colors text-lg block">
                        {email}
                      </a>
                    ))}
                  </div>
               </div>
               <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg">{PERSONAL_INFO.location}</span>
               </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">Academic & Social</h3>
                <div className="flex gap-6">
                    {SOCIAL_LINKS.map(link => (
                        <a 
                            key={link.platform} 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition-all duration-300 shadow-sm group"
                            title={link.platform}
                        >
                            {link.icon === 'github' && <Github size={24} />}
                            {link.icon === 'scholar' && <GraduationCap size={24} />}
                            {link.icon === 'semantic' && <BookOpenText size={24} />}
                        </a>
                    ))}
                </div>
            </div>
          </div>

          <div className="relative animate-fade-in hidden md:flex flex-col gap-6">
            {/* Background Blob */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 z-0 pointer-events-none"></div>
            
            {/* About Me Card */}
            <div className="relative z-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Hello! I'm {PERSONAL_INFO.name}, a Ph.D Candidate at Fudan University. 
                    My journey began with a curiosity for how things work, which led me to the world of AI engineering and design.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    When I'm not coding, I enjoy photography, hiking, and exploring new coffee shops in the city.
                </p>
                <div className="flex gap-2 flex-wrap">
                    {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Design Systems'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Resume Card */}
            <div className="relative z-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl transition-transform hover:-translate-y-1 duration-300">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                             <FileText className="text-primary" size={24} /> Resume
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                             <Calendar size={14} /> Last updated: {RESUME_INFO.lastUpdated}
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <a 
                        href={RESUME_INFO.enPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all group"
                    >
                        <span className="font-semibold text-slate-900 dark:text-white group-hover:text-primary mb-1">English CV</span>
                        <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-primary/70">
                            <Download size={14} /> PDF
                        </div>
                    </a>
                    
                    <a 
                        href={RESUME_INFO.zhPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all group"
                    >
                        <span className="font-semibold text-slate-900 dark:text-white group-hover:text-primary mb-1">中文简历</span>
                        <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-primary/70">
                            <Download size={14} /> PDF
                        </div>
                    </a>
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;