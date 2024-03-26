import React from "react";

export default function WhiteFollowBtn({ value }: { value: string }) {
  return (
    <button className="w-[292px] h-[34px] bg-white rounded-[10px] text-center font-semibold text-black ">
      {value}
    </button>
  );
}
