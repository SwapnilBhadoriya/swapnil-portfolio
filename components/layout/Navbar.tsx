'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { portfolioConfig } from '@/lib/portfolio-config';

interface NavbarProps {
    activeSection: string;
    onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    const navItems = portfolioConfig.navigation;

    // Theme init
    useEffect(() => {
        const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (saved) {
            setTheme(saved);
            document.documentElement.classList.toggle('dark', saved === 'dark');
        }
    }, []);

    const toggleTheme = useCallback(() => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        localStorage.setItem('theme', next);
        document.documentElement.classList.toggle('dark', next === 'dark');
    }, [theme]);

    // Scroll detection
    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = useCallback(
        (id: string) => {
            setMobileMenuOpen(false);
            onNavigate(id);
        },
        [onNavigate]
    );

    const socialLinks = [
        { href: portfolioConfig.social.github, icon: Github, label: 'GitHub' },
        {
            href: portfolioConfig.social.linkedin,
            icon: Linkedin,
            label: 'LinkedIn',
        },
        { href: portfolioConfig.social.email, icon: Mail, label: 'Email' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-3.5">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <button
                            onClick={() => handleNavClick('hero')}
                            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
                            aria-label="Go to home"
                        >
                            <div className="relative w-9 h-9 rounded-xl overflow-hidden border-2 border-primary/40 group-hover:border-primary transition-colors">
                                <Image
                                    src={portfolioConfig.personal.avatar || '/placeholder.svg'}
                                    alt="Avatar"
                                    fill
                                    className="object-cover"
                                    sizes="36px"
                                />
                            </div>
                            <span className="hidden sm:inline text-sm font-bold gradient-text">
                                {portfolioConfig.personal.name.split(' ')[0]}
                            </span>
                        </button>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-0.5 bg-secondary/30 backdrop-blur-sm rounded-full px-1.5 py-1 border border-border/40">
                            {navItems.map(({ id, label }) => (
                                <button
                                    key={id}
                                    onClick={() => handleNavClick(id)}
                                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${activeSection === id
                                            ? 'text-primary-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                >
                                    {activeSection === id && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-primary rounded-full"
                                            transition={{
                                                type: 'spring',
                                                bounce: 0.2,
                                                duration: 0.5,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10">{label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Desktop actions */}
                        <div className="hidden md:flex items-center gap-0.5">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <div className="w-px h-5 bg-border mx-1" />
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={label !== 'Email' ? '_blank' : undefined}
                                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                                    className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={label}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Mobile actions */}
                        <div className="md:hidden flex items-center gap-1">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed inset-0 top-[60px] bg-background/95 backdrop-blur-xl z-40"
                    >
                        <div className="p-6 space-y-1">
                            {navItems.map(({ id, label }, idx) => (
                                <motion.button
                                    key={id}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.04 }}
                                    onClick={() => handleNavClick(id)}
                                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${activeSection === id
                                            ? 'bg-primary/10 text-primary'
                                            : 'hover:bg-secondary/50'
                                        }`}
                                >
                                    {label}
                                </motion.button>
                            ))}
                            <div className="flex gap-3 pt-6 border-t border-border mt-4">
                                {socialLinks.map(({ href, icon: Icon }, idx) => (
                                    <a
                                        key={idx}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl hover:bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Icon size={22} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
