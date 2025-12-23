import { BlogPost, Publication, SocialLink, Project, Demo } from './types.ts';

export const PERSONAL_INFO = {
  name: "Chenxi",
  role: "Researcher & Data Scientist",
  bio: "Think out of the bricks!",
  location: "Shanghai, China",
  emails: ["chenxi1228@foxmail.com", "x_chen21@m.fudan.edu.cn"]
};

export const DEMOS: Demo[] = [
  {
    id: "1",
    title: "Synth3D-Gen",
    description: "Building 3D reconstruction datasets",
    link: "",
    image: new URL('./assets/demos/3d-gen.png', import.meta.url).href,
    tags: ["3D Reconstruction"]
  },
];

// export const PROJECTS: Project[] = [
//   {
//     id: "1",
//     title: "EcoTracker",
//     description: "A mobile application for tracking personal carbon footprint with gamification elements.",
//     image: "https://picsum.photos/600/400?random=10",
//     github: "https://github.com/chenxi1228/ecotracker",
//     techStack: ["React Native", "Firebase", "D3.js"]
//   },
//   {
//     id: "2",
//     title: "Generative UI Library",
//     description: "An open-source React component library that adapts to user intent using LLMs.",
//     image: "https://picsum.photos/600/400?random=11",
//     link: "#",
//     github: "https://github.com/chenxi1228/gen-ui",
//     techStack: ["TypeScript", "React", "OpenAI API"]
//   },
//   {
//     id: "3",
//     title: "AR Assembly Assistant",
//     description: "HoloLens 2 application assisting workers in complex assembly tasks with real-time overlay.",
//     image: "https://picsum.photos/600/400?random=12",
//     techStack: ["Unity", "C#", "MRTK"]
//   }
// ];

export const PUBLICATIONS: Publication[] = [
  {
    id: "1",
    title: "Generative UI: Dynamic Interface Adaptation with LLMs",
    abstract: "A study on how Large Language Models can generate context-aware user interfaces in real-time.",
    venue: "UIST 2024",
    year: "2024",
    tags: ["HCI", "Generative AI", "React"],
    link: "#",
    pdf: "/assets/papers/gen-ui-2024.pdf", // Example local PDF path
    codeLink: "https://github.com/chenxi1228",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: "2",
    title: "EcoSense: Visualizing Personal Carbon Footprints",
    abstract: "We present a visual analytics framework for understanding long-term personal environmental impact patterns.",
    venue: "CHI 2023",
    year: "2023",
    tags: ["Data Vis", "Sustainability", "D3.js"],
    link: "#",
    pdf: "/assets/papers/ecosense-2023.pdf",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: "3",
    title: "Cognitive Load in AR Assisted Manufacturing",
    abstract: "Investigating the effects of augmented reality overlays on cognitive load during complex assembly tasks.",
    venue: "ISMAR 2022",
    year: "2022",
    tags: ["AR/VR", "Cognitive Science"],
    link: "#",
    image: "https://picsum.photos/600/400?random=3"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "overleaf-deployment",
    type: "article",
    title: "Overleaf 部署流程及踩坑",
    excerpt: "Overleaf目前限制了编译速度，该流程详细介绍了如何部署Overleaf到一台私有Linux服务器上",
    date: "2025-12-19",
    readTime: "20 min read",
    tags: ["Overleaf", "Deployment", "Linux"],
    content: `
# Building a Fancy Portfolio

Creating a portfolio that stands out is key in 2024. It's not just about listing your skills; it's about showing them.

## 1. Typography Matters
Choose fonts that reflect your personality. Monospace fonts for developers, Serif for writers.

## 2. Dark Mode is Mandatory
It's easier on the eyes and looks professional. Tailwind makes this incredibly easy with the \`dark:\` modifier.

## 3. Add Motion
Static sites are boring. Use subtle hover effects and entry animations to bring life to your layout.
    `
  },
  {
    id: "2",
    slug: "winter-in-kyoto",
    type: "plog",
    title: "Winter in Kyoto: A Visual Diary",
    excerpt: "Snapshots from my recent trip to Japan, exploring ancient temples and snowy streets.",
    date: "2024-01-15",
    readTime: "Visual",
    tags: ["Travel", "Photography", "Japan"],
    images: [
        "https://picsum.photos/800/600?random=50",
        "https://picsum.photos/600/800?random=51",
        "https://picsum.photos/800/600?random=52",
        "https://picsum.photos/800/800?random=53",
        "https://picsum.photos/800/600?random=54",
        "https://picsum.photos/600/800?random=55"
    ],
    content: "Kyoto in winter is a magical experience. The air is crisp, the crowds are thinner, and the temples take on a serene, almost melancholic beauty."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/chenxi1228", icon: "github" },
  { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=ewzzOZgAAAAJ", icon: "scholar" },
  { platform: "Semantic Scholar", url: "https://www.semanticscholar.org/author/Xi-Chen/2283939419", icon: "semantic" }
];
