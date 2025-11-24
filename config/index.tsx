import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base, mainnet } from '@reown/appkit/networks'

// Get projectId from Reown Dashboard: https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
    console.warn('Project ID is not defined. Wallet connection may not work properly.')
}

// Configure supported networks
export const networks = [base, mainnet]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }),
    ssr: true,
    projectId: projectId || '',
    networks
})

export const config = wagmiAdapter.wagmiConfig
