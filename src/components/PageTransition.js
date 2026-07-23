"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter({ children }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <FrozenRouter>
          {children}
        </FrozenRouter>

        {/* Page transition columns overlay */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            pointerEvents: "none",
            display: "flex",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "0%" }}
              animate={{ y: "-115%" }}
              exit={{ y: "0%" }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.05 * i,
              }}
              style={{
                width: "16.667%",
                height: "100vh",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  background: "#161616",
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    bottom: "100%",
                    left: 0,
                    width: "100%",
                    height: "15vh",
                    fill: "#161616",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M 0 100 C 30 0, 70 0, 100 100 Z" />
                </svg>
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "100%",
                    height: "15vh",
                    fill: "#161616",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M 0 0 C 30 100, 70 100, 100 0 Z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
}
