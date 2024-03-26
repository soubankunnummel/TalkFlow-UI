import Image from "next/image";
import RepliAvathar from "@/public/assets/replieavathar.svg";

function ReplieAvathar() {
  return (
    <div className="w-[48px] h-[35px] grid  grid-rows-2 gap-1 justify-center md:w-fit ">
      <div className="">
        <Image
          alt="avathar"
          src={RepliAvathar}
          className="w-[16px] h-[16px] rounded-full"
        />
      </div>
      <div className="">
        <Image
          alt="avathar"
          src={RepliAvathar}
          className="w-[20px] h-[20px] rounded-full"
        />
      </div>
      <div className="col-span-2 justify-self-center items-center">
        <Image
          alt="avathar"
          src={RepliAvathar}
          className="w-[11px] h-[11px] rounded-full"
        />
      </div>
    </div>
  );
}

export default ReplieAvathar;
