"use client";

import { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

const SOCIALS = [
  { label: "GITHUB", href: "https://github.com/azkzka", style: { top: "22%", left: "55%", transform: "rotate(-3deg)" } },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/azka-fahsya//", style: { top: "75%", left: "5%", transform: "rotate(4deg)" } },
  { label: "INSTAGRAM", href: "https://www.instagram.com/azkzka_/", style: { top: "12%", left: "32%", transform: "rotate(5deg)" } },
  { label: "WHATSAPP", href: "https://wa.me/6285133338191/", style: { top: "38%", left: "15%", transform: "rotate(-2deg)" } },
  { label: "YOUTUBE", href: "https://www.youtube.com/@azkafahsya", style: { top: "58%", left: "75%", transform: "rotate(3deg)" } },
  { label: "TIKTOK", href: "https://www.tiktok.com/@azkzka_", style: { top: "10%", left: "68%", transform: "rotate(-4deg)" } },
  { label: "GOOGLE SKILLS", href: "#", style: { top: "48%", left: "42%", transform: "rotate(2deg)" } },
];

const CIRCLES = [
  { emoji: "✌️", style: { top: "15%", left: "3%", transform: "rotate(10deg)" } },
  { emoji: "💔", style: { top: "60%", left: "30%", transform: "rotate(-8deg)" } },
  { emoji: "🗿", style: { top: "10%", left: "90%", transform: "rotate(-8deg)" } },
  { emoji: "🤩", style: { top: "52%", left: "60%", transform: "rotate(-8deg)" } },
];

export default function ContactPage() {
  const areaRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("azkafahsya2104@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const marqueeItems = Array(6).fill(null).map((_, i) => (
    <span key={i} style={{ display: "contents" }}>
      <span className={styles.contactMarqueeText}>CONTACT</span>
      <span className={styles.contactMarqueeStar}>✦</span>
    </span>
  ));

  return (
    <div className={styles.contactPage}>
      {/* Page title */}
      <div className={styles.pageTitle}>contact</div>

      {/* Big scrolling CONTACT header */}
      <div className={styles.contactMarquee}>
        <div className={styles.contactMarqueeTrack}>
          {marqueeItems}
          {marqueeItems}
        </div>
      </div>

      {/* Info bar */}
      <motion.div 
        className={styles.infoBar}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
        }}
      >
        <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className={styles.infoText}>
          I&apos;m here to help you turn your brief into something brilliant.
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className={styles.infoText}>
          Just drop me a line or interact with the stickers.
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className={styles.infoText}>
          © 2026 Azka Fahsya. All Rights Reserved
        </motion.p>
      </motion.div>

      {/* Stickers area */}
      <div className={styles.stickersArea} ref={areaRef}>
        {/* Social pill stickers */}
        {SOCIALS.map((social, i) => {
          const id = `social-${i}`;
          return (
            <motion.a
              key={id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.stickerPill}
              style={social.style}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              drag
              dragConstraints={areaRef}
              dragElastic={0.2}
              whileDrag={{ zIndex: 20, scale: 1.05, cursor: "grabbing" }}
              whileHover={{ scale: 1.05 }}
            >
              {social.label}
              <svg className={styles.stickerArrow} width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.a>
          );
        })}

        {/* Circle stickers */}
        {CIRCLES.map((circle, i) => {
          const id = `circle-${i}`;
          return (
            <motion.div
              key={id}
              className={styles.circleSticker}
              style={circle.style}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              drag
              dragConstraints={areaRef}
              dragElastic={0.2}
              whileDrag={{ zIndex: 20, scale: 1.05, cursor: "grabbing" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.circleInner}>
                <span className={styles.circleEmoji}>{circle.emoji}</span>
                <svg className={styles.circleText} viewBox="0 0 100 100">
                  <defs>
                    <path id={`circlePath-${i}`} d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text>
                    <textPath href={`#circlePath-${i}`}>
                      DRAG ME ✦ DRAG ME ✦ DRAG ME ✦ DRAG ME ✦{" "}
                    </textPath>
                  </text>
                </svg>
              </div>
            </motion.div>
          );
        })}

        {/* Send message button */}
        <motion.button
          className={styles.sendButton}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          drag
          dragConstraints={areaRef}
          dragElastic={0.2}
          whileDrag={{ zIndex: 20, scale: 1.05, cursor: "grabbing" }}
          whileHover={{ scale: 1.05 }}
        >
          SEND MESSAGE ✦
        </motion.button>
      </div>

      {/* Big Email Section */}
      <div className={styles.emailSection}>
        <div className={styles.copyLabel}>CLICK TO COPY EMAIL</div>
        <div className={styles.emailText} onClick={handleCopyEmail}>
          azkafahsya2104@gmail.com
          {copied && (
            <motion.div
              className={styles.copyPopup}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
            >
              Gmail berhasil di copy.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
