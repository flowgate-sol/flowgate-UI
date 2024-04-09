"use client";

import { OracleCreation } from "@/components/create/oracle-creation";
import { Preview } from "@/components/create/preview";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { FlowgateSDK } from "flowgate-sdk";
import { useCallback, useState } from "react";

// todo: replace with actual pool list
const poolList = ["Raydium", "Orca"];

export const CreateHandler = () => {
  const [selectedTokenAddress, setSelectedTokenAddress] = useState<string>();
  const [selectedPools, setSelectedPools] = useState<string[]>([]);
  const [poolAddresses, setPoolAddresses] = useState<string[]>([]);

  const { wallet, publicKey } = useWallet();
  const onSubmit = useCallback(() => {
    if (!selectedTokenAddress || selectedPools.length === 0 || !poolAddresses) {
      //todo: show error or smth
      return;
    }
    let flowgateSDK = FlowgateSDK.init("https://devnet.helius-rpc.com/?api-key=de073198-45b1-48a0-aefc-9d54ae9fc7c3", wallet as Wallet);
    let poolIdArr: number[] = [];
    let poolPubkeys: PublicKey[] = []
    for(let i=0; i<selectedPools.length; i++){
      if(selectedPools[i] == "Orca") {
        poolIdArr.push(0);
      }
      if(selectedPools[i] == "Raydium") {
        poolIdArr.push(1);
      }
      poolPubkeys.push(new PublicKey(poolAddresses[i]));
    }

    flowgateSDK.initializeConfig({
      configAccount: new PublicKey(selectedTokenAddress),
      creator: publicKey as PublicKey,
      tokenMint: new PublicKey(selectedTokenAddress),
      numOfPools: selectedPools.length,
      protocolList: poolIdArr,
      poolDataList: poolPubkeys.map((x) => {return {poolAccount: x, numOfDependencies: 0, poolDependencies: []}})
    }).then((x) => {
      console.log("Oracle Created: ", x);
    })
    console.log("submit", selectedPools, selectedTokenAddress, poolAddresses);
  }, [selectedPools, selectedTokenAddress, poolAddresses]);

  return (
    <>
      <OracleCreation
        tokenAddress={selectedTokenAddress}
        setTokenAddress={setSelectedTokenAddress}
        poolAddresses={poolAddresses}
        setPoolAddresses={setPoolAddresses}
        poolList={poolList}
        setSelectedPools={setSelectedPools}
      />
      <Preview
        selectedPools={poolAddresses}
        selectedTokenAddress={selectedTokenAddress}
        onSubmit={onSubmit}
      />
    </>
  );
};
