'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface HeroProps {
    onNavigate: (sectionId: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

    return (
        <motion.section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
            style={{ opacity: heroOpacity }}
        >
            <motion.div className="max-w-4xl w-full mx-auto" style={{ y: heroY }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative z-10"
                >
                    {/* Availability Badge */}
                    <motion.div variants={fadeInUp} className="mb-8">
                        <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                            </span>
                            {portfolioConfig.personal.tagline}
                        </span>
                    </motion.div>

                    {/* Name & Greeting */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-muted-foreground mb-3 font-medium"
                    >
                        Hey, I&apos;m{' '}
                        <span className="text-foreground font-semibold">
                            {portfolioConfig.personal.name}
                        </span>{' '}
                        👋
                    </motion.p>

                    {/* Main Headline */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.08] tracking-tighter"
                    >
                        I build{' '}
                        <span className="gradient-text-animated">
                            <TypeAnimation
                                sequence={[
                                    'cloud solutions',
                                    2500,
                                    'web applications',
                                    2500,
                                    'digital experiences',
                                    2500,
                                    'scalable systems',
                                    2500,
                                ]}
                                wrapper="span"
                                speed={50}
                                className="inline-block"
                                repeat={Infinity}
                            />
                        </span>
                    </motion.h1>

                    {/* Title */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-primary font-semibold mb-5"
                    >
                        {portfolioConfig.personal.title}
                    </motion.p>

                    {/* Bio */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl"
                    >
                        {portfolioConfig.personal.bio}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <MagneticButton
                            onClick={() =>
                                (window.location.href = portfolioConfig.social.email)
                            }
                            className="btn-primary inline-flex items-center justify-center gap-2"
                        >
                            <Sparkles size={18} />
                            Let&apos;s Work Together
                        </MagneticButton>
                        <MagneticButton
                            onClick={() => onNavigate('projects')}
                            className="btn-secondary inline-flex items-center justify-center gap-2 group"
                        >
                            View My Work
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </MagneticButton>
                        <a
                            href={portfolioConfig.personal.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </motion.div>

                    {/* Social proof line */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-14 pt-8 border-t border-border/40"
                    >
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                            {portfolioConfig.stats.map((stat, idx) => (
                                <div key={idx} className="flex items-baseline gap-2">
                                    <span className="text-2xl md:text-3xl font-bold gradient-text">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
                >
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
