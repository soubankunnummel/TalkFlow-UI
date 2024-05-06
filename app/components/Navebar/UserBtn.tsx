'use client'

import React from "react";
import { usePathname } from "next/navigation";

export default function UserBtn() {
  const pathname = usePathname();
  const isActive = pathname === "/@user";
  return (
    <button
      className={`w-24 h-[70px] md:w-[82.4px] md:h-[68px] rounded-xl hover:bg-[#FFFFFF0D] flex justify-center items-center ${
        isActive ? "bg-4D4D4D" : ""
      }`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill={isActive ? "#fff" : "#4D4D4D"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 11.25C15.2091 11.25 17 9.45914 17 7.25C17 5.04086 15.2091 3.25 13 3.25C10.7909 3.25 9 5.04086 9 7.25C9 9.45914 10.7909 11.25 13 11.25Z"
          stroke={isActive ? "#fff" : "#4D4D4D"}
          strokeWidth="2.5"
        />
        <path
          d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z"
          strokeWidth="2.5"
          stroke={isActive ? "#fff" : "#4D4D4D"}
        />
      </svg>
    </button>
  );
}
