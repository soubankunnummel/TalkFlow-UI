
'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HomeBtn from "../Navebar/HomeBtn";
import SearchBtn from "../Navebar/Search";
import CreatBtn from "../Navebar/CreatBtn";
import ActivityBtn from "../Navebar/ActivityBtn";
import UserBtn from "../Navebar/UserBtn";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RooteState } from "@/lib/store";
import { getCurrentUser } from "@/app/actions/user";


interface userDetails {
  name: string;
  username: string;
  email: string;
}

function Footer() {


  const status = useSelector((state:RooteState) => state.status.isLogdin);
  const [currentUser,setCurrentUser] = useState<userDetails | null>(null);

  useEffect(() => {

    getCurrentUser().then((res:any) => {
      setCurrentUser(res.data)
    })

  },[])

  
    ////////////// OPEN CREATE MODAL ////////////
    const handleButtonClick = () => {
      if(status){
    
        const modal = document.getElementById(
          "my_modal_2"
        ) as HTMLDialogElement | null;
        if (modal) {
          modal.showModal();
        }
      }else {
        toast.error("pleas Login")
      }
      }; 
  return (
    <nav className="fixed w-full flex justify-center items-center bottom-0 z-20 p-2 bg-primery ">
      <div className="md:w-[412px]  hidden md:flex h-[68px] justify-between   items-center   ">
        <Link href={"/"}>
          <div>
            <HomeBtn />
          </div>
        </Link>
        <Link href={"/search"}>
          <div>
            <SearchBtn />
          </div>
        </Link>
       
        <div onClick={handleButtonClick}>
            <CreatBtn handleButtonClick={handleButtonClick}/>
          </div>
     
        <Link href={"/activity"}>
          <div>
            <ActivityBtn />
          </div>
        </Link>
        <Link href={status ? `/@${currentUser?.username}` : "/"}>
            <div className=" ">
              {status ? (
                <UserBtn />
              ) : (
                <div onClick={() => toast.error("Please login")}>
                  <UserBtn />
                </div>
              )}
            </div>
          </Link>
      </div>
    </nav>
  );
}

export default Footer;
