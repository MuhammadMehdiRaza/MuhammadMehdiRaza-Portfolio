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
  { id: "ai", label: "How have you used AI in projects?", prompt: "How have you used AI in projects?" },
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
    response: "Hi! I'm **Muhammad Mehdi Raza**, a Software Engineering student at **GIKI** (GPA: **3.69**). I'm an **AI Researcher** and **Full-Stack Developer** specializing in **LLM optimization**, **scalable systems**, and **data structures & algorithms**! 🚀\n\nI recently completed my AI research internship at **KFUPM-SDAIA** where I optimized LLMs using the DSPy framework."
  },
  
  education: {
    patterns: ["education", "study", "university", "degree", "gpa", "academic", "giki", "school"],
    response: "I'm currently in my **3rd year** of **BS Software Engineering** at **Ghulam Ishaq Khan Institute (GIKI)**, maintaining a **3.69 GPA**.\n\n**Key Coursework:**\n- Data Structures & Algorithms\n- Operating Systems (Multi-threading, POSIX threads)\n- Software Architecture & Design Patterns\n- Database Systems\n- Deep Learning & AI\n\nI focus on practical application of concepts in real-world projects! 📚"
  },
  
  experience: {
    patterns: ["experience", "internship", "research", "kfupm", "sdaia", "work", "job"],
    response: "My professional journey includes:\n\n🔬 **AI Research Intern** @ **KFUPM-SDAIA Joint Research Center**\n📅 *June 14 - Aug 7, 2025*\n- Optimized LLMs (Qwen, Phi-mini, Meta Allam) using **DSPy framework**\n- Implemented structured prompting for model fine-tuning\n- Contributed to language model efficiency research\n- Completed 8-week intensive AI research program\n\n🚀 **Tech Lead** @ **AI Frontier Society (GIKI)**\n📅 *Sep 2025 - Present*\n- Leading GIKI's first AI society technical division\n- Managed NeoHacks GIKI Edition (110+ students)\n- Coordinating technical roadmaps and developer teams\n\n🤝 **Society Member** @ **ASME GIKI**\n📅 *Feb 2024 - Present*\n- Multi-disciplinary collaboration and networking\n- Stakeholder coordination for All-Pak-Events"
  },
  
  skills: {
    patterns: ["skills", "tech stack", "languages", "programming", "technologies", "tools"],
    response: "My technical expertise spans:\n\n**🤖 AI/ML:**\n- NLP & Deep Learning (TensorFlow, Keras)\n- LLM Optimization & Fine-tuning\n- DSPy Framework for structured prompting\n- CNN architectures (90.87% accuracy on MNIST)\n\n**💻 Programming Languages:**\n- **C++**: Advanced DSA, OOP, Multi-threading\n- **Python**: AI/ML, Backend Development\n- **Java**: Spring Boot, MVC Architecture, REST APIs\n- **JavaScript/TypeScript**: React.js, Next.js\n\n**🏗️ Architecture & Design:**\n- MVC Architecture, Microservices\n- RESTful API Design\n- Software Design Patterns\n- Full-Stack Development (MERN, Django)\n\n**🛠️ Tools & Frameworks:**\n- Spring Boot, Django, React.js, Next.js\n- Git, Jira, Docker\n- TensorFlow, Keras, PyTorch"
  },
  
  projects: {
    patterns: ["projects", "built", "samples", "work", "portfolio", "what have you made"],
    response: "Here are my key projects showcasing different skills:\n\n**1. 🎵 Streamify** (C++ | DSA)\n- Optimized metadata processing using **AVL Trees** & **Stacks**\n- Efficient data handling and retrieval system\n- Advanced Data Structures implementation\n[GitHub](https://github.com/NiazAli573/DSA-Project-streamfy)\n\n**2. 🌐 CrowdServe** (Java | Spring Boot)\n- Full-stack service-oriented application\n- **MVC Architecture** with RESTful APIs\n- Scalable backend with Spring Boot\n[GitHub](https://github.com/mIBRAHIM707/CrowdServe)\n\n**3. 🏥 SehatSathi** (React.js | Django)\n- Healthcare platform with modern tech stack\n- **React.js** frontend + **Django** backend\n- Managed with Jira following SDLC\n[GitHub](https://github.com/jagtar5/SehatSathi)\n\n**4. 🔢 Handwritten Digit Recognition** (Python | TensorFlow)\n- CNN achieving **90.87% accuracy** on MNIST\n- Hyperparameter tuning & data normalization\n- Deep Learning implementation\n[GitHub](https://github.com/MuhammadMehdiRaza/Hand_Written_Digit_Recogntition)\n\n**5. 📝 Quiz Application** (C++ | OOP)\n- Comprehensive quiz system with authentication\n- Object-Oriented Programming principles\n- User management & scoring system\n[GitHub](https://github.com/Ahmaduzairshah12/quiz-application-cs112-project)\n\n🎥 **All projects include video demos on my portfolio!**"
  },
  
  ai: {
    patterns: ["ai", "llm", "machine learning", "dspy", "generative ai", "artificial intelligence", "ml"],
    response: "I specialize in **Generative AI** and **LLM optimization**:\n\n🧠 **LLM Research @ KFUPM-SDAIA:**\n- Optimized **Qwen**, **Phi-mini**, and **Meta Allam** models\n- Implemented **DSPy framework** for structured prompting\n- Model fine-tuning and efficiency improvements\n\n🎯 **Deep Learning Projects:**\n- Built **CNN** for handwritten digit recognition (90.87% accuracy)\n- Applied hyperparameter tuning and optimization\n- Experience with **TensorFlow** and **Keras**\n\n📚 **AI Certifications:**\n- Advanced Learning Algorithms (Coursera)\n- Introduction to Generative AI (Coursera)\n- AI Essentials (Coursera)\n\n💡 I'm passionate about making AI more efficient and accessible!"
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
    patterns: ["achievements", "awards", "accomplishments", "success"],
    response: "Here are some of my notable achievements:\n\n**🏆 Academic:**\n- **3.69 GPA** at GIKI in Software Engineering\n- Dean's List recognition\n- Strong focus on AI and software architecture\n\n**🔬 Research:**\n- **AI Research Intern** at prestigious KFUPM-SDAIA center\n- Completed intensive 8-week JRCAI training program\n- Published research work on LLM optimization\n\n**💻 Projects:**\n- **4 full-stack projects** with video demonstrations\n- **90.87% accuracy** on MNIST digit recognition\n- Production-ready applications with modern architecture\n\n**👥 Leadership:**\n- **Tech Lead** of AI Frontier Society\n- Successfully organized **NeoHacks** with 110+ participants\n- Building GIKI's first AI community\n\n**📜 Certifications:**\n- 5+ professional certifications in AI/ML and Software Engineering\n- KFUPM research certifications"
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
