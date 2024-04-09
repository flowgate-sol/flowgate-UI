import React from "react";
import { Ellipsis, Eye, User, ZoomIn } from "lucide-react";
import { SideButton } from "@/components/layout/side-button";
import Link from "next/link";

export const SideBar = () => {
  return (
    <aside className="flex flex-col items-center justify-between gap-10 rounded-s-xl border border-slate-800 bg-gradient-to-r from-[#15151A] to-black px-3 pb-7">
      <div className="flex flex-col">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="FlowGate"
            className="m-5 h-12 w-12"
          />
        </Link>
        <div className="mt-2 flex flex-col items-center gap-5">
          <h3 className="text-color-light">TOOLS</h3>
          <SideButton>
            <User />
          </SideButton>
          <SideButton>
            <Eye />
          </SideButton>
          <SideButton>
            <ZoomIn />
          </SideButton>
        </div>
        <hr className="mt-6 border-slate-800" />
        <div className="mt-7 flex flex-col items-center gap-6">
          <h3 className="text-color-light">DATA</h3>
          <SideButton>
            <img
              src="/flow-gate.svg"
              alt="FlowGate"
              className="h-6 w-6"
            />
          </SideButton>
        </div>
        <hr className="mt-6 border-slate-800" />
      </div>
      <SideButton>
        <Ellipsis
          width={30}
          height={30}
        />
      </SideButton>
    </aside>
  );
};
