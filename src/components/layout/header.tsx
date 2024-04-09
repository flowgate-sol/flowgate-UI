"use client";

import { useCallback, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export const Header = () => {
  const { wallets, publicKey, select, connected, disconnect } = useWallet();

  const onClickConnectWallet = useCallback(() => {
    const phantom = wallets.find((wallet) => wallet.adapter.name === "Phantom");
    const phantomName = phantom?.adapter.name;
    console.log(phantomName);
    if (!phantomName) {
      return;
    }

    select(phantomName);
  }, [select, wallets]);

  useEffect(() => {
    console.log("publicKey", publicKey?.toBase58());
  }, [publicKey]);

  return (
    <header className="flex justify-between bg-header px-7 py-5">
      <h1 className="text-2xl font-bold text-color">
        FLOWGATE ORACLE AGGREGATOR
      </h1>
      {!connected && (
        <button
          className="text-color-light"
          onClick={onClickConnectWallet}
        >
          CONNECT WALLET
        </button>
      )}
      {connected && (
        <div className="flex items-center">
          <button
            className="text-color-light"
            onClick={() => disconnect()}
          >
            DISCONNECT
          </button>
        </div>
      )}
    </header>
  );
};
