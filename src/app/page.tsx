'use client';
import { OracleCard } from "@/components/oracle/card";
import { SubmitButton } from "@/components/common/submit-button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FlowgateSDK } from "flowgate-sdk"
import { useWallet } from "@solana/wallet-adapter-react";
import { Wallet } from "@coral-xyz/anchor";
import axios from "axios";

export default function Home() {
  const { wallet } = useWallet();
  let [oracleList, setOracleList] = useState([
    {
      name: "Solana",
      symbol: "SOL",
      icon: "/icons/solana.svg",
      price: 150,
      liquidity: 1000,
      supportedBy: ["/icons/orca.svg", "/icons/ray.svg"],
    },
    {
      name: "Solana",
      symbol: "SOL",
      icon: "/icons/solana.svg",
      price: 150,
      liquidity: 1000,
      supportedBy: ["/icons/orca.svg", "/icons/ray.svg"],
    },
    {
      name: "Solana",
      symbol: "SOL",
      icon: "/icons/solana.svg",
      price: 150,
      liquidity: 1000,
      supportedBy: ["/icons/orca.svg", "/icons/ray.svg"],
    },
    {
      name: "Solana",
      symbol: "SOL",
      icon: "/icons/solana.svg",
      price: 150,
      liquidity: 1000,
      supportedBy: ["/icons/orca.svg", "/icons/ray.svg"],
    },
    {
      name: "Solana",
      symbol: "SOL",
      icon: "/icons/solana.svg",
      price: 150,
      liquidity: 1000,
      supportedBy: ["/icons/orca.svg", "/icons/ray.svg"],
    },
    {
      name: "Solana",
      symbol: "SOL",
      icon: "/icons/solana.svg",
      price: 150,
      liquidity: 1000,
      supportedBy: ["/icons/orca.svg", "/icons/ray.svg"],
    },
  ]);
  useEffect(() => {
    const fetchData = () => {
      let flowgateSDK = FlowgateSDK.init("https://devnet.helius-rpc.com/?api-key=de073198-45b1-48a0-aefc-9d54ae9fc7c3", wallet as Wallet);
      axios.get("https://token.jup.ag/strict").then((res: any) => {
        let tokenlist = res.data;
        flowgateSDK.update().then(() => {
          let oracleListTemp = [...oracleList];
          for(let i = 0; i<flowgateSDK.oracleConfigs.length; i++) {
            let oracleConfig = flowgateSDK.oracleConfigs[i];
            for(let token of tokenlist) {
              if(token == oracleConfig.tokenMint.toBase58()) {
                oracleListTemp[i].name = token.symbol;
                oracleListTemp[i].icon = token.logoURI;
              }
            }
          }
          oracleListTemp.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()))
          setOracleList(oracleListTemp);
          flowgateSDK.simulatePriceData().then((data: any) => {
            let oracleListTemp = [...oracleList];
            console.log(data);
            for(let i = 0; i < oracleListTemp.length; i++) {
              oracleListTemp[i].price = data[i].price / 10000000;
              let tokenAddr = data[i].token.toBase58();
              for(let token of tokenlist) {
                if(tokenAddr == token.address) {
                  oracleListTemp[i].name = token.symbol;
                  oracleListTemp[i].icon = token.logoURI;
                }
              }
            }
            oracleListTemp.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()))
            setOracleList(oracleListTemp);

            setTimeout(fetchData, 2000);
          })
        })
      });
    }

    fetchData();
  }, []);


  return (
    <section className="flex-1 px-8 py-16">
      <div className="grid w-full grid-cols-3 gap-8">
        {oracleList.map((oracle, index) => (
          <OracleCard
            key={index}
            name={oracle.name}
            symbol={oracle.symbol}
            icon={oracle.icon}
            price={oracle.price}
            // liquidity={oracle.liquidity}
            supportedBy={oracle.supportedBy}
          />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Link href="/create">
          <SubmitButton>CREATE ORACLE</SubmitButton>
        </Link>
      </div>
    </section>
  );
}
