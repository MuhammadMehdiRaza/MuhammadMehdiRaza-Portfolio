"use client";

import { motion } from "framer-motion";
import ResearchCredentialsGallery from "./ResearchCredentialsGallery";

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
            className="p-6 rounded-xl bg-white dark:bg-slate-900/50 dark:backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-600/40 shadow-sm dark:shadow-none hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 ease-in-out"
        >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
                    <p className="text-blue-500 font-medium">{organization}</p>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400 shrink-0">{duration}</span>
            </div>

            {/* Description */}
            <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-4">
                {description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
                {highlights.map((highlight) => (
                    <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors duration-200 border border-slate-200 dark:border-slate-700/50"
                    >
                        {highlight}
                    </span>
                ))}
            </div>

            {/* Research Credentials Gallery */}
            {hasCertificates && <ResearchCredentialsGallery />}
        </motion.div>
    );
}
