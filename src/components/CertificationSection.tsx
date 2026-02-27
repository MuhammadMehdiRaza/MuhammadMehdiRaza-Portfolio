"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COURSERA_CERTIFICATIONS } from "@/lib/constants";

export default function CertificationSection() {
    return (
        <div>
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
                className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5"
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
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Card Content */}
                        <div className="p-2 sm:p-4 flex-1 flex flex-col">
                            <h4 className="text-[13px] sm:text-sm font-semibold text-slate-900 dark:text-slate-50 line-clamp-2 mb-2 group-hover:text-blue-500 transition-colors duration-200 leading-snug">
                                {cert.name}
                            </h4>

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

                            <a
                                href={cert.shareUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-2 py-2 sm:px-4 sm:py-2.5 text-[11px] sm:text-sm font-medium text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-200"
                            >
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span className="hidden sm:inline">View Certificate</span>
                                <span className="sm:hidden">View</span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

