"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

const TYPEWRITER_WORDS = [
  "WEB DEVELOPER",
  "ML ENGINEER",
  "DATA ANALYST",
  "AI PROMPTER",
  "UI/UX DESIGNER",
];

const MARQUEE_ITEMS = [
  "WEB DEVELOPER",
  "ML ENGINEER",
  "DATA ANALYST",
  "AI PROMPTER",
  "UI/UX DESIGNER",
];

export default function HomePage() {
  const canvasRef = useRef(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Canvas grid effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 40;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;

          if (dist < maxDist) {
            const factor = 1 - dist / maxDist;
            const size = 1 + factor * 3;
            const alpha = 0.08 + factor * 0.25;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(244, 74, 34, ${alpha})`;
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(22, 22, 22, 0.08)";
            ctx.fill();
          }
        }
      }

      // Draw grid lines
      ctx.strokeStyle = "rgba(22, 22, 22, 0.04)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * spacing, 0);
        ctx.lineTo(i * spacing, canvas.height);
        ctx.stroke();
      }
      for (let j = 0; j < rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * spacing);
        ctx.lineTo(canvas.width, j * spacing);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setTypewriterText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypewriterText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const marqueeContent = MARQUEE_ITEMS.map((item, i) => (
    <span key={i} className={styles.marqueeGroup}>
      <span>{item}</span>
      <span className={styles.marqueeDot}>✦</span>
    </span>
  ));

  return (
    <main style={{ position: "relative", minHeight: "100vh", background: "var(--color-surface-raised)" }}>
      <section className={styles.heroSection}>
        {/* Interactive canvas background */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Top bar — logo & info */}
        <div className={styles.topBar}>
          {/* Logo */}
          <motion.div
            className={styles.logo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.logoInner}>
              <svg className={styles.logoIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L15.3 8.7L24 12L15.3 15.3L12 24L8.7 15.3L0 12L8.7 8.7Z" />
              </svg>
              <span className={styles.logoText}>PORTOFOLIO</span>
            </div>
          </motion.div>

          {/* Right info (desktop) */}
          <motion.div
            className={styles.rightPanel}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.7 } }
            }}
          >
            <motion.div
              className={styles.nameDisplay}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <div className={styles.nameText}>Azka Fahsya</div>
            </motion.div>
            <motion.p
              className={styles.bioText}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              Hi, I&apos;m Azka Fahsya. Web Developer sekaligus ML Engineer yang mengimplementasikan model ML ke dalam aplikasi web yang skalabel dengan perpaduan engineering dan kreativitas.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <Link href="/contact" className={styles.ctaButton}>
                <span>GET IN TOUCH</span>
                <svg className={styles.ctaArrow} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Center text overlay */}
        <div className={styles.centerOverlay}>
          <div className={styles.centerTextWrap}>
            <h1 className={styles.bornToText}>I&apos;M BORN TO</h1>
            <div className={styles.typewriterWrap}>
              {typewriterText}
              <span className={styles.typewriterCursor}>|</span>
            </div>
          </div>

          {/* Hero Image — Desktop */}
          <motion.div
            className={styles.heroImageDesktop}
            initial={{ opacity: 0, y: 30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/Avatar.png"
              alt="Azka Fahsya"
              width={380}
              height={400}
              priority
              unoptimized
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </motion.div>

          {/* Hero Image — Mobile */}
          <motion.div
            className={styles.heroImageMobile}
            initial={{ opacity: 0, y: 30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/Avatar.png"
              alt="Azka Fahsya"
              width={300}
              height={400}
              priority
              unoptimized
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </motion.div>

          {/* Stats — Desktop */}
          <motion.div
            className={styles.statsContainer}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.statsInner}>
              <div className={styles.statBlock}>
                <h3 className={styles.statNumber}>1+</h3>
                <p className={styles.statLabel}>Years Experience</p>
              </div>
              <div className={styles.statBlock}>
                <h3 className={styles.statNumber}>5</h3>
                <p className={styles.statLabel}>Projects Done</p>
              </div>
              <div className={styles.statBlock}>
                <h3 className={styles.statNumber}>100%</h3>
                <p className={styles.statLabel}>Creative Drive</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile bio card */}
          <motion.div
            className={styles.mobileBioCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.mobileBioText}>
              Hi, I&apos;m Azka Fahsya. Web Developer sekaligus ML Engineer yang mengimplementasikan model ML ke dalam aplikasi web yang skalabel dengan perpaduan engineering dan kreativitas.
            </p>
            <Link href="/contact" className={styles.mobileCta}>
              <span>GET IN TOUCH</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Marquee banner */}
        <div className={styles.marqueeBanner}>
          <div className={styles.marqueeTrack}>
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
            {marqueeContent}
          </div>
        </div>
      </section>
    </main>
  );
}
