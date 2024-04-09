import React from "react";

interface NumericLabelProps {
  number: number;
  label: string;
  className?: string;
}

export const NumericLabel = ({
  number,
  label,
  className,
}: NumericLabelProps) => {
  return (
    <label className={`flex items-center gap-3 ${className}`}>
      <div className="flex aspect-square h-7 w-7 items-center justify-center rounded-full bg-[#3E556B] text-center text-lg text-white">
        {number}
      </div>
      <div className="flex-1">{label}</div>
    </label>
  );
};
