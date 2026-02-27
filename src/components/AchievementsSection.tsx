"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";
import { DEANS_HONOR_ROLL, HACKATHON_ACHIEVEMENTS, HACKATHON_CERTIFICATES_PDF } from "@/lib/constants";

// ===== Fullscreen Modal =====
function CertModal({ item, onClose }: { item: typeof DEANS_HONOR_ROLL[0]; onClose: () => void }) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

    const content = (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
        >
            {/* Backdrop */}
            <div
                style={{
                    position: "absolute", inset: 0,
                    backgroundColor: "rgba(2, 6, 23, 0.97)",
                    backdropFilter: "blur(20px)",
                    cursor: "pointer",
                }}
                onClick={onClose}
            />

            {/* Close Button */}
            <button
                onClick={onClose}
                style={{
                    position: "fixed", top: 20, right: 20, zIndex: 10000,
                    width: 48, height: 48,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgba(30, 41, 59, 0.95)",
                    border: "2px solid rgba(71, 85, 105, 0.8)",
                    color: "white", cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#dc2626"; e.currentTarget.style.borderColor = "#ef4444"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.95)"; e.currentTarget.style.borderColor = "rgba(71, 85, 105, 0.8)"; }}
                aria-label="Close"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Image Container */}
            <div
                style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "60px 20px 20px 20px", overflow: "auto",
                }}
                onClick={(e) => e.target === e.currentTarget && onClose()}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh" }}
                >
                    {/* Blue glow */}
                    <div style={{
                        position: "absolute", inset: -4,
                        background: "rgba(59, 130, 246, 0.3)",
                        borderRadius: 12, filter: "blur(15px)", zIndex: -1,
                    }} />
                    <Image
                        src={item.thumbnail}
                        alt={`Dean's Honor Roll – ${item.semester}`}
                        width={1200} height={850} priority
                        style={{
                            maxWidth: "90vw", maxHeight: "85vh",
                            width: "auto", height: "auto",
                            objectFit: "contain", borderRadius: 8,
                            boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                            backgroundColor: "white",
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );

    if (typeof window !== "undefined") return createPortal(content, document.body);
    return null;
}

// ===== Main Component =====
export default function AchievementsSection() {
    const [selectedItem, setSelectedItem] = useState<typeof DEANS_HONOR_ROLL[0] | null>(null);
    const openModal = useCallback((item: typeof DEANS_HONOR_ROLL[0]) => setSelectedItem(item), []);
    const closeModal = useCallback(() => setSelectedItem(null), []);

    return (
        <>
            <div className="space-y-12">
                {/* ===== Dean's Honor Roll ===== */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5 3h14a1 1 0 011 1v3.5a1 1 0 01-.293.707L14 14v5l-4-2v-3L4.293 8.207A1 1 0 014 7.5V4a1 1 0 011-1z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">Dean&apos;s Honor Roll</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Faculty of Computer Science &amp; Engineering, GIKI</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                        {DEANS_HONOR_ROLL.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="rounded-xl bg-white dark:bg-slate-900/60 dark:backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-600/40 shadow-sm dark:shadow-none hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 ease-in-out overflow-hidden group flex flex-col cursor-pointer"
                                onClick={() => openModal(item)}
                            >
                                {/* Thumbnail */}
                                <div className="relative h-32 sm:h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <Image
                                        src={item.thumbnail}
                                        alt={`Dean's Honor Roll – ${item.semester}`}
                                        fill
                                        loading="lazy"
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Card Content */}
                                <div className="p-2 sm:p-4 flex-1 flex flex-col">
                                    <h4 className="text-[13px] sm:text-sm font-semibold text-slate-900 dark:text-slate-50 line-clamp-2 mb-2 group-hover:text-blue-500 transition-colors duration-200 leading-snug">
                                        {item.semester}
                                    </h4>

                                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-4">
                                        <span className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/30 dark:border-blue-500/20 rounded-full uppercase tracking-wide">
                                            {item.distinction}
                                        </span>
                                    </div>

                                    <button
                                        onClick={(e) => { e.stopPropagation(); openModal(item); }}
                                        className="mt-auto inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-2 py-2 sm:px-4 sm:py-2.5 text-[11px] sm:text-sm font-medium text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-200"
                                    >
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <span className="hidden sm:inline">View Certificate</span>
                                        <span className="sm:hidden">View</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ===== Hackathon Achievements ===== */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">Hackathon Achievements</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Competition wins at GIKI</p>
                        </div>
                    </div>

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
                                <div className="w-9 h-9 sm:w-12 sm:h-12 min-w-[2.25rem] sm:min-w-[3rem] rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-300">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[13px] sm:text-sm font-medium text-slate-900 dark:text-slate-50 line-clamp-2 group-hover:text-yellow-500 transition-colors duration-300 leading-snug">
                                        {achievement.name}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-slate-700 dark:text-slate-400 mt-1">
                                        {achievement.event} • {achievement.year}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        href={HACKATHON_CERTIFICATES_PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 mt-6 px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-200 hover:shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>View all hackathon certificates</span>
                    </motion.a>
                </div>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {selectedItem && <CertModal item={selectedItem} onClose={closeModal} />}
            </AnimatePresence>
        </>
    );
}
