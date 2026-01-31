"use client";

import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="section-container py-8">
                <div className="flex items-center justify-between">
                    {/* Left: Copyright */}
                    <p className="text-sm text-slate-700 dark:text-slate-400">
                        © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                    </p>

                    {/* Right: Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200 shadow-lg hover:shadow-xl"
                        aria-label="Scroll to top"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
