'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface IdentityScanProps {
    onNext: () => void;
}

export default function IdentityScan({ onNext }: IdentityScanProps) {
    const [scanProgress, setScanProgress] = useState(0);
    const [scanComplete, setScanComplete] = useState(false);
    const [username] = useState('Wanderer_' + Math.floor(Math.random() * 9999).toString().padStart(4, '0'));

    useEffect(() => {
        const interval = setInterval(() => {
            setScanProgress(prev => {
                if (prev >= 100) {
                    setScanComplete(true);
                    return 100;
                }
                return prev + 2;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scanComplete) {
            setTimeout(() => onNext(), 3000);
        }
    }, [scanComplete, onNext]);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative" style={{ zIndex: 10 }}>
            {/* Airi's eyes in the dark background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.8, 0.5, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative"
                >
                    {/* Left eye */}
                    <motion.div
                        className="absolute w-8 h-8 rounded-full"
                        style={{
                            left: '-60px',
                            top: '0',
                            background: 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)',
                            boxShadow: '0 0 40px var(--neon-cyan), 0 0 80px var(--neon-cyan)'
                        }}
                        animate={{
                            opacity: [1, 0.3, 1],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Right eye */}
                    <motion.div
                        className="absolute w-8 h-8 rounded-full"
                        style={{
                            right: '-60px',
                            top: '0',
                            background: 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)',
                            boxShadow: '0 0 40px var(--neon-cyan), 0 0 80px var(--neon-cyan)'
                        }}
                        animate={{
                            opacity: [1, 0.3, 1],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                    />
                </motion.div>
            </div>

            <div className="max-w-3xl w-full space-y-8 relative">
                {/* Japanese text background */}
                <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                    <motion.div
                        className="text-6xl neon-pink font-bold"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                        animate={{ y: [0, -50, 0] }}
                        transition={{ duration: 20, repeat: Infinity }}
                    >
                        <div>異常信号検出</div>
                        <div>身元確認中</div>
                        <div>神経接続</div>
                        <div>不安定な共鳴</div>
                    </motion.div>
                </div>

                {/* Scan header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <div className="text-5xl font-black neon-cyan mb-4 tracking-wider">
                        IDENTITY SCAN
                    </div>
                    <div className="text-sm text-gray-400 terminal-text">
                        {'>'} Neural signature analysis in progress...
                    </div>
                </motion.div>

                {/* Scan frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="cyber-panel p-10 space-y-8"
                >
                    {/* Username display */}
                    <div className="text-center space-y-4">
                        <div className="text-xs text-gray-500 uppercase tracking-widest">
                            Detected Signature
                        </div>
                        <motion.div
                            className="text-4xl font-bold neon-text"
                            style={{ color: 'var(--neon-cyan)' }}
                            animate={{
                                textShadow: [
                                    '0 0 20px var(--neon-cyan)',
                                    '0 0 40px var(--neon-cyan), 0 0 60px var(--neon-pink)',
                                    '0 0 20px var(--neon-cyan)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {username}
                        </motion.div>
                    </div>

                    {/* Scan progress */}
                    <div className="space-y-3">
                        <div className="flex justify-between text-xs terminal-text">
                            <span className="text-cyan-400">Scanning onchain signature...</span>
                            <span className="neon-pink">{scanProgress}%</span>
                        </div>
                        <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-cyan-500/30">
                            <motion.div
                                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                                style={{ width: `${scanProgress}%` }}
                                animate={{
                                    boxShadow: [
                                        '0 0 10px var(--neon-cyan)',
                                        '0 0 20px var(--neon-pink)',
                                        '0 0 10px var(--neon-cyan)'
                                    ]
                                }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        </div>
                    </div>

                    {/* Scan logs */}
                    <div className="space-y-2 terminal-text text-xs">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: scanProgress > 20 ? 1 : 0.3, x: 0 }}
                            className="text-cyan-300"
                        >
                            {'>'} Checking neural pathway integrity... {scanProgress > 20 ? '✓' : '...'}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: scanProgress > 40 ? 1 : 0.3, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-purple-300"
                        >
                            {'>'} Analyzing resonance frequency... {scanProgress > 40 ? '✓' : '...'}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: scanProgress > 60 ? 1 : 0.3, x: 0 }}
                            transition={{ delay: 1 }}
                            className="text-pink-300"
                        >
                            {'>'} Decrypting protocol layer... {scanProgress > 60 ? '✓' : '...'}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: scanProgress > 80 ? 1 : 0.3, x: 0 }}
                            transition={{ delay: 1.5 }}
                            className="text-yellow-300"
                        >
                            {'>'} Re-running neural resonance check... {scanProgress > 80 ? '⚠' : '...'}
                        </motion.div>
                    </div>

                    {/* Scan result */}
                    {scanComplete && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-4 pt-6 border-t border-cyan-500/30"
                        >
                            <div className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
                                ⚠ Signal Unstable
                            </div>
                            <div className="text-xs text-gray-400 terminal-text">
                                Pattern recognized but incomplete. Further synchronization required.
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Bottom status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center terminal-text text-xs text-gray-600"
                >
                    <div>Protocol: 0xAiri v0.02 • Sector: Iris-34</div>
                    <div className="mt-1">Status: Attempting synchronization...</div>
                </motion.div>
            </div>
        </div>
    );
}
