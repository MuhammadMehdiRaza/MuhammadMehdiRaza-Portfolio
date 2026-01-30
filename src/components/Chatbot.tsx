"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Chatbot suggestions
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
  { id: "linkedin", label: "Do you have a LinkedIn?", prompt: "Do you have a LinkedIn profile?" },
  { id: "email", label: "How can I contact you?", prompt: "How can I contact you?" },
];

// Chatbot responses with pattern matching
const chatbotResponses = {
  experience: {
    patterns: ["research & internships", "tell me about your research", "your research", "internship", "kfupm", "sdaia", "work experience"],
    response: "I served as an **AI Research Intern at KFUPM-SDAIA** (Summer 2025), focusing on LLM optimization using the DSPy framework. My research on 'Entity Sentiment Classification' was recently presented at the **Engitek '25 conference** and is awaiting publication on IEEE Xplore. I also serve as the **Tech Lead** for the AI Frontier Society at GIKI."
  },
  intro: {
    patterns: ["who are you", "introduce yourself", "tell me about yourself", "about you", "who is muhammad"],
    response: "Hi! I'm Muhammad Mehdi Raza, a **Software Engineering student** at GIKI with a **3.69 GPA**. I'm an AI Researcher and Full-Stack Developer passionate about LLM optimization and building scalable web systems like CrowdServe and SehatSathi.\n\nCurrently, I am actively seeking **Internships or Full-time roles** (Onsite in Saudi Arabia or Pakistan, as well as Remote anywhere) to apply my expertise in Web and AI! 🚀"
  },
  education: {
    patterns: ["education", "study", "university", "degree", "gpa", "academic", "giki", "school"],
    response: "I am a **3rd-year Software Engineering student** at GIKI, maintaining a **3.69 GPA**.\n\nI graduated my matriculation and intermediate from **PISK (Pakistan International School Al Khobar)**. In matric I achieved **99%** and secured **2nd position** in the entire school, and in intermediate I got **85%** with **3rd position** (FBISE Board).\n\nI have recently completed an **8-week internship at KFUPM** where I worked on LLM optimization and AI research.\n\nI am immediately open to internship or full-time opportunities where I can contribute to the growing AI ecosystem! 🎯"
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
    patterns: ["dsa", "data structures", "algorithms", "competitive", "coding"],
    response: "I have strong expertise in **Data Structures & Algorithms**:\n\n**🌲 Data Structures:**\n- **AVL Trees**: Implemented in Streamify\n- **Stacks**, Hash Tables, Linked Lists\n- Graph algorithms\n\n**⚡ Optimization:**\n- Algorithm efficiency (Big O)\n- Practical DSA in real projects\n\n**💻 Language:** Proficient in **C++** for DSA"
  },
  certifications: {
    patterns: ["certifications", "certificates", "coursera", "courses"],
    response: "My certifications:\n\n**🎓 AI & Machine Learning:**\n- Advanced Learning Algorithms (Coursera, 2025)\n- Introduction to Generative AI (Coursera, 2025)\n- AI Essentials (Coursera, 2026)\n\n**💻 Software Engineering:**\n- Design Patterns (Coursera, 2026)\n- Object Oriented Design\n\n**🔬 Research:**\n- KFUPM-SDAIA Research Program\n- JRCAI Training Certificate"
  },
  leadership: {
    patterns: ["leadership", "lead", "management", "team", "society", "neohacks"],
    response: "I'm actively involved in leadership:\n\n**🚀 Tech Lead - AI Frontier Society**\n*Sep 2025 - Present*\n- Leading GIKI's first AI society\n- **Organized NeoHacks**: 110+ students\n\n**🤝 Society Member - ASME GIKI**\n*Feb 2024 - Present*\n- Multi-disciplinary collaboration"
  },
  github: {
    patterns: ["github", "code", "repositories"],
    response: "Check out my work:\n\n🔗 **GitHub**: [github.com/MuhammadMehdiRaza](https://github.com/MuhammadMehdiRaza)\n\n**Featured:**\n- Streamify (C++ DSA)\n- CrowdServe (Spring Boot)\n- SehatSathi (React + Django)\n- Digit Recognition (TensorFlow)\n- Quiz Application (C++)"
  },
  linkedin: {
    patterns: ["linkedin", "connect", "network"],
    response: "Let's connect!\n\n🔗 **LinkedIn**: [Muhammad Mehdi Raza](https://www.linkedin.com/in/muhammad-mehdi-raza-a02496274/)\n\nFeel free to send a connection request! 🤝"
  },
  email: {
    patterns: ["email", "contact", "reach", "message"],
    response: "You can reach me at:\n\n📧 **Email**: muhammadmehdiraza351@gmail.com\n\nAlso available on:\n- 💼 LinkedIn\n- 💻 GitHub\n\nFeel free to reach out! 😊"
  },
  default: {
    response: "I'm not sure I understand that question. You can ask me about:\n\n• My skills and experience\n• My projects\n• Contact information (email, WhatsApp, social links)\n• My education and certifications\n• Or see suggested questions\n\nOr feel free to explore my portfolio! 🌟"
  }
};

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi! I'm Muhammad Mehdi Raza, an AI Researcher and Software Engineer currently pursuing B.Sc. Software Engineering at GIKI (Ghulam Ishaq Khan Institute). I have experience in LLM optimization and building full-stack applications. I'm passionate about AI, Deep Learning, and creating innovative solutions!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestMatch = (userInput: string): string => {
    const normalizedInput = userInput.toLowerCase().trim();
    
    for (const [key, value] of Object.entries(chatbotResponses)) {
      if (key === "default") continue;
      const entry = value as { patterns: string[]; response: string };
      if (entry.patterns && entry.patterns.some((pattern: string) => normalizedInput.includes(pattern))) {
        return entry.response;
      }
    }
    
    return chatbotResponses.default.response;
  };

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length,
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = findBestMatch(text);
      const botMessage: Message = {
        id: messages.length + 1,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleSuggestionClick = (prompt: string) => {
    handleSend(prompt);
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Handle bold text
      const boldFormatted = line.split('**').map((part, j) => 
        j % 2 === 1 ? <strong key={j} className="font-semibold text-blue-400">{part}</strong> : part
      );
      
      // Handle links
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const withLinks = boldFormatted.map((part, j) => {
        if (typeof part === 'string') {
          const matches = [...part.matchAll(linkRegex)];
          if (matches.length > 0) {
            const elements = [];
            let lastIndex = 0;
            matches.forEach((match, k) => {
              elements.push(part.substring(lastIndex, match.index));
              elements.push(
                <a
                  key={`link-${j}-${k}`}
                  href={match[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  {match[1]}
                </a>
              );
              lastIndex = (match.index || 0) + match[0].length;
            });
            elements.push(part.substring(lastIndex));
            return elements;
          }
        }
        return part;
      });
      
      return <div key={i} className="mb-1">{withLinks}</div>;
    });
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            {/* Chat Icon */}
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            </svg>
            {/* Green active indicator */}
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-black"></div>
          </div>
        </motion.button>
      )}

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[95vw] sm:w-[420px] h-[70vh] sm:h-[600px] max-h-[calc(100vh-120px)] bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">MM Assistant</h3>
                <p className="text-xs text-slate-400">Typically replies instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-2 flex-shrink-0 border border-slate-700">
                      <span className="text-xs font-bold text-white">MM</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-slate-800 text-white rounded-br-sm"
                        : "bg-slate-900 text-slate-100 border border-slate-800 rounded-bl-sm"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap leading-relaxed">{formatMessage(message.text)}</div>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center ml-2 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {showSuggestions && (
              <div className="px-4 py-3 border-t border-slate-800 bg-slate-900">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-400 font-medium">Suggested questions</p>
                  <button
                    onClick={() => setShowSuggestions(false)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {chatbotSuggestions.slice(0, 6).map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion.prompt)}
                      className="text-xs px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 hover:border-slate-600 flex items-center gap-1"
                    >
                      {suggestion.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {!showSuggestions && (
              <div className="px-4 py-2 border-t border-slate-800 bg-slate-900 flex justify-center">
                <button
                  onClick={() => setShowSuggestions(true)}
                  className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2 text-sm font-medium"
                  title="Show suggestions"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                  </svg>
                  <span>Suggestions</span>
                </button>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-slate-800 bg-slate-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 bg-slate-800 text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm border border-slate-700"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
