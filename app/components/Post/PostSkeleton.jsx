import React from "react";

const PostSkeleton = () => {
  return (
    <div className="w-full m-3 flex gap-5 animate-pulse ">
      <div className="   flex justify-between  items-center gap-2  flex-col">
        <div className="w-[40px] h-[40px] rounded-full bg-gray-400 opacity-10 border"></div>
        <div className="w-[1px] bg-gray-400 opacity-10 h-[250px] "></div>
        <div className="w-[20px] h-[20px] grid  grid-rows-2 gap-1 justify-center md:w-fit">
          <div className="w-[16px] h-[16px] rounded-full bg-gray-400 opacity-10 "></div>
          <div className="w-[20px] h-[20px] rounded-full bg-gray-400 opacity-10"></div>
          <div className="col-span-2 justify-self-center items-center w-[11px] h-[11px] rounded-full bg-gray-400 opacity-10"></div>
        </div>
      </div>
      <div className=" bg-gray-400 opacity-10 w-full rounded-xl"></div>
    </div>
  );
};

export default PostSkeleton;
