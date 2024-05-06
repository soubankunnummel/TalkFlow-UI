// 'use client'
import React from "react";

export default function PostBtn({ value }: any) {
  return (
  <>
  <button className="w-[71.11px] h-[40px] rounded-full font-semibold hover:bg-[#aaa9a9]  text-black bg-[#777777] ">
      {value}
    </button>
  </>
  );
}
