import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./light-mode.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem
          storageKey="portfolio-theme-v2"
          forcedTheme={undefined}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
