"use client";
import { RooteState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams, usePathname } from "next/navigation";
import UserName from "@/app/components/commen/UserName";
import Followers from "@/app/components/commen/Followers";
import FollowersImg from "@/public/assets/replieavathar.svg";
import insta from "@/public/svg/insta.svg";
import User from "@/public/assets/useravathar.svg";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUserProfile ,getCurrentUser} from "@/app/actions/user";
import { setLogged } from "@/lib/feature/status/statusSlice";



interface userDetails {
  name: string;
  username: string;
  email: string;
}


export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const Router = useRouter();
  const path = useParams();
  const user = useSelector((state: RooteState) => state.status.isLogdin);
  const dispatch = useDispatch()



  //////////   FETCH USER INFORMATIONS /////////////

  const [userProfile, setUserProfile] = useState<userDetails | null>(null);
  // console.log(path.userId)
  const username = path.userId
  useEffect(() => {
    getUserProfile(path.userId).then((res:any) => {
      setUserProfile(res.data)
      // console.log(res);
    });

    getCurrentUser().then((res:any) => {

      if(res.data.username === username){
        dispatch(setLogged(true))
      }else{
        dispatch(setLogged(false))
      }
    })
  }, []);


  
////////// TO ONE TO ONE CHAT //////////////
// const [currentUserId,setCurrentUserId] = useState()
const handleChat = async () => { 
  Router.push(`/chat/${userProfile?.username}`);
};





  return (
    <div className="w-full h-full flex flex-col   items-center ">
      <div className="w-[572px] md:w-full md:p-4  flex  justify-between ">
        <div className="flex-1 flex h-[100px] flex-col  p-[3%] ">
          <h2>{userProfile?.name} </h2>
          <UserName name={`${userProfile?.name}`} username={`${userProfile?.username}`} onClick={() => {}}  />

        </div>

        <div className="flex-1  h-[100px]  flex justify-between ">
          <div className="w-full"></div>
          <Image alt="User_Image" src={User} className="w-[84px] " />
        </div>
      </div>
      <div className="w-[572px] h-[24px]  md:w-full md:px-2 flex justify-between ">
        <span className="flex justify-between">
          <Image alt="Follower_avathar" src={FollowersImg} />
          <Image alt="Follower_avathar" src={FollowersImg} />
          <Followers count={343} />
        </span>
        <Image alt="insta" src={insta} />
      </div>

      <div className="flex w-[572px] md:w-full mt-4 justify-between items-center gap-x-3">
        {user ? (
          <button
            className={`w-full  bg-transparent rounded-xl h-[34px] text-white border border-border`}
          >
            Edit Profile
          </button>
        ) : (
          <>
            <button className="w-1/2 bg-white rounded-xl h-[34px] text-black border border-border">
              Follow
            </button>
            <button
              className="w-1/2  rounded-xl h-[34px] text-white border border-border"
              onClick={handleChat}
            >
              Message
            </button>
          </>
        )}
      </div>
      <div className="flex w-[572px] md:w-full justify-between items-center mt-4">
        <Link href={"/@user"}>
          <div
            className={`flex justify-center items-center md:w-full  w-[190.67px] h-[48.67px]  ${
              username === "/@user" ? "border-b" : ""
            }`}
          >
            <h1>Threads</h1>
          </div>
        </Link>
        <Link href={"/@user/replies"}>
          <div
            className={`flex justify-center items-center   md:w-full w-[190.67px] h-[48.67px] ${
              username === "/@user/replies" ? "border-b" : ""
            }`}
          >
            <h1>Replies</h1>
          </div>
        </Link>
        <Link href={"/@user/reposts"}>
          <div
            className={`flex justify-center items-center  md:w-full w-[190.67px] h-[48.67px] ${
              username === "/@user/reposts" ? "border-b" : ""
            }`}
          >
            <h1>Reposts</h1>
          </div>
        </Link>
      </div>
      <div className="w-[572px] md:w-full h-[0.5px] bg-border"></div>

      <div className="w-[572px] md:w-full pt-3">{children} </div>
    </div>
  );
}
