"use client";

import { useState, useCallback, useEffect } from "react";
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
        document.body.style.overflow = "hidden";
    }, []);

    const closeModal = useCallback(() => {
        setSelectedCert(null);
        document.body.style.overflow = "auto";
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [closeModal]);

    return (
        <>
            {/* Gallery Grid - Coursera Style */}
            <div className="mt-6 pt-6 border-t border-slate-800">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-100">Research Credentials</h4>
                        <p className="text-xs text-slate-500">{RESEARCH_CERTIFICATES.length} verified certificates</p>
                    </div>
                </div>

                {/* 3-Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {RESEARCH_CERTIFICATES.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300 overflow-hidden group flex flex-col"
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
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-2 right-2 px-2 py-0.5 bg-blue-600/90 backdrop-blur-sm rounded text-[9px] font-semibold text-white uppercase tracking-wider">
                                    {cert.organization}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-3 flex-1 flex flex-col">
                                <h5 className="text-xs font-semibold text-slate-100 line-clamp-2 mb-1 group-hover:text-blue-400 transition-colors duration-200">
                                    {cert.title}
                                </h5>
                                <p className="text-[10px] text-slate-500 mb-2 line-clamp-1">
                                    {cert.subtitle}
                                </p>

                                <button
                                    onClick={() => openModal(cert)}
                                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-200"
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

            {/* Certificate Modal - Context First Design */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                        onClick={closeModal}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25, type: "spring", damping: 25 }}
                            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Floating Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/90 hover:bg-red-600 border border-slate-700 hover:border-red-500 text-slate-400 hover:text-white transition-all duration-200 shadow-lg"
                                aria-label="Close certificate view"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header Section - Title & Impact First */}
                            <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-900/95">
                                <div className="pr-12">
                                    <h3 className="text-lg sm:text-xl font-bold text-blue-400">
                                        {selectedCert.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                                        {selectedCert.subtitle}
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                                        {selectedCert.impact}
                                    </p>
                                </div>
                            </div>

                            {/* Certificate Image Container */}
                            <div className="relative w-full max-h-[70vh] overflow-hidden bg-white flex items-center justify-center">
                                <div className="relative w-full aspect-[4/3]" style={{ maxHeight: '70vh' }}>
                                    <Image
                                        src={selectedCert.thumbnail}
                                        alt={selectedCert.title}
                                        fill
                                        priority
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 672px"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
