"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal, BrainCircuit, Palette } from "lucide-react";
import { useProfile } from "@/context/ProfileContext";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const activeSection = useActiveSection(navLinks.map((link) => link.href.substring(1)));
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const { mode, toggleMode } = useProfile();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <button
                        onClick={toggleMode}
                        className="flex items-center gap-2 text-xl font-bold tracking-tighter hover:text-cyan-400 transition-colors group"
                    >
                        {mode === 'dev' && <Terminal className="w-6 h-6 text-cyan-500 group-hover:rotate-12 transition-transform" />}
                        {mode === 'ai' && <BrainCircuit className="w-6 h-6 text-purple-500 group-hover:pulse transition-transform" />}
                        {mode === 'ux' && <Palette className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />}

                        <span className="font-mono">
                            {mode === 'dev' ? 'DEV.PROFILE' : (mode === 'ai' ? 'AI.PROFILE' : 'UX.PROFILE')}
                        </span>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-all hover:text-cyan-400 relative",
                                    activeSection === link.href.substring(1) ? "text-cyan-400" : "text-gray-400"
                                )}
                            >
                                {link.name}
                                {activeSection === link.href.substring(1) && (
                                    <motion.span
                                        layoutId="activeSection"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            className="text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Scroll Progress */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-500 origin-left"
                    style={{ scaleX }}
                />
            </motion.header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                >
                    <div className="flex flex-col gap-6 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-light text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
};
