# 🌀 Project 0xAiri - Farcaster Mini App Setup

## ✅ What's Been Done

Your Project 0xAiri has been transformed into a **Farcaster Mini App** with Web3 wallet integration! Here's what was added:

### 🔧 New Features

1. **Reown Wallet Connect** - Professional wallet connection via AppKit
2. **Farcaster Frame SDK** - Auto-detection of Farcaster context
3. **Custom Anime Wallet UI** - Cyberpunk-themed wallet interface
4. **Base Network** - Configured to use Base mainnet by default
5. **Neural Link Metaphor** - Wallet connection styled as "Neural Link"

### 📁 New Files Created

```
lib/
├── wagmi.ts                    # Wagmi configuration for Base network
├── appkit.ts                   # Reown AppKit with custom anime theme
├── farcaster-provider.tsx      # Farcaster SDK context provider
└── web3-provider.tsx           # Web3 provider wrapper

components/
└── WalletConnect.tsx           # Custom anime-themed wallet UI

public/
└── .well-known/
    └── farcaster.json          # Farcaster manifest (needs customization)
```

## 🚀 Getting Started

### 1. Get Your Reown Project ID

1. Go to [cloud.reown.com](https://cloud.reown.com)
2. Create a new project
3. Copy your Project ID

### 2. Configure Environment Variables

Create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Reown Project ID:

```env
NEXT_PUBLIC_REOWN_PROJECT_ID=your_actual_project_id_here
```

### 3. Update Farcaster Manifest

Edit `public/.well-known/farcaster.json`:

1. Update `homeUrl` with your deployed domain
2. Update `iconUrl` and `splashImageUrl` with your actual URLs
3. Update `accountAssociation` (follow [Farcaster docs](https://docs.farcaster.xyz/reference/frames/spec))

### 4. Run the App

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3002](http://localhost:3002)

## 🎨 Wallet Connect Features

### Neural Link Status Panel

The top-right panel shows:
- **Connection Status** - Green (connected) / Red (disconnected) pulsing indicator
- **Wallet Address** - Shortened format (0x1234...5678)
- **Farcaster Badge** - Shows username when in Farcaster frame

### Connect Button

- **Disconnected**: Shows "Initialize Neural Link" with animated glow
- **Connected**: Shows "Disconnect Neural Link" in pink
- **Animations**: Neon effects, rotating icons, flowing gradients

### Custom Reown Modal Theme

The wallet connection modal has been fully customized with:
- **Cyberpunk gradient background** (#0a0a0f → #1a0a2e → #0f0820)
- **Neon cyan accent** (#00f0ff)
- **Pink highlights** (#ff0080)
- **Orbitron font** matching the app aesthetic
- **Glowing hover effects** on wallet options

## 🔗 Farcaster Integration

### Auto-Detection

The app automatically detects if it's running inside a Farcaster frame:

```tsx
import { useFarcaster } from '@/lib/farcaster-provider';

const { isFrameContext, context } = useFarcaster();

if (isFrameContext && context?.user) {
  console.log('Farcaster user:', context.user.username);
}
```

### Frame Context Benefits

When running as a Farcaster frame:
- Shows user's Farcaster username
- Access to Farcaster user data
- Can trigger Farcaster-specific actions
- Deep integration with Warpcast

## 🌐 Deployment

### Deploy to Vercel

```bash
vercel

# Or connect via GitHub
# Vercel will auto-deploy on push
```

### Environment Variables in Vercel

Add these in your Vercel project settings:
- `NEXT_PUBLIC_REOWN_PROJECT_ID` - Your Reown project ID

### Farcaster Mini App Submission

1. Deploy your app to a public URL
2. Update `public/.well-known/farcaster.json` with actual URLs
3. Create app icons (512x512 recommended)
4. Submit to Farcaster via [Warpcast Mini Apps](https://warpcast.com/~/channel/miniapps)

## 🎯 Wallet UI Customization

The wallet component uses these CSS classes from `globals.css`:

```css
.cyber-panel    /* Panel with border and background */
.cyber-button   /* Neon-bordered button */
.neon-cyan      /* Cyan glowing text */
.neon-pink      /* Pink glowing text */
.terminal-text  /* Monospace terminal font */
```

### Modify Wallet Theme

Edit `lib/appkit.ts` to change colors:

```ts
themeVariables: {
  '--w3m-accent': '#your-color',       // Primary accent
  '--w3m-color-mix': '#your-color',    // Secondary color
  '--w3m-border-radius-master': '4px', // Border radius
}
```

### Custom Modal Styles

Additional styling in `app/layout.tsx` using CSS injection for the Web Component shadow DOM.

## 🔐 Networks Configured

Currently configured for:
- **Base Mainnet** (default)

To add more networks, edit `lib/wagmi.ts` and `lib/appkit.ts`:

```ts
import { base, optimism, arbitrum } from 'wagmi/chains';

chains: [base, optimism, arbitrum]
```

## 📱 Mobile Optimization

The wallet UI is responsive and works on:
- Desktop browsers
- Mobile web browsers
- Warpcast in-app browser
- Other Farcaster clients

## 🎭 The Aesthetic

Wallet connection maintains the 0xAiri mystery:
- "Neural Link" instead of "Wallet Connection"
- "Onchain Identity Verified" messages
- Cyberpunk status indicators
- Fits seamlessly with the terminal aesthetic

## 🐛 Troubleshooting

### "Module not found" errors

Run with `--legacy-peer-deps`:
```bash
npm install --legacy-peer-deps
```

### Wallet modal won't open

Check that `NEXT_PUBLIC_REOWN_PROJECT_ID` is set correctly in `.env.local`

### Farcaster frame not detected

- Test in actual Warpcast app
- Check `public/.well-known/farcaster.json` is accessible
- Verify manifest URLs are correct

### Port already in use

The dev server auto-switches ports (3000 → 3001 → 3002). Check console for actual port.

## 📚 Documentation Links

- [Reown AppKit Docs](https://docs.reown.com/appkit/overview)
- [Wagmi Docs](https://wagmi.sh)
- [Farcaster Frame Spec](https://docs.farcaster.xyz/reference/frames/spec)
- [Base Network](https://base.org)

## ✨ Next Steps

1. **Get Reown Project ID** and add to `.env.local`
2. **Test wallet connection** locally
3. **Deploy to Vercel** or your hosting platform
4. **Update Farcaster manifest** with real URLs
5. **Create app icons** (512x512 PNG)
6. **Submit to Farcaster** as a mini app

---

**Status**: Ready for Web3 integration! 🚀

Neural pathway established. Wallet connection active. Farcaster frame compatible.
