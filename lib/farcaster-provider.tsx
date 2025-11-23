'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import sdk from '@farcaster/frame-sdk';

type FrameContext = any; // Farcaster frame context type

type FarcasterContextType = {
    isSDKLoaded: boolean;
    context: FrameContext | null;
    isFrameContext: boolean;
};

const FarcasterContext = createContext<FarcasterContextType>({
    isSDKLoaded: false,
    context: null,
    isFrameContext: false,
});

export function FarcasterProvider({ children }: { children: React.ReactNode }) {
    const [isSDKLoaded, setIsSDKLoaded] = useState(false);
    const [context, setContext] = useState<FrameContext | null>(null);
    const [isFrameContext, setIsFrameContext] = useState(false);

    useEffect(() => {
        const load = async () => {
            try {
                const frameContext = await sdk.context;
                setContext(frameContext);
                setIsFrameContext(true);

                sdk.actions.ready();
            } catch (error) {
                console.log('Not in Farcaster frame context');
                setIsFrameContext(false);
            } finally {
                setIsSDKLoaded(true);
            }
        };

        load();
    }, []);

    return (
        <FarcasterContext.Provider value={{ isSDKLoaded, context, isFrameContext }}>
            {children}
        </FarcasterContext.Provider>
    );
}

export function useFarcaster() {
    return useContext(FarcasterContext);
}
