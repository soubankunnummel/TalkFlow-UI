import Image from "next/image";
import React from "react";
import search from "@/public/assets/smallSerch.svg";

export default function SearchBar() { 
  return (
    <div
      className="  w-[573.91px] md:w-full  h-[60px] border-[1px] border-border rounded-[16px] text-text
         font-roboto mt-5 flex justify-evenly items-center p-4  "
    >
      <Image alt="search" src={search} className=" w-[16px] h-[16px]  " />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        className=" w-[573.91px] placeholder:text-text  h-[60px] rounded-[16px]  bg-transparent ps-4 focus:outline-none "
      />
    </div>
  );
}
