"use client";

import { useProfile } from "@/context/ProfileContext";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Card } from "@/components/ui/Card";
import { BookOpen, Award, ExternalLink } from "lucide-react";

export const Achievements = () => {
    const { profile } = useProfile();
    return (
        <section id="achievements" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-cyan-500">05.</span> Achievements
                        <span className="h-[1px] bg-gray-800 flex-grow max-w-[200px]"></span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Publications */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <BookOpen className="text-cyan-500" /> Publications
                            </h3>
                            <div className="space-y-6">
                                {profile.achievements.publications.map((pub, index) => (
                                    <ScrollAnimation key={index} delay={index * 0.1}>
                                        <Card className="h-full border-l-4 border-l-cyan-500">
                                            <h4 className="text-lg font-bold text-gray-200 mb-2">{pub.title}</h4>
                                            <p className="text-cyan-400 font-mono text-sm mb-2">{pub.conference}</p>
                                            <div className="flex justify-between items-center mt-4">
                                                <span className="text-gray-500 text-sm">{pub.year}</span>
                                                {pub.link && (
                                                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-300 transition-colors">
                                                        <ExternalLink size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </Card>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Award className="text-purple-500" /> Certifications
                            </h3>
                            <div className="space-y-6">
                                {profile.achievements.certifications.map((cert, index) => (
                                    <ScrollAnimation key={index} delay={0.2 + (index * 0.1)}>
                                        <Card className="h-full border-l-4 border-l-purple-500">
                                            <h4 className="text-lg font-bold text-gray-200 mb-2">{cert.title}</h4>
                                            <p className="text-purple-400 font-mono text-sm mb-2">{cert.issuer}</p>
                                            <div className="flex justify-between items-center mt-4">
                                                <span className="text-gray-500 text-sm">{cert.date}</span>
                                                {cert.link && (
                                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-300 transition-colors">
                                                        <ExternalLink size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </Card>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};
