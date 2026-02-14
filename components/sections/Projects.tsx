'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock, Github } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

export function Projects() {
    const featured = portfolioConfig.projects.filter((p) => p.featured);
    const otherCount = portfolioConfig.projects.filter((p) => !p.featured).length;

    return (
        <section
            id="projects"
            className="px-6 py-24 md:py-32 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-40 left-20 w-80 h-80 bg-accent/8 rounded-full blur-[100px]" />
                <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto relative">
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
                        Projects
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className="section-heading">
                        Featured <span className="gradient-text">Work</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="section-subheading mx-auto">
                        Real-world projects showcasing full-stack capabilities, from live
                        production apps to enterprise systems.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={staggerContainer}
                    className="space-y-6"
                >
                    {featured.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={scaleIn}
                            className="group rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className="p-7 md:p-9">
                                {/* Header */}
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-7">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span
                                                className={`text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider ${project.type === 'personal'
                                                        ? 'bg-accent/10 text-accent border border-accent/20'
                                                        : 'bg-primary/10 text-primary border border-primary/20'
                                                    }`}
                                            >
                                                {project.type === 'personal'
                                                    ? 'Personal'
                                                    : 'Enterprise'}
                                            </span>
                                            <span className="text-xs text-muted-foreground font-medium">
                                                {project.subtitle}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                            {project.description}
                                        </p>
                                    </div>

                                    {project.link ? (
                                        <motion.a
                                            href={`https://${project.link}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all font-medium text-sm group/link"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Visit Live
                                            <ExternalLink
                                                size={14}
                                                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                                            />
                                        </motion.a>
                                    ) : (
                                        <span className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/50 text-muted-foreground rounded-xl font-medium border border-border/40 text-sm">
                                            <Lock size={14} />
                                            Internal Project
                                        </span>
                                    )}
                                </div>

                                {/* Metrics */}
                                {project.metrics && (
                                    <div className="flex flex-wrap gap-3 mb-7">
                                        {project.metrics.map((metric, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-background/40 border border-border/40"
                                            >
                                                <span className="text-xl font-bold gradient-text">
                                                    {metric.value}
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    {metric.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Features */}
                                {project.features && (
                                    <div className="grid sm:grid-cols-2 gap-2.5 mb-7">
                                        {project.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                            >
                                                <span className="text-accent mt-0.5 shrink-0">✓</span>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 pt-5 border-t border-border/40">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-sm px-3 py-1.5 rounded-full bg-secondary/50 text-foreground border border-border/40 font-medium hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-colors"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* More projects link */}
                {otherCount > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <p className="text-sm text-muted-foreground mb-4">
                            Plus {otherCount} more enterprise project
                            {otherCount > 1 ? 's' : ''}
                        </p>
                        <a
                            href={portfolioConfig.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4 text-sm font-medium"
                        >
                            <Github size={16} />
                            View more on GitHub
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
