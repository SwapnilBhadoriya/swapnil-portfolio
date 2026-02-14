'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Experience() {
    const experienceData = portfolioConfig.experience;

    return (
        <section
            id="experience"
            className="px-6 py-24 md:py-32 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-40 right-20 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/8 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="badge-primary mb-6 inline-block"
                    >
                        Experience
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className="section-heading">
                        Professional <span className="gradient-text">Journey</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="section-subheading mx-auto">
                        Building enterprise-grade solutions and delivering measurable impact
                        through full-stack development and cloud architecture
                    </motion.p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

                    <div className="space-y-10">
                        {experienceData.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                variants={fadeInUp}
                                className="relative group"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-8 w-12 h-12 rounded-full bg-card border-2 border-primary/60 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all hidden md:flex z-10">
                                    <Briefcase size={18} className="text-primary" />
                                </div>

                                {/* Content card */}
                                <div className="md:ml-20 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 md:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                                        <div>
                                            <div className="flex items-center gap-3 flex-wrap mb-2">
                                                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                                    {job.title}
                                                </h3>
                                                {job.award && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                                                        <Trophy size={12} />
                                                        {job.award}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-base text-primary font-semibold mb-1">
                                                {job.company}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {job.location}
                                            </p>
                                        </div>
                                        <div className="shrink-0">
                                            <span className="text-sm font-medium text-muted-foreground px-3 py-1.5 rounded-lg bg-secondary/50 whitespace-nowrap border border-border/40">
                                                {job.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-3 mb-6">
                                        {job.highlights.map((highlight, i) => (
                                            <li key={i} className="flex gap-3 group/item">
                                                <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary block" />
                                                <span className="text-sm md:text-base text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                                                    {highlight}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-5 border-t border-border/40">
                                        {job.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-secondary/50 text-foreground text-xs font-medium border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
