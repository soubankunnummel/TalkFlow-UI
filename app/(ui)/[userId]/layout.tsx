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
import { getUserProfile ,getCurrentUser, updateUserProfile} from "@/app/actions/user";
import { setLogged } from "@/lib/feature/status/statusSlice";
import Modal from "@/app/components/commen/Modal";



interface userDetails {
  name: string;
  username: string;
  email: string;
  bio: string;
  link: string;
  profilePic: string;
}


export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const Router = useRouter();
  const path = usePathname();
  const user = useSelector((state: RooteState) => state.status.isLogdin);
  const dispatch = useDispatch()



  //////////   FETCH USER INFORMATIONS /////////////

  const [userProfile, setUserProfile] = useState<userDetails | null>(null);
  const [showEdit, setShowEdit] = useState(false)
  // console.log(path.userId)
  // console.log(path.slice(2))

  const username = path.slice(2)
  useEffect(() => {
    getUserProfile(username).then((res:any) => {
      setUserProfile(res.data)
      // console.log(res.data);
    }); 

    getCurrentUser().then((res:any) => {
      console.log(res.data)
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



const handleEdit = () => {
  setShowEdit(true);
};

const handleSaveProfile = async (newProfileData: any) => {
  console.log(newProfileData)
  try {
    updateUserProfile(newProfileData).then((res) => {
      setUserProfile(res)
    })
    // setUserProfile(updatedProfile);
    setShowEdit(false);
  } catch (error) {
    console.error("Failed to update profile:", error);
    // Handle error (e.g., show an error message to the user)
  }
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
            onClick={ handleEdit}
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

      {userProfile && (
        <Modal
          isOpen={showEdit}
          onClose={() => setShowEdit(false)}
          onSave={handleSaveProfile}
          initialData={{
            username: userProfile.username,
            bio: userProfile.bio || "",
            link: userProfile.link || "",
          
            profilePic: userProfile.profilePic ?  userProfile.profilePic : User
          }}
        />
      )}
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
