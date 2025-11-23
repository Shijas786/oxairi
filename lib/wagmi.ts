import { http, cookieStorage, createConfig, createStorage } from 'wagmi';
import { base } from 'wagmi/chains';

export const wagmiConfig = createConfig({
    chains: [base],
    transports: {
        [base.id]: http(),
    },
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
});
