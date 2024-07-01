import React from "react";

export const UserSkelton = () => {
  return (
    <div className="h-[99.67px] border-b border-border flex flex-col p-5">
      <div className="flex gap-x-3  animate-pulse">
        <div className="w-[36px] h-[36px]  bg-gray-400 opacity-20 rounded-full "></div>
        <div className="w-[524px] h-[50px] flex justify-between gap-3 flex-col  ">
          <div className="w-[100px] h-[20px]  bg-gray-400 opacity-20 rounded-xl "></div>
          <h4 className="text-text text-[14.65px] font-roboto bg-gray-400 opacity-20 w-[200px] h-[20px] rounded-lg "></h4>
        </div>
      </div>
    </div>
  );
};
