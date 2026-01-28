"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RESEARCH_CERTIFICATES } from "@/lib/constants";

interface Certificate {
    id: number;
    title: string;
    subtitle: string;
    impact: string;
    organization: string;
    thumbnail: string;
}

export default function ResearchCredentialsGallery() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const openModal = useCallback((cert: Certificate) => {
        setSelectedCert(cert);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedCert(null);
    }, []);

    return (
        <>
            {/* Gallery Grid - Same style as Coursera Certificates */}
            <div className="mt-6 pt-6 border-t border-slate-800">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-green-600/10 border border-green-500/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-100">Research Credentials</h4>
                        <p className="text-xs text-slate-500">{RESEARCH_CERTIFICATES.length} verified certificates</p>
                    </div>
                </div>

                {/* 3-Card Grid - Coursera Style */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {RESEARCH_CERTIFICATES.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-green-500/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300 overflow-hidden group flex flex-col"
                        >
                            {/* Certificate Thumbnail */}
                            <div className="relative h-32 w-full overflow-hidden bg-slate-800">
                                <Image
                                    src={cert.thumbnail}
                                    alt={cert.title}
                                    fill
                                    loading="lazy"
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                {/* Organization Badge */}
                                <div className="absolute top-2 right-2 px-2 py-0.5 bg-green-600/90 backdrop-blur-sm rounded text-[9px] font-semibold text-white uppercase tracking-wider">
                                    {cert.organization}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-3 flex-1 flex flex-col">
                                {/* Certificate Name */}
                                <h5 className="text-xs font-semibold text-slate-100 line-clamp-2 mb-1 group-hover:text-green-400 transition-colors duration-200">
                                    {cert.title}
                                </h5>
                                <p className="text-[10px] text-slate-500 mb-2 line-clamp-1">
                                    {cert.subtitle}
                                </p>

                                {/* View Certificate Button */}
                                <button
                                    onClick={() => openModal(cert)}
                                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-green-600 hover:text-white border border-slate-700 hover:border-green-500 rounded-lg transition-all duration-200"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    View Certificate
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Compact Modal - Smaller and doesn't cover header */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 flex items-center justify-center p-4"
                        style={{ top: '80px' }} // Offset from header
                        onClick={closeModal}
                    >
                        {/* Backdrop - Semi-transparent */}
                        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

                        {/* Modal Content - Compact Size */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full max-w-lg overflow-hidden rounded-xl bg-slate-900 border border-slate-700 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button - Easy to click */}
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-red-600 border border-slate-600 text-slate-400 hover:text-white transition-all duration-200"
                                aria-label="Close"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Certificate Image - Compact */}
                            <div className="relative aspect-[4/3] max-h-[50vh]">
                                <Image
                                    src={selectedCert.thumbnail}
                                    alt={selectedCert.title}
                                    fill
                                    priority
                                    className="object-contain bg-white"
                                    sizes="(max-width: 768px) 100vw, 512px"
                                />
                            </div>

                            {/* Certificate Info - Compact */}
                            <div className="p-4 bg-slate-900 border-t border-slate-800">
                                <h3 className="text-sm font-semibold text-slate-100">
                                    {selectedCert.title}
                                </h3>
                                <p className="text-xs text-green-400 mt-1">
                                    {selectedCert.subtitle}
                                </p>
                                <p className="text-xs text-slate-400 mt-2">
                                    {selectedCert.impact}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
