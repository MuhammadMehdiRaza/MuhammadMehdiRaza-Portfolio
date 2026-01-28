"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

            {/* Research Certificates - Eye-catching Design */}
            {hasCertificates && (
                <div className="mt-6 pt-6 border-t border-slate-800">
                    {/* Header with badge */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-slate-100">Research Certificates</h4>
                            <p className="text-xs text-slate-500">{RESEARCH_CERTIFICATES.length} certificates earned</p>
                        </div>
                    </div>

                    {/* Certificate Thumbnails Grid */}
                    <div className="grid grid-cols-3 gap-3">
                        {RESEARCH_CERTIFICATES.map((cert, i) => (
                            <motion.a
                                key={i}
                                href={cert.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="group relative overflow-hidden rounded-lg border border-green-500/20 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300"
                            >
                                {/* Certificate Image */}
                                <div className="relative aspect-[4/3] bg-slate-800">
                                    <Image
                                        src={cert.path}
                                        alt={cert.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        sizes="(max-width: 640px) 33vw, 150px"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                                        <span className="text-[10px] font-medium text-white flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            View
                                        </span>
                                    </div>
                                </div>
                                {/* Certificate Name */}
                                <div className="p-2 bg-slate-900/80">
                                    <p className="text-[10px] text-slate-300 font-medium truncate text-center group-hover:text-green-400 transition-colors">
                                        {cert.name}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
