"use client";

import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com";

  return (
    <ConnectionProvider endpoint={RPC_ENDPOINT}>
      <WalletProvider
        autoConnect={true}
        wallets={[]}
      >
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};
