// ============================================
// ENHANCED CHATBOT CONFIGURATION
// Muhammad Mehdi Raza - Portfolio Chatbot
// ============================================

// Updated chatbotSuggestions for Muhammad Mehdi Raza
const chatbotSuggestions = [
  { id: "intro", label: "Who are you?", prompt: "Who are you?" },
  { id: "experience", label: "Tell me about your research & internships", prompt: "Tell me about your research & internships" },
  { id: "skills", label: "What is your tech stack?", prompt: "What is your tech stack?" },
  { id: "projects", label: "Can I see your key projects?", prompt: "Can I see your key projects?" },
  { id: "awards", label: "Awards & Certifications", prompt: "Awards & Certifications" },
  { id: "education", label: "What is your academic background?", prompt: "What is your academic background?" },
  { id: "dsa", label: "Tell me about your DSA skills", prompt: "Tell me about your DSA skills" },
  { id: "certifications", label: "What certifications do you have?", prompt: "What certifications do you have?" },
  { id: "leadership", label: "Tell me about your leadership roles", prompt: "Tell me about your leadership roles" },
  { id: "github", label: "Can I see your GitHub?", prompt: "Can I see your GitHub?" },
  { id: "linkedin", label: "Do you have a LinkedIn profile?", prompt: "Do you have a LinkedIn profile?" },
  { id: "email", label: "How can I contact you?", prompt: "How can I contact you?" },
  { id: "location", label: "Where are you based?", prompt: "Where are you based?" },
  { id: "achievements", label: "What are your achievements?", prompt: "What are your achievements?" },
  { id: "greeting", label: "Hello!", prompt: "Hello" }
];

