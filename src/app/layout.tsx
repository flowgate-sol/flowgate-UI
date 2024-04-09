import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import React from "react";
import { SideBar } from "@/components/layout/side-bar";
import { Header } from "@/components/layout/header";
import { Providers } from "@/components/common/providers";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowGate",
  description: "Bringing new primitives to oracles and market making on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={poppins.className}>
        <Providers>
          <div className="container flex min-h-screen w-full items-center justify-center">
            <div className="my-4 flex h-auto w-full flex-grow-0 gap-5">
              <SideBar />
              <main className="flex flex-1 flex-col rounded-e-xl border border-slate-800 bg-gradient-to-tr from-[#15151A] to-black">
                <Header />
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
