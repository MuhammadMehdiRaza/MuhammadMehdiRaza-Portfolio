"use client";

import { motion } from "framer-motion";
import {
    COURSERA_CERTIFICATIONS,
    HACKATHON_ACHIEVEMENTS,
    HACKATHON_CERTIFICATES_PDF,
} from "@/lib/constants";

export default function CertificationSection() {
    return (
        <div className="space-y-12">
            {/* Coursera Certifications */}
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
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {COURSERA_CERTIFICATIONS.map((cert, index) => (
                        <motion.a
                            key={cert.name}
                            href={cert.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-200 flex items-center gap-4 group"
                        >
                            {/* Coursera Icon */}
                            <div className="w-12 h-12 min-w-[3rem] rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-200">
                                <svg
                                    className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-200"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.53 17.593c-2.267-.864-3.86-3.037-3.86-5.593 0-2.556 1.593-4.729 3.86-5.593v2.168c-1.146.728-1.907 2.002-1.907 3.425 0 1.423.761 2.697 1.907 3.425v2.168zm4.967-2.168c1.146-.728 1.907-2.002 1.907-3.425 0-1.423-.761-2.697-1.907-3.425V6.407c2.267.864 3.86 3.037 3.86 5.593 0 2.556-1.593 4.729-3.86 5.593v-2.168z" />
                                </svg>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-slate-50 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                                    {cert.name}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    {cert.issuer} • {cert.year}
                                </p>
                            </div>
                            {/* Arrow */}
                            <svg
                                className="w-5 h-5 text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Hackathon Achievements - Highlighted */}
            <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-6">
                    Hackathon Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {HACKATHON_ACHIEVEMENTS.map((achievement, index) => (
                        <motion.div
                            key={achievement.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-md border border-yellow-500/20 hover:border-yellow-500/40 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-200 flex items-center gap-4 group"
                        >
                            {/* Trophy Icon */}
                            <div className="w-12 h-12 min-w-[3rem] rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-200">
                                <svg
                                    className="w-6 h-6 text-yellow-500 group-hover:text-white transition-colors duration-200"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                                </svg>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-slate-50 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-200">
                                    {achievement.name}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    {achievement.event} • {achievement.year}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </motion.a>
            </div>
        </div>
    );
}
