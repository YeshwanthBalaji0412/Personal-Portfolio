"use client";

import { useProfile } from "@/context/ProfileContext";
import { Github, Linkedin, Instagram, Download } from "lucide-react";

export const Footer = () => {
    const { profile } = useProfile();
    return (
        <footer className="py-12 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col items-center text-center gap-6">

                {/* Social Links */}
                <div className="flex items-center justify-center gap-6">
                    {profile.socials.github && (
                        <a href={profile.socials.github} target="_blank" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                            <Github size={22} />
                        </a>
                    )}
                    {profile.socials.linkedin && (
                        <a href={profile.socials.linkedin} target="_blank" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                            <Linkedin size={22} />
                        </a>
                    )}
                    {profile.socials.instagram && (
                        <a href={profile.socials.instagram} target="_blank" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                            <Instagram size={22} />
                        </a>
                    )}
                </div>

                {/* Resume Download */}
                {profile.resume && (
                    <a
                        href={profile.resume}
                        download
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-500 transition-colors duration-300 group mt-2"
                    >
                        <span className="group-hover:underline decoration-cyan-500/50 underline-offset-4">Download Resume</span>
                        <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
                    </a>
                )}

                {/* Stack Info */}
                <div className="text-gray-600 text-sm flex flex-col gap-1">
                    <p>Designed & Built by <span className="text-gray-400">{profile.name}</span></p>
                    <p className="text-xs opacity-70">
                        Built with Next.js, Tailwind CSS & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
};
