import React from "react";
import Image from "next/image";
import UserName from "@/app/components/commen/UserName";
import Followbtn from "@/app/components/Search/Followbtn";
import User from "@/public/assets/useravathar.svg";
import avathar from "@/public/assets/usericon.svg";

function Followers() {
  return (
    <>
      {/*  ---- Followers page ------- */}
      <div className="w-full flex justify-center items-center p-2 ">
        <div className="relative">
          {" "}
          <Image
            alt="user icon"
            src={avathar}
            className="w-[22px] h-[22px] absolute right-0 bottom-0 "
          />
          <Image alt="user image" src={User} className="w-[36px] h-[36px]  " />
        </div>
        <div className="w-[524px] h-[66.67px] border-b border-border flex justify-between items-center p-3 ">
          <div>
            <UserName name="User name" />
            <h4 className="text-text text-[14.65px] font-roboto">
              Follow Suggetion
            </h4>
          </div>
          <div>
            {" "}
            <Followbtn value="Follow" />
          </div>
        </div>
      </div>

      {/*  ---- Followers page ------- */}
    </>
  );
}

export default Followers;
