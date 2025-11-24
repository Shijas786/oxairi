# 🎌 Project 0xAiri - Farcaster Mini App

A cyberpunk anime-themed Farcaster Mini App with wallet connection and onchain interactions.

![Project 0xAiri](./public/icon.png)

## ⚡ Features

- 🎨 **Anime Cyberpunk UI** - Custom designed character (Airi) with neon aesthetics
- 🔗 **Reown AppKit Integration** - Professional wallet connection using WalletConnect v2
- 🟣 **Farcaster SDK** - Native Farcaster sign-in and frame support
- ⛓️ **Base Network** - Optimized for Base mainnet transactions
- 📱 **Mini App Ready** - Full Farcaster manifest with metadata
- 🎭 **Engagement Features** - Waitlist, airdrop alerts, Cast sharing

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Reown Project ID from [dashboard.reown.com](https://dashboard.reown.com)

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Add your Reown Project ID to .env.local
NEXT_PUBLIC_PROJECT_ID=your_reown_project_id_here

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the app.

## 🔧 Configuration

### Reown AppKit Setup

1. Get your Project ID from [Reown Dashboard](https://dashboard.reown.com)
2. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_PROJECT_ID=your_project_id_here
   ```

### Farcaster Manifest

The Farcaster manifest is located at `/public/.well-known/farcaster.json`:

```json
{
  "accountAssociation": {
    "header": "...",
    "payload": "...",
    "signature": "..."
  },
  "frame": {
    "version": "1",
    "name": "0xAiri",
    "homeUrl": "https://0xairi.vercel.app",
    "iconUrl": "https://0xairi.vercel.app/icon.png",
    "splashImageUrl": "https://0xairi.vercel.app/screenshot.png",
    "splashBackgroundColor": "#0a0a0f",
    "webhookUrl": "https://0xairi.vercel.app/api/webhook"
  }
}
```

## 📁 Project Structure

```
0xairi/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── WalletConnect.tsx  # Wallet connection UI
│   ├── TerminalScreen.tsx # Main terminal interface
│   ├── WaitlistPanel.tsx  # Engagement panel
│   └── ...
├── config/                # Configuration
│   └── index.tsx          # Wagmi/Reown config
├── context/               # React context providers
│   └── index.tsx          # AppKit context provider
├── hooks/                 # Custom React hooks
│   └── useFarcasterSignIn.ts
├── lib/                   # Utility libraries
│   ├── farcaster-provider.tsx
│   └── ...
└── public/                # Static assets
    ├── .well-known/
    │   └── farcaster.json
    ├── icon.png
    └── screenshot.png
```

## 🎯 Key Components

### Wallet Connection

Uses **Reown AppKit** (WalletConnect v2) with Wagmi:

```typescript
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';

const { open } = useAppKit();
const { address, isConnected } = useAppKitAccount();
```

### Farcaster Sign-In

```typescript
import { useFarcasterSignIn } from '@/hooks/useFarcasterSignIn';

const { signIn, isSignedIn, userData } = useFarcasterSignIn();
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Deploy to production
npx vercel --prod
```

### Environment Variables on Vercel

Add these in your Vercel project settings:

- `NEXT_PUBLIC_PROJECT_ID` - Your Reown Project ID

## 🔗 Links

- **Live App**: [https://0xairi.vercel.app](https://0xairi.vercel.app)
- **GitHub**: [https://github.com/Shijas786/oxairi](https://github.com/Shijas786/oxairi)
- **Reown Dashboard**: [https://dashboard.reown.com](https://dashboard.reown.com)
- **Farcaster Docs**: [https://miniapps.farcaster.xyz](https://miniapps.farcaster.xyz)

## 📚 Documentation

- [Reown AppKit Docs](https://docs.reown.com/appkit/next/core/installation)
- [Farcaster Mini Apps](https://miniapps.farcaster.xyz/docs/sdk/actions/sign-in)
- [Base Network](https://base.org)

## 🎨 Customization

### Styling

The app uses custom CSS variables for the cyberpunk theme:

```css
:root {
  --neon-cyan: #00f0ff;
  --neon-pink: #ff0080;
  --neon-purple: #9d00ff;
  --deep-black: #0a0a0f;
}
```

### Anime Character

Character images are in `/public/`:
- `airi-main.png` - Main character
- `airi-waiting.png` - Waiting state

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Reown AppKit** - Wallet connection
- **Wagmi** - React hooks for Ethereum
- **Viem** - TypeScript Ethereum library
- **Farcaster Frame SDK** - Farcaster integration

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

---

Built with 💜 for the Farcaster community
