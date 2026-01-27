"use client";

import { PERSONAL_INFO, FOOTER_NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800/50">
            <div className="section-container">

                {/* ========== TOP SECTION - Name & Tagline + Social ========== */}
                <div className="py-12 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

                    {/* Left: Name (Blue) + Tagline Below */}
                    <div className="max-w-md">
                        <h3 className="text-xl font-bold text-blue-500 mb-3">
                            {PERSONAL_INFO.name}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {PERSONAL_INFO.tagline}
                        </p>
                    </div>

                    {/* Right: Social Links + Copyright */}
                    <div className="flex flex-col items-start lg:items-end gap-4">
                        <div className="flex items-center gap-8">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-slate-400 hover:text-slate-50 transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500">
                            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800/50" />

                {/* ========== BOTTOM SECTION - Nav Links + Designed By ========== */}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-6">

                    {/* Left: Nav Links */}
                    <nav className="flex flex-wrap items-center gap-8">
                        {FOOTER_NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-slate-500 hover:text-slate-50 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Designed & Built By */}
                    <p className="text-sm text-slate-500">
                        Designed & Built by{" "}
                        <span className="font-medium text-slate-300">{PERSONAL_INFO.name}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
