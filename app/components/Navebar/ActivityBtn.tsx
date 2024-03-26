"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function ActivityBtn() {
  const pathname = usePathname();

  const isActive = pathname.startsWith("/pages/activity")
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
        fill={isActive ? "#fff" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"
          stroke={isActive ? "#fff" : "#4D4D4D"}
          stroke-width="2.5"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
