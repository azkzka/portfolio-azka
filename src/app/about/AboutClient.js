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
    title: "Ministry of Defence of the Republic of Indonesia",
    subtitle: "Center of Data and Information internship",
    bullets: [
      "Architected 'Mentari', a secure AI Orchestration system integrating Local LLMs with MCP Server, effectively automating complex administrative workflows via natural language prompts to drive a massive 45% surge in office operational efficiency",
      "Engineered an end-to-end Twitter Sentiment Analysis pipeline leveraging NLP algorithms, transforming unstructured social media data into actionable strategic insight for real-time trend monitoring and decision-making efficiency.",
      "Spearheaded and mentored a Data Team of 4 interns through the full project lifecycle, implementing strategic performance frameworks that accelerated talent growth and maximized KPI achievements across multiple high-impact initiatives."
    ]
  },
  {
    year: "Jan 2025 - Aug 2025",
    title: "KELAS BAGUS : Machine Learning & Python Practically",
    subtitle: "Mentee AI Innovator",
    bullets: [
      "Successfully led a team with four members to win 1st place in a hackathon with the project Sentiment Analysis for SDGs, applying machine learning for real-world impact.",
      "Mastered the end-to-end data science workflow (Business Understanding → Data Preparation → Modeling → Deployment) for impactful project delivery.",
      "Built and applied diverse machine learning models from Logistic Regression to deep learning (CNNs), bridging theory with hands-on practice."
    ]
  },
  {
    year: "Aug 2024 - Dec 2024",
    title: "STARTUP CAMPUS : Artificial Intelligence",
    subtitle: "Mentee AI Innovator",
    bullets: [
      "Successfully led a team to develop an AI-driven solution, including NutriLabel, an OCR-based nutritional labeling system enhancing food safety, which won 1st place in Startup Campus Hackathon Competition.",
      "Skilled in deploying advanced Computer Vision (YOLOv5) and NLP models (BERT) for impactful, industry-relevant applications.",
      "Developed robust supervised and unsupervised learning models, including classification, regression, and clustering that enhanced data-driven insights and predictive accuracy across complex datasets."
    ]
  }
];

const LEADERSHIP_EXPERIENCE = [
  {
    year: "Oct 2023 - Dec 2024",
    title: "NOVOCLUB BY PT PARAGON",
    subtitle: "Content Creator and Content Analyst",
    bullets: [
      "Receive specialized training from Paragon over 4 weeks to become a true leader.",
      "Successfully contributed to increasing participation 400%, from 35.000 to 178.000 attendees.",
      "Executed 15 various events as content creator with cumulative 30 - 6000",
      "Successfully completed a final project and attended 8 NovoClub Bootcamps, including sessions on Design Thinking, Time Management, SCAMPER Creating Innovation, Self Leadership, and Learning Work Culture at PT Paragon."
    ]
  },
  {
    year: "Mei 2024 - Aug 2024",
    title: "INDORELAWAN",
    subtitle: "Facilitator",
    bullets: [
      "Selected as a Top Facilitator, recognized for delivering impactful learning experiences",
      "Selected as lead facilitator, managing 4 community groups of total 60 members across different regions in Indonesia.",
      "Successfully coordinated the collection and distribution of over 7,000 books to underserved communities.",
      "Developed strong facilitation and mentoring skills through hands-on experience and training."
    ]
  }
];

const PROJECT_EXPERIENCE = [
  {
    year: "2025",
    title: "Mentari - AI Orchestration with MCP server",
    bullets: [
      "A privacy-focused AI agent integrating local LLMs with MCP protocols to execute diverse administrative task as word, excel, and power point via a unified prompt interface"
    ]
  },
  {
    year: "2024",
    title: "NutriLabel - AI Powered Nutrition Analysis",
    subtitle: "Demo",
    bullets: [
      "Secured 1st Place in sustainable AI showcase by developing a nutritional analyzer that leverages Paddle OCR and Singapore's grading algorithms for accurate health assessments"
    ]
  },
  {
    year: "2024",
    title: "Green Trust - SDGs Sentiment Analysis",
    subtitle: "Demo",
    bullets: [
      "Engineered an AI-driven sentiment analysis system on X to decode public discourse, empowering companies to align their CSR initiatives with real-time societal values and maximize community impact"
    ]
  }
];

const SKILLS = [
  {
    title: "Computer Skills",
    desc: "Python, Machine Learning, Deep Learning, Excel, Excel Macros, PowerBI, Computer Vision, NLP."
  },
  {
    title: "Soft Skills",
    desc: "Professional Communication, Public Speaking, Emotional Intelligence, Interpersonal Communication, Empathy."
  },
  {
    title: "Language",
    desc: "Indonesia, English"
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
              I combine strong analytical rigor and software engineering principles to deliver scalable end-to-end technology solutions.
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

          <h2 className={styles.experienceTitle} style={{ marginTop: '20px' }}>Leadership Experiences</h2>
          <div className={styles.timeline}>
            {LEADERSHIP_EXPERIENCE.map((item, i) => (
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
