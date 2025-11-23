'use client';

import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { base } from '@reown/appkit/networks';

// 1. Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || 'YOUR_PROJECT_ID';

// 2. Set up Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
    networks: [base],
    projectId,
    ssr: true,
});

// 3. Create modal with custom anime theme
const modal = createAppKit({
    adapters: [wagmiAdapter],
    networks: [base],
    projectId,
    defaultNetwork: base,
    features: {
        analytics: false,
    },
    themeMode: 'dark',
    themeVariables: {
        '--w3m-font-family': '"Orbitron", sans-serif',
        '--w3m-accent': '#00f0ff', // Neon cyan
        '--w3m-color-mix': '#ff0080', // Neon pink
        '--w3m-color-mix-strength': 20,
        '--w3m-border-radius-master': '4px',
        '--w3m-z-index': 9999,
    },
});

export { modal, wagmiAdapter };
