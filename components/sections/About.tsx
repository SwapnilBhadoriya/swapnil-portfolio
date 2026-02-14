'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

export function About() {
    const edu = portfolioConfig.education[0];

    return (
        <section id="about" className="px-6 py-24 md:py-32 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                >
                    <motion.span
                        variants={fadeInUp}
                        className="badge-primary mb-6 inline-block"
                    >
                        {portfolioConfig.about.title}
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className="section-heading">
                        Turning ideas into <span className="gradient-text">reality</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="section-subheading mb-16">
                        Crafting scalable solutions with meticulous attention to detail and
                        user experience.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* About Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="lg:col-span-3 space-y-6"
                    >
                        {portfolioConfig.about.paragraphs.map((paragraph, idx) => (
                            <motion.p
                                key={idx}
                                variants={fadeInUp}
                                className="text-base md:text-lg text-muted-foreground leading-relaxed"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </motion.div>

                    {/* Right sidebar: Stats + Education */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {portfolioConfig.stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={scaleIn}
                                    className="text-center p-4 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm"
                                >
                                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education Card */}
                        <motion.div
                            variants={scaleIn}
                            className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                    <GraduationCap size={20} />
                                </div>
                                <h3 className="font-bold text-foreground">Education</h3>
                            </div>

                            <div className="space-y-2">
                                <p className="font-semibold text-sm text-foreground">
                                    {edu.degree}
                                </p>
                                <p className="text-sm text-primary font-medium">
                                    {edu.field}
                                </p>
                                <p className="text-sm text-muted-foreground">{edu.school}</p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={12} />
                                        {edu.location}
                                    </span>
                                    <span>{edu.period}</span>
                                </div>
                                <div className="flex items-center gap-2 pt-2">
                                    <Award size={14} className="text-accent" />
                                    <span className="text-sm font-semibold text-accent">
                                        CGPA: {edu.cgpa}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
