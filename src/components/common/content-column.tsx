import React from "react";
import { cn } from "@/lib/utils";

interface ContentColumnProps {
  className?: string;
  children: React.ReactNode;
}

export const ContentColumn = ({ children, className }: ContentColumnProps) => {
  return (
    <section
      className={cn(
        className,
        "relative flex-1 rounded-t-xl border border-slate-800 bg-[#171D24] bg-opacity-40 px-6 py-10 text-color",
      )}
    >
      {children}
    </section>
  );
};
