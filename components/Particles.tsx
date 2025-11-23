'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Particles() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

    useEffect(() => {
        const particleArray = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5,
        }));
        setParticles(particleArray);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        background: Math.random() > 0.5 ? 'var(--neon-cyan)' : 'var(--neon-pink)',
                        boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
                    }}
                    animate={{
                        y: [0, -20, -10, 0],
                        x: [0, 10, -10, 0],
                        opacity: [0.6, 0.8, 0.4, 0.6],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
