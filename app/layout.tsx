import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { FarcasterProvider } from "@/lib/farcaster-provider";
import ContextProvider from "@/context";

export const metadata: Metadata = {
  title: "Project 0xAiri - Classified",
  description: "Signal unstable. Neural pathway detected.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie');

  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Custom Reown Modal Theme - Anime Cyberpunk */
          w3m-modal,
          wcm-modal,
          w3m-network-button {
            --w3m-font-family: 'Orbitron', sans-serif !important;
            --w3m-accent: #00f0ff !important;
            --w3m-background: #0a0a0f !important;
            --w3m-color-overlay: rgba(10, 10, 15, 0.95) !important;
          }
          
          /* Modal background with anime aesthetic */
          w3m-modal::part(modal),
          wcm-modal::part(modal) {
            background: linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0f0820 100%) !important;
            border: 1px solid rgba(0, 240, 255, 0.3) !important;
            box-shadow: 0 0 40px rgba(0, 240, 255, 0.2), 0 0 80px rgba(157, 0, 255, 0.1) !important;
          }
          
          /* Buttons with neon glow */
          w3m-button,
          wcm-button {
            border: 2px solid #00f0ff !important;
            background: rgba(0, 240, 255, 0.1) !important;
            transition: all 0.3s ease !important;
          }
          
          w3m-button:hover,
          wcm-button:hover {
            box-shadow: 0 0 20px #00f0ff, inset 0 0 20px rgba(0, 240, 255, 0.2) !important;
            background: rgba(0, 240, 255, 0.15) !important;
          }
          
          /* Wallet items with hover glow */
          w3m-wallet-button:hover,
          wcm-wallet-button:hover {
            background: rgba(157, 0, 255, 0.1) !important;
            box-shadow: 0 0 15px rgba(157, 0, 255, 0.3) !important;
          }
          
          /* Text colors */
          w3m-text,
          wcm-text {
            color: #00f0ff !important;
          }
          
          /* Close button */
          w3m-modal-router > div > w3m-modal-header button {
            color: #ff0080 !important;
          }
        `}} />
      </head>
      <body>
        <div className="scan-line" />
        <ContextProvider cookies={cookies}>
          <FarcasterProvider>
            {children}
          </FarcasterProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
