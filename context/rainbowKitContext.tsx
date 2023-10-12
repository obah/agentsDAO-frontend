"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig, sepolia } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import React from "react";

const { chains, publicClient } = configureChains([sepolia], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "Agents Dao",
  projectId: "852540ca8d1f1dc5d246d0fa982aac30",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export function RainbowKitContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
