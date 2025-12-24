import { BlogPost, Publication, SocialLink, Project, Demo } from './types.ts';

export const PERSONAL_INFO = {
  name: "Chenxi",
  name_zh: "陈曦",
  role: "Think out of the bricks!",
  bio: "I am currently pursuing a Ph.D. in Electronic and Information Engineering at Fudan University. My research interests include dynamic graph representation learning and computer vision.",
  bio_zh: "目前我正在复旦大学攻读电子信息专业博士。我的研究兴趣包括动态图标准学习和计算机视觉。",
  location: "Shanghai, China",
  location_zh: "中国 上海",
  emails: ["chenxi1228@foxmail.com", "x_chen21@m.fudan.edu.cn"],
  intro1: "Hell0! I'm Chenxi, a Ph.D Candidate at Fudan University. My journey began with a curiosity for how things work, which led me to the world of AI engineering and design.",
  intro2: "When I'm not coding, I enjoy traveling, photography and LEGO building.",
  intro1_zh: "Hell0！我是陈曦，目前正在复旦大学攻读电子信息专业博士。我的研究兴趣包括动态图表示学习和计算机视觉。",
  intro2_zh: "闲暇时间，我喜欢旅行、摄影和搭建乐高。",
};

export const RESUME_INFO = {
  lastUpdated: "Dec 2025",
  lastUpdated_zh: "2025年12月",
  enPdf: "/assets/resume/CV_English_20251223.pdf",
  zhPdf: "/assets/resume/CV_Chinese_20251223.pdf"
};

export const DEMOS: Demo[] = [
  {
    id: "1",
    title: "Synth3D-Gen",
    description: "Building 3D reconstruction datasets",
    description_zh: "通过模拟拍摄，生成3D重建数据集。",
    link: "",
    image: "/assets/demos/3d-gen.png",
    tags: ["3D Reconstruction", "Computer Vision"]
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
    abstract_zh: "本文提出了SPEED，一种基于边流动态图切分的多GPU动态图并行训练框架。",
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
    abstract: "Proposes RDGSL, a dynamic structure learning framework that denoises CTDG to improve robust temporal graph representation learning.",
    abstract_zh: "本文提出了RDGSL，一个基于图结构学习的动态图表示学习框架，能够对CTDG进行去噪，提高动态图表示学习的鲁棒性。",
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
    abstract_zh: "本文提出了ReCo，一个基于真实世界的大型开源住宅社区布局数据集，可支持数据驱动的城市设计和布局生成。",
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
    abstract_zh: "本文提出了TIGPrompt，一种基于提示学习的动态图表示学习范式，能够有效缓解预训练的TIG模型中的时间和语义鸿沟带来的问题。",
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
    abstract_zh: "本文提出了SEAN，一种基于自适应邻域编码的动态图表示学习模型，能够根据节点的动态交互关系自适应地选择邻居并生成表征。",
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
    abstract_zh: "本文提出了ST-ECP，一种面向个性化车辆能耗预测的时空异构图建模框架。",
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
    abstract: "Introduces a Transformer-based DTDG model that jointly captures temporal dynamics and node interaction intersections beyond GNN+RNN architectures.",
    abstract_zh: "本文提出了DTFormer，一种基于Transformer的DTDG模型，用于联合建模时间动态与节点交互关系，突破了传统GNN+RNN架构的限制。",
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
    abstract: "Proposes SaPE$^2$, a semantic-aware 2D position encoding that enhances vision transformers by leveraging content-based spatial relationships.",
    abstract_zh: "本文提出了SaPE$^2$，一种语义感知的二维位置编码，用于通过内容驱动的空间关系增强视觉Transformer。",
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
    abstract_zh: "本文回顾并分析了DeepSeek在高效大语言模型构建过程中形成的研究范式、核心算法及工程创新。",
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
    abstract_zh: "本文提出了AttentionDrag，一种一步式的扩散模型点编辑方法，实现了高效且语义一致的图像操控。",
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
    abstract_zh: "本文提出了LeTE，一种基于深度函数学习的时间编码方法，能够刻画多样而复杂的时间演化模式。",
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
    abstract_zh: "本文提出了SSH-T$^3$，一种基于自监督分层双塔Transformer的多场景金融风险评估模型和其预训练框架，用于多场景金融风险的鲁棒建模。",
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
    abstract_zh: "本文提出了CROSS，一种由大语言模型赋能的框架，用于在动态文本属性图中统一建模时间文本语义与不断演化的图结构。",
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
    slug: "banff",
    type: "plog",
    title: "Banff Park",
    excerpt: "July 2025, a visit to Banff Park in Alberta, Canada.",
    date: "2025-07-11",
    readTime: "Visual",
    tags: ["Travel", "Photography", "Canada"],
    images: [
        "assets/blog/p_banff/banff1.jpg",
        "assets/blog/p_banff/banff2.jpg",
        "assets/blog/p_banff/banff3.jpg",
        "assets/blog/p_banff/banff4.jpg",
    ],
    content: "Awesome view in Banff."
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
    content: "assets/blog/b_overleaf_deployment/overleaf_deployment.md",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/chenxi1228", icon: "github" },
  { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=ewzzOZgAAAAJ", icon: "scholar" },
  { platform: "Semantic Scholar", url: "https://www.semanticscholar.org/author/Xi-Chen/2283939419", icon: "semantic" }
];
