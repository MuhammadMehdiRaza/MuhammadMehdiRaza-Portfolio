import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Mehdi Raza | Software Engineer & AI Researcher",
  description:
    "Software Engineering student and web developer passionate about creating innovative digital experiences and exploring the frontiers of AI",
  keywords: [
    "Software Engineer",
    "AI Researcher",
    "Web Developer",
    "Next.js",
    "React",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Muhammad Mehdi Raza" }],
  openGraph: {
    title: "Muhammad Mehdi Raza | Software Engineer & AI Researcher",
    description:
      "Software Engineering student and web developer passionate about creating innovative digital experiences and exploring the frontiers of AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
