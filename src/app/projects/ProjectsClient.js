"use client";

import styles from "./Projects.module.css";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    number: "01",
    title: "Shopee Fraud Detector",
    desc: "An AI-powered browser extension that evaluates Shopee store reliability in real-time using XGBoost classification and SHAP explainability, integrated with a containerized Python backend",
    tags: ["Python", "XGBoost", "SHAP", 'Docker', "Chrome Extension"],
    gradient: "gradient1",
    link: "https://chromewebstore.google.com/detail/mjomfkbmbkfhdchhndefacelbmacdhco?utm_source=item-share-cb",
  },
  {
    number: "02",
    title: "Dashboard Analytics",
    desc: "Interactive data visualization dashboard with real-time analytics, charts, and customizable widgets.",
    tags: ["React", "TypeScript", "D3.js", "Firebase"],
    gradient: "gradient2",
    link: "#",
  },
  {
    number: "03",
    title: "Creative Portfolio",
    desc: "An immersive portfolio website with 3D animations, smooth transitions, and interactive elements.",
    tags: ["Next.js", "Three.js", "GSAP", "Figma"],
    gradient: "gradient3",
    link: "#",
  },
];

export default function ProjectsClient() {
  return (
    <div className={styles.projectsPage}>
      {/* Page title */}
      <div className={styles.pageTitle}>projects</div>

      {/* Project cards */}
      <div className={styles.cardsContainer}>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.number}
            className={`${styles.projectCard} ${styles[project.gradient]}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Scalloped bottom */}
            <svg className={styles.scallop} viewBox="0 0 400 60" preserveAspectRatio="none" style={{ height: "60px" }}>
              <path
                d="M0 60 L0 30 Q25 0 50 30 Q75 60 100 30 Q125 0 150 30 Q175 60 200 30 Q225 0 250 30 Q275 60 300 30 Q325 0 350 30 Q375 60 400 30 L400 60 Z"
                fill="rgba(0,0,0,0.25)"
              />
            </svg>

            {/* Card content */}
            <div className={styles.cardContent}>
              <div className={styles.cardNumber}>{project.number}</div>

              <div className={styles.cardDetails}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Project
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
