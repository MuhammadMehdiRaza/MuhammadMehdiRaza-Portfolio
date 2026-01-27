"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT_THUMBNAILS, GITHUB_LINKS, PROJECT_VIDEOS } from "@/lib/constants";

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    thumbnailKey: keyof typeof PROJECT_THUMBNAILS;
    githubKey: keyof typeof GITHUB_LINKS;
    featured?: boolean;
    index: number;
    hasVideo?: boolean;
}

export default function ProjectCard({
    title,
    description,
    tech,
    thumbnailKey,
    githubKey,
    index,
    hasVideo = false,
}: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const thumbnail = PROJECT_THUMBNAILS[thumbnailKey];
    const githubLink = GITHUB_LINKS[githubKey];
    const videoSrc = hasVideo ? PROJECT_VIDEOS[thumbnailKey as keyof typeof PROJECT_VIDEOS] : null;

    // Intersection Observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "100px", threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleCardClick = () => {
        if (hasVideo && videoSrc) {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={handleCardClick}
                className={`group relative overflow-hidden rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-200 ${hasVideo ? "cursor-pointer" : ""}`}
            >
                {/* ========== Video/Image Container - aspect-video with skeleton ========== */}
                <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-slate-800">
                    {/* Skeleton/Placeholder while loading */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 animate-pulse" />

                    {hasVideo && videoSrc ? (
                        <>
                            {/* Video Preview - Only load when in view */}
                            {isInView && (
                                <video
                                    src={videoSrc}
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                    preload="none"
                                    onLoadedData={() => setVideoLoaded(true)}
                                    onError={() => setVideoError(true)}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
                                />
                            )}

                            {/* Show thumbnail as fallback if video fails or loading */}
                            {(!videoLoaded || videoError) && (
                                <Image
                                    src={thumbnail}
                                    alt={`${title} thumbnail`}
                                    fill
                                    className="object-cover z-10"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index < 2}
                                />
                            )}

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Background Pattern for Non-Video Cards */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id={`grid-${index}`} width="32" height="32" patternUnits="userSpaceOnUse">
                                            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
                            </div>
                            {/* Image with priority for first 2 cards */}
                            <Image
                                src={thumbnail}
                                alt={`${title} thumbnail`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110 z-10"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={index < 2}
                            />
                        </>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20 pointer-events-none" />

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 z-30">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-slate-700 transition-all duration-200"
                            aria-label="View on GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-slate-700 transition-all duration-200"
                            aria-label="View live demo"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-blue-500 transition-colors duration-200">
                        {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                        {description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tech.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-800/50 hover:bg-blue-600/10 hover:text-blue-400 rounded-full transition-colors duration-200 border border-slate-700/50"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ========== VIDEO MODAL POPUP ========== */}
            <AnimatePresence>
                {isModalOpen && videoSrc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 border-b border-slate-800">
                                <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
                                <button
                                    onClick={handleCloseModal}
                                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-50 transition-colors duration-200"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Video Player - Full controls with loading state */}
                            <div className="relative w-full aspect-video bg-black">
                                {/* Loading indicator */}
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                                    <div className="flex flex-col items-center gap-3">
                                        <svg className="animate-spin w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <p className="text-slate-400 text-sm">Loading video...</p>
                                    </div>
                                </div>
                                <video
                                    src={videoSrc}
                                    controls
                                    autoPlay
                                    preload="auto"
                                    className="absolute inset-0 w-full h-full object-contain z-10"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 border-t border-slate-800">
                                <a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-400 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
