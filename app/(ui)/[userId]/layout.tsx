import UserName from "@/app/components/commen/UserName";
import Followers from "@/app/components/commen/Followers";
import FollowersImg from '@/public/assets/replieavathar.svg'
import insta from '@/public/svg/insta.svg'
import User from '@/public/assets/useravathar.svg'

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-full flex flex-col   items-center ">
    <div className="w-[572px] md:w-full md:p-4  flex  justify-between ">
      <div className="flex-1 flex h-[100px] flex-col  p-[3%] ">
      <h2> name</h2>
      <UserName name="Souba_kunnumel"/>
      </div>

      <div className="flex-1  h-[100px]  flex justify-between ">
      <div className="w-full"></div>
      <Image alt="User_Image" src={User} className="w-[84px] "/>
      </div>

     </div>
      <div className="w-[572px] h-[24px]  md:w-full md:px-2 flex justify-between ">
       <span className="flex justify-between">
       <Image alt="Follower_avathar" src={FollowersImg}/>
       <Image alt="Follower_avathar" src={FollowersImg}/>
       <Followers count={343} />

       </span>
       <Image alt="insta" src={insta} />
      </div>

      <div>{children} </div>
      </div>
  )
}
