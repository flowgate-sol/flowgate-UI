import React from "react";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SubmitButton = ({
  children,
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <button
      className={`letter-wide w-auto rounded-xl rounded-b-xl border border-slate-800 bg-gradient-to-t from-black to-[#3E556B] px-8 py-2 text-lg text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
