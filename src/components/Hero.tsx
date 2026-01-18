"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, ArrowRight, Instagram } from "lucide-react";

export const Hero = () => {
    const SocialIcon = ({ type, url }: { type: string; url: string }) => {
        let Icon = Mail;
        if (type === "github") Icon = Github;
        if (type === "linkedin") Icon = Linkedin;
        if (type === "instagram") Icon = Instagram;

        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all hover:scale-110 border border-white/10 hover:border-cyan-500/50"
            >
                <Icon size={20} />
            </a>
        );
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-3 py-1 mb-6 text-sm font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-800/50 rounded-full">
                        System Online
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{profile.name}</span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl text-gray-400 mb-8 font-light">
                        {profile.role}
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
                        {profile.headline}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                        <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects <ArrowRight size={18} />
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        {Object.entries(profile.socials).map(([key, url]) => (
                            <SocialIcon key={key} type={key} url={url} />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
            </motion.div>
        </section>
    );
};