// Updated chatbotResponses for Muhammad Mehdi Raza
const chatbotResponses = {
  intro: {
    patterns: ["who are you", "introduce yourself", "tell me about yourself", "about you", "introduction"],
    response: "Hi! I'm Muhammad Mehdi Raza, a **Software Engineering student** at GIKI with a **3.69 GPA**. I'm an AI Researcher and Full-Stack Developer passionate about LLM optimization and building scalable web systems like CrowdServe and SehatSathi.\n\nCurrently, I am actively seeking **Internships or Full-time roles** (Onsite in Saudi Arabia or Pakistan, as well as Remote anywhere) to apply my expertise in Web and AI! 🚀"
  },
  
  education: {
    patterns: ["education", "study", "university", "degree", "gpa", "academic", "giki", "school"],
    response: "I am a **3rd-year Software Engineering student** at GIKI, maintaining a **3.69 GPA**.\n\nI graduated my matriculation and intermediate from **PISK (Pakistan International School Al Khobar)**. In matric I achieved **99%** and secured **2nd position** in the entire school, and in intermediate I got **85%** with **3rd position** (FBISE Board).\n\nI have recently completed an **8-week internship at KFUPM** where I worked on LLM optimization and AI research.\n\nI am immediately open to internship or full-time opportunities where I can contribute to the growing AI ecosystem! 🎯"
  },
  
  experience: {
    patterns: ["experience", "internship", "research", "kfupm", "sdaia", "work", "job"],
    response: "I served as an **AI Research Intern at KFUPM-SDAIA** (Summer 2025), where I optimized LLMs using the DSPy framework for structured prompting.\n\nMy research on 'Entity Sentiment Classification using Arabic Lightweight LLMs' was recently presented at the **Engitek '25 conference** and is awaiting publication on IEEE Xplore.\n\nI also serve as the **Tech Lead** for the AI Frontier Society at GIKI and am eager to transition these research skills into the professional tech landscape in Saudi Arabia or Pakistan. 🚀\n\n**Other Roles:**\n🚀 Tech Lead @ AI Frontier Society (Sep 2025 - Present)\n🤝 Society Member @ ASME GIKI (Feb 2024 - Present)"
  },
  
  skills: {
    patterns: ["skills", "tech stack", "languages", "programming", "technologies", "tools"],
    response: "My technical expertise spans:\n\n**AI/ML:**\nNLP & Deep Learning (TensorFlow, Keras), LLM Optimization & Fine-tuning, DSPy Framework, CNN architectures (90.87% accuracy on MNIST)\n\n**Programming Languages:**\nC++ (Advanced DSA, OOP, Multi-threading), Python (AI/ML, Backend), Java (Spring Boot, REST APIs), JavaScript/TypeScript (React.js, Next.js)\n\n**Architecture & Design:**\nMVC Architecture, Microservices, RESTful API Design, Software Design Patterns, Full-Stack Development (MERN, Django)\n\n**Tools & Frameworks:**\nSpring Boot, Django, React.js, Next.js, Git, Jira, Docker, TensorFlow, Keras, PyTorch"
  },
  
  projects: {
    patterns: ["projects", "built", "samples", "work", "portfolio", "what have you made"],
    response: "Here are my key projects showcasing different skills:\n\n**1. Streamify** (C++ | DSA)\nOptimized metadata processing using AVL Trees & Stacks, efficient data handling and retrieval system\n[GitHub](https://github.com/NiazAli573/DSA-Project-streamfy)\n\n**2. CrowdServe** (Java | Spring Boot)\nFull-stack service-oriented application with MVC Architecture and RESTful APIs\n[GitHub](https://github.com/mIBRAHIM707/CrowdServe)\n\n**3. SehatSathi** (React.js | Django)\nHealthcare platform with React.js frontend and Django backend, managed with Jira\n[GitHub](https://github.com/jagtar5/SehatSathi)\n\n**4. Handwritten Digit Recognition** (Python | TensorFlow)\nCNN achieving 90.87% accuracy on MNIST with hyperparameter tuning\n[GitHub](https://github.com/MuhammadMehdiRaza/Hand_Written_Digit_Recogntition)\n\n**5. Quiz Application** (C++ | OOP)\nComprehensive quiz system with authentication and user management\n[GitHub](https://github.com/Ahmaduzairshah12/quiz-application-cs112-project)\n\n🎥 All projects include video demos on my portfolio!"
  },
  
  awards: {
    patterns: ["awards", "certifications", "achievements", "certificates", "honors", "recognition"],
    response: "I maintain a consistent record of excellence:\n\n🏆 **Dean's Honor List**: Achieved the Dean's Honor List 5 out of 5 times at GIKI, reflecting my dedication to academic top-performance.\n\n🥇 **Hackathon Winner**: Winner of the Google Quantumnia Hackathon and the Microsoft Student Chapter UI/UX Design Competition, proving my ability to deliver high-quality solutions under pressure.\n\n📜 **Professional Certificates**: I hold multiple verified Coursera certifications in Machine Learning, Generative AI Engineering, and Google UI/UX Design.\n\nAll certificates are displayed on my portfolio with verification links! ✨"
  },
  
  dsa: {
    patterns: ["dsa", "data structures", "algorithms", "competitive", "leetcode", "coding"],
    response: "I have strong expertise in **Data Structures & Algorithms**:\n\n**🌲 Data Structures:**\n- **AVL Trees**: Implemented in Streamify for optimized metadata processing\n- **Stacks**: Used for efficient data retrieval\n- Hash Tables, Linked Lists, Queues\n- Graph algorithms and tree traversals\n\n**⚡ Optimization:**\n- Algorithm efficiency analysis (Big O)\n- Space-time complexity optimization\n- Practical DSA implementation in real projects\n\n**💻 Language:** Proficient in **C++** for DSA\n\n**🎯 Projects:**\n- **Streamify**: Production-ready DSA implementation with AVL Trees\n- Multiple competitive programming practice"
  },
  
  certifications: {
    patterns: ["certifications", "certificates", "coursera", "courses", "training"],
    response: "My certifications demonstrate continuous learning:\n\n**🎓 AI & Machine Learning:**\n- Advanced Learning Algorithms (Coursera, 2025)\n- Introduction to Generative AI (Coursera, 2025)\n- Artificial Intelligence Essentials (Coursera, 2026)\n\n**💻 Software Engineering:**\n- Design Patterns (Coursera, 2026)\n- Object Oriented Design (Coursera)\n\n**🔬 Research Certifications:**\n- KFUPM-SDAIA Inbound Summer Research Program\n- JRCAI Training Certificate (8-week AI research program)\n- Research Skills Certification (10-hour intensive)\n\n**🏆 Hackathons:**\n- Multiple hackathon participation certificates\n\nAll certificates are displayed on my portfolio with verification links!"
  },
  
  leadership: {
    patterns: ["leadership", "lead", "management", "team", "society", "neohacks"],
    response: "I'm actively involved in leadership and community building:\n\n**🚀 Tech Lead - AI Frontier Society**\n*Sep 2025 - Present*\n- Leading the technical division of **GIKI's first AI society**\n- Managing technical roadmaps and developer teams\n- **Organized NeoHacks GIKI Edition**: All-Pakistan Hackathon with **110+ students**\n- Coordinated hospitality and logistics for major events\n\n**🤝 Society Member - ASME GIKI**\n*Feb 2024 - Present*\n- Multi-disciplinary collaboration platform\n- Liaison coordination for All-Pak-Events\n- Stakeholder management and networking\n\n**🎯 Key Skills:**\n- Team management and technical mentorship\n- Event organization (100+ participants)\n- Cross-functional coordination\n- Technical community building"
  },
  
  achievements: {
    patterns: ["achievements", "accomplishments", "success", "milestones"],
    response: "Here are some of my notable achievements:\n\n**Academic Excellence:**\n- 3.69 GPA at GIKI in Software Engineering\n- Dean's Honor List 5 out of 5 times\n- 99% in Matriculation (2nd position school-wide)\n- 85% in Intermediate (3rd position school-wide)\n\n**Research Contributions:**\n- AI Research Intern at KFUPM-SDAIA\n- Research presented at Engitek '25 conference\n- Awaiting publication on IEEE Xplore\n\n**Project Portfolio:**\n- 4 full-stack projects with video demonstrations\n- 90.87% accuracy on MNIST digit recognition\n- Production-ready applications with modern architecture\n\n**Leadership & Community:**\n- Tech Lead of AI Frontier Society\n- Organized NeoHacks with 110+ participants\n- Building GIKI's first AI community"
  },
  
  github: {
    patterns: ["github", "code", "repositories", "repo"],
    response: "Check out my open-source work and projects:\n\n🔗 **GitHub**: [github.com/MuhammadMehdiRaza](https://github.com/MuhammadMehdiRaza)\n\n**Featured Repositories:**\n- 🎵 Streamify (C++ DSA)\n- 🌐 CrowdServe (Java Spring Boot)\n- 🏥 SehatSathi (React + Django)\n- 🔢 Digit Recognition (TensorFlow)\n- 📝 Quiz Application (C++ OOP)\n\nAll projects include comprehensive documentation and video demos!"
  },
  
  linkedin: {
    patterns: ["linkedin", "connect", "network"],
    response: "Let's connect on LinkedIn!\n\n🔗 **LinkedIn**: [linkedin.com/in/muhammad-mehdi-raza-a02496274](https://www.linkedin.com/in/muhammad-mehdi-raza-a02496274/)\n\nI regularly share updates about my projects, research, and tech insights. Feel free to send me a connection request! 🤝"
  },
  
  email: {
    patterns: ["email", "contact", "reach", "message", "mail"],
    response: "You can reach me at:\n\n📧 **Email**: muhammadmehdiraza351@gmail.com\n\nI'm also available on:\n- 💼 LinkedIn: [Muhammad Mehdi Raza](https://www.linkedin.com/in/muhammad-mehdi-raza-a02496274/)\n- 💻 GitHub: [MuhammadMehdiRaza](https://github.com/MuhammadMehdiRaza)\n\nFeel free to reach out for collaborations, opportunities, or just to chat about tech! 😊"
  },
  
  location: {
    patterns: ["location", "where", "based", "from", "live"],
    response: "I'm based in **Pakistan** 🇵🇰, currently studying at:\n\n🏛️ **Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)**\n📍 Topi, Khyber Pakhtunkhwa, Pakistan\n\nI completed my research internship at KFUPM in Saudi Arabia and I'm open to remote opportunities worldwide! 🌍"
  },
  
  greeting: {
    patterns: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
    response: "Hello! 👋 I'm **Muhammad Mehdi Raza**, a Software Engineer and AI Researcher!\n\nI'd love to tell you about:\n- 🔬 My **AI Research** at KFUPM-SDAIA\n- 💻 My **Full-Stack Projects** (Streamify, CrowdServe, SehatSathi)\n- 🧠 My expertise in **LLM optimization** and **DSA**\n- 🚀 My role as **Tech Lead** at AI Frontier Society\n\nWhat would you like to know? Feel free to ask anything!"
  },
  
  default: {
    response: "That's an interesting question! Let me share what I can help with:\n\n- 🎓 My **3.69 GPA** at GIKI in Software Engineering\n- 🔬 **KFUPM-SDAIA research internship** on LLM optimization\n- 💻 **Projects**: Streamify (C++ DSA), CrowdServe (Spring Boot), SehatSathi (Full-Stack)\n- 🤖 **AI skills**: Deep Learning, NLP, DSPy framework\n- 🚀 **Tech Lead** at AI Frontier Society\n- 📜 Multiple **certifications** in AI/ML\n\nFeel free to ask about any of these topics, or explore the suggestions above! 🌟"
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { chatbotSuggestions, chatbotResponses };
}
