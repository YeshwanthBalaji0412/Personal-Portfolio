"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-cyan-500">02.</span> Tech Stack
                        <span className="h-[1px] bg-gray-800 flex-grow max-w-[200px]"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {profile.skills.map((category, index) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full">
                                    <h3 className="text-xl font-bold mb-6 text-gray-200 border-l-4 border-cyan-500 pl-4">
                                        {category.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {category.items.map((item) => (
                                            <Badge key={item} variant="outline" className="hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
