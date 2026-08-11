import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Trophy,
  CheckCircle2,
  Calendar,
} from "lucide-react";

const certifications = [
  {
    title: "Digital Productivity with AI",
    issuer: "Passport to Earning (YuWaah–UNICEF)",
    score: "Score: 100%",
  },
  {
    title: "Machine Learning for Beginners",
    issuer: "Coursera / Online",
  },
  {
    title: "AI Agents",
    issuer: "Udemy",
  },
  {
    title: "Java In-Depth",
    issuer: "Infosys Springboard",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "OutSkill",
  },
];

const achievements = [
  "1st Place – Ideathon 2026 for AI-based human verification system.",
  "Conducted Tableau workshop on dashboards and analytics.",
  "Protatva 2025 for Farm2Market direct market access for Farmers.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Accomplishments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="writing"
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
          Education & <span className="text-gradient">Accomplishments.</span>
        </h2>
        <p className="text-white/50 text-lg font-light max-w-xl">
          Academic background, research publications, certifications, and honors.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Education Card */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 md:p-8 hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-white">
                Education
              </h3>
              <p className="text-white/40 text-xs font-mono">2023 — Present</p>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <h4 className="text-lg font-semibold text-white">
              RV Institute of Technology and Management, Bengaluru
            </h4>
            <p className="text-amber-400 text-sm font-medium">
              Bachelor of Engineering in Information Science and Engineering
            </p>
            <div className="inline-block px-3 py-1 mt-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              CGPA: 8.68
            </div>
          </div>
        </motion.div>

        {/* Research Publication Card */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 md:p-8 hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
              <BookOpen size={22} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-white">
                Research Publication
              </h3>
              <p className="text-white/40 text-xs font-mono">2026</p>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <h4 className="text-lg font-semibold text-white">
              AI in Early Detection of Heart Disease
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Published research in <span className="text-white font-medium">HBRP Journal</span> on explainable AI models for ECG diagnosis.
            </p>
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 md:p-8 hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
              <Award size={22} />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">
              Certifications
            </h3>
          </div>
          <ul className="space-y-3 mt-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm font-medium leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-white/40 text-xs">
                    {cert.issuer} {cert.score && <span className="text-emerald-400 font-semibold">• {cert.score}</span>}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Achievements Card */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 md:p-8 hover:border-amber-500/20 transition-colors duration-500 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
              <Trophy size={22} />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">
              Key Achievements
            </h3>
          </div>
          <ul className="space-y-3 mt-4">
            {achievements.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <Trophy size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
