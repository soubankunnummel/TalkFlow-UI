import Image from "next/image";

function NaveBtn({ image }: any) {
  return (
    <button className="w-24 h-[70px] rounded-xl hover:bg-[#FFFFFF0D]  flex justify-center items-center ">
      <Image src={image} alt="btnIcon" className="text-white" />
    </button>
  );
}

export default NaveBtn;
