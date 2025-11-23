'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TerminalScreenProps {
    onNext: () => void;
}

export default function TerminalScreen({ onNext }: TerminalScreenProps) {
    const [stability, setStability] = useState(32);
    const [energy, setEnergy] = useState(5293);
    const [syncLevel, setSyncLevel] = useState(0.02);
    const [scanning, setScanning] = useState(false);

    useEffect(() => {
        // Random fluctuation of metrics
        const interval = setInterval(() => {
            setStability(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 5)));
            setEnergy(prev => Math.max(0, prev + Math.floor((Math.random() - 0.5) * 100)));
            setSyncLevel(prev => Math.max(0, Math.min(1, prev + (Math.random() - 0.5) * 0.01)));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleScan = () => {
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
            onNext();
        }, 3000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative" style={{ zIndex: 10 }}>
            {/* Airi Character */}
            <motion.div
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.6, 0.8, 0.6], scale: [0.95, 1, 0.95] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <div className="relative">
                    {/* Anime character image */}
                    <motion.img
                        src="/airi-main.png"
                        alt="Airi"
                        className="w-80 h-auto relative z-10"
                        style={{
                            filter: 'drop-shadow(0 0 30px rgba(0, 240, 255, 0.5)) drop-shadow(0 0 60px rgba(255, 0, 128, 0.3))',
                            mixBlendMode: 'screen'
                        }}
                        animate={{
                            filter: [
                                'drop-shadow(0 0 30px rgba(0, 240, 255, 0.5)) drop-shadow(0 0 60px rgba(255, 0, 128, 0.3))',
                                'drop-shadow(0 0 40px rgba(0, 240, 255, 0.7)) drop-shadow(0 0 80px rgba(255, 0, 128, 0.5))',
                                'drop-shadow(0 0 30px rgba(0, 240, 255, 0.5)) drop-shadow(0 0 60px rgba(255, 0, 128, 0.3))'
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    {/* Glitch overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-pink-500/10 pointer-events-none"
                        animate={{
                            opacity: [0, 0.3, 0],
                            x: [0, 2, -2, 0]
                        }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                    />
                </div>
            </motion.div>

            <div className="max-w-2xl w-full space-y-8">
                {/* Signal Status */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <div className="text-4xl font-bold neon-cyan mb-2 glitch-text" data-text="SIGNAL CONNECTED">
                        SIGNAL CONNECTED
                    </div>
                    <div className="loading-bar mx-auto max-w-md" />
                </motion.div>

                {/* Metrics Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="cyber-panel p-8 space-y-6"
                >
                    <div className="grid grid-cols-3 gap-6">
                        {/* Stability */}
                        <div className="text-center">
                            <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Stability</div>
                            <motion.div
                                className="text-3xl font-bold neon-pink"
                                animate={{ opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                {stability.toFixed(0)}%
                            </motion.div>
                            <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                                    style={{ width: `${stability}%` }}
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            </div>
                        </div>

                        {/* Energy */}
                        <div className="text-center">
                            <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Energy</div>
                            <motion.div
                                className="text-3xl font-bold neon-cyan"
                                animate={{ opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                            >
                                {energy.toLocaleString()}
                            </motion.div>
                            <div className="mt-2 text-xs text-cyan-300">UNITS</div>
                        </div>

                        {/* Sync Level */}
                        <div className="text-center">
                            <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Sync Level</div>
                            <motion.div
                                className="text-3xl font-bold neon-purple"
                                animate={{ opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                            >
                                {syncLevel.toFixed(2)}
                            </motion.div>
                            <div className="mt-2 text-xs text-purple-300">RESONANCE</div>
                        </div>
                    </div>

                    {/* Japanese text overlay */}
                    <div className="absolute top-4 right-4 text-purple-500 opacity-20 text-xs jp-text">
                        起動中
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-3 gap-4"
                >
                    <button
                        onClick={handleScan}
                        className="cyber-button"
                        disabled={scanning}
                    >
                        {scanning ? 'SCANNING...' : 'Initiate Scan'}
                    </button>
                    <button
                        className="cyber-button opacity-50 cursor-not-allowed"
                        style={{ borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}
                    >
                        Decrypt Layer
                    </button>
                    <button
                        className="cyber-button opacity-50 cursor-not-allowed"
                        style={{ borderColor: 'var(--neon-pink)', color: 'var(--neon-pink)' }}
                    >
                        Access Unit-01
                    </button>
                </motion.div>

                {/* Scanning animation */}
                {scanning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="terminal-text text-center space-y-2"
                    >
                        <div className="neon-cyan">{'> '}Scanning onchain signature...</div>
                        <div className="neon-pink">{'> '}Neural resonance check initiated...</div>
                        <div className="neon-purple">{'> '}Analyzing stability matrix...</div>
                    </motion.div>
                )}

                {/* Bottom hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ delay: 1, duration: 3, repeat: Infinity }}
                    className="text-center text-xs text-gray-500 terminal-text"
                >
                    {'>'} Unknown protocol detected • Origin: Sector Iris-34
                </motion.div>
            </div>
        </div>
    );
}
