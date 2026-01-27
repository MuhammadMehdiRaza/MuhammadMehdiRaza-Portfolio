"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                // Reset to idle after 5 seconds
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Something went wrong");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error. Please try again.");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-900/30">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-blue-500 text-sm font-medium uppercase tracking-widest mb-3">
                        Get In Touch
                    </p>
                    <h2 className="text-section text-slate-50">Contact Me</h2>
                    <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Contact Grid: Form Left, Info Right */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Form - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-6 sm:p-8 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 space-y-6"
                        >
                            {/* Success Message */}
                            <AnimatePresence>
                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <p className="text-green-400 text-sm font-medium">
                                            Message sent successfully! I&apos;ll get back to you soon.
                                        </p>
                                    </motion.div>
                                )}

                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                                    >
                                        <svg
                                            className="w-5 h-5 text-red-500 shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                        <p className="text-red-400 text-sm font-medium">
                                            {errorMessage}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm text-slate-400 mb-2"
                                    >
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-50 placeholder-slate-600 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-slate-400 mb-2"
                                    >
                                        Your Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-50 placeholder-slate-600 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm text-slate-400 mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-50 placeholder-slate-600 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm text-slate-400 mb-2"
                                >
                                    Your Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-50 placeholder-slate-600 focus:outline-none focus:border-blue-600 transition-colors duration-200 resize-none"
                                    placeholder="Hello, I'd like to discuss..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className={`px-8 py-3 text-sm font-medium text-white rounded-lg transition-all duration-200 flex items-center gap-2 ${status === "loading"
                                        ? "bg-blue-600/50 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                                    }`}
                            >
                                {status === "loading" ? (
                                    <>
                                        <svg
                                            className="animate-spin w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info Cards - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {/* Email Card */}
                        <motion.a
                            href={`mailto:${PERSONAL_INFO.email}`}
                            whileHover={{ y: -8 }}
                            className="p-5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-200 flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-200">
                                <svg
                                    className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-slate-50 font-medium">Email</h4>
                                <p className="text-sm text-slate-400 group-hover:text-blue-400 transition-colors duration-200">
                                    {PERSONAL_INFO.email}
                                </p>
                            </div>
                        </motion.a>

                        {/* LinkedIn Card */}
                        <motion.a
                            href={PERSONAL_INFO.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -8 }}
                            className="p-5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-200 flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-200">
                                <svg
                                    className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-200"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-slate-50 font-medium">LinkedIn</h4>
                                <p className="text-sm text-slate-400 group-hover:text-blue-400 transition-colors duration-200">
                                    Connect with me
                                </p>
                            </div>
                        </motion.a>

                        {/* Location Card */}
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="p-5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-200 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                                <svg
                                    className="w-5 h-5 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-slate-50 font-medium">Location</h4>
                                <p className="text-sm text-slate-400">Pakistan</p>
                            </div>
                        </motion.div>

                        {/* Social Profiles Card */}
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="p-5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-200"
                        >
                            <h4 className="text-slate-50 font-medium mb-4">
                                Social Profiles
                            </h4>
                            <div className="flex items-center gap-3">
                                <a
                                    href={PERSONAL_INFO.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href={PERSONAL_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
