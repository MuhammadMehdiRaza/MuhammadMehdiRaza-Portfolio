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
            {/* Gallery Grid */}
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

                {/* 3-Card Grid - All Text on Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {RESEARCH_CERTIFICATES.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(37,99,235,0.2)] transition-all duration-300 overflow-hidden group flex flex-col"
                        >
                            {/* Certificate Thumbnail */}
                            <div className="relative h-28 w-full overflow-hidden bg-slate-800">
                                <Image
                                    src={cert.thumbnail}
                                    alt={cert.title}
                                    fill
                                    loading="lazy"
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                <div className="absolute top-2 right-2 px-2 py-0.5 bg-blue-600/90 backdrop-blur-sm rounded text-[9px] font-semibold text-white uppercase tracking-wider">
                                    {cert.organization}
                                </div>
                            </div>

                            {/* Card Content - Contains ALL Text */}
                            <div className="p-4 flex-1 flex flex-col">
                                {/* Title */}
                                <h5 className="text-sm font-bold text-blue-400 line-clamp-2 mb-1">
                                    {cert.title}
                                </h5>
                                {/* Subtitle */}
                                <p className="text-xs text-slate-400 mb-2">
                                    {cert.subtitle}
                                </p>
                                {/* Impact Description */}
                                <p className="text-[11px] text-slate-500 leading-relaxed mb-3 line-clamp-2">
                                    {cert.impact}
                                </p>

                                {/* View Button */}
                                <button
                                    onClick={() => openModal(cert)}
                                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-200"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Fullscreen Image Modal - ONLY Image, No Text */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-50"
                        onClick={closeModal}
                    >
                        {/* Heavy Backdrop */}
                        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" />

                        {/* Fixed Close Button - Does NOT scroll */}
                        <button
                            onClick={closeModal}
                            className="fixed top-6 right-6 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/90 hover:bg-red-600 border-2 border-slate-600 hover:border-red-500 text-white transition-all duration-200 shadow-2xl"
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Scrollable/Pannable Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full h-full overflow-auto flex items-center justify-center p-4 sm:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Certificate Image - Scrollable for fine print */}
                            <div className="relative max-w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
                                <Image
                                    src={selectedCert.thumbnail}
                                    alt={selectedCert.title}
                                    width={1200}
                                    height={900}
                                    priority
                                    className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
                                    style={{ display: 'block' }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
