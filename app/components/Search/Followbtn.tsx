"use client";

import { useState } from "react";

export default function Followbtn({ value }: { value: string }) {
  const [text, setText] = useState(false);
  if (text) value = "Following";
  return (
    <button
      className={` h-[34px] ${text ? `w-[112px] ` : `w-[104px] `} ${
        text ? `text-text` : `text-white`
      } flex justify-center
   border-border border-[1px] rounded-[10px] items-center font-roboto font-semibold text-[15px]`}
      onClick={() => setText(!text)}
    >
      {value}
    </button>
  );
}
 