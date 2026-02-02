"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    COURSERA_CERTIFICATIONS,
    HACKATHON_ACHIEVEMENTS,
    HACKATHON_CERTIFICATES_PDF,
} from "@/lib/constants";

export default function CertificationSection() {
    return (
        <div className="space-y-12">
            {/* Coursera Certifications - Thumbnail Cards */}
            <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-6">
                    Professional Certifications
                </h3>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                        },
                    }}
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5"
                >
                    {COURSERA_CERTIFICATIONS.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="rounded-xl bg-white dark:bg-slate-900/60 dark:backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-600/40 shadow-sm dark:shadow-none hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 ease-in-out overflow-hidden group flex flex-col"
                        >
                            {/* Certificate Thumbnail Image */}
                            <div className="relative h-32 sm:h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <Image
                                    src={cert.thumbnail}
                                    alt={cert.name}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Card Content */}
                            <div className="p-2 sm:p-4 flex-1 flex flex-col">
                                {/* Certificate Name */}
                                <h4 className="text-[13px] sm:text-sm font-semibold text-slate-900 dark:text-slate-50 line-clamp-2 mb-2 sm:mb-2 group-hover:text-blue-500 transition-colors duration-200 leading-snug">
                                    {cert.name}
                                </h4>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-4">
                                    {cert.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/30 dark:border-blue-500/20 rounded-full uppercase tracking-wide"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {cert.tags.length > 3 && (
                                        <span className="px-1.5 py-0.5 text-[8px] sm:text-[10px] font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/30">
                                            +{cert.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* View Certificate Button */}
                                <a
                                    href={cert.shareUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-2 py-2 sm:px-4 sm:py-2.5 text-[11px] sm:text-sm font-medium text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-200"
                                >
                                    <svg
                                        className="w-3 h-3 sm:w-4 sm:h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                    <span className="hidden sm:inline">View Certificate</span>
                                    <span className="sm:hidden">View</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Hackathon Achievements - Highlighted */}
            <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-6">
                    Hackathon Achievements
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4">
                    {HACKATHON_ACHIEVEMENTS.map((achievement, index) => (
                        <motion.div
                            key={achievement.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="p-2 sm:p-4 rounded-xl bg-white dark:bg-slate-900/50 dark:backdrop-blur-md border border-yellow-400/30 dark:border-yellow-500/20 hover:border-yellow-500/50 shadow-sm dark:shadow-none hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300 ease-in-out flex items-center gap-2 sm:gap-4 group"
                        >
                            {/* Trophy Icon */}
                            <div className="w-9 h-9 sm:w-12 sm:h-12 min-w-[2.25rem] sm:min-w-[3rem] rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-300">
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 group-hover:text-white transition-colors duration-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                                </svg>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-[13px] sm:text-sm font-medium text-slate-900 dark:text-slate-50 line-clamp-2 group-hover:text-yellow-500 transition-colors duration-300 leading-snug">
                                    {achievement.name}
                                </p>
                                <p className="text-[10px] sm:text-xs text-slate-700 dark:text-slate-400 mt-1 sm:mt-1">
                                    {achievement.event} • {achievement.year}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link - Direct PDF link */}
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    href={HACKATHON_CERTIFICATES_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm text-blue-500 hover:text-blue-400 transition-colors duration-200"
                >
                    <span>View all hackathon certificates</span>
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                    </svg>
                </motion.a>
            </div>
        </div>
    );
}
