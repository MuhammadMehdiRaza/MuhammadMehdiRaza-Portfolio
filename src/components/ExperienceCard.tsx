"use client";

import { motion } from "framer-motion";
import { RESEARCH_CERTIFICATES } from "@/lib/constants";

interface ExperienceCardProps {
    title: string;
    organization: string;
    duration: string;
    description: string;
    highlights: string[];
    hasCertificates?: boolean;
    index: number;
}

export default function ExperienceCard({
    title,
    organization,
    duration,
    description,
    highlights,
    hasCertificates = false,
    index,
}: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-200"
        >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
                    <p className="text-blue-500 font-medium">{organization}</p>
                </div>
                <span className="text-sm text-slate-500 shrink-0">{duration}</span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-4">
                {highlights.map((highlight) => (
                    <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 hover:bg-blue-600/10 hover:text-blue-400 rounded-full transition-colors duration-200 border border-slate-700/50"
                    >
                        {highlight}
                    </span>
                ))}
            </div>

            {/* Certificate Links (for research position) */}
            {hasCertificates && (
                <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-sm text-slate-500 mb-3">Research Certificates:</p>
                    <div className="flex flex-wrap gap-3">
                        {RESEARCH_CERTIFICATES.map((cert, i) => (
                            <motion.a
                                key={i}
                                href={cert.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-400 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg transition-colors duration-200 border border-blue-600/20"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                {cert.name}
                            </motion.a>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
