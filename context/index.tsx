'use client'

import { wagmiAdapter, projectId } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { base, mainnet } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
    console.warn('Project ID is not defined. Get one at https://dashboard.reown.com')
}

// Set up metadata for Farcaster Mini App
const metadata = {
    name: '0xAiri',
    description: 'Project 0xAiri - Farcaster Mini App with anime character interaction',
    url: 'https://0xairi.vercel.app',
    icons: ['https://0xairi.vercel.app/icon.png']
}

// Create the AppKit modal
const modal = createAppKit({
    adapters: [wagmiAdapter],
    projectId: projectId || '',
    networks: [base, mainnet],
    defaultNetwork: base,
    metadata: metadata,
    features: {
        analytics: true
    }
})

function ContextProvider({
    children,
    cookies
}: {
    children: ReactNode
    cookies: string | null
}) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default ContextProvider
