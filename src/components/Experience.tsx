"use client";

import { profile } from "@/data/profile";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-cyan-500">04.</span> Experience & Education
                        <span className="h-[1px] bg-gray-800 flex-grow max-w-[200px]"></span>
                    </h2>

                    <div className="space-y-12">
                        {/* Experience */}
                        <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-10">
                            {profile.experience.map((job, index) => (
                                <ScrollAnimation
                                    key={index}
                                    delay={index * 0.1}
                                    className="relative pl-8 md:pl-12"
                                >
                                    <span className="absolute -left-[5px] top-2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                        <span className="text-sm font-mono text-cyan-500/80 flex items-center gap-2">
                                            <Calendar size={14} /> {job.period}
                                        </span>
                                    </div>

                                    <h4 className="text-lg text-gray-400 font-medium mb-4 flex items-center gap-2">
                                        <Briefcase size={16} /> {job.company}
                                    </h4>

                                    <p className="text-gray-400 leading-relaxed">
                                        {job.description}
                                    </p>
                                </ScrollAnimation>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-10 pt-10">
                            {profile.education.map((edu, index) => (
                                <ScrollAnimation
                                    key={index}
                                    delay={0.3 + (index * 0.1)}
                                    className="relative pl-8 md:pl-12"
                                >
                                    <span className="absolute -left-[5px] top-2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                        <span className="text-sm font-mono text-purple-400 flex items-center gap-2">
                                            <Calendar size={14} /> {edu.period}
                                        </span>
                                    </div>

                                    <h4 className="text-lg text-gray-400 font-medium flex items-center gap-2">
                                        <GraduationCap size={16} /> {edu.institution}
                                    </h4>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>

                </ScrollAnimation>
            </div>
        </section>
    );
};
