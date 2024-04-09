import React from "react";

interface SideButtonProps {
  children: React.ReactNode;
}

export const SideButton = ({ children }: SideButtonProps) => {
  return (
    <button className="rounded-full p-2 text-color-light transition-colors duration-300 hover:bg-slate-800 hover:text-color">
      {children}
    </button>
  );
};
