'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Cloud, Target } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

const iconMap: Record<string, React.ElementType> = {
    code: Code,
    layout: Layout,
    server: Server,
    cloud: Cloud,
    target: Target,
};

const colorMap: Record<string, string> = {
    code: 'text-blue-500',
    layout: 'text-purple-500',
    server: 'text-emerald-500',
    cloud: 'text-orange-500',
    target: 'text-indigo-500',
};

const bgColorMap: Record<string, string> = {
    code: 'bg-blue-500/10 border-blue-500/20',
    layout: 'bg-purple-500/10 border-purple-500/20',
    server: 'bg-emerald-500/10 border-emerald-500/20',
    cloud: 'bg-orange-500/10 border-orange-500/20',
    target: 'bg-indigo-500/10 border-indigo-500/20',
};

export function Skills() {
    return (
        <section id="skills" className="px-6 py-24 md:py-32 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="badge-primary mb-6 inline-block"
                    >
                        Skills & Tools
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className="section-heading">
                        Technology <span className="gradient-text">Expertise</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="section-subheading mx-auto">
                        Technologies and tools I use to bring ideas to life. Built through
                        hands-on experience delivering enterprise-grade solutions.
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {portfolioConfig.skills.map((skillGroup, idx) => {
                        const IconComponent = iconMap[skillGroup.icon] || Code;
                        const iconColor = colorMap[skillGroup.icon] || 'text-primary';
                        const bgColor = bgColorMap[skillGroup.icon] || 'bg-primary/10 border-primary/20';

                        return (
                            <motion.div
                                key={idx}
                                variants={scaleIn}
                                className="group rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="flex items-center gap-3.5 mb-5">
                                        <div
                                            className={`w-11 h-11 rounded-xl ${bgColor} border flex items-center justify-center group-hover:scale-110 transition-transform`}
                                        >
                                            <IconComponent size={20} className={iconColor} />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                                {skillGroup.category}
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                {skillGroup.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded-lg bg-background/60 text-foreground text-sm font-medium border border-border/40 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
