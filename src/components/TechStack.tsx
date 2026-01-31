"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";

type TabKey = keyof typeof TECH_STACK;

interface Tab {
    key: TabKey;
    label: string;
}

// Icon mapper to convert string icon names to React components
const getIconComponent = (iconName: string) => {
    // Check FontAwesome icons first
    if (iconName.startsWith("Fa")) {
        return (FaIcons as any)[iconName];
    }
    // Check Simple Icons
    if (iconName.startsWith("Si")) {
        return (SiIcons as any)[iconName];
    }
    // Check VS Code icons
    if (iconName.startsWith("Vsc")) {
        return (VscIcons as any)[iconName];
    }
    return FaIcons.FaCircle;
};

export default function TechStack() {
    const tabs: Tab[] = [
        { key: "frontend", label: "Frontend" },
        { key: "backend", label: "Backend" },
        { key: "frameworks", label: "Frameworks" },
        { key: "languages", label: "Languages" },
        { key: "aiml", label: "AI/ML" },
        { key: "deployment", label: "Deployment" },
        { key: "versionControl", label: "Version Control" },
        { key: "os", label: "OS" },
        { key: "ide", label: "IDE" },
    ];

    const [activeTab, setActiveTab] = useState<TabKey>("frontend");

    return (
        <div className="space-y-10">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3 justify-center">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`relative px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${activeTab === tab.key
                            ? "text-white bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                            : "text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/50"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content - Icon Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                    {TECH_STACK[activeTab].map((item, index) => {
                        const IconComponent = getIconComponent(item.icon);
                        return (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)",
                                }}
                                className="group relative p-6 rounded-xl bg-white dark:bg-slate-900/50 dark:backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-600/50 shadow-sm dark:shadow-none transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-default"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                                    {IconComponent && <IconComponent className="w-full h-full" />}
                                </div>

                                {/* Name */}
                                <span className="text-sm font-medium text-text-primary text-center leading-tight">
                                    {item.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
