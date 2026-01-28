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
        document.body.style.overflow = "hidden";
    }, []);

    const closeModal = useCallback(() => {
        setSelectedCert(null);
        document.body.style.overflow = "auto";
    }, []);

    return (
        <>
            {/* Gallery Grid */}
            <div className="mt-6 pt-6 border-t border-slate-800">
                {/* Header with Research Badge */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                        {/* SVG Badge Frame */}
                        <svg
                            className="w-10 h-10"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="2"
                                y="2"
                                width="36"
                                height="36"
                                rx="8"
                                className="fill-blue-600/10 stroke-blue-500/40"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M20 10L22.5 15.5L28.5 16L24 20.5L25.5 26.5L20 23.5L14.5 26.5L16 20.5L11.5 16L17.5 15.5L20 10Z"
                                className="fill-blue-500"
                            />
                        </svg>
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full -z-10" />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-100 tracking-wide">
                            Research Credentials
                        </h4>
                        <p className="text-xs text-slate-500">
                            {RESEARCH_CERTIFICATES.length} verified certificates
                        </p>
                    </div>
                </div>

                {/* 3-Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {RESEARCH_CERTIFICATES.map((cert, index) => (
                        <motion.button
                            key={cert.id}
                            onClick={() => openModal(cert)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        >
                            {/* SVG Frame with Glow */}
                            <div className="absolute inset-0 rounded-xl border-2 border-slate-700/50 group-hover:border-blue-500/60 transition-all duration-300 z-10 pointer-events-none">
                                {/* Corner Accents */}
                                <svg
                                    className="absolute top-0 left-0 w-6 h-6 text-blue-500/30 group-hover:text-blue-500/60 transition-colors duration-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path d="M4 12V4H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <svg
                                    className="absolute bottom-0 right-0 w-6 h-6 text-blue-500/30 group-hover:text-blue-500/60 transition-colors duration-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path d="M20 12V20H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 transition-all duration-300 rounded-xl z-0" />

                            {/* Card Content */}
                            <div className="relative bg-slate-900/80 backdrop-blur-sm overflow-hidden">
                                {/* Thumbnail */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={cert.thumbnail}
                                        alt={cert.title}
                                        fill
                                        loading="lazy"
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, 33vw"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                                    {/* Organization Badge */}
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-blue-600/90 backdrop-blur-sm rounded text-[10px] font-semibold text-white uppercase tracking-wider">
                                        {cert.organization}
                                    </div>

                                    {/* View Icon Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-12 h-12 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-blue-600/30">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-3">
                                    <h5 className="text-xs font-semibold text-slate-100 line-clamp-1 group-hover:text-blue-400 transition-colors duration-200">
                                        {cert.title}
                                    </h5>
                                    <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                                        {cert.subtitle}
                                    </p>
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
                        onClick={closeModal}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, type: "spring", damping: 25 }}
                            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button - Large for mobile accessibility */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/90 hover:bg-red-600 border border-slate-700 hover:border-red-500 text-slate-400 hover:text-white transition-all duration-200 shadow-lg"
                                aria-label="Close certificate view"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Certificate Image */}
                            <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                                <Image
                                    src={selectedCert.thumbnail}
                                    alt={selectedCert.title}
                                    fill
                                    priority
                                    className="object-contain bg-white"
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </div>

                            {/* Certificate Info */}
                            <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800">
                                <div className="flex items-start gap-4">
                                    {/* Research Certified Badge */}
                                    <div className="shrink-0 hidden sm:block">
                                        <svg
                                            className="w-12 h-12"
                                            viewBox="0 0 48 48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="24" cy="24" r="22" className="fill-blue-600/10 stroke-blue-500" strokeWidth="2" />
                                            <path
                                                d="M24 12L27.5 19.5L35.5 20.5L29.5 26.5L31.5 34.5L24 30.5L16.5 34.5L18.5 26.5L12.5 20.5L20.5 19.5L24 12Z"
                                                className="fill-blue-500"
                                            />
                                            <text x="24" y="42" textAnchor="middle" className="fill-blue-400 text-[6px] font-bold">
                                                VERIFIED
                                            </text>
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                                            {selectedCert.title}
                                        </h3>
                                        <p className="text-sm text-blue-400 mt-1">
                                            {selectedCert.subtitle}
                                        </p>
                                        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                                            {selectedCert.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
