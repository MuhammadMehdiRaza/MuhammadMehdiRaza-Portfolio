import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Background Colors
                background: {
                    DEFAULT: "#09090b", // zinc-950
                    secondary: "#18181b", // zinc-900
                    tertiary: "#27272a", // zinc-800
                },
                // Text Colors
                foreground: {
                    DEFAULT: "#fafafa", // zinc-50
                    muted: "#a1a1aa", // zinc-400
                    subtle: "#71717a", // zinc-500
                },
                // Accent Color - Royal Blue
                accent: {
                    DEFAULT: "#3b82f6", // blue-500
                    hover: "#2563eb", // blue-600
                    muted: "#1d4ed8", // blue-700
                    glow: "rgba(59, 130, 246, 0.3)",
                },
                // Border Colors
                border: {
                    DEFAULT: "#27272a", // zinc-800
                    subtle: "#3f3f46", // zinc-700
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "fade-up": "fadeUp 0.5s ease-out forwards",
                "scale-in": "scaleIn 0.2s ease-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.95)" },
                    "100%": { transform: "scale(1)" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};

export default config;
