
'use client'

import React from "react";
import { usePathname } from "next/navigation";

export default function HomeBtn() {
  const pathname = usePathname();

  const isActive = pathname === "/";
  return (
    <button
      className={`w-24 h-[70px] md:w-[82.4px] md:h-[68px]  rounded-xl hover:bg-[#FFFFFF0D] flex justify-center items-center ${
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
          d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H8.25C8.52614 22.7497 8.75 22.5259 8.75 22.2497V17.6822V17.4997C8.75 15.1525 10.6528 13.2497 13 13.2497C15.3472 13.2497 17.25 15.1525 17.25 17.4997V17.6822V22.2497C17.25 22.5259 17.4739 22.7497 17.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94815 21.8954 8.99883L16.1454 4.3454C14.3112 2.86095 11.6888 2.86095 9.85455 4.3454L4.10455 8.99883C2.93153 9.94815 2.25 11.3765 2.25 12.8855Z"
          //   fill="#F3F5F7"
          stroke={isActive ? "#fff" : "#4D4D4D"}
          strokeWidth="2.5"
          clipRule="evenodd"
          strokeLinecap="round"
          fill={isActive ? "#fff" : "#4D4D4D"}
        />
      </svg>
    </button>
  );
}
