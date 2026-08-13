import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Bot,
  Download,
} from "lucide-react";
import { PORTFOLIO_INFO } from "../../constants/portfolio";

const QUICK_ACTIONS = [
  "About Me",
  "Skills",
  "Projects",
  "Experience",
  "Resume",
  "Contact",
];

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text: "Hi! 👋 I'm Neha's portfolio assistant. I can help you explore her skills, projects, experience, education, and achievements. What would you like to know?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateAnswer = (query) => {
    const q = query.toLowerCase();

    if (q.includes("about") || q.includes("who") || q.includes("bio") || q.includes("journey") || q.includes("background")) {
      return (
        <span>
          <strong>SS Navya</strong> is a Computer Science student at <strong>RV Institute of Technology and Management, Bengaluru</strong> (CGPA: 8.68).
          <br /><br />
          She specializes in <strong>Machine Learning</strong> and <strong>Full-Stack Web Development</strong>, applying core CS fundamentals like Data Structures & Algorithms, Operating Systems, and Computer Networks to solve real-world challenges.
        </span>
      );
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("language") || q.includes("stack") || q.includes("python") || q.includes("java")) {
      return (
        <span>
          <strong>Navya's Technical Stack:</strong>
          <br /><br />
          • <strong>Languages:</strong> Python, Java, C/C++, SQL
          <br />
          • <strong>AI/ML & LLMs:</strong> Machine Learning, LightGBM, Isolation Forest, Scikit-learn, RAG, LLMs, LangChain, FAISS, Hugging Face, Gemini API
          <br />
          • <strong>Web & Backend:</strong> HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS, REST APIs, Socket.IO
          <br />
          • <strong>Tools & Analytics:</strong> Pandas, NumPy, Matplotlib, Seaborn, Streamlit, Tableau, Power BI, Git, GitHub, VS Code
        </span>
      );
    }

    if (q.includes("project") || q.includes("work") || q.includes("fraud") || q.includes("chatbot") || q.includes("blood")) {
      return (
        <span>
          <strong>Featured Projects by Navya:</strong>
          <br /><br />
          1. <strong>Credit Card Fraud Detection System (AI/ML):</strong> Hybrid model using LightGBM & Isolation Forest with SMOTE+ENN, achieving 99.7% accuracy.
          <br /><br />
          2. <strong>Resume Chatbot (AI/ML):</strong> LLM-powered assistant built with LangGraph, Gemini API, RAG, FAISS & Streamlit for ATS analysis and resume rewriting.
          <br /><br />
          3. <strong>Blood Donation Locator (Web & Full Stack):</strong> Real-time blood emergency platform with Node.js, Express, MongoDB, Socket.IO & Leaflet Maps.
        </span>
      );
    }

    if (q.includes("exp") || q.includes("intern") || q.includes("job") || q.includes("work") || q.includes("flyrank")) {
      return (
        <span>
          <strong>Current Internship:</strong>
          <br /><br />
          • <strong>Machine Learning Intern @ FlyRank</strong> (July 2026 — Present | Remote)
          <br />
          Developing and deploying predictive ML solutions using Python, implementing data preprocessing, feature engineering, model training, and performance evaluation.
        </span>
      );
    }

    if (q.includes("edu") || q.includes("college") || q.includes("degree") || q.includes("cgpa") || q.includes("rv")) {
      return (
        <span>
          <strong>Education Details:</strong>
          <br /><br />
          • <strong>Degree:</strong> B.E. in Information Science and Engineering
          <br />
          • <strong>Institution:</strong> RV Institute of Technology and Management, Bengaluru
          <br />
          • <strong>Duration:</strong> 2023 — Present
          <br />
          • <strong>CGPA:</strong> 8.68
        </span>
      );
    }

    if (q.includes("cert") || q.includes("course") || q.includes("udemy") || q.includes("infosys")) {
      return (
        <span>
          <strong>Certifications:</strong>
          <br /><br />
          1. Digital Productivity with AI — YuWaah–UNICEF (Score: 100%)
          <br />
          2. Machine Learning for Beginners — Coursera
          <br />
          3. AI Agents — Udemy
          <br />
          4. Java In-Depth — Infosys Springboard
          <br />
          5. Generative AI Mastermind — OutSkill
        </span>
      );
    }

    if (q.includes("achiev") || q.includes("award") || q.includes("ideathon") || q.includes("honor") || q.includes("workshop")) {
      return (
        <span>
          <strong>Key Achievements:</strong>
          <br /><br />
          🏆 <strong>1st Place</strong> — Ideathon 2026 for AI-based human verification system.
          <br />
          📊 <strong>Tableau Workshop</strong> — Conducted hands-on session on dashboards and analytics.
          <br />
          🌱 <strong>Protatva 2025</strong> — Farm2Market direct market access for farmers.
        </span>
      );
    }

    if (q.includes("pub") || q.includes("paper") || q.includes("research") || q.includes("heart") || q.includes("hbrp")) {
      return (
        <span>
          <strong>Research Publication (2026):</strong>
          <br /><br />
          📄 <em>"AI in Early Detection of Heart Disease"</em>
          <br />
          Published in <strong>HBRP Journal</strong> on explainable AI models for ECG diagnosis.
        </span>
      );
    }

    if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
      return (
        <span>
          📄 You can directly download Navya's resume PDF right here:
          <br /><br />
          <a
            href={PORTFOLIO_INFO.resumeDownload}
            download="SS NAVYA_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold text-xs shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-cyan-400 transition-colors"
          >
            <Download size={14} />
            Download SS NAVYA_Resume.pdf
          </a>
        </span>
      );
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("github") || q.includes("linkedin")) {
      return (
        <span>
          <strong>Contact & Social Profiles:</strong>
          <br /><br />
          📧 <strong>Email:</strong> {PORTFOLIO_INFO.email}
          <br />
          📞 <strong>Phone:</strong> {PORTFOLIO_INFO.phone}
          <br />
          📍 <strong>Location:</strong> Bengaluru, India
          <br /><br />
          🔗 <a href={PORTFOLIO_INFO.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-medium">GitHub Profile</a>
          <br />
          🔗 <a href={PORTFOLIO_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-medium">LinkedIn Profile</a>
        </span>
      );
    }

    // Default response if info is unavailable
    return (
      <span>
        I'm sorry, but that specific information is not currently available in Navya's portfolio.
        <br /><br />
        Feel free to reach out to her directly at <strong>{PORTFOLIO_INFO.email}</strong> or on <a href={PORTFOLIO_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-medium">LinkedIn</a>!
      </span>
    );
  };

  const handleSend = (textToSend) => {
    const userText = textToSend || input;
    if (!userText.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const replyText = generateAnswer(userText);
      const botMessage = {
        id: Date.now() + 1,
        sender: "assistant",
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer flex items-center justify-center"
        aria-label="Toggle Portfolio Assistant"
      >
        <span className="relative">
          {isOpen ? (
            <X size={24} className="text-black font-bold" />
          ) : (
            <div className="relative">
              <Bot size={24} className="text-black" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black animate-pulse" />
            </div>
          )}
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-3 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-96 sm:h-[560px] z-50 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-white/[0.03] border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 p-0.5 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[10px] flex items-center justify-center">
                    <Bot size={18} className="text-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-white text-sm">
                      Portfolio Assistant
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
                  </div>
                  <p className="text-white/40 text-[11px]">
                    Online • Ask about Navya's work
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-none">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-medium rounded-tr-xs shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                        : "bg-white/[0.06] border border-white/10 text-white/90 rounded-tl-xs"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-white/30 mt-1 px-1 font-mono">
                    {msg.time}
                  </span>
                </motion.div>
              ))}

              {/* Quick Actions (only show at top or after greeting) */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-2"
                >
                  <p className="text-xs text-white/40 mb-2 font-medium">Quick suggestions:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action}
                        onClick={() => handleSend(action)}
                        className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 text-xs font-medium transition-all duration-300 cursor-pointer"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/[0.06] border border-white/10 w-20 text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-black/50 border-t border-white/10 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills, experience..."
                className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs md:text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/60 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold disabled:opacity-40 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
