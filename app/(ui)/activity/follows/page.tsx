"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import UserName from "@/app/components/commen/UserName";
import Followbtn from "@/app/components/Search/Followbtn";
import User from "@/public/assets/useravathar.svg";
import avathar from "@/public/assets/usericon.svg";
import { getAllUsers } from "@/app/actions/user";
import { useRouter } from "next/navigation";

interface userDetails {
  name: string;
  username: string;
  email: string;
}

function Followers() {
  const [data, setdata] = useState<userDetails[]>([]);

  useEffect(() => {
    getAllUsers().then((res: any) => {
      // console.log(res);
      setdata(res.data);
    });
  }, []);

  /////////////////// handle user profile ///////////////////////
  const Route = useRouter();
  const handleClick = (username: string) => {
    Route.push(`/@${username}`);
  };
  return (
    <>
      {/*  ---- Followers page ------- */}
     {
      data.map((item,index) => (
        <div className="w-full flex justify-center items-center p-2  "key={index}>
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
            <UserName
              name={`${item.name}`}
              username={`${item.username}`}
              onClick={handleClick}
            />
            <h4 className="text-text text-[14.65px] font-roboto">
              Follow Suggetion
            </h4>
          </div>
          <div>
            {" "}
            <Followbtn value="Follow" username={`${item.username}`} />
          </div>
        </div>
      </div>

      ))
     }
      {/*  ---- Followers page ------- */}
    </>
  );
}

export default Followers;
