"use client";

import Image from "next/image";
import styles from "./About.module.css";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    year: "Sep 2022 - Present",
    title: "UNIVERSITY OF KRISNADWIPAYANA",
    subtitle: "Informatics Engineering",
    desc: "Current GPA : 3.82 / 4.00",
  },
];

const WORKING_EXPERIENCE = [
  {
    year: "Oct 2025 - Dec 2025",
    title: "PT Sokka Tama Fiber (Persada Group)",
    subtitle: "IT Programmer Internship",
    bullets: [
      "Architected and developed 'Insys', a scalable web-based correspondence management system utilizing Django Framework and PostgreSQL to streamline complex administrative workflows across multi-company scaling within Persada Group.",
      "Engineered robust Role-Based Access Control (RBAC) across 3 hierarchical tiers (Admin, Staff, Approver) and integrated ReCAPTCHA v3 risk-scoring architecture, significantly reducing automated threat risks and enhancing corporate data security.",
      "Spearheaded an automated approval workflow and a searchable digital archiving module with real-time tracking, eliminating manual company-selection bottlenecks and improving inter-departmental document retrieval speed."
    ]
  },
  {
    year: "Feb 2025 - Jul 2025",
    title: "DBS Foundation Coding Camp",
    subtitle: "Machine Learning Cohort & Capstone Innovator",
    bullets: [
      "Successfully co-developed 'LuminousSkin', an AI-powered diagnostic web platform designed to provide early skin disease detection and educational healthcare access for underserved (3T) regions in Indonesia, aligning with SDGs 3.3.",
      "Mastered and applied deep learning workflow by implementing a Convolutional Neural Network (CNN) leveraging MobileNetV2 transfer learning; rigorously evaluated model performance using Precision, Recall, F1-Score, and ROC-AUC metrics.",
      "Deployed real-time machine learning pipeline integrated seamlessly into the backend via FastAPI, enabling instantaneous image classification, educational output, and pharmacy mapping for end-users."
    ]
  }
];

const ORGANIZATION_EXPERIENCE = [
  {
    year: "Aug 2024 - Aug 2025",
    title: "Himpunan Mahasiswa Teknik Informatika (HIMATIF) UNKRIS",
    subtitle: "Coordinator of Infokom",
    bullets: [
      "Promoted to Division Coordinator after actively contributing as a media division member since Semester 2; spearheaded organizational publication strategies, digital branding, and communication workflows for the informatics student body.",
      "Successfully managed and mentored division members in producing technical documentation, broadcast bulletins, and digital content, fostering a collaborative and structured media team during peak organizational periods."
    ]
  },
  {
    year: "Aug 2024 - Aug 2025",
    title: "UKM Bulutangkis UNKRIS",
    subtitle: "President (Ketua UKM)",
    bullets: [
      "Demonstrated executive leadership by overseeing university-wide athletic operations, managing organizational budgets, coordinating training programs, and leading member development initiatives.",
      "Cultivated strong interpersonal communication, time management, and adaptability skills while balancing intensive academic engineering coursework and technical bootcamps with organizational leadership responsibilities."
    ]
  }
];

const PROJECT_EXPERIENCE = [
  {
    year: "2026",
    title: "Shopee Fraud Detector",
    subtitle: "Live Chrome Extension",
    bullets: [
      "Engineered and deployed a functional browser extension available on the Google Chrome Web Store, designed to analyze real-time transaction patterns and identify potential e-commerce fraud."
    ]
  },
  {
    year: "2025",
    title: "Insys",
    subtitle: "Multi-Company Correspondence Management System",
    bullets: [
      "Developed an enterprise-grade web application utilizing Django and PostgreSQL, featuring automated approval workflows, RBAC, and secure digital archiving for Persada Group."
    ]
  },
  {
    year: "2025",
    title: "LuminousSkin",
    subtitle: "AI-Powered Skin Disease Diagnostic Demo",
    bullets: [
      "Built an AI-driven web platform combining MobileNetV2, FastAPI, and React to decode skin disease symptoms in remote areas, empowering communities with accessible medical guidance and supporting SDGs 3.3."
    ]
  }
];

