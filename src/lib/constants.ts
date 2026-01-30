// ============================================
// PORTFOLIO CONSTANTS - UNIFIED DATA SOURCE
// ============================================

// ========== PERSONAL INFO ==========
export const PERSONAL_INFO = {
  name: "Muhammad Mehdi Raza",
  title: "Software Engineer & AI Researcher",
  tagline: "Software Engineering student and web developer passionate about creating innovative digital experiences and exploring the frontiers of AI",
  email: "muhammadmehdiraza351@gmail.com",
  github: "https://github.com/MuhammadMehdiRaza",
  linkedin: "https://www.linkedin.com/in/muhammad-mehdi-raza-a02496274/",
};

// ========== RESUME LINK ==========
export const RESUME_LINK = "/certificates/Mehdi_Cv.pdf";

// ========== KFUPM RESEARCH CERTIFICATE PATHS ==========
export const RESEARCH_CERTIFICATES = [
  {
    id: 1,
    title: "Inbound Summer Research Program",
    subtitle: "AI Research Intern - KFUPM-SDAIA",
    impact: "Optimized LLMs (Qwen/Phi/Meta Allam) using the DSPy framework for structured prompting",
    organization: "KFUPM",
    thumbnail: "/certificates/kfupm-cert-1.png",
  },
  {
    id: 2,
    title: "Research Skills Certification",
    subtitle: "Undergraduate Research Office",
    impact: "10-hour intensive course on research methodologies and academic writing",
    organization: "Deanship of Research",
    thumbnail: "/certificates/kfupm-cert-2.png",
  },
  {
    id: 3,
    title: "JRCAI Training Certificate",
    subtitle: "SDAIA-KFUPM Joint Research Center",
    impact: "8-week program on AI research under Dr. Shadi Abudalfa supervision",
    organization: "JRCAI",
    thumbnail: "/certificates/kfupm-cert-3.png",
  },
];

// ========== PROJECT THUMBNAILS ==========
export const PROJECT_THUMBNAILS = {
  streamify: "/projects/streamify.png",
  crowdserve: "/projects/crowdserve.png",
  sehatsathi: "/projects/sehatsathi.png",
  digitRecognition: "/projects/digit-recognition.png",
  quizApp: "/projects/quiz-app.png",
};

// ========== PROJECT VIDEOS ==========
export const PROJECT_VIDEOS = {
  streamify: "/projects/streamify-demo.mp4",
  crowdserve: "/projects/crowdserve-demo.mp4",
  digitRecognition: "/projects/digit-recognition-demo.mp4",
};

// ========== GITHUB LINKS ==========
export const GITHUB_LINKS = {
  streamify: "https://github.com/NiazAli573/DSA-Project-streamfy",
  crowdserve: "https://github.com/mIBRAHIM707/CrowdServe",
  sehatsathi: "https://github.com/jagtar5/SehatSathi",
  digitRecognition: "https://github.com/MuhammadMehdiRaza/Hand_Written_Digit_Recogntition",
  quizApp: "https://github.com/Ahmaduzairshah12/quiz-application-cs112-project",
};

// ========== HACKATHON CERTIFICATES ==========
// View-only path - using Google Docs Viewer to prevent download
export const HACKATHON_CERTIFICATES_PDF = "/certificates/Hackathon Certificates.pdf";

// ========== UNIVERSITY DOCUMENT ==========
export const UNIVERSITY_DOCUMENT = "/certificates/University.pdf";

// ========== EXPERIENCE DATA ==========
export const EXPERIENCES = [
  {
    id: 1,
    title: "AI Research Intern",
    organization: "KFUPM-SDAIA Joint Research Center",
    duration: "June 14 2025 - Aug 7 2025",
    description: "Focused on LLM optimization using Phi-mini, Qwen, and Meta Allam models. Implemented DSPy framework for structured prompting and model fine-tuning. Contributed to advanced research in language model efficiency.",
    highlights: ["LLM Optimization", "Phi-mini", "Qwen", "Meta Allam", "DSPy Framework"],
    hasCertificates: true,
    type: "research",
  },
  {
    id: 2,
    title: "Tech Lead",
    organization: "AI Frontier Society",
    duration: "Sep 2025 – Present",
    description: "Leading the technical division of GIKI's first AI society, managing technical roadmaps and developer teams. Managed hospitality and lodging logistics for NeoHacks – GIKI Edition, an All-Pakistan Hackathon hosting 110+ students.",
    highlights: ["Technical Leadership", "AI Society", "NeoHacks", "Team Management"],
    hasCertificates: false,
    type: "leadership",
  },
  {
    id: 3,
    title: "Society Member",
    organization: "ASME GIKI",
    duration: "Feb 2024 – Present",
    description: "Utilized society as a networking platform for multi-disciplinary collaboration and served as a Liaison Member for the All-Pak-Event, assisting in stakeholder coordination.",
    highlights: ["Networking", "Stakeholder Coordination", "Multi-disciplinary Collaboration"],
    hasCertificates: false,
    type: "leadership",
  },
];

