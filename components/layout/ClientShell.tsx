'use client';

import { useState, useEffect, useCallback } from 'react';
import { portfolioConfig } from '@/lib/portfolio-config';
import { GradientBackground } from '@/components/ui/GradientBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export function ClientShell() {
    const [activeSection, setActiveSection] = useState('hero');
    const navItems = portfolioConfig.navigation;

    // Scroll spy with IntersectionObserver
    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1],
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            const visibleEntries = entries.filter((entry) => entry.isIntersecting);
            if (visibleEntries.length > 0) {
                const mostVisible = visibleEntries.reduce((prev, current) =>
                    current.intersectionRatio > prev.intersectionRatio ? current : prev
                );
                setActiveSection(mostVisible.target.id);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [navItems]);

    const scrollToSection = useCallback((sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (!el) return;
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }, []);

    return (
        <div className="bg-background text-foreground min-h-screen">
            <GradientBackground />
            <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

            <main className="relative">
                <Hero onNavigate={scrollToSection} />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
                <Footer onNavigate={scrollToSection} />
            </main>
        </div>
    );
}
