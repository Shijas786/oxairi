'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from '@/components/Particles';
import TerminalScreen from '@/components/TerminalScreen';
import IdentityScan from '@/components/IdentityScan';
import VeiledDashboard from '@/components/VeiledDashboard';
import AiriAppears from '@/components/AiriAppears';
import WalletConnect from '@/components/WalletConnect';
import WaitlistPanel from '@/components/WaitlistPanel';
import '@/lib/appkit';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showBootSequence, setShowBootSequence] = useState(true);

  const screens = [
    <TerminalScreen key="terminal" onNext={() => setCurrentScreen(1)} />,
    <IdentityScan key="identity" onNext={() => setCurrentScreen(2)} />,
    <VeiledDashboard key="dashboard" onNext={() => setCurrentScreen(3)} />,
    <AiriAppears key="airi" onComplete={() => setCurrentScreen(0)} />,
  ];

  if (showBootSequence) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-8"
        >
          {/* Boot logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-8xl font-black mb-4">
              <span className="neon-cyan">0x</span>
              <span className="neon-pink">AIRI</span>
            </div>
            <div className="text-sm text-gray-500 terminal-text">
              Project Classification: Unknown
            </div>
          </motion.div>

          {/* Boot messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-3 terminal-text text-sm max-w-md mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="text-cyan-400"
            >
              {'>'} Initializing neural interface...
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="text-purple-400"
            >
              {'>'} Loading protocol layer 0xAiri...
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0 }}
              className="text-pink-400"
            >
              {'>'} Establishing resonance frequency...
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4 }}
              className="text-yellow-400"
            >
              {'>'} Warning: Signal unstable
            </motion.div>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="max-w-md mx-auto"
          >
            <div className="loading-bar" />
          </motion.div>

          {/* Enter button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2 }}
          >
            <button
              onClick={() => setShowBootSequence(false)}
              className="cyber-button"
            >
              Initialize Connection
            </button>
          </motion.div>

          {/* Warning text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ delay: 3.5, duration: 3, repeat: Infinity }}
            className="text-xs text-gray-600 terminal-text"
          >
            Unauthorized access detected • Sector Iris-34 • Origin unknown
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative">
      <Particles />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation hints */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
        {screens.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentScreen(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === currentScreen
              ? 'bg-cyan-400 shadow-[0_0_10px_var(--neon-cyan)]'
              : 'bg-gray-700 hover:bg-gray-600'
              }`}
          />
        ))}
      </div>

      {/* Right Side Panels */}
      <div className="fixed top-4 right-4 z-50 max-w-sm space-y-4">
        <WalletConnect />
        <WaitlistPanel />
      </div>
    </main>
  );
}
