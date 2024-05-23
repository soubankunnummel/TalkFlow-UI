"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import img from "@/public/assets/pachu.svg";
import thread from "@/public/assets/threds.net.svg";
import Followbtn from "../Search/Followbtn";
import WhiteFollowBtn from "./WhiteFollowBtn";
import { getUserProfile } from "@/app/actions/user"; 

interface UserNameProps {
  name: string;
  username:string
  onClick: (username: string) => void;
}

const UserName: React.FC<UserNameProps> = ({ name , username, onClick }) => {
  const modalRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState(false);

  const handleMouseEnter = () => {
    setStatus(true);
  };

  const handleMouseLeave = () => {
    setStatus(false);
  };

  const calculateSpace = () => {
    if (!modalRef.current) return;
    const userNameRect = modalRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const spaceBelow = windowHeight - userNameRect.bottom >= 224;
    return spaceBelow;
  };

 

 
  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <h4 className="text-[14.8px] font-semibold text-white hover:underline font-roboto relative">
        <span
          onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          ref={modalRef}
          onClick={() => onClick(username)}
        >
          {username}
        </span>
      </h4>

      {/*///////////// user tol tip //////////////*/}


      <div
        className={`${
          status ? "flex" : "hidden"
        } w-[340px] h-[224px] rounded-[16px]  flex-col px-6  p-[5%] bg-primery absolute z-20 ${
          calculateSpace() ? "top-6" : "bottom-5"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className=" p-[4%] flex  justify-between ">
          <div className="grid grid-cols-2 grid-rows-2  ">
            <h3 className="flex-1 text-[20px] font-bold font-roboto col-span-2 ">
              {name}
            </h3>
            <p className="text-[14.1px] font-roboto row-start-2">{username} </p>
            <Image alt="thres.net " src={thread} className="row-start-2" />
          </div>
          <Image alt="user image" src={img} className="flex-initial" />
        </div>
        <div className="p-[4%]  ">
          <h3 className="text-[15px] ">Developer👨</h3>
          <p className=" text-text text-[14px] ">105 followers</p>
        </div>
        <WhiteFollowBtn value="Follow Back" />
      </div>
    </div>
  );
};

export default UserName;
