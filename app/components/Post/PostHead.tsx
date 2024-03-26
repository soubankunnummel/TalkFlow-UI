import Image from "next/image";
import Avathar from "@/public/assets/useravathar.svg";
import PostBtn from "./PostBtn";

export default function PostHead() {
  return (
    <div className="h-[68.5px] w-[572px] flex justify-between items-center 
    px-4 border-[#333638] border-b-[1px] md:hidden  ">
      <div className="flex-1 flex gap-x-2 items-center ">
        <Image alt="User avathar" src={Avathar} />
        <h4 className=" text-[15px] text-[#777777] flex-1 ">
          Start a thread...
        </h4>
      </div>
      <div className="flex-initial ">
        <PostBtn value={"Post"} />
      </div>
    </div>
  );
}
