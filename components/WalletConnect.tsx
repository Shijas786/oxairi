'use client';

import { useAppKit, useAppKitAccount, useDisconnect } from '@reown/appkit/react';
import { motion } from 'framer-motion';
import { useFarcaster } from '@/lib/farcaster-provider';

export default function WalletConnect() {
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount();
    const { disconnect } = useDisconnect();
    const { isFrameContext, context } = useFarcaster();

    const handleConnect = () => {
        open();
    };

    const handleDisconnect = () => {
        disconnect();
    };

    const shortenAddress = (addr: string) => {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    };

    return (
        <div className="space-y-4">
            {/* Airi Preview (when disconnected) */}
            {!isConnected && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="cyber-panel p-2 overflow-hidden"
                >
                    <motion.img
                        src="/airi-waiting.png"
                        alt="Airi waiting"
                        className="w-full h-32 object-cover object-top rounded"
                        style={{
                            filter: 'brightness(0.8) saturate(1.2)',
                        }}
                        animate={{
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="text-center text-xs text-cyan-400 mt-2 terminal-text">
                        Airi awaits your connection...
                    </div>
                </motion.div>
            )}

            {/* Connection Status */}
            <div className="cyber-panel p-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                            Neural Link Status
                        </div>
                        {isConnected ? (
                            <div className="flex items-center gap-2">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-green-400"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    style={{ boxShadow: '0 0 10px rgba(74, 222, 128, 0.8)' }}
                                />
                                <div className="text-sm font-mono neon-cyan">
                                    {shortenAddress(address || '')}
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-red-400"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    style={{ boxShadow: '0 0 10px rgba(248, 113, 113, 0.8)' }}
                                />
                                <div className="text-sm text-gray-400 font-mono">
                                    Disconnected
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Farcaster Badge */}
                    {isFrameContext && context?.user && (
                        <div className="text-xs cyber-panel px-3 py-1">
                            <div className="text-purple-400">
                                @{context.user.username || context.user.displayName}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Connect/Disconnect Button */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {isConnected ? (
                    <button
                        onClick={handleDisconnect}
                        className="cyber-button w-full"
                        style={{
                            borderColor: 'var(--neon-pink)',
                            color: 'var(--neon-pink)'
                        }}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <span>⚠</span>
                            <span>Disconnect Neural Link</span>
                        </div>
                    </button>
                ) : (
                    <button
                        onClick={handleConnect}
                        className="cyber-button w-full relative overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                        <div className="relative flex items-center justify-center gap-2">
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            >
                                ⚡
                            </motion.span>
                            <span>Initialize Neural Link</span>
                        </div>
                    </button>
                )}
            </motion.div>

            {/* Connection Info */}
            {isConnected && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="terminal-text text-xs text-center space-y-1"
                >
                    <div className="text-cyan-400">
                        {'>'} Neural pathway established
                    </div>
                    <div className="text-purple-400">
                        {'>'} Onchain identity verified
                    </div>
                    <div className="text-pink-400">
                        {'>'} Access level upgrading...
                    </div>
                </motion.div>
            )}
        </div>
    );
}
