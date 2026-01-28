"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Handle scroll state for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Intersection Observer for scroll-spy
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observerOptions = {
            root: null,
            rootMargin: "-10% 0px -30% 0px",
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const isActive = (href: string) => activeSection === href;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="section-container flex items-center justify-between">
                {/* Logo - MM Badge + Full Name + Title */}
                <a
                    href="#"
                    onClick={() => setActiveSection("")}
                    className="flex items-center gap-3 group"
                >
                    {/* MM Badge */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xs shrink-0 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-shadow duration-200">
                        MM
                    </div>
                    {/* Name + Title */}
                    <div className="hidden sm:flex items-center gap-2">
                        <span className="text-base font-bold text-slate-50 group-hover:text-blue-400 transition-colors duration-200">
                            {PERSONAL_INFO.name}
                        </span>
                        <span className="text-slate-600">|</span>
                        <span className="text-slate-400 text-sm">
                            Software Engineer
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`relative text-sm py-2 transition-colors duration-200 nav-link-underline ${isActive(link.href)
                                ? "text-blue-500 font-medium active"
                                : "text-slate-400 hover:text-slate-50"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium text-slate-50 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    >
                        GitHub
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-slate-50 transition-colors duration-200"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden glass-nav mt-2 mx-4 rounded-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg transition-all duration-200 ${isActive(link.href)
                                        ? "text-blue-500 bg-blue-500/10 font-medium"
                                        : "text-slate-400 hover:text-slate-50 hover:bg-slate-800/50"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={PERSONAL_INFO.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 mt-2 text-center font-medium text-slate-50 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                            >
                                GitHub
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
