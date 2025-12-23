import { BlogPost, Publication, SocialLink, Project, Demo } from './types.ts';

export const PERSONAL_INFO = {
  name: "Chenxi",
  role: "Think out of the bricks!",
  bio: "I am currently pursuing a Ph.D. in Electronic and Information Engineering at Fudan University. My research interests primarily include graph neural networks, dynamic graph representation learning, and computer vision. ",
  location: "Shanghai, China",
  emails: ["chenxi1228@foxmail.com", "x_chen21@m.fudan.edu.cn"]
};

export const RESUME_INFO = {
  lastUpdated: "Dec 2025",
  enPdf: "/assets/resume/CV_English_20251223.pdf",
  zhPdf: "/assets/resume/CV_Chinese_20251223.pdf"
};

export const DEMOS: Demo[] = [
  {
    id: "1",
    title: "Synth3D-Gen",
    description: "Building 3D reconstruction datasets",
    link: "",
    image: "/assets/demos/3d-gen.png",
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
    title: "Speed: Streaming Partition and Parallel Training for Temporal Interaction Graph Embedding",
    abstract: "Introduces SPEED, a GPU-oriented streaming partition and parallel training framework for scalable TIG embedding.",
    venue: "arXiv",
    year: "2023",
    tags: ["Data Mining", "Graph", "DyG", "CTDG/TIG", "Graph Partition"],
    link: "https://arxiv.org/pdf/2308.14129",
    pdf: "/assets/papers/speed.pdf", // Example local PDF path
    codeLink: "https://github.com/chenxi1228/SPEED",
    image: "/assets/papers/speed.png"
  },
  {
    id: "2",
    title: "RDGSL: Dynamic Graph Representation Learning with Structure Learning",
    abstract: "Proposes RDGSL, a dynamic structure learning framework that denoises continuous-time graphs to improve robust temporal graph representation learning.",
    venue: "CIKM",
    year: "2023",
    tags: ["Data Mining", "Graph", "DyG","CTDG/TIG" , "Structure Learning"],
    link: "https://dl.acm.org/doi/abs/10.1145/3583780.3615023",
    codeLink: "https://github.com/FDUDSDE/RDGSL",
    pdf: "/assets/papers/rdgsl.pdf",
    image: "/assets/papers/rdgsl.png"
  },
  {
    id: "3",
    title: "ReCo: A Dataset for Residential Community Layout Planning",
    abstract: "Proposes ReCo, the first large-scale open-source real-world residential community layout dataset to support data-driven urban design and generation.",
    venue: "ACM MM",
    year: "2023",
    tags: ["Computer Vision", "Dataset", "Layout Planning", "GAN"],
    link: "https://dl.acm.org/doi/abs/10.1145/3581783.3612465",
    codeLink: "https://github.com/FDUDSDE/ReCo-Dataset",
    pdf: "/assets/papers/reco.pdf",
    image: "/assets/papers/reco.png"
  },
  {
    id: "4",
    title: "Prompt Learning on Temporal Interaction Graphs",
    abstract: "Proposes TIGPrompt, a prompt-based framework that bridges temporal and semantic gaps in pre-trained TIG models.",
    venue: "arXiv",
    year: "2024",
    tags: ["Data Mining", "Graph", "DyG", "CTDG/TIG", "Prompt Learning"],
    link: "https://arxiv.org/pdf/2402.06326",
    pdf: "/assets/papers/tigprompt.pdf",
    image: "/assets/papers/tigprompt.png"
  },
  {
    id: "5",
    title: "Towards Adaptive Neighborhood for Advancing Temporal Interaction Graph Modeling",
    abstract: "Proposes SEAN, an adaptive neighborhood encoding module that enhances temporal graph networks via selective neighbor modeling.",
    venue: "KDD",
    year: "2024",
    tags: ["Data Mining", "Graph", "DyG", "CTDG/TIG", "TGN"],
    link: "https://dl.acm.org/doi/abs/10.1145/3637528.3671877",
    codeLink: "https://github.com/FDUDSDE/SEAN",
    pdf: "/assets/papers/sean.pdf",
    image: "/assets/papers/sean.png"
  },
  {
    id: "6",
    title: "ST-ECP: A Novel Spatial-Temporal Framework for Energy Consumption Prediction of Vehicle Trajectory",
    abstract: "Proposes ST-ECP, a spatio-temporal heterogeneous graph framework for personalized vehicle energy consumption prediction.",
    venue: "CIKM",
    year: "2024",
    tags: ["Data Mining", "Spatio-Temporal Graph", "Energy Consumption Estimation", "Trajectory"],
    link: "https://dl.acm.org/doi/abs/10.1145/3627673.3679807",
    pdf: "/assets/papers/st-ecp.pdf",
    image: "/assets/papers/st-ecp.png"
  },
  {
    id: "7",
    title: "DTFormer: A Transformer-Based Method for Discrete-Time Dynamic Graph Representation Learning",
    abstract: "Introduces a Transformer-based DTDG model that jointly captures temporal dynamics and node interaction intersections beyond GNN-RNN architectures.",
    venue: "CIKM",
    year: "2024",
    tags: ["Data Mining", "Graph", "DyG", "DTDG", "Transformer"],
    link: "https://dl.acm.org/doi/abs/10.1145/3627673.3679568",
    codeLink: "https://github.com/chenxi1228/DTFormer",
    pdf: "/assets/papers/dtformer.pdf",
    image: "/assets/papers/dtformer.png"
  },
  {
    id: "8",
    title: "A 2D Semantic-Aware Position Encoding for Vision Transformers",
    abstract: "Proposes SaPE, a semantic-aware 2D position encoding that enhances vision transformers by leveraging content-based spatial relationships.",
    venue: "arXiv",
    year: "2025",
    tags: ["Computer Vision", "Position Encoding", "Transformer"],
    link: "https://arxiv.org/pdf/2505.09466",
    pdf: "/assets/papers/sape.pdf",
    image: "/assets/papers/sape.png"
  },
  {
    id: "9",
    title: "DeepSeek: Paradigm Shifts and Technical Evolution in Large AI Models",
    abstract: "Reviews DeepSeek's paradigm, key algorithms, and engineering innovations shaping efficient large language models.",
    venue: "IEEE/CAA JAS",
    year: "2025",
    tags: ["Survey", "LLM", "DeepSeek"],
    link: "https://ieeexplore.ieee.org/abstract/document/11005752",
    pdf: "/assets/papers/deepseek_survey.pdf",
    image: "/assets/papers/deepseek_survey.png"
  },
  {
    id: "10",
    title: "AttentionDrag: Exploiting Latent Correlation Knowledge in Pre-trained Diffusion Models for Image Editing",
    abstract: "Proposes AttentionDrag, a one-step diffusion-based point editing method enabling fast and semantically consistent image manipulation.",
    venue: "IJCAI",
    year: "2025",
    tags: ["Computer Vision", "Image Editing", "Diffusion", "Attention"],
    link: "https://www.ijcai.org/proceedings/2025/0244.pdf",
    codeLink: "https://github.com/GPlaying/AttentionDrag",
    pdf: "/assets/papers/attentiondrag.pdf",
    image: "/assets/papers/attentiondrag.png"
  },
  {
    id: "11",
    title: "Rethinking Time Encoding via Learnable Transformation Functions",
    abstract: "Proposes LeTE, a deep function learning based time encoding method for modeling diverse and complex temporal patterns.",
    venue: "ICML",
    year: "2025",
    tags: ["Data Mining", "DyG", "Time Series", "Time Encoding"],
    link: "https://proceedings.mlr.press/v267/chen25bh.html",
    codeLink: "https://github.com/chenxi1228/LeTE",
    pdf: "/assets/papers/lete.pdf",
    image: "/assets/papers/lete.png"
  },
  {
    id: "12",
    title: "SSH-T$^3$ : A Hierarchical Pre-training Framework for Multi-Scenario Financial Risk Assessment",
    abstract: "Proposes a self-supervised hierarchical two-tower Transformer for robust multi-scenario financial risk modeling.",
    venue: "CIKM",
    year: "2025",
    tags: ["Data Mining","Event Sequence", "Transformer", "Financial Risk Assessment"],
    link: "https://dl.acm.org/doi/abs/10.1145/3746252.3761504",
    pdf: "/assets/papers/ssht3.pdf",
    image: "/assets/papers/ssht3.png"
  },
  {
    id: "13",
    title: "Unifying Text Semantics and Graph Structures for Temporal Text-attributed Graphs with Large Language Model",
    abstract: "Proposes CROSS, an LLM-empowered framework that unifies temporal text semantics and evolving graph structures in TTAGs.",
    venue: "NeurIPS",
    year: "2025",
    tags: ["Data Mining", "Graph", "DyG", "Text-attributed", "LLM"],
    link: "https://openreview.net/forum?id=9env0BdcDV",
    codeLink: "https://github.com/SiweiPro/CROSS",
    pdf: "/assets/papers/cross.pdf",
    image: "/assets/papers/cross.png"
  },

];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
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
  },
  {
    id: "2",
    slug: "overleaf-deployment",
    type: "article",
    title: "Overleaf 部署流程及踩坑",
    excerpt: "Overleaf目前限制了编译速度，该流程详细介绍了如何部署Overleaf到一台私有Linux服务器上",
    date: "2025-12-19",
    readTime: "20 min read",
    tags: ["Overleaf", "Deployment", "Linux"],
    content: "assets/blog/overleaf_deployment/overleaf_deployment.md",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/chenxi1228", icon: "github" },
  { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=ewzzOZgAAAAJ", icon: "scholar" },
  { platform: "Semantic Scholar", url: "https://www.semanticscholar.org/author/Xi-Chen/2283939419", icon: "semantic" }
];