// ========== PROJECTS DATA ==========
export const PROJECTS = [
  {
    id: 1,
    title: "Streamify",
    description: "Optimized metadata processing using Data Structures including AVL Trees and Stacks for efficient data handling and retrieval.",
    tech: ["C++", "AVL Trees", "Data Structures and Algorithms", "Optimization"],
    thumbnailKey: "streamify" as const,
    githubKey: "streamify" as const,
    featured: true,
    hasVideo: true,
  },
  {
    id: 2,
    title: "CrowdServe",
    description: "Full-stack application built with Java and Spring Boot following MVC Architecture principles for scalable service delivery.",
    tech: ["Java", "Spring Boot", "MVC Architecture", "REST API"],
    thumbnailKey: "crowdserve" as const,
    githubKey: "crowdserve" as const,
    featured: true,
    hasVideo: true,
  },
  {
    id: 3,
    title: "SehatSathi",
    description: "Full-Stack healthcare platform integrating React.js frontend with Django backend, managed using Jira for SDLC processes.",
    tech: ["React.js", "Django", "Jira", "Full-Stack"],
    thumbnailKey: "sehatsathi" as const,
    githubKey: "sehatsathi" as const,
    featured: true,
    hasVideo: false,
  },
  {
    id: 4,
    title: "Handwritten Digit Recognition",
    description: "Constructed and trained a CNN architecture achieving 90.87% accuracy on MNIST data. Applied hyperparameter tuning and data normalization.",
    tech: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    thumbnailKey: "digitRecognition" as const,
    githubKey: "digitRecognition" as const,
    featured: false,
    hasVideo: true,
  },
  {
    id: 5,
    title: "Quiz Application",
    description: "Object-Oriented Programming project featuring a comprehensive quiz application with user authentication and scoring system.",
    tech: ["C++", "OOP", "CS112 Project"],
    thumbnailKey: "quizApp" as const,
    githubKey: "quizApp" as const,
    featured: false,
    hasVideo: false,
  },
];

// ========== CERTIFICATIONS DATA ==========
export const COURSERA_CERTIFICATIONS = [
  {
    name: "Advanced Learning Algorithms",
    issuer: "Coursera",
    year: "2025",
    shareUrl: "https://coursera.org/share/456dda1d3b9a0323a5648c21c354da43",
    thumbnail: "/certificates/cert-advanced-learning.png",
    tags: ["Neural Networks", "Deep Learning", "TensorFlow"]
  },
  {
    name: "Artificial Intelligence Essentials",
    issuer: "Coursera",
    year: "2026",
    shareUrl: "https://coursera.org/share/b5a73cd65ed1c235a5c701c439c9850c",
    thumbnail: "/certificates/cert-ai-essentials.png",
    tags: ["AI", "Machine Learning", "Fundamentals"]
  },
  {
    name: "Design Patterns",
    issuer: "Coursera",
    year: "2026",
    shareUrl: "https://coursera.org/share/a0c427d48a585f714d69e7dbccce9f47",
    thumbnail: "/certificates/cert-design-patterns.png",
    tags: ["OOP", "Software Design", "Java"]
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Coursera",
    year: "2025",
    shareUrl: "https://coursera.org/share/16f7fe7b5a169d04e6257edf7e137fc0",
    thumbnail: "/certificates/cert-gen-ai.png",
    tags: ["Generative AI", "LLMs", "Prompts"]
  },
  {
    name: "Object Oriented Design",
    issuer: "Coursera",
    year: "2026",
    shareUrl: "https://coursera.org/share/111435148fe56cec27e59b65cf3e1e2a",
    thumbnail: "/certificates/cert-ood.png",
    tags: ["OOP", "UML", "Design Principles"]
  },
  {
    name: "Python for Data Science, AI and Development",
    issuer: "Coursera",
    year: "2026",
    shareUrl: "https://coursera.org/share/2dee1ed80c1f43105958cb23246749d0",
    thumbnail: "/certificates/cert-python-ds.png",
    tags: ["Python", "Data Science", "AI"]
  },
  {
    name: "Supervised Machine Learning",
    issuer: "Coursera",
    year: "2025",
    shareUrl: "https://coursera.org/share/b8fb7eb754f10d5ba0cebe6920e22c8c",
    thumbnail: "/certificates/cert-supervised-ml.png",
    tags: ["ML", "Regression", "Classification"]
  },
  {
    name: "Technical Support Fundamentals",
    issuer: "Coursera",
    year: "2025",
    shareUrl: "https://coursera.org/share/4f0bf91f0cc8a157f283d29cd12bd8bf",
    thumbnail: "/certificates/cert-tech-support.png",
    tags: ["IT Support", "Troubleshooting", "Networking"]
  },
];

