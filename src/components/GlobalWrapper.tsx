"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

// ========== DESIGN SYSTEM ANIMATION VARIANTS ==========

// Standard card hover effect - used across all interactive cards
export const cardHoverProps: MotionProps = {
    whileHover: {
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    whileTap: {
        scale: 0.98,
    },
};

// Glow shadow that appears on hover
export const glowShadow = "0 0 20px rgba(37, 99, 235, 0.15)";
export const glowShadowStrong = "0 0 40px rgba(37, 99, 235, 0.25)";

// ========== GLASS CARD WRAPPER ==========
// A unified card component with consistent glassmorphism styling
interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    as?: "div" | "a" | "article";
    href?: string;
    target?: string;
    rel?: string;
    onClick?: () => void;
}

export function GlassCard({
    children,
    className = "",
    hover = true,
    as = "div",
    href,
    target,
    rel,
    onClick,
}: GlassCardProps) {
    const baseStyles = `
    bg-slate-900/50 
    backdrop-blur-md 
    border border-slate-800 
    rounded-xl 
    transition-all duration-200
    ${hover ? "hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]" : ""}
  `;

    const motionProps = hover
        ? {
            whileHover: { y: -8 },
            transition: { duration: 0.2, ease: "easeOut" as const },
        }
        : {};

    if (as === "a" && href) {
        return (
            <motion.a
                href={href}
                target={target}
                rel={rel}
                className={`${baseStyles} ${className}`}
                {...motionProps}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.div
            className={`${baseStyles} ${className}`}
            onClick={onClick}
            {...motionProps}
        >
            {children}
        </motion.div>
    );
}

// ========== SECTION WRAPPER ==========
// Wraps major sections with fade-in animation
interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    background?: "primary" | "secondary";
}

export function SectionWrapper({
    children,
    id,
    className = "",
    background = "primary",
}: SectionWrapperProps) {
    const bgClass = background === "secondary" ? "bg-slate-900/30" : "";

    return (
        <motion.section
            id={id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`py-24 ${bgClass} ${className}`}
        >
            {children}
        </motion.section>
    );
}

// ========== STAGGER CONTAINER ==========
// Container that staggers children animations
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.08,
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.1,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ========== STAGGER ITEM ==========
// Individual item within a stagger container
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ========== FADE IN UP ==========
// Simple fade in with upward motion
interface FadeInUpProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function FadeInUp({ children, delay = 0, className = "" }: FadeInUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
