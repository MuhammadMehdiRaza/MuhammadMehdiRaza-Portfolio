// ============================================
// MOTION VARIANTS - GLOBAL ANIMATION CONFIGS
// ============================================

import { Variants } from "framer-motion";

// ========== CARD HOVER VARIANTS ==========
// For project cards, experience cards, etc.
export const cardHoverVariants: Variants = {
    initial: {
        y: 0,
        scale: 1,
        boxShadow: "0 0 0 1px rgba(59, 130, 246, 0)",
    },
    hover: {
        y: -12,
        scale: 1.02,
        boxShadow: "0 0 30px 0 rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.5)",
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

// ========== SUBTLE LIFT VARIANTS ==========
// For smaller components like certification cards
export const subtleLiftVariants: Variants = {
    initial: {
        y: 0,
        scale: 1,
    },
    hover: {
        y: -6,
        scale: 1.01,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
};

// ========== SECTION LIFT VARIANTS ==========
// For entire section wrappers
export const sectionLiftVariants: Variants = {
    initial: {
        y: 0,
        scale: 1,
    },
    hover: {
        y: -8,
        scale: 1.005,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

// ========== FADE IN UP VARIANTS ==========
// For scroll reveal animations
export const fadeInUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// ========== STAGGER CONTAINER VARIANTS ==========
// For parent containers with staggered children
export const staggerContainerVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

// ========== STAGGER ITEM VARIANTS ==========
// For individual items within a staggered container
export const staggerItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

// ========== NAVBAR LINK VARIANTS ==========
// For underline animation expanding from center
export const navLinkVariants: Variants = {
    initial: {
        scaleX: 0,
    },
    hover: {
        scaleX: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
};

// ========== GLOW BORDER VARIANTS ==========
// For project cards with blue glow border
export const glowBorderVariants: Variants = {
    initial: {
        boxShadow: "inset 0 0 0 1px rgba(59, 130, 246, 0.1)",
    },
    hover: {
        boxShadow: "inset 0 0 0 2px rgba(59, 130, 246, 0.6), 0 0 40px 0 rgba(59, 130, 246, 0.2)",
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

// ========== SCALE TAP VARIANTS ==========
// For button press feedback
export const scaleTapVariants: Variants = {
    tap: {
        scale: 0.98,
    },
};

// ========== SPRING TRANSITION CONFIG ==========
export const springTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
};

// ========== EASE OUT TRANSITION CONFIG ==========
export const easeOutTransition = {
    duration: 0.3,
    ease: "easeOut" as const,
};