const SKILLS = [
  {
    title: "Computer Skills",
    desc: "Python, Django, Machine Learning, Deep Learning (CNNs), PostgreSQL, MySQL, FastAPI, HTML, CSS, JavaScript, Bootstrap, PowerBI, Git."
  },
  {
    title: "Soft Skills",
    desc: "Professional Communication, Team Leadership, Analytical Problem Solving, Time Management, Adaptability, Public Speaking."
  },
  {
    title: "Language",
    desc: "Indonesia, English."
  }
];

export default function AboutClient() {
  return (
    <div className={styles.aboutPage}>
      {/* Page title */}
      <div className={styles.pageTitle}>about</div>

      {/* Big name */}
      <div className={styles.bigNameSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className={styles.bigName}>
            AZKA<br />FAHSYA
          </h1>
        </motion.div>
      </div>

      {/* Content — dark card + photo */}
      <div className={styles.contentSection}>
        <motion.div
          className={styles.darkCard}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className={styles.darkCardTitle}>About Me</h2>
            <p className={styles.darkCardText}>
              As a recent Informatics Engineering graduate from Krisnadwipayana University,
              I specialize in the combination of
              Machine Learning and Web Development. I am skilled in building intelligent solutions and implementing ML models
              into scalable web applications. I have extensive experience in intensive technical training through Bootcamps,
              implementing award winning projects, and being active in various organizations.
              I combine strong analytical rigor and software engineering principles to deliver scalable end to end technology solutions.
            </p>
          </div>
          <div className={styles.signature}>Azka Fahsya</div>
        </motion.div>

        <motion.div
          className={styles.photoCard}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.photoWrapper}>
            <Image
              src="/Utuh.png"
              alt="Azka Fahsya"
              width={500}
              height={500}
              className={styles.aboutImage}
              unoptimized
            />
          </div>
          <span className={styles.badge}>DEVELOPER</span>
        </motion.div>
      </div>

      {/* Education, Skills, and Experience */}
      <div className={styles.experienceSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.twoColumnGrid}>
            <div>
              <h2 className={styles.experienceTitle}>Education</h2>
              <div className={styles.timeline}>
                {EDUCATION.map((item, i) => (
                  <div key={i} className={styles.timelineItem} style={{ gridTemplateColumns: '1fr', gap: '8px' }}>
                    <div className={styles.timelineYear}>{item.year}</div>
                    <div className={styles.timelineContent}>
                      <h4>{item.title}</h4>
                      {item.subtitle && <h5 className={styles.timelineSubtitle}>{item.subtitle}</h5>}
                      {item.desc && <p className={styles.timelineDesc}>{item.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={styles.experienceTitle}>Skills</h2>
              <div className={styles.timeline}>
                {SKILLS.map((item, i) => (
                  <div key={i} className={styles.timelineItem} style={{ gridTemplateColumns: '1fr', gap: '8px' }}>
                    <div className={styles.timelineYear}>{item.title}</div>
                    <div className={styles.timelineContent}>
                      <p className={styles.timelineDesc} style={{ margin: 0, fontWeight: 500 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className={styles.experienceTitle} style={{ marginTop: '20px' }}>Working Experiences</h2>
          <div className={styles.timeline}>
            {WORKING_EXPERIENCE.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h4>{item.title}</h4>
                  {item.subtitle && <h5 className={styles.timelineSubtitle}>{item.subtitle}</h5>}
                  {item.bullets && (
                    <ul className={styles.timelineBullets}>
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className={styles.experienceTitle} style={{ marginTop: '20px' }}>Organization Experiences</h2>
          <div className={styles.timeline}>
            {ORGANIZATION_EXPERIENCE.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h4>{item.title}</h4>
                  {item.subtitle && <h5 className={styles.timelineSubtitle}>{item.subtitle}</h5>}
                  {item.bullets && (
                    <ul className={styles.timelineBullets}>
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className={styles.experienceTitle} style={{ marginTop: '20px' }}>Projects</h2>
          <div className={styles.timeline}>
            {PROJECT_EXPERIENCE.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h4>{item.title}</h4>
                  {item.subtitle && <h5 className={styles.timelineSubtitle}>{item.subtitle}</h5>}
                  {item.bullets && (
                    <ul className={styles.timelineBullets}>
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
