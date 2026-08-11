import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  GraduationCap,
  Code2,
  Sparkles,
  Globe,
  Brain,
  Cpu,
  Database,
  Wrench,
} from "lucide-react";
import reactIcon from "../assets/reactjs.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import nodejsIcon from "../assets/nodejs.svg";
import expressIcon from "../assets/express.svg";
import mongodbIcon from "../assets/mongodb.svg";

const techGroups = [
  {
    label: "Languages & Core",
    accent: "amber",
    items: [
      { name: "Python" },
      { name: "Java" },
      { name: "C / C++" },
      { name: "SQL" },
      { name: "Data Structures & Algorithms" },
    ],
  },
  {
    label: "AI / ML & LLMs",
    accent: "sky",
    items: [
      { name: "Machine Learning" },
      { name: "LightGBM" },
      { name: "Isolation Forest" },
      { name: "Scikit-learn" },
      { name: "RAG & LLMs" },
      { name: "LangChain" },
      { name: "FAISS" },
      { name: "Hugging Face" },
    ],
  },
  {
    label: "Web & Backend",
    accent: "emerald",
    items: [
      { name: "HTML5 / CSS3" },
      { name: "JavaScript" },
      { name: "Node.js", icon: nodejsIcon },
      { name: "Express.js", icon: expressIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "REST APIs" },
      { name: "Socket.IO" },
      { name: "Gemini API" },
    ],
  },
  {
    label: "Tools & Analytics",
    accent: "violet",
    items: [
      { name: "Pandas & NumPy" },
      { name: "Matplotlib & Seaborn" },
      { name: "Streamlit" },
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Git & GitHub" },
      { name: "VS Code" },
    ],
  },
];

const accentStyles = {
  amber: {
    dot: "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.6)]",
    text: "text-amber-300",
    pill: "bg-amber-500/10 border-amber-500/20 text-amber-300",
    glow: "from-amber-500/[0.07]",
    chipHover: "hover:border-amber-400/30 hover:bg-amber-500/[0.04]",
  },
  sky: {
    dot: "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]",
    text: "text-sky-300",
    pill: "bg-sky-500/10 border-sky-500/20 text-sky-300",
    glow: "from-sky-500/[0.07]",
    chipHover: "hover:border-sky-400/30 hover:bg-sky-500/[0.04]",
  },
  emerald: {
    dot: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]",
    text: "text-emerald-300",
    pill: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    glow: "from-emerald-500/[0.07]",
    chipHover: "hover:border-emerald-400/30 hover:bg-emerald-500/[0.04]",
  },
  violet: {
    dot: "bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.6)]",
    text: "text-violet-300",
    pill: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    glow: "from-violet-500/[0.07]",
    chipHover: "hover:border-violet-400/30 hover:bg-violet-500/[0.04]",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding px-4 md:px-8 max-w-6xl mx-auto"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-3">
          About<span className="text-gradient">.</span>
        </h2>
        <p className="text-white/50 text-lg font-light max-w-xl">
          A bit about who I am and what I work with.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]"
      >
        {/* Bio Card — spans 2 cols */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-8 md:col-span-2 group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-amber-400" />
              <span className="text-sm font-medium text-amber-400/80 uppercase tracking-wider">
                Journey
              </span>
            </div>
            <p className="text-white/80 text-lg leading-relaxed font-light">
              Motivated <span className="text-white font-medium">Computer Science student</span> at{" "}
              <span className="text-amber-400 font-medium">RV Institute of Technology and Management, Bengaluru</span>,
              building machine learning solutions, AI assistants, and full-stack web platforms.
            </p>
            <p className="text-white/60 text-base leading-relaxed font-light mt-4">
              Passionate about applying core computer science fundamentals—Data Structures & Algorithms, Operating Systems,
              and Computer Networks—to solve real-world problems. Experienced in ML algorithms, RAG with FAISS/LLMs, and building responsive web apps with Node.js & MongoDB.
            </p>
          </div>
        </motion.div>

        {/* CGPA Card */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-8 flex flex-col items-center justify-center group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden text-center"
        >
          <GraduationCap className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:text-amber-500/10 transition-colors duration-500 -rotate-12" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 text-center">
            <GraduationCap size={24} className="text-amber-400 mx-auto mb-3" />
            <div className="text-4xl md:text-5xl font-heading font-extrabold text-gradient mb-2">
              8.68
            </div>
            <p className="text-white/70 font-medium text-sm">CGPA</p>
            <p className="text-white/40 text-xs mt-1">B.E. Information Science & Engineering</p>
          </div>
        </motion.div>

        {/* Tech Stack Card — spans 2 cols */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-8 md:col-span-2 group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={18} className="text-amber-400" />
              <span className="text-sm font-medium text-amber-400/80 uppercase tracking-wider">
                Technical Skills
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techGroups.map((group) => {
                const a = accentStyles[group.accent];
                return (
                  <div
                    key={group.label}
                    className="relative rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 overflow-hidden"
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.glow} to-transparent opacity-60`}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border ${a.pill}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${a.dot}`}
                          />
                          <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                            {group.label}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-white/30">
                          {String(group.items.length).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((tech) => (
                          <motion.div
                            key={tech.name}
                            whileHover={{ y: -1 }}
                            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/30 border border-white/[0.06] ${a.chipHover} transition-colors duration-300 cursor-default`}
                          >
                            {tech.icon && (
                              <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                                <img
                                  src={tech.icon}
                                  alt={tech.name}
                                  className="w-full h-full object-contain"
                                />
                              </span>
                            )}
                            <span className="text-xs text-white/75 font-medium">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-8 flex flex-col items-center justify-center group hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden"
        >
          <Globe className="absolute -right-6 -bottom-6 w-36 h-36 text-white/5 group-hover:text-emerald-500/10 transition-colors duration-500 rotate-12" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 text-center">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <MapPin size={24} className="text-amber-400 mx-auto mb-3" />
            </motion.div>
            <p className="text-white font-medium text-lg">Bengaluru, India</p>
            <p className="text-white/40 text-sm mt-1">
              Available for Remote & On-site Roles
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
