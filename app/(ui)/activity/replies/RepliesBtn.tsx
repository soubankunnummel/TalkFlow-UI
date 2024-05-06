"use client";

import { usePathname } from "next/navigation";

export default function RepliesBtn({ value }: { value: string }) {
  const pathname = usePathname();
  const isActive = pathname === "/pages/activity/replies";
  return (
    <button
      className={`w-[100px] h-[34px] border-border border-[1px] flex justify-center items-center rounded-[10px] ${
        isActive ? "bg-white border-white" : "bg-transparent"
      }   ${
        isActive ? `text-black` : `text-white`
      } text-[15px] font-roboto font-semibold`}
    >
      {value}
    </button>
  );
}
