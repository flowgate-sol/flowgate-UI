"use client";

import { ContentColumn } from "@/components/common/content-column";
import { SubmitButton } from "@/components/common/submit-button";
import React from "react";

interface PreviewProps {
  selectedTokenAddress: string | undefined;
  selectedPools: string[];
  onSubmit?: () => void;
}

export const Preview = ({
  onSubmit,
  selectedTokenAddress,
  selectedPools,
}: PreviewProps) => {
  console.log("selectedTokenAddress", selectedTokenAddress);
  console.log("selectedPools", selectedPools);

  return (
    <div className="flex flex-1 flex-col">
      <h2 className="mb-3 ps-6 text-xl">PREVIEW</h2>
      <ContentColumn>
        <div className="flex flex-col gap-10">
          <h2 className="text-xl">Your Oracle</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Token Address</h3>
            <p className="text-color-light">{selectedTokenAddress}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Pool Addresses</h3>
            {selectedPools.map((x) => (
              <p key={x} className="text-color-light">{x}</p>
            ))}
          </div>
          {/* <div className="flex flex-col gap-2">
            <h3 className="text-lg">Liquidity</h3>
            <p className="text-color-light">156,526.24 META</p>
          </div> */}
        </div>
        <SubmitButton
          onClick={onSubmit}
          className="absolute bottom-0 left-2/4 -translate-x-2/4 translate-y-2/4"
        >
          CREATE ORACLE
        </SubmitButton>
      </ContentColumn>
    </div>
  );
};
