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
    name: "KFUPM Internship 2025",
    path: "/certificates/Kfupm Internship 2025.pdf",
  },
  {
    name: "Research Course Certificate",
    path: "/certificates/Kfupm Research Course Certificate .pdf",
  },
  {
    name: "JRC SDAIA Certificate",
    path: "/certificates/Mr. Muhammad Mehdi Raza JRC SDAIA.pdf",
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
export const HACKATHON_CERTIFICATES_PDF = "/certificates/hackathon-achievements.pdf";

// ========== UNIVERSITY DOCUMENT ==========
export const UNIVERSITY_DOCUMENT = "/certificates/University.pdf";

// ========== EXPERIENCE DATA ==========
export const EXPERIENCES = [
  {
    id: 1,
    title: "AI Research Intern",
    organization: "KFUPM-SDAIA Joint Research Center",
    duration: "2024 - 2025",
    description: "Focused on LLM optimization using Phi-mini and Qwen models. Implemented DSPy framework for structured prompting and model fine-tuning. Contributed to advanced research in language model efficiency.",
    highlights: ["LLM Optimization", "Phi-mini", "Qwen", "DSPy Framework"],
    hasCertificates: true,
    type: "research",
  },
  {
    id: 2,
    title: "Tech Lead",
    organization: "AI Frontier Society",
    duration: "2024 - Present",
    description: "Leading the technical division of GIKI's first AI society, managing technical roadmaps and developer teams. Managed hospitality and lodging logistics for NeoHacks – GIKI Edition, an All-Pakistan Hackathon hosting 110+ students.",
    highlights: ["Technical Leadership", "AI Society", "NeoHacks", "Team Management"],
    hasCertificates: false,
    type: "leadership",
  },
  {
    id: 3,
    title: "Executive IT",
    organization: "ASME GIKI",
    duration: "2023 - 2024",
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
    tech: ["Data Structures", "AVL Trees", "Stacks", "Optimization"],
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
    hasVideo: false,
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
    hasVideo: false,
  },
  {
    id: 5,
    title: "Quiz Application",
    description: "Object-Oriented Programming project featuring a comprehensive quiz application with user authentication and scoring system.",
    tech: ["Java", "OOP", "CS112 Project"],
    thumbnailKey: "quizApp" as const,
    githubKey: "quizApp" as const,
    featured: false,
    hasVideo: false,
  },
];

// ========== CERTIFICATIONS DATA ==========
export const COURSERA_CERTIFICATIONS = [
  { name: "Advanced Learning Algorithms", issuer: "Coursera", year: "2025", path: "/certificates/Advanced Learning Algorithms.pdf" },
  { name: "Artificial Intelligence Essentials", issuer: "Coursera", year: "2026", path: "/certificates/Artifical Intellgience Essentials.pdf" },
  { name: "Design Patterns", issuer: "Coursera", year: "2026", path: "/certificates/Design Patterns.pdf" },
  { name: "Introduction to Generative AI", issuer: "Coursera", year: "2025", path: "/certificates/Introduction to Generative Ai.pdf" },
  { name: "Object Oriented Design", issuer: "Coursera", year: "2026", path: "/certificates/Object Oriented Design.pdf" },
  { name: "Python for Data Science, AI and Development", issuer: "Coursera", year: "2026", path: "/certificates/Python for Data Science, AI and Development.pdf" },
  { name: "Supervised Machine Learning", issuer: "Coursera", year: "2025", path: "/certificates/Supervised Machine Learning Regression and Classification.pdf" },
  { name: "Technical Support Fundamentals", issuer: "Coursera", year: "2025", path: "/certificates/Technical Support Fundamentals.pdf" },
];

export const HACKATHON_ACHIEVEMENTS = [
  { name: "Google Quantumnia Hackathon Winner", event: "GIKI", year: "2024" },
  { name: "Microsoft UI/UX Winner", event: "GIKI", year: "2024" },
];

// ========== TECH STACK DATA ==========
export const TECH_STACK = {
  languages: [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "C++", icon: "⚡" },
    { name: "SQL", icon: "🗃️" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "🟨" },
  ],
  frameworks: [
    { name: "Next.js", icon: "▲" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "Django", icon: "🎸" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "React.js", icon: "⚛️" },
  ],
  tools: [
    { name: "Jira", icon: "📋" },
    { name: "Git", icon: "🔀" },
    { name: "Docker", icon: "🐳" },
    { name: "VS Code", icon: "💻" },
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

// ========== SOCIAL LINKS (GitHub & LinkedIn only) ==========
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
