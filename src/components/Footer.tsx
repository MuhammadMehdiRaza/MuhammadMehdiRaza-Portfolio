"use client";

import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="section-container py-6 text-center">
                <p className="text-sm text-slate-700 dark:text-slate-400">
                    © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
