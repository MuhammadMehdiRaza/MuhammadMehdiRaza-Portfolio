"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";
import { RESEARCH_CERTIFICATES } from "@/lib/constants";

interface Certificate {
    id: number;
    title: string;
    subtitle: string;
    impact: string;
    organization: string;
    thumbnail: string;
}

// Fullscreen Modal Component
function FullscreenModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

    const modalContent = (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9999,
            }}
        >
            {/* Full Black Backdrop - Click to Close */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(2, 6, 23, 0.98)',
                    backdropFilter: 'blur(20px)',
                    cursor: 'pointer',
                }}
                onClick={onClose}
            />

            {/* Fixed Close Button - Always Top Right */}
            <button
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 10000,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    border: '2px solid rgba(71, 85, 105, 0.8)',
                    color: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#dc2626';
                    e.currentTarget.style.borderColor = '#ef4444';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.95)';
                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.8)';
                }}
                aria-label="Close"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Centered Image Container */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '60px 20px 20px 20px',
                    overflow: 'auto',
                }}
                onClick={(e) => e.target === e.currentTarget && onClose()}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'relative',
                        maxWidth: '90vw',
                        maxHeight: '85vh',
                    }}
                >
                    {/* Royal Blue Glow */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: '-4px',
                            background: 'rgba(59, 130, 246, 0.3)',
                            borderRadius: '12px',
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                    />

                    {/* Certificate Image */}
                    <Image
                        src={cert.thumbnail}
                        alt={cert.title}
                        width={1200}
                        height={850}
                        priority
                        style={{
                            maxWidth: '90vw',
                            maxHeight: '85vh',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                            backgroundColor: 'white',
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );

    // Use portal to render at document root level
    if (typeof window !== 'undefined') {
        return createPortal(modalContent, document.body);
    }
    return null;
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
                            className="rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(37,99,235,0.2)] transition-all duration-300 overflow-hidden group flex flex-col"
                        >
                            {/* Thumbnail */}
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

                            {/* Card Content */}
                            <div className="p-4 flex-1 flex flex-col">
                                <h5 className="text-sm font-bold text-blue-400 line-clamp-2 mb-1">
                                    {cert.title}
                                </h5>
                                <p className="text-xs text-slate-400 mb-2">
                                    {cert.subtitle}
                                </p>
                                <p className="text-[11px] text-slate-500 leading-relaxed mb-3 line-clamp-2">
                                    {cert.impact}
                                </p>

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

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <FullscreenModal cert={selectedCert} onClose={closeModal} />
                )}
            </AnimatePresence>
        </>
    );
}
