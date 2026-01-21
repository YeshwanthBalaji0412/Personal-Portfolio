"use client";

import { useProfile } from "@/context/ProfileContext";
import { Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
    const { profile } = useProfile();
    return (
        <footer className="py-8 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <div className="flex items-center justify-center gap-6 mb-6">
                    {profile.socials.github && (
                        <a href={profile.socials.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {profile.socials.linkedin && (
                        <a href={profile.socials.linkedin} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    )}
                    {profile.socials.instagram && (
                        <a href={profile.socials.instagram} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </a>
                    )}
                </div>
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
                <p className="text-gray-700 text-xs mt-2">
                    Built with Next.js, Tailwind CSS & Framer Motion.
                </p>
            </div>
        </footer>
    );
};
