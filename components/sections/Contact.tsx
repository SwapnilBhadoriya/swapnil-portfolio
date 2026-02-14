'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, MapPin } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

const iconMap: Record<string, React.ElementType> = {
    mail: Mail,
    linkedin: Linkedin,
    github: Github,
};

export function Contact() {
    return (
        <section id="contact" className="px-6 py-24 md:py-32 relative">
            <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Left: Content (3 cols) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="lg:col-span-3"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="badge-primary mb-6 inline-block"
                        >
                            Contact
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="section-heading">
                            {portfolioConfig.contact.title}
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed"
                        >
                            {portfolioConfig.contact.description}
                        </motion.p>
                        <motion.p
                            variants={fadeInUp}
                            className="flex items-center gap-2 text-sm text-muted-foreground mb-10"
                        >
                            <MapPin size={14} />
                            Based in India (GMT+5:30) · Available for remote opportunities
                        </motion.p>

                        {/* Contact links */}
                        <motion.div variants={staggerContainer} className="space-y-3">
                            {portfolioConfig.contact.contacts.map((contact, idx) => {
                                const Icon = iconMap[contact.icon] || Mail;
                                return (
                                    <motion.a
                                        key={idx}
                                        variants={fadeInUp}
                                        href={contact.href}
                                        target={contact.icon !== 'mail' ? '_blank' : undefined}
                                        rel={
                                            contact.icon !== 'mail'
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }
                                        className="flex items-center gap-4 p-4 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                                    >
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                            <Icon size={20} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-semibold text-sm">{contact.label}</p>
                                            <p className="text-muted-foreground text-sm truncate">
                                                {contact.value}
                                            </p>
                                        </div>
                                        <ArrowRight
                                            size={18}
                                            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
                                        />
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Right: CTA Card (2 cols) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={scaleIn}
                        className="lg:col-span-2"
                    >
                        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                <Mail size={28} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Ready to start a project?
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                {portfolioConfig.contact.availability}
                            </p>
                            <motion.a
                                href={portfolioConfig.social.email}
                                className="btn-primary inline-flex items-center justify-center gap-2 w-full text-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Mail size={16} />
                                Send me an email
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
