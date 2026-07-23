import { Oswald, Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio Azka Fahsya",
  description:
    "Portfolio of Azka Fahsya — Fullstack Developer yang membangun web experiences berkualitas tinggi. Creative code, web design, dan UI/UX innovation.",
  keywords: ["fullstack developer", "web developer", "portfolio", "Azka Fahsya", "UI/UX", "creative code"],
  authors: [{ name: "Azka Fahsya" }],
  openGraph: {
    title: "Azka Fahsya — Fullstack Developer",
    description: "Fullstack Developer yang membangun web experiences berkualitas tinggi.",
    type: "website",
  },
  icons: {
    icon: "/Avatar.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${jakarta.variable} ${greatVibes.variable}`}>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
