'use client';

import { useState, useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';

interface FarcasterSignInResult {
    fid: number;
    username?: string;
    displayName?: string;
    pfpUrl?: string;
    custody?: string;
    verifications?: string[];
}

export function useFarcasterSignIn() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userData, setUserData] = useState<FarcasterSignInResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const signIn = async () => {
        try {
            setIsLoading(true);
            setError(null);

            // Generate a nonce for security (in production, get this from your backend)
            const nonce = crypto.randomUUID();

            // Sign in with Farcaster
            const result = await sdk.actions.signIn({
                nonce,
                acceptAuthAddress: true // Accept auth address for wallet linking
            });

            if (result) {
                const userData: FarcasterSignInResult = {
                    fid: (result as any).fid || 0,
                    username: (result as any).username,
                    displayName: (result as any).displayName,
                    pfpUrl: (result as any).pfpUrl,
                    custody: (result as any).custody,
                    verifications: (result as any).verifications
                };

                setUserData(userData);
                setIsSignedIn(true);
                return userData;
            }
        } catch (err: any) {
            console.error('Farcaster sign-in error:', err);
            setError(err.message || 'Failed to sign in with Farcaster');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const signOut = () => {
        setIsSignedIn(false);
        setUserData(null);
        setError(null);
    };

    return {
        isSignedIn,
        userData,
        isLoading,
        error,
        signIn,
        signOut
    };
}
