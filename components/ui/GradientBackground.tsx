import React from 'react';

export function GradientBackground() {
    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
            aria-hidden="true"
        >
            {/* Primary gradient orb */}
            <div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full animate-pulse-slow will-change-transform"
                style={{
                    background:
                        'radial-gradient(circle, oklch(0.68 0.25 270 / 0.12), transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />
            {/* Secondary gradient orb */}
            <div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-float will-change-transform"
                style={{
                    background:
                        'radial-gradient(circle, oklch(0.75 0.18 175 / 0.10), transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
            {/* Accent orb */}
            <div
                className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full animate-float-delayed will-change-transform"
                style={{
                    background:
                        'radial-gradient(circle, oklch(0.6 0.2 300 / 0.06), transparent 70%)',
                    filter: 'blur(50px)',
                }}
            />
            {/* Noise texture */}
            <div className="absolute inset-0 bg-noise" />
        </div>
    );
}
