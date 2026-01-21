"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useProfile } from "@/context/ProfileContext";
import { Copy, Check, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export const Contact = () => {
    const { profile } = useProfile();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="max-w-3xl mx-auto text-center">
                    <span className="text-cyan-500 font-mono text-sm tracking-wider uppercase mb-4 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">amazing</span> together.</h2>

                    <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                        Whether you have a project in mind or just want to say hi, I&apos;m always open to discussing new opportunities and ideas.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                        <Card className="flex items-center gap-4 px-8 py-4 bg-black/50 hover:bg-black/70 cursor-pointer" onClick={handleCopy}>
                            <Mail className="text-cyan-500" />
                            <span className="text-xl md:text-2xl font-mono text-gray-200">{profile.email}</span>
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors ml-2">
                                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-500" />}
                            </button>
                            {copied && (
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute -top-10 right-0 bg-green-500/90 text-black text-xs px-2 py-1 rounded"
                                >
                                    Copied!
                                </motion.span>
                            )}
                        </Card>
                    </div>

                    <form className="max-w-md mx-auto space-y-4 text-left glass-panel p-8 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <Button className="w-full">
                            Send Message <Send size={16} />
                        </Button>
                    </form>

                </ScrollAnimation>
            </div>
        </section>
    );
};
