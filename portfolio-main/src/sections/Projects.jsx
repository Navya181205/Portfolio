import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Credit Card Fraud Detection System",
    description:
      "Engineered a hybrid fraud detection system using LightGBM and Isolation Forest, supported by an end-to-end Machine Learning pipeline with SMOTE+ENN, feature scaling, and anomaly detection to classify highly imbalanced financial transactions.",
    features: [
      "Evaluated model performance across multiple train-test splits using Accuracy, Precision, Recall, F1-Score, ROC-AUC, and Confusion Matrix, validating robustness against real-world fraud scenarios.",
      "Achieved 99.7% accuracy while maintaining an effective precision-recall balance for reliable fraud detection.",
    ],
    tech: [
      "Python",
      "LightGBM",
      "Isolation Forest",
      "SMOTE+ENN",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Google Colab",
    ],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Resume Chatbot",
    description:
      "Developed an LLM-powered Resume Assistant using LangGraph, Google Gemini API, and Streamlit to deliver ATS analysis, resume optimization, career guidance, and AI-powered resume rewriting.",
    features: [
      "Integrated Retrieval-Augmented Generation (RAG) with FAISS and HuggingFace Embeddings to enable semantic resume search, context-aware question answering, and job description matching.",
      "Implemented PDF upload, conversational memory, skill-gap analysis, ATS scoring, and downloadable AI-generated reports through a modular LLM and vector database architecture.",
    ],
    tech: [
      "Python",
      "Streamlit",
      "LangGraph",
      "LangChain",
      "Google Gemini API",
      "FAISS",
      "HuggingFace Embeddings",
      "RAG",
      "Scikit-learn",
    ],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Blood Donation and Emergency Locator",
    description:
      "Developed a full-stack blood donation platform using Node.js, Express.js, MongoDB, and Tailwind CSS with secure role-based authentication and RESTful APIs.",
    features: [
      "Implemented intelligent donor matching based on blood group and PIN code, integrating Socket.IO and Leaflet Maps for real-time blood request tracking and location-based coordination.",
      "Built secure admin workflows, middleware authorization, responsive dashboards, and CRUD operations to streamline donor management and improve emergency response efficiency.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "JavaScript",
      "Socket.IO",
      "Leaflet Maps",
      "REST APIs",
      "Render",
    ],
    link: "#",
    github: "https://github.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectCard({ project, variants }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={variants}
      onMouseMove={handleMouseMove}
      className="glass relative group rounded-2xl overflow-hidden hover:border-amber-500/20 transition-colors duration-500"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content - Aggressively reduced padding */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Action Buttons - Smaller */}
          <div className="flex items-center gap-3 shrink-0">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.1] text-white/50 hover:text-white transition-all duration-300"
                aria-label="Source Code"
              >
                <Github size={18} />
              </a>
            )}
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 font-semibold text-xs uppercase tracking-wide"
              >
                Live Demo
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-white/60 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features Grid - Tighter Spacing, smaller fonts */}
        <div className="space-y-3 mb-6">
          {project.features.map((feature, i) => (
            <div key={i} className="flex gap-3 items-start group/feature">
              <div className="mt-1 shrink-0">
                <ChevronRight
                  size={16}
                  className="text-amber-500/40 group-hover/feature:text-amber-500 transition-colors duration-300"
                />
              </div>
              <p className="text-white/50 group-hover/feature:text-white/70 transition-colors duration-300 leading-relaxed font-light text-sm">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full bg-black/40 border border-white/[0.05] text-xs font-medium text-white/40 group-hover:text-amber-400 group-hover:border-amber-400/20 transition-all duration-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="section-padding px-4 md:px-8 max-w-5xl mx-auto"
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
          Featured <span className="text-gradient">Projects.</span>
        </h2>
        <p className="text-white/50 text-lg font-light max-w-xl">
          Key Machine Learning pipelines, AI assistants, and full-stack applications I've engineered.
        </p>
      </motion.div>

      {/* Project cards container */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-6"
      >
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}
