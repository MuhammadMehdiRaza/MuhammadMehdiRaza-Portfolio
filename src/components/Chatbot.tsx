"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Chatbot suggestions
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
  { id: "linkedin", label: "Do you have a LinkedIn?", prompt: "Do you have a LinkedIn profile?" },
  { id: "email", label: "How can I contact you?", prompt: "How can I contact you?" },
];

// Chatbot responses with pattern matching
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
    response: "My professional journey includes:\n\n🔬 **AI Research Intern** @ **KFUPM-SDAIA Joint Research Center**\n📅 *June 14 - Aug 7, 2025*\n- Optimized LLMs (Qwen, Phi-mini, Meta Allam) using **DSPy framework**\n- Implemented structured prompting for model fine-tuning\n\n🚀 **Tech Lead** @ **AI Frontier Society (GIKI)**\n📅 *Sep 2025 - Present*\n- Leading GIKI's first AI society technical division\n- Managed NeoHacks GIKI Edition (110+ students)\n\n🤝 **Society Member** @ **ASME GIKI**\n📅 *Feb 2024 - Present*"
  },
  skills: {
    patterns: ["skills", "tech stack", "languages", "programming", "technologies", "tools"],
    response: "My technical expertise spans:\n\n**🤖 AI/ML:**\n- NLP & Deep Learning (TensorFlow, Keras)\n- LLM Optimization & Fine-tuning\n- DSPy Framework\n\n**💻 Programming Languages:**\n- **C++**: Advanced DSA, OOP\n- **Python**: AI/ML, Backend\n- **Java**: Spring Boot, REST APIs\n- **JavaScript/TypeScript**: React.js, Next.js\n\n**🏗️ Architecture:**\n- MVC, Microservices, RESTful APIs\n- Full-Stack Development"
  },
  projects: {
    patterns: ["projects", "built", "samples", "work", "portfolio"],
    response: "Here are my key projects:\n\n**1. 🎵 Streamify** (C++ | DSA)\n- AVL Trees & Stacks implementation\n\n**2. 🌐 CrowdServe** (Java | Spring Boot)\n- Full-stack with MVC Architecture\n\n**3. 🏥 SehatSathi** (React.js | Django)\n- Healthcare platform\n\n**4. 🔢 Digit Recognition** (Python | TensorFlow)\n- CNN with **90.87% accuracy**\n\n**5. 📝 Quiz Application** (C++ | OOP)\n\n🎥 **All projects have video demos on my portfolio!**"
  },
  ai: {
    patterns: ["ai", "llm", "machine learning", "dspy", "generative ai", "ml"],
    response: "I specialize in **Generative AI** and **LLM optimization**:\n\n🧠 **LLM Research @ KFUPM-SDAIA:**\n- Optimized **Qwen**, **Phi-mini**, and **Meta Allam**\n- Implemented **DSPy framework**\n\n🎯 **Deep Learning:**\n- Built **CNN** (90.87% accuracy on MNIST)\n- Experience with **TensorFlow** and **Keras**\n\n📚 **AI Certifications:** Advanced Learning Algorithms, Generative AI"
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
    response: "That's interesting! Let me share what I can help with:\n\n- 🎓 My **3.69 GPA** at GIKI\n- 🔬 **KFUPM-SDAIA internship** on LLM optimization\n- 💻 **Projects**: Streamify, CrowdServe, SehatSathi\n- 🤖 **AI skills**: Deep Learning, NLP, DSPy\n- 🚀 **Tech Lead** at AI Frontier Society\n\nFeel free to ask about any of these! 🌟"
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
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-slate-900 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-200 border-2 border-slate-700 hover:border-blue-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            {/* AI Sparkle Icon */}
            <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            {/* Green active indicator */}
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
          </div>
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[420px] h-[650px] bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
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
            <div className="px-4 py-3 border-t border-slate-800 bg-slate-900">
              <p className="text-xs text-slate-400 mb-2 font-medium">Suggested questions</p>
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
