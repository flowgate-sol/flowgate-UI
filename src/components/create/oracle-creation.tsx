import { ContentColumn } from "@/components/common/content-column";
import { NumericLabel } from "@/components/common/numeric-label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface OracleCreationProps {
  tokenAddress: string | undefined;
  poolAddresses: string[] | undefined;
  setPoolAddresses: Dispatch<SetStateAction<string[]>>;
  setTokenAddress: (tokenAddress: string) => void;
  poolList: string[];
  setSelectedPools: Dispatch<SetStateAction<string[]>>;
}

export const OracleCreation = ({
  tokenAddress,
  setTokenAddress,
  setPoolAddresses,
  poolList,
  setSelectedPools,
}: OracleCreationProps) => {
  const [selectedPool, setSelectedPool] = useState<string>();
  const [poolAddr, setPoolAddr] = useState<string>();

  const poolAddHandler = useCallback(() => {
    if (selectedPool && selectedPool !== "") {
      setSelectedPools((prev) => {
        if (!prev.includes(selectedPool)) {
          return [...prev, selectedPool];
        } else {
          return prev;
        }
      });
      setSelectedPool("");
    }
    if (poolAddr && poolAddr !== "") {
      setPoolAddresses((prev) => {
        if(!prev.includes(poolAddr) && poolAddr !== "") {
          return [...prev, poolAddr];
        } else {
          return prev;
        }
      })
      setPoolAddr("");
    }
  }, [selectedPool, setSelectedPools, poolAddr, setPoolAddresses]);

  return (
    <div className="flex flex-1 flex-col">
      <h2 className="mb-3 ps-6 text-xl">ORACLE CREATION</h2>
      <ContentColumn>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <NumericLabel
              label="Token Address"
              number={1}
            />
            <Input
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              placeholder="Enter token address..."
              className="rounded-xl border border-slate-800 bg-[#0E1216] px-4 py-2 text-lg text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <NumericLabel
              number={2}
              label="Add Pools"
            />
            <Select
              value={selectedPool}
              onValueChange={(value) => setSelectedPool(value)}
            >
              <SelectTrigger className="rounded-xl border border-slate-800 bg-[#0E1216] px-4 py-2 text-lg text-white">
                <SelectValue placeholder="Select source first..." />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-slate-800 bg-[#0E1216] text-white">
                {poolList.map((pool) => (
                  <SelectItem
                    key={pool}
                    value={pool}
                  >
                    {pool}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <NumericLabel
              label="Pool Address"
              number={3}
            />
            <Input
              value={poolAddr}
              onChange={(e) => setPoolAddr(e.target.value)}
              placeholder="Enter pool address..."
              className="rounded-xl border border-slate-800 bg-[#0E1216] px-4 py-2 text-lg text-white"
            />
          </div>
          <button
            className="flex items-center gap-3"
            onClick={poolAddHandler}
          >
            <div className="flex aspect-square h-7 w-7 items-center justify-center rounded-full bg-[#3E556B] text-center text-lg text-white">
              <Plus />
            </div>
            Add Pool
          </button>
        </div>
      </ContentColumn>
    </div>
  );
};
