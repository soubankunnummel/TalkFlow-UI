"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";
import SearchBtn from "./Search";
import HomeBtn from "./HomeBtn";
import ActivityBtn from "./ActivityBtn";
import UserBtn from "./UserBtn";
import CreatBtn from "./CreatBtn";
import {  useSelector } from "react-redux";
import { toast } from "sonner";
import { MdSort } from "react-icons/md";
import CreateModal from "../commen/CreateModal";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
import { RooteState } from "@/lib/store";

function Nave() {
  const status = useSelector((state:RooteState) => state.status.isLogdin);
  const router = useRouter()
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
    <nav className="sticky top-0  z-40 ">
      <div className="w-full  flex justify-between px-[2%]  items-center md:justify-center backdrop-blur-sm relative ">
        {/* /////////////////////////////Logo////////////////////// */}
        <Link href={"/"}>
          <div className="">
            <Image alt="logo" src={logo} />
          </div>
        </Link>

        {/* /////////////////////////////Logo////////////////////// */}

        <div className="w-[610px]  flex justify-evenly items-center md:hidden ">
          <Link href={"/"}>
            <div>
              <HomeBtn />
            </div>
          </Link>
          <Link href={status ?"/search":'/'}>
            <div>
            {status ? (
                <SearchBtn />
              ) : (
                <div onClick={() => toast.error("Please login")}>
                  <SearchBtn />
                </div>
              )}
            </div>
          </Link>
          <div onClick={handleButtonClick}>
            <CreatBtn handleButtonClick={handleButtonClick}/>
          </div>
          <Link href={status ? "/activity":'/'}>
            <div>

              {status ? (
                <ActivityBtn />
              ) : (
                <div onClick={() => toast.error("Please login")}>
                  <ActivityBtn />
                </div>
              )}
            </div>
          </Link>
          <Link href={status ? "/user" : "/"}>
            <div>
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
         
        <div className={`${status ? 'hidden' : 'flex'}`}>
        <button className="w-[75px] h-[35px] rounded-xl font-semibold bg-white text-black" onClick={() => {Cookies.remove("token"), router.push("/auth/Login")} }>Log in</button>
        </div>
        
        <div className={` ${status ? 'flex' : 'hidden'} dropdown  dropdown-bottom dropdown-end  md:absolute md:right-0 `}>
          <div tabIndex={0} role="button" className=" m-1">
            <MdSort className="text-3xl " />
         
         
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content  w-[200px]  bg-[#181818]    rounded-box"
          >
            <li className="w-full  h-12 border-border border rounded-t-xl p-3 font-roboto cursor-pointer">
              <a>Item 1</a>
            </li>
            <li className="w-full  h-12 border-border border  p-3 font-roboto cursor-pointer">
              <a>Item 1</a>
            </li>
            <li className="w-full  h-12 border-border border rounded-b-xl p-3 font-roboto cursor-pointer"onClick={() => {Cookies.remove("token"), router.push("/"),window.location.reload()} } >
              <a>Log out</a>
            </li>
          </ul>
        </div>

        
      </div>
      <CreateModal />
    </nav>
  );
}

export default Nave;
