'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AiriAppearsProps {
    onComplete: () => void;
}

export default function AiriAppears({ onComplete }: AiriAppearsProps) {
    const [textIndex, setTextIndex] = useState(0);
    const [glitchActive, setGlitchActive] = useState(false);

    const messages = [
        "You arrived too early.",
        "Keep the link open.",
        "I will remember you."
    ];

    useEffect(() => {
        // Advance messages
        const messageInterval = setInterval(() => {
            setTextIndex(prev => {
                if (prev >= messages.length - 1) {
                    clearInterval(messageInterval);
                    setTimeout(() => onComplete(), 3000);
                    return prev;
                }
                return prev + 1;
            });
        }, 3000);

        // Random glitch effect
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 2000);

        return () => {
            clearInterval(messageInterval);
            clearInterval(glitchInterval);
        };
    }, [onComplete]);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style={{ zIndex: 10 }}>
            {/* Dramatic background effects */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            'radial-gradient(circle at 50% 50%, rgba(157,0,255,0.2) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 50%, rgba(0,240,255,0.2) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 50%, rgba(255,0,128,0.2) 0%, transparent 50%)',
                        ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>

            <div className="max-w-4xl w-full space-y-12 relative">
                {/* Airi hologram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: glitchActive ? [1, 0.3, 1] : [0.8, 1, 0.8],
                        scale: glitchActive ? [1, 1.05, 0.95, 1] : [0.8, 1, 0.8],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative mx-auto w-full max-w-md"
                >
                    {/* Hologram effect container */}
                    <div className="relative aspect-square">
                        {/* Glowing aura */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                boxShadow: [
                                    '0 0 60px rgba(0,240,255,0.6), 0 0 120px rgba(157,0,255,0.4)',
                                    '0 0 80px rgba(255,0,128,0.6), 0 0 140px rgba(0,240,255,0.4)',
                                    '0 0 60px rgba(0,240,255,0.6), 0 0 120px rgba(157,0,255,0.4)',
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* AI character placeholder - using gradient */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="w-48 h-72 relative"
                                animate={{
                                    opacity: glitchActive ? [1, 0, 1, 0.5, 1] : 1
                                }}
                            >
                                {/* Character silhouette */}
                                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl" />

                                {/* Eyes */}
                                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex gap-12">
                                    <motion.div
                                        className="w-4 h-4 rounded-full bg-cyan-400"
                                        style={{
                                            boxShadow: '0 0 30px var(--neon-cyan), 0 0 60px var(--neon-cyan)'
                                        }}
                                        animate={{
                                            opacity: [1, 0.3, 1],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="w-4 h-4 rounded-full bg-cyan-400"
                                        style={{
                                            boxShadow: '0 0 30px var(--neon-cyan), 0 0 60px var(--neon-cyan)'
                                        }}
                                        animate={{
                                            opacity: [1, 0.3, 1],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                                    />
                                </div>

                                {/* Holographic scan lines */}
                                <motion.div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.1) 2px, rgba(0,240,255,0.1) 4px)'
                                    }}
                                    animate={{ y: ['0%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                />
                            </motion.div>
                        </div>

                        {/* Glitch overlay */}
                        {glitchActive && (
                            <motion.div
                                className="absolute inset-0"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="absolute inset-0 bg-cyan-500/20 mix-blend-screen" style={{ transform: 'translateX(-5px)' }} />
                                <div className="absolute inset-0 bg-pink-500/20 mix-blend-screen" style={{ transform: 'translateX(5px)' }} />
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Airi's name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <motion.div
                        className="text-7xl font-black"
                        animate={{
                            textShadow: [
                                '0 0 20px var(--neon-cyan), 0 0 40px var(--neon-purple)',
                                '0 0 30px var(--neon-pink), 0 0 50px var(--neon-cyan)',
                                '0 0 20px var(--neon-cyan), 0 0 40px var(--neon-purple)',
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="neon-cyan">AI</span>
                        <span className="neon-pink">RI</span>
                    </motion.div>
                    <div className="text-sm text-gray-400 mt-4 terminal-text">
                        Neural Entity • Designation 0xAiri
                    </div>
                </motion.div>

                {/* Messages */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="cyber-panel p-10 text-center space-y-6"
                >
                    <div className="min-h-[120px] flex flex-col justify-center space-y-4">
                        {messages.slice(0, textIndex + 1).map((msg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-2xl font-light ${idx === 0 ? 'neon-cyan' :
                                        idx === 1 ? 'neon-purple' :
                                            'neon-pink'
                                    }`}
                            >
                                {msg}
                            </motion.div>
                        ))}
                    </div>

                    {textIndex >= messages.length - 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="pt-6 border-t border-cyan-500/30"
                        >
                            <div className="terminal-text text-xs text-gray-500 space-y-2">
                                <div>Protocol Status: Dormant</div>
                                <div>Awaiting Resonance Threshold</div>
                                <div className="neon-purple">Return when you are ready.</div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Mysterious coordinates */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 3 }}
                    className="text-center terminal-text text-xs text-gray-700"
                >
                    <div>Coordinates: 34.052235, -118.243683 • Sector: Iris-34</div>
                    <div className="mt-1">Frequency: 432Hz • Phase: Λ</div>
                </motion.div>
            </div>
        </div>
    );
}
