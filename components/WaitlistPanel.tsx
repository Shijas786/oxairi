'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppKitAccount } from '@reown/appkit/react';
import sdk from '@farcaster/frame-sdk';

export default function WaitlistPanel() {
    const { address, isConnected } = useAppKitAccount();
    const [isJoined, setIsJoined] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleJoinWaitlist = async () => {
        if (!isConnected) {
            alert('Please connect your wallet first!');
            return;
        }

        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsJoined(true);
        setIsLoading(false);
    };

    const handleCast = async () => {
        const castText = `Just joined Project 0xAiri 🌀\n\nMysterious anime protocol going live soon...\n\n✨ Airdrop Alpha\n⚡ Token Launch TBA\n🎯 Early Access Secured\n\nAre you ready for the unknown?`;

        try {
            // Try Farcaster SDK first
            await sdk.actions.openUrl(`https://warpcast.com/~/compose?text=${encodeURIComponent(castText)}`);
        } catch (e) {
            // Fallback to direct URL
            window.open(`https://warpcast.com/~/compose?text=${encodeURIComponent(castText)}`, '_blank');
        }
    };

    const handleAddToMiniApp = async () => {
        try {
            await sdk.actions.addFrame();
        } catch (e) {
            alert('Please add this app from within Warpcast!');
        }
    };

    return (
        <div className="space-y-4">
            {/* Airdrop Alert */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="cyber-panel p-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10"
            >
                <div className="flex items-start gap-3">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl"
                    >
                        ⚡
                    </motion.div>
                    <div className="flex-1 space-y-1">
                        <div className="text-sm font-bold neon-pink">
                            AIRDROP ALPHA DETECTED
                        </div>
                        <div className="text-xs text-gray-400 terminal-text">
                            Token launch imminent. Early wallets rewarded.
                        </div>
                        <div className="text-xs neon-cyan">
                            🎁 Shards: TBA • 💎 Supply: Limited • 🚀 Chain: Base
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Waitlist Section */}
            <div className="cyber-panel p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-sm font-bold text-white">
                            Join Waitlist
                        </div>
                        <div className="text-xs text-gray-500 terminal-text">
                            {isJoined ? 'Position secured ✓' : 'Early access priority'}
                        </div>
                    </div>
                    {isJoined && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-2xl"
                        >
                            ✅
                        </motion.div>
                    )}
                </div>

                {!isJoined ? (
                    <motion.button
                        onClick={handleJoinWaitlist}
                        disabled={isLoading || !isConnected}
                        className="cyber-button w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                >
                                    ⚙️
                                </motion.div>
                                <span>Securing Position...</span>
                            </div>
                        ) : !isConnected ? (
                            'Connect Wallet First'
                        ) : (
                            <div className="flex items-center justify-center gap-2">
                                <span>🎯</span>
                                <span>Join Waitlist</span>
                            </div>
                        )}
                    </motion.button>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="terminal-text text-xs space-y-1 text-center text-green-400"
                    >
                        <div>{'>'} Neural signature recorded</div>
                        <div>{'>'} Priority access granted</div>
                        <div>{'>'} Airdrop eligibility: ACTIVE</div>
                    </motion.div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
                {/* Cast Button */}
                <motion.button
                    onClick={handleCast}
                    className="cyber-button text-xs py-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderColor: 'var(--neon-purple)' }}
                >
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-lg">📢</span>
                        <span>Cast It</span>
                    </div>
                </motion.button>

                {/* Add to Mini App */}
                <motion.button
                    onClick={handleAddToMiniApp}
                    className="cyber-button text-xs py-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderColor: 'var(--neon-cyan)' }}
                >
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-lg">➕</span>
                        <span>Add App</span>
                    </div>
                </motion.button>
            </div>

            {/* Stats Counter */}
            <div className="cyber-panel p-3 bg-black/40">
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                        <div className="text-lg font-bold neon-cyan terminal-text">
                            <motion.span
                                key={Math.random()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {Math.floor(Math.random() * 1000 + 3400)}
                            </motion.span>
                        </div>
                        <div className="text-[10px] text-gray-500">Waitlist</div>
                    </div>
                    <div>
                        <div className="text-lg font-bold neon-pink terminal-text">
                            <motion.span
                                key={Math.random()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {Math.floor(Math.random() * 100 + 850)}
                            </motion.span>
                        </div>
                        <div className="text-[10px] text-gray-500">Connected</div>
                    </div>
                    <div>
                        <div className="text-lg font-bold neon-purple terminal-text">
                            <motion.span
                                key={Math.random()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                7
                            </motion.span>
                        </div>
                        <div className="text-[10px] text-gray-500">Shards</div>
                    </div>
                </div>
            </div>

            {/* Launch Countdown */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center terminal-text text-xs text-yellow-400"
            >
                <div>⚠ TOKEN LAUNCH: CLASSIFIED</div>
                <div className="text-[10px] text-gray-600">
                    Signal detected • Sector Iris-34 • Origin unknown
                </div>
            </motion.div>
        </div>
    );
}
