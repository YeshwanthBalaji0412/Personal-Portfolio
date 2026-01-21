"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, X, FolderOpen } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export const Projects = () => {
    const [selectedTag, setSelectedTag] = useState<string>("All");
    const [selectedProject, setSelectedProject] = useState<typeof profile.projects[0] | null>(null);

    // Derive tags from projects
    const allTags = ["All", ...Array.from(new Set(profile.projects.flatMap(p => p.techStack)))];

    const filteredProjects = selectedTag === "All"
        ? profile.projects
        : profile.projects.filter(p => p.techStack.includes(selectedTag));

    return (
        <section id="projects" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <ScrollAnimation>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                            <span className="text-cyan-500">03.</span> Featured Projects
                            <span className="h-[1px] bg-gray-800 flex-grow max-w-[200px]"></span>
                        </h2>
                    </ScrollAnimation>

                    {/* Filters */}
                    <ScrollAnimation delay={0.2}>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {allTags.slice(0, 8).map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTag === tag
                                        ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/25"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </ScrollAnimation>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="h-full flex flex-col group cursor-pointer" hoverEffect={true}>
                                        <div className="flex justify-between items-start mb-4">
                                            <FolderOpen size={40} className="text-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            <div className="flex gap-3">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" onClick={e => e.stopPropagation()} className="text-gray-400 hover:text-white transition-colors">
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                                {project.link && (
                                                    <a href={project.link} target="_blank" onClick={e => e.stopPropagation()} className="text-gray-400 hover:text-white transition-colors">
                                                        <ExternalLink size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.techStack.map(tech => (
                                                <span key={tech} className="text-xs font-mono text-cyan-500/80">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="absolute inset-0" onClick={() => setSelectedProject(project)} />
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        />

                        <motion.div
                            layoutId={`project-${selectedProject.title}`}
                            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="p-6 md:p-8 overflow-y-auto">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                                        {selectedProject.title}
                                    </h2>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map(tech => (
                                            <Badge key={tech} variant="glow">{tech}</Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    {selectedProject.link && (
                                        <a href={selectedProject.link} target="_blank" className="flex-1">
                                            <Button className="w-full">
                                                <ExternalLink size={16} /> Live Demo
                                            </Button>
                                        </a>
                                    )}
                                    {selectedProject.github && (
                                        <a href={selectedProject.github} target="_blank" className="flex-1">
                                            <Button variant="outline" className="w-full">
                                                <Github size={16} /> Source Code
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
