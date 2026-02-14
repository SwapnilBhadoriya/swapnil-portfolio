'use client';

import React from 'react';
import { portfolioConfig } from '@/lib/portfolio-config';

interface FooterProps {
    onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
    return (
        <footer className="px-6 py-10 border-t border-border/50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <button
                        onClick={() => onNavigate('hero')}
                        className="text-sm font-bold gradient-text hover:opacity-80 transition-opacity"
                    >
                        {portfolioConfig.personal.name}
                    </button>

                    <nav className="flex items-center gap-4 text-sm text-muted-foreground">
                        {portfolioConfig.navigation.slice(1).map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className="hover:text-primary transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} {portfolioConfig.personal.name}
                    </p>
                </div>
            </div>
        </footer>
    );
}
