'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface VeiledDashboardProps {
    onNext: () => void;
}

export default function VeiledDashboard({ onNext }: VeiledDashboardProps) {
    const [selectedModule, setSelectedModule] = useState<string | null>(null);

    const modules = [
        {
            id: 'protocol',
            title: 'Protocol Access',
            status: 'LOCKED',
            icon: '🔒',
            color: 'cyan',
            description: 'Authorization level insufficient'
        },
        {
            id: 'shards',
            title: 'Shards',
            status: '0 / 7 Discovered',
            icon: '💎',
            color: 'purple',
            description: 'Fragment locations unknown'
        },
        {
            id: 'sync',
            title: 'Sync Grade',
            status: 'Unverified',
            icon: '⚡',
            color: 'pink',
            description: 'Resonance calibration pending'
        },
        {
            id: 'pulse',
            title: 'Pulse Layer',
            status: 'Offline',
            icon: '📡',
            color: 'cyan',
            description: 'Neural network disconnected'
        },
        {
            id: 'airdrop',
            title: 'Airdrop Path',
            status: 'Uncalculated',
            icon: '🎁',
            color: 'purple',
            description: 'Distribution matrix unavailable'
        },
        {
            id: 'sequence',
            title: 'Genesis Sequence',
            status: 'Hidden',
            icon: '🌀',
            color: 'pink',
            description: 'Origin point classified'
        }
    ];

    const handleModuleClick = (moduleId: string) => {
        setSelectedModule(moduleId);
        setTimeout(() => setSelectedModule(null), 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative" style={{ zIndex: 10 }}>
            <div className="max-w-6xl w-full space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <div className="text-6xl font-black">
                        <span className="neon-cyan">0x</span>
                        <span className="neon-pink">AIRI</span>
                    </div>
                    <div className="text-sm text-gray-400 terminal-text uppercase tracking-widest">
                        Neural Interface Dashboard
                    </div>
                    <div className="loading-bar max-w-md mx-auto" />
                </motion.div>

                {/* User status bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="cyber-panel p-6"
                >
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="text-xs text-gray-500 uppercase">Access Level</div>
                            <div className="text-2xl font-bold neon-purple">L0: Wanderer</div>
                        </div>
                        <div className="space-y-1 text-right">
                            <div className="text-xs text-gray-500 uppercase">Resonance</div>
                            <div className="text-2xl font-bold neon-cyan">Unstable</div>
                        </div>
                        <div className="space-y-1 text-right">
                            <div className="text-xs text-gray-500 uppercase">Neural Sync</div>
                            <div className="text-2xl font-bold neon-pink">0.02%</div>
                        </div>
                    </div>
                </motion.div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <button
                                onClick={() => handleModuleClick(module.id)}
                                className="cyber-panel p-6 w-full text-left relative overflow-hidden group hover:scale-105 transition-transform"
                            >
                                {/* Lock overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="text-4xl">🔒</div>
                                </div>

                                <div className="space-y-4 relative">
                                    <div className="flex items-start justify-between">
                                        <div className="text-3xl">{module.icon}</div>
                                        <div className={`text-xs px-2 py-1 rounded border ${module.color === 'cyan' ? 'border-cyan-500 text-cyan-400' :
                                                module.color === 'purple' ? 'border-purple-500 text-purple-400' :
                                                    'border-pink-500 text-pink-400'
                                            }`}>
                                            {module.status}
                                        </div>
                                    </div>

                                    <div>
                                        <div className={`text-lg font-bold ${module.color === 'cyan' ? 'neon-cyan' :
                                                module.color === 'purple' ? 'neon-purple' :
                                                    'neon-pink'
                                            }`}>
                                            {module.title}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-2 terminal-text">
                                            {module.description}
                                        </div>
                                    </div>

                                    {/* Progress indicator (fake) */}
                                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className={`h-full ${module.color === 'cyan' ? 'bg-cyan-500' :
                                                    module.color === 'purple' ? 'bg-purple-500' :
                                                        'bg-pink-500'
                                                }`}
                                            initial={{ width: '0%' }}
                                            animate={{ width: selectedModule === module.id ? '100%' : '0%' }}
                                            transition={{ duration: 2 }}
                                        />
                                    </div>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Message when module clicked */}
                {selectedModule && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="cyber-panel p-6 text-center"
                    >
                        <div className="terminal-text space-y-2">
                            <div className="neon-cyan">{'>'} Attempting module access...</div>
                            <div className="neon-pink">{'>'} Authorization denied. Insufficient sync level.</div>
                            <div className="text-gray-500">{'>'} Continue observation to increase resonance.</div>
                        </div>
                    </motion.div>
                )}

                {/* Bottom actions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-4 justify-center"
                >
                    <button onClick={onNext} className="cyber-button">
                        Continue Sequence
                    </button>
                    <button className="cyber-button opacity-50 cursor-not-allowed" style={{ borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}>
                        Request Access
                    </button>
                </motion.div>

                {/* Mysterious hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    className="text-center terminal-text text-xs text-gray-600"
                >
                    <div>Shard 02 detected in Sector Iris-34</div>
                    <div className="mt-1">Your signature is compatible • Protocol awakening soon...</div>
                </motion.div>
            </div>
        </div>
    );
}
