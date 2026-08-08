"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, PUBLICATION } from "@/lib/constants";

// Dynamic imports for performance (code splitting)
const ExperienceCard = dynamic(() => import("@/components/ExperienceCard"), {
  loading: () => <div className="h-40 w-full bg-slate-900/50 animate-pulse rounded-xl" />,
});
const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  loading: () => <div className="aspect-video w-full bg-slate-900/50 animate-pulse rounded-xl" />,
});
const CertificationSection = dynamic(() => import("@/components/CertificationSection"), {
  ssr: false,
});
const AchievementsSection = dynamic(() => import("@/components/AchievementsSection"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent pointer-events-none" />

        <div className="section-container text-center z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Name - text-5xl hierarchy */}
            <h1 className="text-hero text-blue-500 tracking-tight mb-4">
              {PERSONAL_INFO.name}
            </h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-slate-700 dark:text-slate-400 font-medium mb-6"
            >
              {PERSONAL_INFO.title}
            </motion.p>

            {/* Tagline - text-base */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base text-slate-600 dark:text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 text-base font-medium text-slate-50 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-base font-medium text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-50 rounded-lg transition-all duration-200"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-slate-600 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="py-24 bg-white dark:bg-slate-950">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section text-slate-900 dark:text-slate-50 mb-2">
              About Me
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-400 mb-12 max-w-2xl">
              A little about who I am, and what I love to build.
            </p>
          </motion.div>

          <AboutSection />
        </div>
      </section>

      {/* ========== EXPERIENCE SECTION ========== */}
      <section id="experience" className="py-24 bg-white dark:bg-slate-900/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section text-slate-900 dark:text-slate-50 mb-2">
              Work & Research
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-400 mb-12 max-w-2xl">
              Professional experience in AI research, technical leadership, and cross-functional collaboration.
            </p>
          </motion.div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                title={exp.title}
                organization={exp.organization}
                duration={exp.duration}
                description={exp.description}
                highlights={exp.highlights}
                hasCertificates={exp.hasCertificates}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== PUBLICATION SECTION ========== */}
      <section id="publication" className="py-24 bg-white dark:bg-slate-950">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section text-slate-900 dark:text-slate-50 mb-2">
              Publication
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-400 mb-12 max-w-2xl">
              Peer-reviewed research, published and independently verifiable.
            </p>
          </motion.div>

          <motion.a
            href={PUBLICATION.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group block rounded-2xl bg-white dark:bg-slate-900/50 dark:backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-600/40 shadow-sm dark:shadow-none hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-300 ease-in-out"
          >
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-6">
              {/* Icon */}
              <div className="shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded-full uppercase tracking-wide">
                    {PUBLICATION.publisher}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-full">
                    {PUBLICATION.type}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-500">
                    {PUBLICATION.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-50 leading-snug mb-2 group-hover:text-blue-500 transition-colors duration-200">
                  {PUBLICATION.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {PUBLICATION.venue} · {PUBLICATION.host}
                </p>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {PUBLICATION.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {PUBLICATION.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  View on IEEE Xplore
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section id="projects" className="py-24 bg-white dark:bg-slate-950">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section text-slate-900 dark:text-slate-50 mb-2">
              Selected Projects
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-400 mb-12 max-w-2xl">
              A collection of projects showcasing expertise in full-stack development, data structures, and machine learning.
            </p>
          </motion.div>

          <div className="bento-grid">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tech={project.tech}
                thumbnailKey={project.thumbnailKey}
                githubKey={project.githubKey}
                featured={project.featured}
                index={index}
                hasVideo={project.hasVideo}
              />
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 text-base font-medium text-slate-800 dark:text-slate-200 hover:text-white bg-slate-100 dark:bg-slate-800/50 hover:bg-blue-600 border border-slate-200 dark:border-slate-700 hover:border-blue-600 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
            >
              <span>View More Projects</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== CREDENTIALS SECTION ========== */}
      <section id="credentials" className="py-24 bg-white dark:bg-slate-900/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section text-slate-900 dark:text-slate-50 mb-2">
              Credentials
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-400 mb-12 max-w-2xl">
              Professional certifications in AI, algorithms, and software design.
            </p>
          </motion.div>

          <CertificationSection />
        </div>
      </section>

      {/* ========== ACHIEVEMENTS SECTION ========== */}
      <section id="achievements" className="py-24 bg-white dark:bg-slate-950">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section text-slate-900 dark:text-slate-50 mb-2">
              Achievements
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-400 mb-12 max-w-2xl">
              Academic honors and competition wins across semesters at GIKI.
            </p>
          </motion.div>

          <AchievementsSection />
        </div>
      </section>

      {/* ========== TECH STACK SECTION ========== */}
      <section id="techstack" className="py-24 bg-white dark:bg-slate-950">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section text-slate-900 dark:text-slate-50 mb-2">
              Technical Stack
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-400 mb-12 max-w-2xl">
              Technologies and tools I work with to build scalable, efficient solutions.
            </p>
          </motion.div>

          <TechStack />
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <Contact />

      {/* ========== FOOTER ========== */}
      <Footer />

      {/* ========== CHATBOT ========== */}
      <Chatbot />
    </main>
  );
}
