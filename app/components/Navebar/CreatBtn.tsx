"use client";
import React from "react";
import CreateModal from "../commen/CreateModal";

export default function CreatBtn() {
  const handleButtonClick = () => {
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <button
      className="w-24 h-[70px] md:w-[82.4px] md:h-[68px] rounded-xl hover:bg-[#FFFFFF0D]  flex justify-center items-center "
      onClick={handleButtonClick}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.75 13V13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75H12.85C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15V12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25H13"
          stroke="#4D4D4D"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <path
          d="M21.75 4.25L13.75 12.25"
          stroke="#4D4D4D"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </svg>
      <div>
      <CreateModal />

      </div>
      
    </button>
  );
}
