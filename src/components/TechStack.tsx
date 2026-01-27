"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

export default function TechStack() {
    const categories = [
        { title: "Languages", items: TECH_STACK.languages },
        { title: "Frameworks", items: TECH_STACK.frameworks },
        { title: "Tools", items: TECH_STACK.tools },
    ];

    return (
        <div className="space-y-8">
            {categories.map((category) => (
                <div key={category.title}>
                    <h3 className="text-lg font-semibold text-slate-50 mb-4">
                        {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {category.items.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="px-4 py-3 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-200 flex items-center gap-2 group"
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-sm font-medium text-slate-300 group-hover:text-blue-400 transition-colors duration-200">
                                    {item.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
