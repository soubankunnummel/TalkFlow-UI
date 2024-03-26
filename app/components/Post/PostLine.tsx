import Image from "next/image";
import React from "react";
import Plus from "@/public/assets/plus.svg";
import Avathar from "@/public/assets/useravathar.svg";
import ReplieAvathar from "./ReplieAvathar";

function PostLine() {
  return (
    <div className="flex-initial h-auto flex flex-col relative z-0  items-center gap-y-3 py-[1%] ">
      <Image
        alt="avathar"
        src={Avathar}
        className="w-[36px] h-[36px] rounded-full "
      />
      {/* plus icon */}
      <Image
        alt="Pluse"
        src={Plus}
        className="w-[20px] h-[20px] rounded-full absolute right-[0px] top-0 "
      />
      {/* plus icon */}

      <div className="w-[1px] flex-1 bg-[#333638]"></div>

      {/* replie avathars */}
      <ReplieAvathar />
      {/* replie avathars */}
    </div>
  );
}

export default PostLine;