export const HACKATHON_ACHIEVEMENTS = [
  { name: "Google Quantumnia Hackathon Winner", event: "GIKI", year: "2024" },
  { name: "Microsoft UI/UX Winner", event: "GIKI", year: "2024" },
];

// ========== TECH STACK DATA ==========
export const TECH_STACK = {
  frontend: [
    { name: "HTML", icon: "FaHtml5" },
    { name: "CSS", icon: "FaCss3Alt" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "React", icon: "FaReact" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
  ],
  backend: [
    { name: "Node.js", icon: "FaNodeJs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "REST APIs", icon: "SiPostman" },
  ],
  frameworks: [
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Django", icon: "SiDjango" },
  ],
  languages: [
    { name: "Python", icon: "FaPython" },
    { name: "C", icon: "SiC" },
    { name: "C++", icon: "SiCplusplus" },
    { name: "Java", icon: "FaJava" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "SQL", icon: "SiPostgresql" },
  ],
  aiml: [
    { name: "Machine Learning", icon: "FaBrain" },
    { name: "Deep Learning", icon: "SiTensorflow" },
    { name: "NLP", icon: "FaMicrochip" },
    { name: "LLMs", icon: "SiOpenai" },
    { name: "Pandas", icon: "SiPandas" },
    { name: "NumPy", icon: "SiNumpy" },
    { name: "Scikit-learn", icon: "SiScikitlearn" },
    { name: "TensorFlow", icon: "SiTensorflow" },
    { name: "Generative AI", icon: "SiOpenai" },
  ],
  deployment: [
    { name: "Vercel", icon: "SiVercel" },
    { name: "Railway", icon: "SiRailway" },
  ],
  versionControl: [
    { name: "Git", icon: "FaGitAlt" },
    { name: "GitHub", icon: "FaGithub" },
  ],
  os: [
    { name: "Ubuntu", icon: "FaUbuntu" },
    { name: "Windows", icon: "FaWindows" },
    { name: "macOS", icon: "FaApple" },
  ],
  ide: [
    { name: "VS Code", icon: "VscCode" },
    { name: "Eclipse", icon: "SiEclipseide" },
  ],
};

// ========== NAVIGATION LINKS ==========
export const NAV_LINKS = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Credentials", href: "#credentials" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Contact", href: "#contact" },
];

// ========== FOOTER NAVIGATION LINKS ==========
export const FOOTER_NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// ========== SOCIAL LINKS (GitHub & LinkedIn) ==========
export const SOCIAL_LINKS = [
  { name: "Github", href: "https://github.com/MuhammadMehdiRaza" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-mehdi-raza-a02496274/" },
];

// ========== DESIGN SYSTEM TOKENS ==========
export const DESIGN_TOKENS = {
  colors: {
    background: "#020617", // slate-950
    backgroundSecondary: "rgba(15, 23, 42, 0.5)", // slate-900/50
    accent: "#2563eb", // blue-600
    accentGlow: "rgba(37, 99, 235, 0.15)",
    border: "#1e293b", // slate-800
  },
  animation: {
    hoverY: -8,
    hoverDuration: 0.2,
    staggerDelay: 0.08,
  },
  glassmorphism: {
    background: "rgba(15, 23, 42, 0.5)",
    backdropBlur: "12px",
    border: "1px solid rgba(30, 41, 59, 0.8)",
  },
};
