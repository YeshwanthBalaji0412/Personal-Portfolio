"use client";

import { motion } from "framer-motion";
import { useProfile } from "@/context/ProfileContext";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import Image from "next/image";

export const About = () => {
    const { profile } = useProfile();
    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-cyan-500">01.</span> About Me
                        <span className="h-[1px] bg-gray-800 flex-grow max-w-[200px]"></span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>{profile.about.bio}</p>
                            <p>
                                I focus on building inclusive products that solve real-world problems.
                                When I&apos;m not coding, you can find me exploring new tech stacks or gaming.
                            </p>

                            <div className="mt-8">
                                <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                    Highlights
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {profile.about.highlights.map((highlight) => (
                                        <Badge key={highlight} variant="glow">{highlight}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                            <Card className="h-full flex items-center justify-center p-6 bg-black/40">
                                <div className="text-center w-full">
                                    <div className="relative w-full aspect-square max-w-[250px] mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors shadow-2xl shadow-cyan-900/20">
                                        {/* Profile Image */}
                                        <Image
                                            src={profile.about.avatar}
                                            alt={profile.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            priority
                                        />
                                    </div>
                                    <p className="text-cyan-400 font-mono text-sm tracking-widest bg-cyan-950/30 py-1 px-3 rounded-full inline-block border border-cyan-500/20">
                                        Open to Work
                                    </p>
                                    <p className="text-gray-400 text-xs mt-3 flex items-center justify-center gap-2">
                                        Based in <span className="text-gray-200">{profile.location}</span>
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};
